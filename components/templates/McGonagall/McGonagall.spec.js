import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import McGonagall, {saveToStateContext} from './McGonagall';
import MessageCard from '~components/organisms-simple/MessageCard/MessageCard';
import {stub, spy} from 'sinon';
import {assign} from 'xstate';

const stateConfig = {
  id: 'mcgTest',
  states: {
    start: {
      on: {
        NEXT: [
          {
            cond: 'hasValue',
            target: 'second',
            actions: ['save', 'test'],
          },
        ],
      },
    },
    second: {
      on: {
        NEXT: [
          {
            target: 'third',
          },
        ],
      },
    },
    third: {
      on: {
        NEXT: [
          {
            target: 'end',
          },
        ],
      },
    },
    end: {
      type: 'final',
    },
  },
  initial: 'start',
};

const stateOptions = {
  actions: {
    save: assign((ctx, eve) => ({
      ...eve,
    })),
    test: stub(),
  },
  guards: {
    hasValue: (ctx, eve) => eve.val !== '',
  },
};

const stateContext = {
  val: '',
};

const renderCard = (props) => <MessageCard {...props} />;
const steps = [
  {
    name: 'start',
    title: 'Start of the flow',
    card: renderCard,
    outputs: ['val'],
  },
  {
    name: 'second',
    title: 'Second of the flow',
    card: renderCard,
  },
  {
    name: 'third',
    title: 'Third of the flow',
    card: renderCard,
  },
  {
    name: 'end',
    title: 'End of the flow',
    card: renderCard,
  },
];

const defaultProps = {
  stateConfig,
  stateOptions,
  stateContext,
  context: {},
  steps,
  browserHistory: {
    push: stub(),
  },
  location: {
    pathname: 'unitedincome.com',
    search: '?step=start',
  },
  exitLocation: '',
};

test('McGonagall - saveToStateContext', (t) => {
  const eve = {
    completionDate: '02/1990',
  };

  t.deepEquals(
    saveToStateContext.assignment({}, eve),
    {completionDate: '02/1990'},
    'Should return an object.'
  );
  t.end();
});

