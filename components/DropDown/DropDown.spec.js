import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import {spy, stub} from 'sinon';

import DropDown from './DropDown';

test('DropDown - renders', (t) => {
  const component = shallow(
    <DropDown
      options={[{label: 'some label', value: 'some_value'}]}
      label="My Options"
      placeholder="Find your option"
      value="some_value"
    />
  );

  t.equal(
    component.find('.mcgonagall-dropdown').length,
    1,
    'Dropdown block renders'
  );

  t.equal(
    component.find('label').text(),
    'My Options',
    'Field label is correct'
  );

  t.end();
});

test('DropDown - onChange', (t) => {
  const onChangeSpy = spy();
  const component = shallow(<DropDown value="" onChange={onChangeSpy} />);

  component.instance().onChange('testval');
  t.true(
    onChangeSpy.withArgs('testval').calledOnce,
    'should call the method with value provided'
  );
  t.true(onChangeSpy.calledOnce, 'Call method once');

  onChangeSpy.resetHistory();

  component.instance().onChange(null);
  t.true(
    onChangeSpy.withArgs('').calledOnce,
    'Call the method with an empty string'
  );
  t.true(onChangeSpy.calledOnce, 'Call method once');

  t.end();
});

test('DropDown - blur and focus', (t) => {
  const onFocusSpy = spy();
  const onBlurSpy = spy();

  const component = shallow(
    <DropDown value="" onFocus={onFocusSpy} onBlur={onBlurSpy} />
  );

  t.equal(component.state().isFocused, false, 'Start without focus');

  component.instance().onFocus();
  t.equal(component.state().isFocused, true, 'Set focus state');
  t.true(onFocusSpy.calledOnce, 'Call passed in event handler');

  component.instance().onBlur();
  t.equal(component.state().isFocused, false);
  t.true(onBlurSpy.calledOnce, 'Call passed in event handler');

  t.end();
});

test('DropDown - getOptions', async (t) => {
  const getOptionsStub = stub().resolves({
    options: [{label: 'Boy', value: 'boy'}],
  });

  const component = shallow(<DropDown value="" getOptions={getOptionsStub} />);

  t.equal(component.find('Async').length, 1, 'Render Async dropdown component');

  try {
    await component.instance().getOptions();

    t.true(getOptionsStub.calledOnce, 'Call getOptions request');
    t.deepEqual(component.state().options, {boy: 'Boy'});
  } catch (err) {
    t.fail(err.message);
  } finally {
    t.end();
  }
});
