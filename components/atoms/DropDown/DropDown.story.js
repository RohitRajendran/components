import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import DropDown from './DropDown';
import DropDownReadme from './DropDown.md';
import {text, boolean} from '@storybook/addon-knobs';
import {StateDecorator, Store} from '@sambego/storybook-state';

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
 * @param {string} value - String representing an invalid value.
 * @returns {object} - Returns an object stating if it's true or false.
 */
function validate(value) {
  if (value === 'invalid') {
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

const stories = storiesOf('Atoms/DropDown', module);

const store = new Store({
  selectedExample: '',
  selectedExample2: 'uk',
  validExample: 'invalid',
  apiExample: '',
});

stories
  .addDecorator(withReadme(DropDownReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

stories.add('default', () => (
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
    value={store.get('selectedExample')}
    onChange={(name, value) => store.set({[name]: value})}
    placeholder={text('placeholder', 'Choose a country')}
    description={text('description', 'Pick your country')}
    label={text('label', 'Country')}
    searchable={boolean('searchable', false)}
    clearable={boolean('clearable', true)}
    loading={boolean('loading', false)}
    disabled={boolean('disabled', false)}
    required={boolean('required', false)}
    isSubmitted={boolean('isSubmitted', false)}
    key="selectedExample"
  />
));

stories.add('open', () => (
  <DropDown
    name="selectedExample2"
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
    value={store.get('selectedExample2')}
    onChange={(name, value) => store.set({[name]: value})}
    placeholder={text('placeholder', 'Choose a country')}
    description={text('description', 'Pick your country')}
    label={text('label', 'Country')}
    searchable={boolean('searchable', true)}
    clearable={boolean('clearable', true)}
    loading={boolean('loading', false)}
    disabled={boolean('disabled', false)}
    required={boolean('required', false)}
    key="selectedExample2"
    menuIsOpen={true}
    isSubmitted={boolean('isSubmitted', false)}
  />
));

stories.add('api', () => (
  <DropDown
    name="apiExample"
    getOptions={getOptions}
    value={store.get('apiExample')}
    onChange={(name, value) => store.set({[name]: value})}
    placeholder={text('placeholder', 'Choose a pet name')}
    description={text(
      'description',
      'Type a common office pet name in the box above'
    )}
    label={text('label', 'Pet Name')}
    searchable={boolean('searchable', true)}
    clearable={boolean('clearable', true)}
    loading={boolean('loading', false)}
    disabled={boolean('disabled', false)}
    required={boolean('required', false)}
    isSubmitted={boolean('isSubmitted', false)}
    key="apiExample"
  />
));

stories.add('invalid', () => (
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
    value={store.get('validExample')}
    onChange={(name, value) => store.set({[name]: value})}
    placeholder={text('placeholder', 'Is Montezuma the best cat?')}
    description={text('description', 'Who is the best cat?')}
    label={text('label', 'Best Cat')}
    searchable={boolean('searchable', true)}
    clearable={boolean('clearable', true)}
    loading={boolean('loading', false)}
    disabled={boolean('disabled', false)}
    required={boolean('required', false)}
    isSubmitted={boolean('isSubmitted', false)}
    key="validExample"
  />
));

stories.add('disabled', () => (
  <DropDown
    name="disabledExample"
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
    placeholder={text('placeholder', 'Is Montezuma the best cat?')}
    description={text('description', 'Who is the best cat?')}
    label={text('label', 'Best Cat')}
    searchable={boolean('searchable', true)}
    clearable={boolean('clearable', true)}
    loading={boolean('loading', false)}
    disabled={boolean('disabled', true)}
    required={boolean('required', false)}
    isSubmitted={boolean('isSubmitted', false)}
    key="disabledExample"
  />
));
