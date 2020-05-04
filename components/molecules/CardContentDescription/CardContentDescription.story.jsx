import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import Input from '~components/atoms/Input/Input';
import SimpleSummary from '~components/molecules/CardSummaries/SimpleSummary/SimpleSummary.tsx';
import QuestionCard from '~components/organisms-simple/QuestionCard/QuestionCard';
import CardContentDescription from './CardContentDescription';
import CardContentDescriptionReadMe from './CardContentDescription.mdx';

const stories = storiesOf('Molecules/CardContentDescription', module);

stories.addParameters({
  docs: {
    page: CardContentDescriptionReadMe,
  },
});

const store = new Store({
  yesNo: '',
  input: '',
  from: 'capitalOne',
  frequency: 'monthly',
  startDate: '05/31/2019',
  endDate: '07/20/202',
  disabled: false,
  interest: '100',
  catTax: '1337',
  status: false,
});

stories.addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = (
  isCollapsed = false,
  clearFuture = false,
  isLatestCard = false,
) => ({
  afterButton: text('afterButton'),
  beforeButton: text('beforeButton'),
  buttonText: text('buttonText'),
  clearFuture: boolean('clearFuture', clearFuture),
  description: text(
    'description',
    'This is where the optional description goes.',
  ),
  disabled: boolean('disabled', false),
  hasError: boolean('hasError', false),
  hasMadeChanges: boolean('hasMadeChanges', true),
  hideButton: boolean('hideButton', false),
  isCollapsed: boolean('isCollapsed', isCollapsed),
  isLatestCard: boolean('isLatestCard', isLatestCard),
  isFetching: boolean('isFetching', false),
  loading: boolean('loading', false),
  moreDetails: {
    label: 'Show more details',
    cabinetContent: (
      <div>
        <p>Hello this is the cabinet and yes, Montezuma is the best.</p>
      </div>
    ),
    header: 'Montezuma is the best cat',
  },
  shortTitle: 'Question',
  summary: (
    <SimpleSummary
      shortTitle="Question"
      answers={['This is the answer']}
      editCard={() => true}
    />
  ),
  title: text('title', 'This is where the question goes.'),
  editCard: () => true,
  onChange: (name, value) => store.set({[name]: value}),
});

const contentDescriptionProps = () => ({
  removeTopBorder: boolean('removeTopBorder', false),
  removeBottomBorder: boolean('removeBottomBorder', false),
  isValid: boolean('isValid', true),
});

stories.add('default', () => {
  const validationFunction = store.get('yesNo').length > 0;

  const changeHandler = () => {
    return Promise.resolve(<p>Hello I am some text</p>);
  };

  const values = {
    yesNo: store.get('yesNo'),
  };

  return (
    <QuestionCard {...defaultProps(false, false, true)}>
      <Input
        name="yesNo"
        required
        label="Value"
        value={store.get('yesNo')}
        onChange={(name, value) => store.set({[name]: value})}
      />
      <CardContentDescription
        {...contentDescriptionProps()}
        values={values}
        isValid={validationFunction}
        onChange={changeHandler}
        fetchStatus={(ev) => store.set({status: ev})}
        isFetching={store.get('status')}
      >
        Montezuma is the best cat
      </CardContentDescription>
    </QuestionCard>
  );
});

stories.add('static text', () => {
  return (
    <QuestionCard {...defaultProps(false, false, true)}>
      <Input
        name="yesNo"
        required
        label="Value"
        value={store.get('yesNo')}
        onChange={(name, value) => store.set({[name]: value})}
      />
      <CardContentDescription
        {...contentDescriptionProps()}
        isValid
        isFetching={false}
      >
        Montezuma is the best cat
      </CardContentDescription>
    </QuestionCard>
  );
});
