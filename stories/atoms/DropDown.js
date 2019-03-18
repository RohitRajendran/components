import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import DropDown from '../../components/DropDown/DropDown';
import DropDownReadme from '../../components/DropDown/DropDown.md';
import {State, Store} from '@sambego/storybook-state';

/** Creates a timeout for async functions.
 * @param {integer} time - The length of the timeout.
 * @returns {Promise.resolve} - Returns a resolved promise.
 */
function promiseTimeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

/** Fake validation function.
 * @param {object} obj - The input object.
 * @returns {object} - Returns an object stating if it's true or false.
 */
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

/** Fakes an API endpoint to gather data for the input story.
 * @param {string} input - The text input.
 * @returns {object} Returns an object keyed with 'options' with the requested data if applicable.
 */
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
    ].filter((data) => input.toLowerCase() === data.value);
    return {options};
  } else {
    return {};
  }
}

const store = new Store({
  selectedExample: {value: '', label: ''},
  validExample: {value: 'invalid', label: 'Montezuma is not the best cat'},
  apiExample: {value: '', label: ''},
});

const stories = storiesOf('Atoms/DropDown', module);

stories.addDecorator(withReadme(DropDownReadme));

stories.add('default', () => (
  <State store={store}>
    {(state) => [
      <DropDown
        name="selectedExample"
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
        value={state.selectedExample}
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
        description="Type a common office pet name in the box above"
        clearable={true}
        label="Pet Name"
        key="apiExample"
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
        key="validExample"
        description="Who is the best cat?"
        label="Best Cat"
        required
      />,
    ]}
  </State>
));

stories.add('disabled', () => (
  <DropDown
    name="validExample"
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
    placeholder="Is Montezuma the best cat?"
    key="validExample"
    description="Who is the best cat?"
    label="Best Cat"
    disabled
  />
));
