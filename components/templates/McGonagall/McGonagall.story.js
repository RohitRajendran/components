/* eslint-disable react/prop-types */
import {storiesOf} from '@storybook/react';
import React, {Fragment} from 'react';
import {assign} from 'xstate';
import {colors} from '~constants/js/colors';
import {
  Button,
  CheckboxCard,
  InputCard,
  QuestionCard,
  RadioButtonCard,
  SimpleSummary,
  SliderCard,
} from '../..';
import CompletionScreen from '../../organisms-simple/CompletionScreen/CompletionScreen';
import McGonagall from './McGonagall';
import McGonagallReadme from './McGonagall.mdx';

const stateChart = {
  id: 'household',
  initial: 'supportDependents',
  states: {
    supportDependents: {
      on: {
        NEXT: [
          {
            cond: 'hasDependents',
            target: 'listDependents',
            actions: ['test'],
          },
          {
            cond: 'noDependents',
            target: 'lastYearsTaxableIncome',
            actions: ['test'],
          },
        ],
      },
    },
    listDependents: {
      on: {
        NEXT: {
          target: 'lastYearsTaxableIncome',
          actions: ['test'],
        },
      },
    },
    lastYearsTaxableIncome: {
      on: {
        NEXT: {
          target: 'state',
          actions: ['test'],
        },
      },
    },
    state: {
      on: {
        NEXT: {
          target: 'totalRetirementAccountValue',
          actions: ['test'],
        },
      },
    },
    totalRetirementAccountValue: {
      on: {
        NEXT: {
          target: 'previousAdvisoryFeePercent',
          actions: ['test'],
        },
      },
    },
    previousAdvisoryFeePercent: {
      on: {
        NEXT: {
          target: 'summary',
          actions: ['test'],
        },
      },
    },
    summary: {
      on: {
        NEXT: {
          target: 'complete',
          actions: ['test'],
        },
      },
    },
    complete: {
      type: 'final',
    },
    onDone: {
      actions: 'onDone',
    },
  },
};

const stateContext = {
  supportDependents: null,
  dependents: null,
  lastYearsTaxableIncome: '',
  lastYearsLTCG: null,
  state: [],
  totalRetirementAccountValue: 5,
  previousAdvisoryFeePercent: null,
};

const stateOptions = {
  actions: {
    test: assign((ctx, eve) => ({
      ...eve,
    })),
  },
  guards: {
    hasDependents: (ctx, eve) => eve.supportDependents === 'Yes',
    noDependents: (ctx, eve) => eve.supportDependents === 'No',
  },
};

const renderSupportDependents = (props, state) => {
  return (
    <RadioButtonCard
      {...props}
      config={{
        name: 'supportDependents',
        options: [{value: 'Yes', label: 'Yes'}, {value: 'No', label: 'No'}],
        value: state.supportDependents || '',
      }}
    />
  );
};

const renderListDependents = (props, state) => {
  return (
    <RadioButtonCard
      {...props}
      config={{
        name: 'dependents',
        options: [{value: 'Yes', label: 'Yes'}, {value: 'No', label: 'No'}],
        value: state.dependents || '',
      }}
    />
  );
};

const renderLastYearsTaxableIncome = (props, state) => {
  return (
    <InputCard
      {...props}
      config={{
        name: 'lastYearsTaxableIncome',
        value: state.lastYearsTaxableIncome,
        label: 'value',
        type: 'text',
      }}
    />
  );
};

const renderState = (props, state) => {
  return (
    <CheckboxCard
      {...props}
      config={{
        name: 'state',
        value: state.state,
        options: [
          {
            label: 'Yes',
            value: 'yes',
          },
          {
            label: 'No',
            value: 'no',
          },
          {
            label: "I don't know",
            value: 'idk',
            disabled: true,
          },
        ],
      }}
    />
  );
};

const renderTotalRetirementAccountValue = (props, state) => {
  return (
    <SliderCard
      {...props}
      config={{
        name: 'totalRetirementAccountValue',
        value: state.totalRetirementAccountValue,
        leftAnnotate: 'Lower Risk',
        rightAnnotate: 'Higher Risk',
        tooltip: (
          <p>
            You can pass any arbitrary node into the tooltip to style it how you
            would like
          </p>
        ),
        tooltipStickyVariant: 'green',
      }}
    />
  );
};

