import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import Ranking from './Ranking';
import RankingReadme from './Ranking.md';
import {withReadme} from 'storybook-readme';
import {text} from '@storybook/addon-knobs';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Atoms/Ranking', module);

const store = new Store({
  default: [
    {
      label: 'Montezuma',
      secondaryLabel: '$8,345',
      value: 'montezuma',
      movable: true,
    },
    {
      label: 'Pica',
      secondaryLabel: '$1,000',
      value: 'pica',
      movable: true,
    },
    {
      label: 'Pixie',
      secondaryLabel: '$13,000',
      value: 'pixie',
      movable: true,
    },
  ],
  disabled: [
    {
      label: 'Montezuma',
      secondaryLabel: '$8,345',
      value: 'montezuma',
      movable: false,
    },
    {
      label: 'Pica',
      secondaryLabel: '$1,000',
      value: 'pica',
      movable: true,
    },
    {
      label: 'Pixie',
      secondaryLabel: '$13,000',
      value: 'pixie',
      movable: true,
    },
  ],
  focus: [
    {
      label: 'Montezuma',
      secondaryLabel: '$8,345',
      value: 'montezuma',
      movable: false,
    },
    {
      label: 'Pica',
      secondaryLabel: '$1,000',
      value: 'pica',
      movable: true,
      focus: true,
    },
    {
      label: 'Pixie',
      secondaryLabel: '$13,000',
      value: 'pixie',
      movable: false,
    },
  ],
});

store.subscribe(() => {
  forceReRender();
});

stories
  .addDecorator(withReadme(RankingReadme))
  .addDecorator(StateDecorator(store));

const defaultProps = (name) => ({
  name: text('name', name),
});

stories.add('default', () => (
  <Ranking
    items={store.get('default')}
    onChange={(name, value) => store.set({[name]: value})}
    {...defaultProps('default')}
  />
));

stories.add('movable disabled', () => (
  <Ranking
    items={store.get('disabled')}
    onChange={(name, value) => store.set({[name]: value})}
    {...defaultProps('disabled')}
  />
));

stories.add('focus', () => (
  <Ranking
    items={store.get('focus')}
    onChange={(name, value) => store.set({[name]: value})}
    {...defaultProps('focus')}
  />
));
