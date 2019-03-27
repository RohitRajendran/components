import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import RadioButtons from './RadioButtons';
import {boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import RadioButtonReadme from './RadioButtons.md';
import Input from '~components/atoms/Input/Input';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Molecules/RadioButtons', module);

const store = new Store({
  yesNo: '',
  followup: 'custom',
  input: '',
  bank: '',
});

stories
  .addDecorator(withReadme(RadioButtonReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

stories.add('default', () => (
  <RadioButtons
    name="yesNo"
    table={boolean('table', false)}
    options={[
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
    ]}
    onChange={(name, value) => store.set({[name]: value})}
    value={store.get('yesNo')}
    key="yesNo"
  />
));

stories.add('followup', () => (
  <RadioButtons
    name="followup"
    table={boolean('table', false)}
    options={[
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
              onChange={(event) => store.set({input: event.target.value})}
            />
          </div>
        ),
      },
    ]}
    onChange={(name, value) => store.set({[name]: value})}
    value={store.get('followup')}
    key="followup"
  />
));

stories.add('table', () => (
  <RadioButtons
    name="bank"
    table={boolean('table', true)}
    options={[
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
    ]}
    onChange={(name, value) => store.set({[name]: value})}
    value={store.get('bank')}
    key="bank"
  />
));
