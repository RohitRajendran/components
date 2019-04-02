import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import RankingCard from './RankingCard';
import RankingCardReadme from './RankingCard.md';

const stories = storiesOf('Complex Organisms/RankingCard', module);

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

stories
  .addDecorator(withReadme(RankingCardReadme))
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
  editCard: () => true,
  onChange: (name, value) => store.set({[name]: value}),
  config: {
    name: 'ranking',
    items: store.get('ranking'),
  },
});

stories.add('active', () => (
  <MemoryRouter key="question">
    <RankingCard {...defaultProps(false)} />
  </MemoryRouter>
));

stories.add('active and clears future', () => (
  <MemoryRouter key="question">
    <RankingCard {...defaultProps(false, true)} />
  </MemoryRouter>
));

stories.add('collapsed', () => (
  <MemoryRouter key="question">
    <RankingCard {...defaultProps(true)} />
  </MemoryRouter>
));

stories.add('incomplete collapsed', () => (
  <MemoryRouter key="question">
    <RankingCard {...defaultProps(true, false, true)} />
  </MemoryRouter>
));
