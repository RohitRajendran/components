import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import DropDown from '../../components/DropDown/DropDown';
import DropDownReadme from '../../components/DropDown/DropDown.md';
import {State, Store} from '@sambego/storybook-state';

function promiseTimeout(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(time);
    }, time);
  });
}

function validate(obj) {
  if (obj.value === 'invalid') {
    return {
      isValid: false,
      message: 'Monte is actually the best.',
    };
  } else {
    return {isValid: true};
  }
}

async function getOptions(input) {
  if (input) {
    await promiseTimeout(1000);
    const options = [
      {
        label: 'Montezuma',
        value: 'montezuma',
      },
      {
        label: 'Pica',
        value: 'pica',
      },
      {
        label: 'Hector',
        value: 'hector',
      },
      {
        label: 'Peterson',
        value: 'peterson',
      },
    ].filter((data) => input === data.value);
    return {options};
  } else {
    return Promise.resolve({});
  }
}

console.log(getOptions('montezuma'));

const store = new Store({
  validExample: {value: 'invalid', label: 'Montezuma is not the best cat'},
  apiExample: {},
});

const stories = storiesOf('Atoms/DropDown', module);

stories.addDecorator(withReadme(DropDownReadme));

stories.add('default', () => (
  <State store={store}>
    {(state) => [
      <DropDown
        name="selectedExample1"
        validate={[validate]}
        options={[
          {
            value: 'uk',
            label: 'United Kingdom',
          },
          {
            value: 'usa',
            label: 'United States',
          },
        ]}
        value={{}}
        onChange={(value) => store.set({selectedExample: value})}
        placeholder="Choose a country"
        key="selectedExample"
        description="Pick your country"
        label="Country"
        required
      />,
    ]}
  </State>
));

stories.add('api', () => (
  <State store={store}>
    {(state) => [
      <DropDown
        name="apiExample"
        getOptions={getOptions}
        value={state.apiExample}
        onChange={(value) => store.set({apiExample: value})}
        placeholder="Choose a pet name"
        key="apiExample"
        description="Type a common office pet name in the box above"
        label="Pet Name"
        required
      />,
    ]}
  </State>
));

stories.add('invalid', () => (
  <State store={store}>
    {(state) => [
      <DropDown
        name="validExample"
        validate={[validate]}
        options={[
          {
            value: 'valid',
            label: 'Montezuma is the best cat',
          },
          {
            value: 'invalid',
            label: 'Montezuma is not the best cat',
          },
        ]}
        value={state.validExample}
        onChange={(value) => store.set({validExample: value})}
        placeholder="Is Montezuma the best cat?"
        key="selectedExample1"
        description="Who is the best cat?"
        label="Best Cat"
        required
      />,
    ]}
  </State>
));
