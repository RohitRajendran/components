import {StateDecorator, Store} from '@sambego/storybook-state';
import {text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import ItemizationWidget from './ItemizationWidget';
import ItemizationWidgetReadme from './ItemizationWidget.mdx';

const stories = storiesOf('Atoms/ItemizationWidget', module);

stories.addParameters({
  docs: {
    page: ItemizationWidgetReadme,
  },
});

const store = new Store({
  total: 9999,
});

stories.addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultValues = [
  {
    label: 'Montezuma',
    value: 9999,
  },
  {
    label: 'Other Cats',
    description:
      'Cats are really important. And if you do not include cats in your budget they will be included for you.',
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
    description:
      'Cats are really important. And if you do not include cats in your budget they will be included for you.',
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
  values: valueProp,
  title: text('title', 'Cat Budget'),
  totalSuffix: text('totalSuffix', 'yr'),
});

stories.add('default', () => {
  const editConfig = {
    label: 'Edit Total',
    onConfirm: (value) => {
      store.set({total: value});
    },
    config: {
      name: 'total',
      label: 'Total Spending',
      value: store.get('total').toString(),
      mask: 'Currency',
    },
  };

  const values = [...defaultValues];
  values[0] = {...values[0], value: store.get('total'), editConfig};

  return <ItemizationWidget {...defaultProps(values)} />;
});
stories.add('threshold', () => (
  <ItemizationWidget {...defaultProps(thresholdValues)} />
));
