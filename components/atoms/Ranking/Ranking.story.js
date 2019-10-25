import {StateDecorator, Store} from '@sambego/storybook-state';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import Ranking from './Ranking';
import RankingReadme from './Ranking.mdx';

const stories = storiesOf('Atoms/Ranking', module);

stories.addParameters({
  docs: {
    page: RankingReadme,
  },
});

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

stories.addDecorator(StateDecorator(store));

const defaultProps = (formName) => ({
  name: 'ranking',
  items: store.get(formName),
  onChange: (name, value) => store.set({[name]: value}),
});

stories.add('default', () => <Ranking {...defaultProps('default')} />);

stories.add('movable disabled', () => (
  <Ranking {...defaultProps('disabled')} />
));

stories.add('focus', () => <Ranking {...defaultProps('focus')} />);