test('McGonagall - componentDidMount', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const comp = new McGonagall(defaultProps);
  comp.setState = spy();

  comp.componentDidMount();

  t.deepEquals(comp.setState.args[0][0], {hasMounted: true}, 'Updates state');

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - componentDidUpdate (final card is no longer active card)', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const props = {
    ...defaultProps,
    stateConfig: {
      id: 'mcgTest',
      states: {
        start: {
          on: {
            NEXT: [
              {
                target: 'second',
                actions: ['save'],
              },
            ],
          },
        },
        second: {
          on: {
            NEXT: [
              {
                target: 'third',
              },
            ],
          },
        },
        third: {
          on: {
            NEXT: [
              {
                target: 'end',
              },
            ],
          },
        },
        end: {
          type: 'final',
        },
      },
      initial: 'start',
    },
    location: {
      search: '?step=third',
    },
  };

  const comp = new McGonagall(props);
  comp.setState = spy();
  // Update state machine to final step
  comp.updateStateMachine();
  t.equals(
    comp.setState.args[0][0].cardHistory.length,
    4,
    'Reached final card'
  );
  comp.state.currXState = comp.setState.args[0][0].currXState;
  comp.state.cardHistory = comp.setState.args[0][0].cardHistory;

  comp.props.location.search = '?step=third'; //Navigate to previous step
  comp.componentDidUpdate();

  t.equals(
    comp.setState.args[1][0].currXState.value,
    'third',
    'Updated xstate'
  );
  t.equals(
    comp.setState.args[1][0].cardHistory.length,
    3,
    'Removed final from card history'
  );

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - navigateToLatestCard (incomplete flow)', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const comp = new McGonagall(defaultProps);

  t.equals(comp.state.currXState.value, 'start', 'navigates to latest card');

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - navigateToLatestCard (completed flow)', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const comp = new McGonagall({
    ...defaultProps,
    stateConfig: {
      id: 'mcgTest',
      states: {
        start: {
          on: {
            NEXT: [
              {
                target: 'second',
              },
            ],
          },
        },
        second: {
          on: {
            NEXT: [
              {
                target: 'end',
              },
            ],
          },
        },
        end: {
          type: 'final',
        },
      },
      initial: 'start',
    },
  });

  t.equals(
    comp.state.currXState.value,
    'second',
    'Navigate to last card before final if completed flow'
  );

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - updateStateMachine', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const props = {
    ...defaultProps,
    location: {
      pathname: 'unitedincome.com',
      search: '?step=start',
    },
  };
  const comp = new McGonagall(props);
  comp.state.val = 'test';
  comp.state.incompleteVal = null;
  comp.setState = spy();
  props.browserHistory.push.reset();

  comp.updateStateMachine(['val', 'incompleteVal'], {incompleteVal: true});

  t.true(props.stateOptions.actions.test.called, 'Executed action');
  t.deepEquals(
    comp.setState.args[0][0].currXState.value,
    'second',
    'Updated xstate'
  );
  t.deepEquals(
    comp.setState.args[0][0].currXState.context.incompleteVal,
    true,
    'Uses default value for incompleteVal'
  );
  t.deepEquals(
    comp.setState.args[0][0].cardHistory[0].name,
    'second',
    'Updated card history'
  );
  t.deepEquals(
    props.browserHistory.push.args[0][0],
    {pathname: 'unitedincome.com', query: {step: 'second'}},
    'Updated path'
  );

  // Editing a previous card
  comp.state.currXState = comp.setState.args[0][0].currXState;
  comp.state.cardHistory = comp.setState.args[0][0].cardHistory;
  comp.state.val = 'newVal';
  comp.props.location.search = '?step=start';

  comp.updateStateMachine(['val']);

  t.deepEquals(
    comp.setState.args[1][0].currXState.value,
    'second',
    'Updated xstate'
  );
  t.deepEquals(
    comp.setState.args[1][0].currXState.context.val,
    'newVal',
    'Updated xstate context'
  );
  t.false(
    comp.setState.args[1][0].cardHistory,
    'second',
    'Should not have updated card history'
  );
  t.deepEquals(
    props.browserHistory.push.args[1][0],
    {pathname: 'unitedincome.com', query: {step: 'second'}},
    'Updated path'
  );

  // Clear future
  comp.props.location.search = '?step=second';
  comp.updateStateMachine(); // Navigate to the last card
  comp.props.location.search = `?step=start`;

  t.equals(
    comp.setState.args[2][0].cardHistory.length,
    3,
    'Added another card to history'
  );

  comp.updateStateMachine(['val'], null, true);

  t.deepEquals(
    comp.setState.args[3][0].currXState.value,
    'second',
    'Updated xstate'
  );
  t.equals(
    comp.setState.args[3][0].cardHistory.length,
    2,
    'Should have cleared future history and taken to second card'
  );
  t.deepEquals(
    props.browserHistory.push.args[3][0],
    {pathname: 'unitedincome.com', query: {step: 'second'}},
    'Updated path'
  );

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - getMatchingStep', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const comp = new McGonagall(defaultProps);
  const step = comp.getMatchingStep(steps, {matches: (name) => name === 'end'});

  t.deepEquals(step.name, 'end', 'Finds correct step');

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - navigateToStep', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const props = {...defaultProps};
  const comp = new McGonagall(props);
  comp.setState = spy();
  window.scrollTo.reset();
  props.browserHistory.push.reset();

  comp.navigateToStep('second', true, true);

  t.true(comp.setState.calledOnce, 'Set state called to revert changes');
  t.deepEquals(
    props.browserHistory.push.args[0][0],
    {pathname: 'unitedincome.com', query: {step: 'second'}},
    'Pushed new path'
  );
  t.true(window.scrollTo.calledOnce, 'Scrolled to top');

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - setStateField', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const comp = new McGonagall(defaultProps);
  comp.setState = spy();

  comp.setStateField('name', 'value');

  t.deepEquals(comp.setState.args[0][0], {name: 'value'}, 'Updates state');

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - close (with onClose)', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const props = {...defaultProps, onClose: stub(), exitLocation: '/test'};
  const comp = new McGonagall(props);
  props.browserHistory.push.reset();

  comp.close({preventDefault: () => true});

  t.true(props.onClose.calledOnce, 'Calls');
  t.deepEquals(
    props.browserHistory.push.args[0][0],
    '/test',
    'Pushes new route'
  );

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - isFinalStep', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const comp = new McGonagall(defaultProps);

  const isStartFinal = comp.isFinalStep(stateConfig.states, 'start');
  t.false(isStartFinal, 'Start is not a final step');

  const isEndFinal = comp.isFinalStep(stateConfig.states, 'end');
  t.true(isEndFinal, 'End is a final step');

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - confirmChangeCancellation (confirm)', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const comp = new McGonagall(defaultProps);

  const onConfirmStub = stub();

  comp
    .confirmChangeCancellation(onConfirmStub)
    .then(() => {
      t.true(onConfirmStub.calledOnce, 'Calls on confirm function');
    })
    .catch((err) => {
      t.fail(err.message);
    })
    .finally(() => {
      t.equals(
        document.body.getElementsByClassName('uic--confirm-modal').length,
        0,
        'Modal goes away'
      );
      window.scrollTo = scrollTo;
      t.end();
    });

  t.equals(
    document.body.getElementsByClassName('uic--confirm-modal').length,
    1,
    'Modal appears'
  );
  document.body.getElementsByTagName('Button')[0].click();
});

