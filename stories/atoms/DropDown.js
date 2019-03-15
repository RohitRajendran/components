import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import DropDown from '../../components/DropDown/DropDown';
import DropDownReadme from '../../components/DropDown/DropDown.md';
import {State, Store} from '@sambego/storybook-state';

const store = new Store({
  selectedExample1: '',
});

const stories = storiesOf('Atoms/DropDown', module);

stories.addDecorator(withReadme(DropDownReadme));

stories.addDecorator(withKnobs).add('default', () => (
  <State store={store}>
    {(state) => [
      <DropDown
        name="selectedExample1"
        options={[
          {
            value: 'YES',
            label: 'purchased',
          },
          {
            value: 'NO',
            label: 'a gift or inheritance',
          },
          {
            value: 'NO',
            label: 'a gift or inheritance',
          },
          {
            value: 'NO',
            label: 'a gift or inheritance',
          },
          {
            value: 'NO',
            label: 'a gift or inheritance',
          },
          {
            value: 'NO',
            label: 'a gift or inheritance',
          },
          {
            value: 'NO',
            label: 'a gift or inheritance',
          },
          {
            value: 'NO',
            label: 'a gift or inheritance',
          },
          {
            value: 'NO',
            label: 'a gift or inheritance',
          },
        ]}
        selectTypeCSS="large-inline-on-light-select sentence-input sentence-large"
        value={state.selectedExample1}
        onChange={(value) => store.set({selectedExample1: value})}
        placeholder="1660 L Street"
        key="selectedExample1"
        label="Address"
        required
      />,
    ]}
  </State>
));
