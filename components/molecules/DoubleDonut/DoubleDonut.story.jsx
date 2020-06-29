import React from 'react';
import {storiesOf} from '@storybook/react';
import DoubleDonut from './DoubleDonut';
import DoubleDonutReadMe from './DoubleDonut.mdx';
import {text, object, boolean} from '@storybook/addon-knobs';

const stories = storiesOf('Molecules/DoubleDonut', module);

stories.addParameters({
  docs: {
    page: DoubleDonutReadMe,
  },
});

const defaultProps = (hideLegend, height, width) => ({
  items: object('items', {
    Bonds: {
      value: 21.4,
      color: '#42bad2',
    },
    'Emerging Market Bonds Hedged': {
      value: 4.3,
      color: '#98d7e1',
    },
    'Emerging Markets Stocks': {
      value: 5.7,
      color: '#98d7d0',
    },
    'Foreign Bonds': {
      value: 10.7,
      color: '#6dc9da',
    },
    'International Small Cap Stocks': {
      value: 6.4,
      color: '#ccb9e5',
    },
    'International Stocks': {
      value: 13,
      color: '#ab87d9',
    },
    'Large Cap Stocks': {
      value: 25.7,
      color: '#6524c2',
    },
    'Small Cap Stocks': {
      value: 5.4,
      color: '#8856ce',
    },
    TIPS: {
      value: 5.4,
      color: '#c2e5e9',
    },
    Cash: {
      value: 1,
      color: '#56b28c',
    },
    REITs: {
      value: 1,
      color: '#42bad2',
    },
  }),
  categories: object('categories', {
    Stocks: {
      items: [
        'Large Cap Stocks',
        'Small Cap Stocks',
        'International Stocks',
        'International Small Cap Stocks',
        'Emerging Markets Stocks',
      ],
      color: '#4d00ba',
      value: 56.2,
    },
    Bonds: {
      items: ['Bonds', 'Foreign Bonds', 'Emerging Market Bonds Hedged', 'TIPS'],
      color: '#23b1cd',
      value: 41.8,
    },
    Other: {
      items: ['Cash', 'REITs'],
      color: '#018e54',
      value: 2,
    },
  }),
  height: text('height', height),
  width: text('width', width),
  hideLegend: boolean('hideLegend', hideLegend),
  title: text('title', 'Asset Chart'),
});

stories.add('default', () => <DoubleDonut {...defaultProps()} />);
stories.add('scaled', () => (
  <DoubleDonut {...defaultProps(false, '17rem', '17rem')} />
));
stories.add('legend hidden', () => <DoubleDonut {...defaultProps(true)} />);
