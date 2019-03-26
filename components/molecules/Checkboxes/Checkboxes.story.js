import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import Checkboxes from './Checkboxes';
import Input from '~components/atoms/Input/Input';
import {boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import SelectButtonReadme from './Checkboxes.md';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Molecules/Checkboxes', module);

const store = new Store({
  yesNo: [],
  followup: ['estimate', 'custom'],
  bank: [],
  input: '',
});

stories
  .addDecorator(withReadme(SelectButtonReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

stories.add('default', () => (
  <Checkboxes
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
  <Checkboxes
    name="followup"
    table={boolean('table', false)}
    options={[
      {
        label: 'I would like to be called Montezuma',
        value: 'estimate',
      },
      {
        label: 'I would also like to be called...',
        value: 'custom',
        followup: (
          <div>
            <Input
              name="followup"
              label="Alternative Name"
              placeholder="Enter a name..."
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
  <Checkboxes
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
