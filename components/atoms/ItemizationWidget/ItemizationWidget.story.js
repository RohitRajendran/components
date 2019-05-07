import React from 'react';
import {storiesOf} from '@storybook/react';
import ItemizationWidget from './ItemizationWidget';
import {withReadme} from 'storybook-readme';
import ItemizationWidgetReadme from './ItemizationWidget.md';
import {object, text} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/ItemizationWidget', module);

stories.addDecorator(withReadme(ItemizationWidgetReadme));

const defaultValues = [
  {
    label: 'Montezuma',
    value: 9999,
  },
  {
    label: 'Other Cats',
    suffix: 'mo',
    thresholdWarning: 'You have budgeted far too much for cats.',
    items: [
      {
        value: 1000,
        label: 'Pica',
      },
      {
        value: 50,
        label: 'Pixie',
      },
    ],
  },
];

const thresholdValues = [
  {
    label: 'Montezuma',
    value: 9999,
  },
  {
    label: 'Other Cats',
    threshold: 500,
    suffix: 'mo',
    thresholdWarning: 'You have budgeted far too much for cats.',
    items: [
      {
        value: 1000,
        label: 'Pica',
      },
      {
        value: 50,
        label: 'Pixie',
      },
    ],
  },
];

const defaultProps = (valueProp) => ({
  values: object('values', valueProp),
  title: text('title', 'Cat Budget'),
  totalSuffix: text('totalSuffix', 'yr'),
});

stories.add('default', () => (
  <ItemizationWidget {...defaultProps(defaultValues)} />
));
stories.add('threshold', () => (
  <ItemizationWidget {...defaultProps(thresholdValues)} />
));
