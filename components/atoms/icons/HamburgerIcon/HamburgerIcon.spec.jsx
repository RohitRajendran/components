import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import HamburgerIcon from './HamburgerIcon';

test('HamburgerIcon - renders', (t) => {
  const component = shallow(<HamburgerIcon />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the HamburgerIcon component.',
  );

  t.end();
});
