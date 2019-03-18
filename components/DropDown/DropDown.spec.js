import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
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
  const component = shallow(
    <DropDown name="test" value="" onChange={onChangeSpy} />
  );

  component.instance().onChange({value: 'testval', label: 'thing'});
  t.true(
    onChangeSpy.withArgs('test', 'testval').calledOnce,
    'should call the method with value provided'
  );
  t.true(onChangeSpy.calledOnce, 'Call method once');

  onChangeSpy.resetHistory();

  component.instance().onChange(null);
  t.true(
    onChangeSpy.withArgs('test', '').calledOnce,
    'Call the method with an empty string'
  );
  t.true(onChangeSpy.calledOnce, 'Call method once');

  onChangeSpy.resetHistory();

  const component2 = shallow(
    <DropDown name="test" value="" onChange={onChangeSpy} getOptions={true} />
  );

  component2.instance().onChange({value: 'testval', label: 'thing'});

  t.equals(
    onChangeSpy.callCount,
    1,
    'Should fire provided props function when getOptions is present also.'
  );

  t.end();
});

test('DropDown - Blur and Focus', (t) => {
  const onFocusSpy = spy();
  const onBlurSpy = spy();

  const component = shallow(
    <DropDown name="test" value="" onFocus={onFocusSpy} onBlur={onBlurSpy} />
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
  const props = {
    getOptions: stub().resolves({
      options: [{label: 'Boy', value: 'boy'}],
    }),
    value: '',
  };

  const component = shallow(<DropDown {...props} />);

  t.equal(component.find('Async').length, 1, 'Render Async dropdown component');

  try {
    await component.instance().getOptions();

    t.true(props.getOptions.calledOnce, 'Call getOptions request');
    t.deepEqual(component.state().options, {boy: 'Boy'});
  } catch (err) {
    t.fail(err.message);
  } finally {
    t.end();
  }
});

test('DropDown - validationResult', (t) => {
  t.plan(2);

  /** Validator function.
   * @param {object} obj - The value of the dropdown.
   * @returns {object} - Returns an object with the isValid key.
   **/
  function validator(obj) {
    if (obj.value === 'invalid') {
      return {isValid: false};
    } else {
      return {isValid: true};
    }
  }

  const props = {
    validate: [validator],
    options: [
      {
        value: 'valid',
        label: 'Montezuma is the best cat',
      },
      {
        value: 'invalid',
        label: 'Montezuma is not the best cat',
      },
    ],
    value: {
      value: 'invalid',
      label: 'Montezuma is not the best cat',
    },
  };

  const component = shallow(<DropDown {...props} />);

  t.deepEqual(
    component.instance().validationResults(props.validate),
    {isValid: false},
    'Should not be valid.'
  );

  const props2 = {
    validate: [validator],
    options: [
      {
        value: 'valid',
        label: 'Montezuma is the best cat',
      },
      {
        value: 'invalid',
        label: 'Montezuma is not the best cat',
      },
    ],
    value: {
      value: 'valid',
      label: 'Montezuma is the best cat',
    },
  };

  const component2 = shallow(<DropDown {...props2} />);

  t.deepEqual(
    component2.instance().validationResults(props2.validate),
    // eslint-disable-next-line no-undefined
    undefined,
    'Should return undefined if valid.'
  );
});

test('DropDown - componentDidUpdate', (t) => {
  const prevProps = {
    options: [{label: 'some label', value: 'some_value'}],
    label: 'My Options',
    placeholder: 'Find your option',
    value: 'some_old_value',
  };

  const props = {
    options: [{label: 'some label', value: 'some_value'}],
    label: 'My Options',
    placeholder: 'Find your option',
    value: 'some_value',
  };

  const component = mount(<DropDown {...props} />);

  component.setState({touched: true});
  component.instance().componentDidUpdate(prevProps);

  t.deepEqual(
    component.state(),
    {
      options: {},
      isFocused: false,
      touched: true,
      isValid: true,
      validationMessage: '',
    },
    'Should validate on updates.'
  );

  t.end();
});

test('DropDown - componentDidUpdate', (t) => {
  t.plan(2);

  const props = {
    options: [
      {label: 'some label', value: 'some_value'},
      {label: 'another label', value: 'some_other_value'},
    ],
    label: 'My Options',
    placeholder: 'Find your option',
    value: 'some_other_value',
  };

  const component = mount(<DropDown {...props} />);

  t.deepEqual(
    component.instance().getCurrentOption(props.options),
    [{label: 'another label', value: 'some_other_value'}],
    'Should get the currently selected option.'
  );

  const props2 = {
    options: [],
    label: 'My Options',
    placeholder: 'Find your option',
    value: 'montezuma',
    getOptions: stub(),
  };

  const component2 = mount(<DropDown {...props2} />);

  component2.setState({
    options: {
      montezuma: 'Montezuma',
    },
  });

  t.deepEqual(
    component2.instance().getCurrentOption(props2.options),
    [{label: 'Montezuma', value: 'montezuma'}],
    'Should get the currently selected option from state.'
  );
});
