import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import ErrorFlagIcon from './ErrorFlagIcon';

test('ErrorFlagIcon - renders', (t) => {
  const component = shallow(<ErrorFlagIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ErrorFlagIcon component.',
  );

  t.end();
});
