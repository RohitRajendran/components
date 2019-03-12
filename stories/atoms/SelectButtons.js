import React from 'react';
import {storiesOf} from '@storybook/react';
import SelectButtons from '../../components/SelectButtons';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import SelectButtonReadme from '../../components/SelectButtons/README.md';
import {State, Store} from '@sambego/storybook-state';
import Input from '../../components/Input';

const stories = storiesOf('Atoms/SelectButtons', module);

const store = new Store({
  yesNo: null,
  followup: null,
  bank: null,
  input: '',
});

stories.addDecorator(withKnobs).add(
  'default',
  withReadme(SelectButtonReadme, () => (
    <State store={store}>
      {(state) => [
        <SelectButtons
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
          onChange={(name, value) => store.set({yesNo: value})}
          value={state.yesNo}
          key="yesNo"
        />,
      ]}
    </State>
  ))
);


stories.addDecorator(withKnobs).add(
  'followup',
  withReadme(SelectButtonReadme, () => (
    <State store={store}>
      {(state) => [
        <SelectButtons
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
                    name="estimate"
                    label="Estimate"
                    placeholder="Enter an estimate..."
                    value={state.input}
                    onChange={(event) => store.set({input: event.target.value})}
                  />
                </div>
              ),
            },
          ]}
          onChange={(name, value) => store.set({followup: value})}
          value={state.followup}
          key="followup"
        />,
      ]}
    </State>
  ))
);

stories.addDecorator(withKnobs).add(
  'table',
  withReadme(SelectButtonReadme, () => (
    <State store={store}>
      {(state) => [
        <SelectButtons
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
          onChange={(name, value) => store.set({bank: value})}
          value={state.bank}
          key="bank"
        />,
      ]}
    </State>
  ))
);