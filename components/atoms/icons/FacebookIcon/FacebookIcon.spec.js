import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import FacebookIcon from './FacebookIcon';

test('FacebookIcon - renders', (t) => {
  const component = shallow(<FacebookIcon />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the FacebookIcon component.',
  );

  t.end();
});