test('McGonagall - confirmChangeCancellation (cancel)', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const comp = new McGonagall(defaultProps);

  const onConfirmStub = stub();

  comp
    .confirmChangeCancellation(onConfirmStub)
    .then(() => {
      t.false(onConfirmStub.calledOnce, 'Should not call confirm function');
    })
    .catch((err) => {
      t.fail(err.message);
    })
    .finally(() => {
      t.equals(
        document.body.getElementsByClassName('uic--confirm-modal').length,
        0,
        'Modal goes away'
      );
      window.scrollTo = scrollTo;
      t.end();
    });

  t.equals(
    document.body.getElementsByClassName('uic--confirm-modal').length,
    1,
    'Modal appears'
  );
  document.body.getElementsByTagName('Button')[1].click();
});

test('McGonagall - renderStep (no changes)', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const comp = new McGonagall(defaultProps);
  comp.updateStateMachine = spy();
  comp.confirmChangeCancellation = spy();
  comp.navigateToStep = spy();
  comp.forceUpdate = spy();

  const step = {...steps[0], card: stub(), clearFuture: true};
  comp.renderStep(step, 0);

  const [[cardArgs]] = step.card.args;
  t.false(cardArgs.hasMadeChanges, 'Has made changes');

  // onSubmit
  cardArgs.onSubmit();
  t.deepEquals(
    comp.updateStateMachine.args[0],
    [['val'], undefined, true],
    'Submits sends proper info'
  );

  // cancelChanges
  cardArgs.cancelChanges();
  t.false(
    comp.confirmChangeCancellation.called,
    'Does not need to confirm cancellation'
  );
  t.deepEquals(
    comp.navigateToStep.args[0],
    ['start', true, true],
    'Calls and passes values to navigateToStep after confirming cancel'
  );

  // editCard
  cardArgs.editCard();
  t.false(
    comp.confirmChangeCancellation.called,
    'Does not need to confirm cancellation'
  );
  t.deepEquals(
    comp.navigateToStep.args[1],
    ['start', false, true],
    'Calls and passes values to navigateToStep after confirming cancel'
  );

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - renderStep (has made changes)', (t) => {
  const {scrollTo} = window;
  window.scrollTo = stub();

  const comp = new McGonagall(defaultProps);
  comp.state.val = 'test';
  comp.updateStateMachine = spy();
  comp.confirmChangeCancellation = spy();
  comp.navigateToStep = spy();
  comp.forceUpdate = spy();

  const step = {...steps[0], card: stub(), clearFuture: false};
  comp.renderStep(step, 0);

  const [[cardArgs]] = step.card.args;
  t.true(cardArgs.hasMadeChanges, 'Has made changes');

  // onSubmit
  cardArgs.onSubmit();
  t.deepEquals(
    comp.updateStateMachine.args[0],
    [['val'], undefined, false],
    'Submits sends proper info'
  );

  // cancelChanges
  cardArgs.cancelChanges();
  comp.confirmChangeCancellation.args[0][0]();
  t.deepEquals(
    comp.navigateToStep.args[0],
    ['start', true, true],
    'Calls and passes values to navigateToStep after confirming cancel'
  );

  // editCard
  cardArgs.editCard();
  comp.confirmChangeCancellation.args[1][0]();
  t.deepEquals(
    comp.navigateToStep.args[1],
    ['start', false, true],
    'Calls and passes values to navigateToStep after confirming cancel'
  );

  window.scrollTo = scrollTo;
  t.end();
});

test('McGonagall - renders', async (t) => {
  const {requestAnimationFrame, scrollTo} = window;
  window.scrollTo = stub();
  window.requestAnimationFrame = stub();

  const props = {
    ...defaultProps,
    stateConfig: {
      id: 'mcgTest',
      states: {
        start: {
          on: {
            NEXT: [
              {
                target: 'second',
                actions: ['save'],
              },
            ],
          },
        },
        second: {
          on: {
            NEXT: [
              {
                target: 'third',
              },
            ],
          },
        },
        third: {
          on: {
            NEXT: [
              {
                target: 'end',
              },
            ],
          },
        },
        end: {
          type: 'final',
        },
      },
      initial: 'start',
    },
  };

  const comp = shallow(<McGonagall {...props} />);

  t.equals(
    comp.find('.uic--mcg-card-container').children().length,
    3,
    'Displays 3 cards'
  );

  window.scrollTo = scrollTo;
  window.requestAnimationFrame = requestAnimationFrame;
  t.end();
});
