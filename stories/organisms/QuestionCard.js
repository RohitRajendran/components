import {State, Store} from '@sambego/storybook-state';
import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import {QuestionCard, RadioButtons, SimpleSummary} from '../../components';
import QuestionCardReadme from '../../components/Cards/QuestionCard/QuestionCard.md';

const stories = storiesOf('Organisims/QuestionCard', module);

stories.addDecorator(withReadme(QuestionCardReadme));

const defaultProps = (isCollapsed = false, clearFuture = false) => ({
  afterButton: text('afterButton'),
  beforeButton: text('beforeButton'),
  buttonText: text('buttonText'),
  clearFuture: boolean('clearFuture', clearFuture),
  description: text(
    'description',
    'This is where the optional description goes.'
  ),
  disabled: boolean('disabled', false),
  hasError: boolean('hasError', false),
  hideButton: boolean('hideButton', false),
  isCollapsed: boolean('isCollapsed', isCollapsed),
  isLatestCard: boolean('isLatestCard', false),
  loading: boolean('loading', false),
  moreDetail: text('moreDetail'),
  shortTitle: 'Question',
  summary: (
    <SimpleSummary
      shortTitle="Question"
      answers={['This is the answer']}
      cardUrl={'/'}
    />
  ),
  title: text('title', 'This is where the question goes.'),
  cardUrl: '/',
});

const store = new Store({
  yesNo: '',
});

stories.add('active', () => (
  <State store={store}>
    {(state) => [
      <MemoryRouter key="question">
        <QuestionCard {...defaultProps(false)}>
          <RadioButtons
            name="yesNo"
            options={[
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
            ]}
            onChange={(value) => store.set({yesNo: value})}
            value={state.yesNo}
            key="yesNo"
          />
        </QuestionCard>
      </MemoryRouter>,
    ]}
  </State>
));

stories.add('collapsed', () => (
  <State store={store}>
    {(state) => [
      <MemoryRouter key="question">
        <QuestionCard {...defaultProps(true)}>
          <RadioButtons
            name="yesNo"
            options={[
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
            ]}
            onChange={(value) => store.set({yesNo: value})}
            value={state.yesNo}
            key="yesNo"
          />
        </QuestionCard>
      </MemoryRouter>,
    ]}
  </State>
));
