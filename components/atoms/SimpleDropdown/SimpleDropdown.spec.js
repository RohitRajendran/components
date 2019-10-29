import {mount} from 'enzyme';
import React from 'react';
import {spy} from 'sinon';
import test from 'tape';
import SimpleDropdown from './SimpleDropdown';

test('SimpleDropdown - render', (t) => {
  const onChangeSpy = spy();
  const component = mount(
    <SimpleDropdown
      options={['Yo', 'Red', 'Dawg']}
      value="Dawg"
      onChange={onChangeSpy}
    />,
  );

  // The child component has a weird name for some reason
  const select = component.find('StateManager');

  t.deepEqual(
    select.prop('options'),
    [
      {label: 'Yo', value: 'Yo'},
      {label: 'Red', value: 'Red'},
      {label: 'Dawg', value: 'Dawg'},
    ],
    'Pass correct options to Select component',
  );

  component.instance().onChange({value: 'Yo', label: 'Yo'});

  t.true(onChangeSpy.withArgs('Yo').calledOnce, 'Call onChange with new value');

  t.end();
});
