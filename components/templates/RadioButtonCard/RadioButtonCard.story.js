import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, object, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import RadioButtonCard from './RadioButtonCard';
import RadioButtonCardReadme from './RadioButtonCard.md';

const stories = storiesOf('Templates/RadioButtonCard', module);

const store = new Store({
  radioBtnQuestion: '',
  followup: '',
});

store.subscribe(() => {
  forceReRender();
});

stories
  .addDecorator(withReadme(RadioButtonCardReadme))
  .addDecorator(StateDecorator(store));

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
  isCollapsed: boolean('isCollapsed', isCollapsed),
  isLatestCard: boolean('isLatestCard', isLatestCard),
  loading: boolean('loading', false),
  moreDetail: text('moreDetail'),
  shortTitle: 'Question',
  title: text('title', 'This is where the question goes.'),
  cardUrl: '/',
  options: object('options', [
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
  ]),
  radioButtonName: 'radioBtnQuestion',
  onChange: (name, value) => store.set({[name]: value}),
  value: store.get('radioBtnQuestion'),
});

stories.add('active', () => (
  <MemoryRouter key="question">
    <RadioButtonCard {...defaultProps(false)} />
  </MemoryRouter>
));

stories.add('active and clears future', () => (
  <MemoryRouter key="question">
    <RadioButtonCard {...defaultProps(false, true)} />
  </MemoryRouter>
));

stories.add('collapsed', () => (
  <MemoryRouter key="question">
    <RadioButtonCard
      {...defaultProps(true)}
      answers={store.get('radioBtnQuestion')}
    />
  </MemoryRouter>
));

stories.add('incomplete collapsed', () => (
  <MemoryRouter key="question">
    <RadioButtonCard {...defaultProps(true, false, true)} />
  </MemoryRouter>
));
