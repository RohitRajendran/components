import {mount} from 'enzyme';
import React from 'react';
import {spy, stub} from 'sinon';
import test from 'tape';
import * as DetectBrowser from '~components/utilities/DetectBrowser/DetectBrowser';
import Input, {getDeepestInputElement} from './Input';
import * as InputUtils from './Input.util';

test('Input - Renders props as attributes on the input', (t) => {
  t.plan(9);
  const onChangeSpy = spy();

  const component = mount(
    <Input
      name="fancy_input"
      type="text"
      value="VAL"
      placeholder="$0"
      label="Value"
      pattern="^\d{5}$"
      maxLength={5}
      onChange={onChangeSpy}
    />,
  );
  const componentInputProps = component.find('input').props();

  t.equal(componentInputProps.name, 'fancy_input');
  t.equal(componentInputProps.value, 'VAL');
  t.equal(componentInputProps.type, 'text');
  t.equal(componentInputProps.placeholder, '$0');
  t.equal(componentInputProps['aria-label'], 'Value (Optional)');
  t.equal(componentInputProps.required, undefined);
  t.equal(componentInputProps.pattern, '^\\d{5}$');
  t.equal(componentInputProps.maxLength, 5);

  componentInputProps.onChange({target: {value: 5}});
  t.deepEquals(onChangeSpy.args[0], ['fancy_input', 5]);
});

test('Input - multiline', (t) => {
  const component = mount(
    <Input
      name="fancy_input"
      type="text"
      value={'1\n2\n3'}
      placeholder="$0"
      label="Value"
      multiline
    />,
  );

  t.equal(component.find('input').length, 0, 'Do not render input element');
  t.equal(component.find('textarea').length, 1, 'Render textarea element');

  const componentInputProps = component.find('textarea').props();

  t.equal(componentInputProps.name, 'fancy_input');
  t.equal(componentInputProps.value, '1\n2\n3');
  t.equal(componentInputProps.type, 'text');
  t.equal(componentInputProps.placeholder, '$0');
  t.equal(componentInputProps['aria-label'], 'Value (Optional)');
  t.equal(componentInputProps.required, undefined);

  t.end();
});

test('Input - required field error', (t) => {
  const onChangeSpy = spy();

  const component = mount(
    <Input
      name="fancy_input"
      type="text"
      value=""
      placeholder="$0"
      label="Value"
      pattern="^\d{5}$"
      maxLength={5}
      onChange={onChangeSpy}
      required
      showRequiredError={true}
    />,
  );

  t.equal(
    component.find('.uic--error').length,
    1,
    'Shows dropdown error state',
  );

  t.equal(
    component.find('.uic--validation-error').text(),
    'Required Field',
    'Shows required field error message',
  );

  t.end();
});

test('Input - Renders a masked input if mask is provided', (t) => {
  const component = mount(
    <Input
      name="fancy_input"
      label="Amount"
      type="text"
      value="05/01/1980"
      mask="Date"
    />,
  );

  t.equals(
    component
      .find('input')
      .first()
      .prop('placeholder'),
    'MM/DD/YYYY',
    'Uses default mask placeholder',
  );
  t.equals(component.find('t').length, 1, 'should render MaskedInput');
  t.end();
});

test('Input - Creates error when currency has no onChange function', (t) => {
  t.plan(1);
  t.throws(() =>
    mount(
      <Input
        name="test"
        label="Amount"
        type="text"
        value="100,000"
        mask="Currency"
      />,
    ),
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
    />,
  );

  t.equals(
    component.find('.uic--validation-error').text(),
    'This is not valid!',
    'Should render the invalid message.',
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
    />,
  );

  t.equals(
    component.find('.uic--description').text(),
    'This is the description',
    'Should render the description.',
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
    />,
  );

  t.equals(
    component2.find('.test--desc').text(),
    'Node description',
    'Should render the description node.',
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
    />,
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
    />,
  );

  component.instance().toggleFocus();

  t.equals(component.state().isActive, true, 'Should toggle the focus state.');

  t.end();
});

test('Input - Correctly toggles focus with explanation', (t) => {
  const component = mount(
    <Input
      name="input_name"
      label="Amount"
      type="text"
      value="20"
      placeholder="some placeholder"
      mask="PercentageWithDecimal"
      description="This is the description"
      explanation="Montezuma is the greatest cat in the world"
    />,
  );

  window.scrollTo = stub();
  // Tests the scrolling logic.
  const isInViewportStub = stub(InputUtils, 'isInViewport').returns(false);

  component.instance().toggleFocus();

  t.equals(component.state().isActive, true, 'Should toggle the focus state.');

  t.true(window.scrollTo.callCount);

  isInViewportStub.restore();

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
    />,
  );

  component.find('input').simulate('blur');

  t.equals(
    component.state().isActive,
    true,
    'Should toggle the focus state when something is blurred even with validateOnBlur toggled.',
  );

  t.end();
});

test('Input - isInViewport', (t) => {
  const element = document.createElement('div');

  t.false(InputUtils.isInViewport(element, 500));
  t.true(InputUtils.isInViewport(element));
  t.end();
});

test('Input - isInViewport - no browser environment', (t) => {
  const isWindowDefinedStub = stub(DetectBrowser, 'isWindowDefined').returns(
    false,
  );
  const element = document.createElement('div');

  t.false(InputUtils.isInViewport(element, 500));

  isWindowDefinedStub.restore();
  t.end();
});

test('Input - Testing required and validate function', (t) => {
  const component = mount(
    <Input
      name="fancy_input"
      label="Amount"
      type="text"
      value=""
      placeholder="some placeholder"
      required={false}
      validate={(input) => {
        console.warn('HERE');
        if (input.length < 4) {
          return '';
        }

        return 'Invalid small string!';
      }}
    />,
  );

  t.equal(
    component.state().validationErrorMessage,
    '',
    'Should be an empty validation error message',
  );
  t.equal(
    component.find('.uic--validatiion-error').length,
    0,
    'There shoud be no validation error message',
  );
  component.unmount();

  const component2 = mount(
    <Input
      name="fancy_input"
      label="Amount"
      type="text"
      value="1234"
      placeholder="some placeholder"
      validate={(input) => {
        if (input.length < 4) {
          return '';
        }

        return 'Invalid small string!';
      }}
    />,
  );

  t.equal(
    component2.state().validationErrorMessage,
    '',
    'Should trigger the correct error message',
  );

  t.end();
});
