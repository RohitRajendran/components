import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, object, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import CheckboxCard from './CheckboxCard';
import CheckboxCardReadme from './CheckboxCard.mdx';

const stories = storiesOf('Complex Organisms/CheckboxCard', module);

stories.addParameters({
  docs: {
    page: CheckboxCardReadme,
  },
});

const store = new Store({
  selectBtnOption: [],
});

store.subscribe(() => {
  forceReRender();
});

stories.addDecorator(StateDecorator(store));

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
  onChange: (name, value) => store.set({[name]: value}),
  config: {
    name: 'selectBtnOption',
    value: store.get('selectBtnOption'),
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
});

stories.add('active', () => (
  <CheckboxCard {...defaultProps(false, false, true)} />
));

stories.add('editing and clears future', () => (
  <CheckboxCard {...defaultProps(false, true, false)} />
));

stories.add('collapsed', () => (
  <CheckboxCard {...defaultProps(true, false, false)} answers={['Yup']} />
));

stories.add('incomplete collapsed', () => (
  <CheckboxCard {...defaultProps(true, false, true)} />
));
