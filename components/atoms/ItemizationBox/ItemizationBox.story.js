import React from 'react';
import {Store} from '@sambego/storybook-state';
import {storiesOf, forceReRender} from '@storybook/react';
import ItemizationBox from './ItemizationBox';
import ItemizationBoxReadMe from './ItemizationBox.mdx';
import {text, object, boolean} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/ItemizationBox', module);

const store = new Store({});

store.subscribe(() => {
  forceReRender();
});

stories.addParameters({
  docs: {
    page: ItemizationBoxReadMe,
  },
});

const defaultProps = (values, collapsed) => ({
  label: text('label', 'Expense Totals'),
  buttonOptions: object('buttonOptions', {
    label: 'View External Accounts',
    path: 'https://jamesiv.es',
  }),
  values: object('values', values),
  isCollapsed: boolean('isCollapsed', collapsed),
});

stories.add('default', () => (
  <ItemizationBox
    {...defaultProps(
      [
        {
          label: 'Montezumas Cat Food',
          value: 900000,
        },
        {
          label: 'Spice 6 Palak Paneer',
          value: 200,
        },
        {
          label:
            'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
          value: 600,
        },
        {
          label:
            'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
          value: 600,
          tooltip: {
            label: 'cat facts',
            description: 'Montezuma is the king of all cats',
          },
        },
      ],
      false,
    )}
  />
));

stories.add('negative numbers', () => (
  <ItemizationBox
    {...defaultProps(
      [
        {
          label: 'Montezumas Cat Food',
          value: -900000,
        },
        {
          label: 'Spice 6 Palak Paneer',
          value: 200,
        },
        {
          label:
            'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
          value: 600,
        },
        {
          label:
            'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
          value: 600,
          tooltip: {
            label: 'cat facts',
            description: 'Montezuma is the king of all cats',
          },
        },
      ],
      false,
    )}
  />
));

stories.add('collapsed', () => (
  <ItemizationBox
    {...defaultProps(
      [
        {
          label: 'Montezumas Cat Food',
          value: -900000,
        },
        {
          label: 'Spice 6 Palak Paneer',
          value: 200,
        },
        {
          label:
            'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
          value: 600,
        },
        {
          label:
            'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
          value: 600,
          tooltip: {
            label: 'cat facts',
            description: 'Montezuma is the king of all cats',
          },
        },
      ],
      true,
    )}
  />
));
