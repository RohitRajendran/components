import {shallow, mount} from 'enzyme';
import React from 'react';
import test from 'tape';
import {stub} from 'sinon';
import TooltipInput from './TooltipInput';

test('TooltipInput - renders', (t) => {
  const props = {
    onConfirm: stub(),
    label: 'Hello',
    config: {
      name: 'Hello',
      value: '123',
      label: 'Input name',
      onChange: () => true,
    },
  };

  const component = shallow(<TooltipInput {...props} />);

  t.equals(
    component.find('Tooltip').length,
    1,
    'Should load the TooltipInput component.'
  );

  t.end();
});

test('TooltipInput - handleCancelClick', (t) => {
  const props = {
    onConfirm: stub(),
    label: 'Hello',
    config: {
      name: 'Hello',
      value: '123',
      label: 'Input name',
      onChange: () => true,
    },
  };

  const component = mount(<TooltipInput {...props} />);
  component.instance().handleCancelClick();
  t.pass();
  t.end();
});

test('TooltipInput - handleConfirmClick', (t) => {
  const props = {
    onConfirm: stub(),
    label: 'Hello',
    clearStateOnConfirm: true,
    config: {
      name: 'Hello',
      value: '123',
      label: 'Input name',
      onChange: () => true,
    },
  };
  const component = mount(<TooltipInput {...props} />);

  component.instance().handleConfirmClick();

  t.equals(
    props.onConfirm.callCount,
    1,
    'Should call the handle confirm function.'
  );

  t.end();
});

test('TooltipInput - handleRemoveClick', (t) => {
  const props = {
    onConfirm: stub(),
    onRemove: stub(),
    label: 'Hello',
    config: {
      name: 'Hello',
      value: '123',
      label: 'Input name',
      onChange: () => true,
    },
  };
  const component = mount(<TooltipInput {...props} />);

  component.instance().handleRemoveClick();

  t.equals(
    props.onRemove.callCount,
    1,
    'Should call the handle remove function.'
  );

  t.end();
});

test('TooltipInput - handleKeyPress', (t) => {
  const props = {
    onConfirm: stub(),
    onRemove: stub(),
    label: 'Hello',
    config: {
      name: 'Hello',
      value: '123',
      label: 'Input name',
      onChange: () => true,
    },
  };
  const component = mount(<TooltipInput {...props} />);

  t.equals(
    component.instance().handleKeyPress({
      keyCode: 13,
    }),
    false,
    'Should return false.'
  );

  t.equals(
    component.instance().handleKeyPress({
      keyCode: 50,
    }),
    true,
    'Should return true.'
  );

  t.end();
});

test('TooltipInput - handleInputChange', (t) => {
  const props = {
    onConfirm: stub(),
    onRemove: stub(),
    label: 'Hello',
    config: {
      name: 'Hello',
      value: '123',
      label: 'Input name',
      onChange: () => true,
    },
  };
  const component = mount(<TooltipInput {...props} />);

  component.instance().handleInputChange(null, 'value');

  t.equals(
    component.state().tooltipInput,
    'value',
    'Should update the input state.'
  );

  t.end();
});

test('TooltipInput - clearInputState', (t) => {
  const props = {
    onConfirm: stub(),
    onRemove: stub(),
    label: 'Hello',
    config: {
      name: 'Hello',
      value: '123',
      label: 'Input name',
      onChange: () => true,
    },
  };
  const component = mount(<TooltipInput {...props} />);

  component.instance().clearInputState();

  t.equals(component.state().tooltipInput, '', 'Should clear the input state.');

  t.end();
});

test('TooltipInput - onTooltipClick', (t) => {
  const props = {
    onConfirm: stub(),
    onRemove: stub(),
    label: 'Hello',
    config: {
      name: 'Hello',
      value: '123',
      label: 'Input name',
      onChange: () => true,
    },
  };
  const component = mount(<TooltipInput {...props} />);
  const event = {
    stopPropagation: stub(),
  };

  component.instance().onTooltipClick(event);

  t.pass();

  t.end();
});
