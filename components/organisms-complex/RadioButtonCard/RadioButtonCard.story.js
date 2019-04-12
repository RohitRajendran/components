import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, object, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import RadioButtonCard from './RadioButtonCard';
import RadioButtonCardReadme from './RadioButtonCard.md';

const stories = storiesOf('Complex Organisms/RadioButtonCard', module);

const store = new Store({
  radioBtnQuestion: '',
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
  hasMadeChanges: boolean('hasMadeChanges', true),
  isCollapsed: boolean('isCollapsed', isCollapsed),
  isLatestCard: boolean('isLatestCard', isLatestCard),
  isFetching: boolean('isFetching', false),
  loading: boolean('loading', false),
  moreDetails: object('moreDetails', {
    label: 'Show more details',
    cabinetContent: (
      <div>
        <h1>Montezuma is the best</h1>
        <p>Hello this is the cabinet and yes, Montezuma is the best.</p>
      </div>
    ),
    header: 'Montezuma is the best cat',
  }),
  shortTitle: 'Question',
  title: text('title', 'This is where the question goes.'),
  editCard: () => true,
  config: {
    name: 'radioBtnQuestion',
    value: store.get('radioBtnQuestion'),
    options: object('config.options', [
      {
        label: 'Yes',
        value: 'yes',
      },
      {
        label: 'No',
        value: 'no',
      },
      {
        label: 'I do not know',
        value: 'idk',
        disabled: true,
      },
    ]),
  },
  onChange: (name, value) => store.set({[name]: value}),
});

stories.add('active', () => (
  <MemoryRouter key="question">
    <RadioButtonCard {...defaultProps(false, false, true)} />
  </MemoryRouter>
));

stories.add('editing and clears future', () => (
  <MemoryRouter key="question">
    <RadioButtonCard {...defaultProps(false, true, false)} />
  </MemoryRouter>
));

stories.add('collapsed', () => (
  <MemoryRouter key="question">
    <RadioButtonCard {...defaultProps(true, false, false)} answers={['Yup']} />
  </MemoryRouter>
));

stories.add('incomplete collapsed', () => (
  <MemoryRouter key="question">
    <RadioButtonCard {...defaultProps(true, false, true)} />
  </MemoryRouter>
));
