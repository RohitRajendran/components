import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import Ranking from './Ranking';
import RankingReadme from './Ranking.md';
import {withReadme} from 'storybook-readme';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Atoms/Ranking', module);

const store = new Store({
  default: [
    {
      label: 'Montezuma',
      secondaryLabel: '$8,345',
      id: 'montezuma',
      movable: true,
    },
    {
      label: 'Pica',
      secondaryLabel: '$1,000',
      id: 'pica',
      movable: true,
    },
    {
      label: 'Pixie',
      secondaryLabel: '$13,000',
      id: 'pixie',
      movable: true,
    },
  ],
  disabled: [
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
    },
    {
      label: 'Pixie',
      secondaryLabel: '$13,000',
      id: 'pixie',
      movable: true,
    },
  ],
  focus: [
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
  .addDecorator(withReadme(RankingReadme))
  .addDecorator(StateDecorator(store));

const defaultProps = (formName) => ({
  items: store.get(formName),
  onChange: (name, value) => store.set({[name]: value}),
});

stories.add('default', () => <Ranking {...defaultProps('default')} />);

stories.add('movable disabled', () => (
  <Ranking {...defaultProps('disabled')} />
));

stories.add('focus', () => <Ranking {...defaultProps('focus')} />);
