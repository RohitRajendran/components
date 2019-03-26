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
    },
    {
      label: 'Pica',
      secondaryLabel: '$1,000',
      value: 'pica',
    },
    {
      label: 'Pixie',
      secondaryLabel: '$13,000',
      value: 'pixie',
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
