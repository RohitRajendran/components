import React from 'react';
import {storiesOf} from '@storybook/react';
import Ranking from './Ranking';
import RankingReadme from './Ranking.md';
import {withReadme} from 'storybook-readme';

const stories = storiesOf('Atoms/Ranking', module);

stories.addDecorator(withReadme(RankingReadme));

stories.add('default', () => (
  <Ranking
    name="order"
    items={[
      {
        label: 'Essential Spending',
        secondaryLabel: '$8,345',
        id: 'aa',
      },
      {
        label: 'Healthcare Spending',
        secondaryLabel: '$1,000',
        id: 'bb',
      },
      {
        label: 'Lifestyle Spending',
        secondaryLabel: '$13,000',
        id: 'cc',
      },
    ]}
  />
));
