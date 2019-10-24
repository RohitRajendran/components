import {shallow} from 'enzyme';
import React from 'react';
import {spy} from 'sinon';
import test from 'tape';
import {colors} from '~constants/js/colors';
import BubbleDropdown from './BubbleDropdown';

test('BubbleDropdown - render', (t) => {
  const onChangeSpy = spy();
  const component = shallow(
    <BubbleDropdown
      options={[{value: 'Yo', color: 'Red'}, {value: 'Dawg'}]}
      value="Dawg"
      onChange={onChangeSpy}
    />
  );

  // The child component has a weird name for some reason
  const select = component.find('StateManager');

  t.deepEqual(
    select.prop('options'),
    [{label: 'Yo', value: 'Yo'}, {label: 'Dawg', value: 'Dawg'}],
    'Pass correct options to Select component'
  );

  t.deepEqual(
    select.prop('styles').control({}),
    {backgroundColor: colors.royal},
    'Set correct background color for each option'
  );

  t.deepEqual(
    select.prop('styles').option({}),
    {backgroundColor: colors.royal, ':active': {backgroundColor: '#4d00ba'}},
    'Set correct background color for each option'
  );

  t.deepEqual(
    select.prop('styles').menu({}),
    {backgroundColor: colors.royal},
    'Set correct background color for dropdown menu'
  );

  component.instance().onChange({value: 'Yo', label: 'Yo'});

  t.true(onChangeSpy.withArgs('Yo').calledOnce, 'Call onChange with new value');

  t.end();
});
