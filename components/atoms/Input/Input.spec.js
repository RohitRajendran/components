import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import Input, {
  getDeepestInputElement,
  commaSeparatedMask,
  tickerMask,
  maskEnum,
} from './Input';
import {spy} from 'sinon';

test('Input - Renders props as attributes on the input', (t) => {
  t.plan(9);
  const onChangeSpy = spy();

  const component = shallow(
    <Input
      name="fancy_input"
      type="text"
      value="VAL"
      placeholder="$0"
      label="Value"
      pattern="^\d{5}$"
      maxLength={5}
      onChange={onChangeSpy}
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

  componentInputProps.onChange({target: {value: 5}});
  t.deepEquals(onChangeSpy.args[0], ['fancy_input', 5]);
});

test('Input - Renders a masked input if mask is provided', (t) => {
  const component = mount(
    <Input
      name="fancy_input"
      label="Amount"
      type="text"
      value="05/01/1980"
      mask="Date"
    />
  );

  t.equals(
    component
      .find('input')
      .first()
      .prop('placeholder'),
    'MM/DD/YYYY',
    'Uses default mask placeholder'
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
        mask="Currency"
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
      mask="Date"
      isValid={() => true}
      validationErrorMsg="This is not valid!"
    />
  );

  t.equals(
    component.find('.uic--validation-error').text(),
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
      mask="Date"
      description="This is the description"
    />
  );

  t.equals(
    component.find('.uic--description').text(),
    'This is the description',
    'Should render the description.'
  );

  const component2 = mount(
    <Input
      name="fancy_input"
      label="Amount"
      type="text"
      value="05/01/1980"
      placeholder="some placeholder"
      mask="Date"
      description={<div className="test--desc">Node description</div>}
    />
  );

  t.equals(
    component2.find('.test--desc').text(),
    'Node description',
    'Should render the description node.'
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
      mask="Date"
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
      label="Amount"
      type="text"
      value="20"
      placeholder="some placeholder"
      mask="PercentageWithDecimal"
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
      mask="Date"
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

test('Input - tickerMask', (t) => {
  t.deepEquals(
    tickerMask.mask('hello'),
    [/[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/],
    'Mask should return the correct pattern.'
  );
  t.end();
});

test('Input - commaSeparatedMask', (t) => {
  t.deepEquals(
    commaSeparatedMask.mask('hello'),
    [
      /[A-Za-z, ]/,
      /[A-Za-z, ]/,
      /[A-Za-z, ]/,
      /[A-Za-z, ]/,
      /[A-Za-z, ]/,
      /[A-Za-z, ]/,
    ],
    'Mask should return the correct pattern.'
  );
  t.end();
});

test('Input - Date Mask isValid', (t) => {
  t.true(maskEnum['Date'].isValid('10/12/2019'), 'Is valid');
  t.false(maskEnum['Date'].isValid('10/2019'), 'Is not valid');

  t.end();
});

test('Input - Month Mask isValid', (t) => {
  t.true(maskEnum['Month'].isValid('10/2019'), 'Is valid');
  t.false(maskEnum['Month'].isValid('10/12/2019'), 'Is not valid');

  t.end();
});
