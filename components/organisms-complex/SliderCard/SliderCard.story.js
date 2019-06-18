import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, number, select, text, object} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import {withReadme} from 'storybook-readme';
import SliderCard from './SliderCard';
import SliderCardReadme from './SliderCard.md';

const stories = storiesOf('Complex Organisms/SliderCard', module);

const store = new Store({
  slider: 5,
});

store.subscribe(() => {
  forceReRender();
});

stories
  .addDecorator(withReadme(SliderCardReadme))
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
  onChange: (name, value) => store.set({[name]: value}),
  config: {
    name: 'slider',
    value: store.get('slider'),
    leftAnnotate: text('leftAnnotate', 'Less Cats'),
    rightAnnotate: text('rightAnnotate', 'More Cats'),
    tooltip: text('tooltip', 'How many cats would you like?'),
    tooltipStickyPosition: number('tooltipStickyPosition', 5),
    tooltipStickyVariant: select('Variant', ['green', 'purple', null], 'green'),
  },
});

stories.add('active', () => (
  <SliderCard {...defaultProps(false, false, true)} />
));

stories.add('editing and clears future', () => (
  <SliderCard {...defaultProps(false, true, false)} />
));

stories.add('collapsed', () => (
  <SliderCard {...defaultProps(true, false, false)} answers={['Yup']} />
));

stories.add('incomplete collapsed', () => (
  <SliderCard {...defaultProps(true, false, true)} />
));
