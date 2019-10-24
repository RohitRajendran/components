import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, object} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import Input from '~components/atoms/Input/Input';
import RadioButtons from './RadioButtons';
import RadioButtonReadme from './RadioButtons.mdx';

const stories = storiesOf('Molecules/RadioButtons', module);

stories.addParameters({
  docs: {
    page: RadioButtonReadme,
  },
});

const store = new Store({
  yesNo: '',
  followup: 'custom',
  input: '',
  bank: '',
});

stories.addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({formName, table, options}) => ({
  name: formName,
  table: boolean('table', table),
  onChange: (name, value) => store.set({[name]: value}),
  value: store.get(formName),
  options: object('options', options),
  key: formName,
});

stories.add('default', () => (
  <RadioButtons
    {...defaultProps({
      formName: 'yesNo',
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
        {
          label: "I don't know",
          value: 'idk',
          disabled: true,
        },
      ],
    })}
  />
));

stories.add('followup', () => (
  <RadioButtons
    {...defaultProps({
      formName: 'followup',
      options: [
        {
          label: 'Use the United Income estimate',
          value: 'estimate',
        },
        {
          label: 'Enter my own estimate',
          value: 'custom',
          followup: (
            <div>
              <Input
                name="followup"
                label="Estimate"
                placeholder="Enter an estimate..."
                value={store.get('input')}
                onChange={(name, value) => store.set({[name]: value})}
              />
            </div>
          ),
        },
        {
          label: 'Another Option',
          value: 'anotherone',
        },
      ],
    })}
  />
));

stories.add('table', () => (
  <RadioButtons
    {...defaultProps({
      formName: 'bank',
      options: [
        {
          label: 'Bank of America Checking …3456',
          value: '1',
          secondaryLabel: '$1,234,567.89',
        },
        {
          label: 'Bank of America Money Market …9364',
          value: '2',
          secondaryLabel: '$1,234,567.89',
        },
        {
          label: 'Capital One Savings …8932',
          value: '3',
          secondaryLabel: '$1,234,567.89',
        },
        {
          label: 'Wells Fargo Checking …9867',
          value: '4',
          secondaryLabel: '$1,234,567.89',
        },
      ],
      table: true,
    })}
  />
));
