import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf, forceReRender} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import {QuestionCard, RadioButtons, SimpleSummary} from '../../components';
import QuestionCardReadme from '../../components/Cards/QuestionCard/QuestionCard.md';

const stories = storiesOf('Organisims/QuestionCard', module);

const store = new Store({
  yesNo: '',
});

stories
  .addDecorator(withReadme(QuestionCardReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = (
  isCollapsed = false,
  clearFuture = false,
  isLatestCard = false
) => ({
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
  isLatestCard: boolean('isLatestCard', isLatestCard),
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

stories.add('active', () => (
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
        onChange={(name, value) => store.set({[name]: value})}
        value={store.get('yesNo')}
        key="yesNo"
      />
    </QuestionCard>
  </MemoryRouter>
));

stories.add('active and clears future', () => (
  <MemoryRouter key="question">
    <QuestionCard {...defaultProps(false, true)}>
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
        onChange={(value) => store.set({[name]: value})}
        value={store.get('yesNo')}
        key="yesNo"
      />
    </QuestionCard>
  </MemoryRouter>
));

stories.add('collapsed', () => (
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
        onChange={(name, value) => store.set({[name]: value})}
        value={store.get('yesNo')}
        key="yesNo"
      />
    </QuestionCard>
  </MemoryRouter>
));

stories.add('incomplete collapsed', () => (
  <MemoryRouter key="question">
    <QuestionCard {...defaultProps(true, false, true)}>
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
        onChange={(value) => store.set({[name]: value})}
        value={store.get('yesNo')}
        key="yesNo"
      />
    </QuestionCard>
  </MemoryRouter>
));
