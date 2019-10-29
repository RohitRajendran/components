import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, object, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import RankingCard from './RankingCard';
import RankingCardReadme from './RankingCard.mdx';

const stories = storiesOf('Complex Organisms/RankingCard', module);

stories.addParameters({
  docs: {
    page: RankingCardReadme,
  },
});

const store = new Store({
  ranking: [
    {
      label: 'Montezuma',
      secondaryLabel: '$8,345',
      id: 'montezuma',
      movable: false,
    },
    {
      label: 'Pica',
      secondaryLabel: '$1,000',
      id: 'pica',
      movable: true,
      focus: true,
    },
    {
      label: 'Pixie',
      secondaryLabel: '$13,000',
      id: 'pixie',
      movable: false,
    },
  ],
});

store.subscribe(() => {
  forceReRender();
});

stories.addDecorator(StateDecorator(store));

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
    name: 'ranking',
    items: store.get('ranking'),
  },
});

stories.add('active', () => (
  <RankingCard {...defaultProps(false, false, true)} />
));

stories.add('editing and clears future', () => (
  <RankingCard {...defaultProps(false, true, false)} />
));

stories.add('collapsed', () => (
  <RankingCard {...defaultProps(true, false, false)} />
));

stories.add('incomplete collapsed', () => (
  <RankingCard {...defaultProps(true, false, true)} />
));