const renderPreviousAdvisoryFeePercent = (props) => {
  return (
    <QuestionCard
      {...props}
      summary={
        <SimpleSummary
          shortTitle={props.title}
          answers={['Answer']}
          editCard={props.editCard}
        />
      }
    />
  );
};

const renderSummary = (props) => {
  return (
    <QuestionCard
      {...props}
      summary={
        <SimpleSummary
          shortTitle={props.title}
          answers={['Answer']}
          editCard={props.editCard}
        />
      }
    />
  );
};

const renderComplete = (props) => {
  return (
    <CompletionScreen
      {...props}
      actions={
        <Button variant="secondary" type="submit" light>
          Done
        </Button>
      }
    />
  );
};

const steps = [
  {
    name: 'supportDependents',
    title: 'Do you have children or other family members in your household?',
    shortTitle: 'Got dependents?',
    description:
      'This is an important question for health, spending, and other financial planning topics.',
    clearFuture: true,
    card: renderSupportDependents,
    outputs: ['supportDependents'],
  },
  {
    name: 'listDependents',
    title:
      'Great! Could you tell us more about the other members of your household?',
    shortTitle: 'List dependents',
    description:
      'Please add all people for whom you offer financial support. This will help us better estimate your spending patterns.',
    card: renderListDependents,
    outputs: ['dependents'],
  },
  {
    name: 'lastYearsTaxableIncome',
    shortTitle: 'Taxable income',
    title: "What was your household's taxable income last year?",
    card: renderLastYearsTaxableIncome,
    outputs: ['lastYearsTaxableIncome'],
  },
  {
    name: 'state',
    shortTitle: 'State',
    title: 'What state do you file your income taxes in?',
    card: renderState,
    outputs: ['state'],
  },
  {
    name: 'totalRetirementAccountValue',
    title:
      "What was the total value of your household's retirement accounts last year?",
    shortTitle: 'Retirement account value',
    description:
      'This is an important question for spending and other financial planning topics.',
    card: renderTotalRetirementAccountValue,
    outputs: ['totalRetirementAccountValue'],
  },
  {
    name: 'previousAdvisoryFeePercent',
    title:
      'What advisory fees were you previously paying, on average, for the financial accounts that you have transferred to United Income?',
    shortTitle: 'Advisory Fee Percent',
    description: (
      <Fragment>
        We use this information to better illustrate the impact we are able to
        have on your investments. The average advisor fee for{' '}
        <a
          className="ui-link small"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.advisoryhq.com/articles/financial-advisor-fees-wealth-managers-planners-and-fee-only-advisors/#Percentage-AUM"
        >
          an account with a million dollars is 1.02%
        </a>
        . You can change this later.
      </Fragment>
    ),
    card: renderPreviousAdvisoryFeePercent,
  },
  {
    name: 'summary',
    title: 'Review Your Information',
    shortTitle: 'Summary',
    description:
      'Please check your information below and confirm that we have it all squared away.',
    card: renderSummary,
  },
  {
    name: 'complete',
    title: 'Congrats! You have completed the flow',
    description: 'This was the last step, refresh to start all over.',
    card: renderComplete,
  },
];

const stories = storiesOf('Templates/McGonagall', module);

stories.addParameters({
  docs: {
    page: McGonagallReadme,
  },
});

stories.add('default', () => {
  return (
    <div
      style={{
        backgroundColor: colors.parchment,
        minHeight: '100vh',
        padding: '3.6rem 0',
      }}
    >
      <McGonagall
        name="Hogwarts 2.0 aka McGonagall aka McG"
        location={top.window.location}
        exitLocation="/"
        browserHistory={{
          push: ({pathname, query}) => {
            top.history.pushState(
              {},
              null,
              `${pathname}?${Object.keys(query)
                .map((key) => `${key}=${query[key]}`)
                .join('&')}`,
            );
          },
        }}
        stateConfig={stateChart}
        stateOptions={stateOptions}
        stateContext={stateContext}
        steps={steps}
      />
    </div>
  );
});
