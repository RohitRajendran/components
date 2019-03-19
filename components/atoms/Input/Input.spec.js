import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import Input, {getDeepestInputElement} from './Input';
import {DateMask, CurrencyMask} from '../../stories/util';

test('Input - Renders props as attributes on the input', (t) => {
  t.plan(8);
  const component = shallow(
    <Input
      name="fancy_input"
      type="text"
      value="VAL"
      placeholder="$0"
      label="Value"
      pattern="^\d{5}$"
      maxLength={5}
    />
  );
  const componentInputProps = component.find('input').props();

  t.equal(componentInputProps.name, 'fancy_input');
  t.equal(componentInputProps.value, 'VAL');
  t.equal(componentInputProps.type, 'text');
  t.equal(componentInputProps.placeholder, '$0');
  t.equal(componentInputProps['aria-label'], 'Value');
  t.equal(componentInputProps.required, undefined); // eslint-disable-line no-undefined
  t.equal(componentInputProps.pattern, '^\\d{5}$');
  t.equal(componentInputProps.maxLength, 5);
});

test('Input - Renders a masked input if mask is provided', (t) => {
  const component = shallow(
    <Input
      name="fancy_input"
      label="Amount"
      type="text"
      value="05/01/1980"
      placeholder="some placeholder"
      mask={DateMask}
    />
  );

  t.equals(component.find('t').length, 1, 'should render MaskedInput');
  t.end();
});

test('Input - Creates error when currency has no onChange function', (t) => {
  t.plan(1);
  t.throws(() =>
    shallow(
      <Input
        name="test"
        label="Amount"
        type="text"
        value="100,000"
        mask={CurrencyMask}
      />
    )
  );
});

test('Input - Renders an error message when the form is invalid', (t) => {
  const component = mount(
    <Input
      name="fancy_input"
      label="Amount"
      type="text"
      value="05/01/1980"
      placeholder="some placeholder"
      mask={DateMask}
      isInvalid={() => true}
      validationErrorMsg="This is not valid!"
    />
  );

  t.equals(
    component.find('.validation-error').text(),
    'This is not valid!',
    'Should render the invalid message.'
  );

  t.end();
});

test('Input - Shows a description field beneath the text if applicable', (t) => {
  const component = mount(
    <Input
      name="fancy_input"
      label="Amount"
      type="text"
      value="05/01/1980"
      placeholder="some placeholder"
      mask={DateMask}
      description="This is the description"
    />
  );

  t.equals(
    component.find('.description').text(),
    'This is the description',
    'Should render the description.'
  );

  t.end();
});

test('Input - Gets the deepest input element', (t) => {
  t.plan(3);

  const component = mount(
    <Input
      name="input_name"
      append="%"
      label="Amount"
      type="text"
      value="05/01/1980"
      placeholder="some placeholder"
      mask={DateMask}
      description="This is the description"
    />
  );

  const result = getDeepestInputElement(component.instance());

  t.equals(result.name, 'input_name', 'Should be the correct input name.');

  t.equals(result.type, 'text', 'Should be the correct input type.');

  t.equals(result.value, '05/01/1980', 'Should be the correct input value.');
});

test('Input - Correctly toggles focus', (t) => {
  const component = mount(
    <Input
      name="input_name"
      append="%"
      label="Amount"
      type="text"
      value="05/01/1980"
      placeholder="some placeholder"
      mask={DateMask}
      description="This is the description"
    />
  );

  component.instance().toggleFocus();

  t.equals(component.state().isActive, true, 'Should toggle the focus state.');

  t.end();
});

test('Input - onBlur correctly fires both handlers', (t) => {
  const component = mount(
    <Input
      name="input_name"
      append="%"
      label="Amount"
      type="text"
      value="05/01/1980"
      placeholder="some placeholder"
      mask={DateMask}
      description="This is the description"
      validateOnBlur={true}
    />
  );

  component.find('input').simulate('blur');

  t.equals(
    component.state().isActive,
    true,
    'Should toggle the focus state when something is blurred even with validateOnBlur toggled.'
  );

  t.end();
});
