import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import ArrowIcon from './ArrowIcon';

test('ArrowIcon - renders', (t) => {
  const component = shallow(<ArrowIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ArrowIcon component.',
  );

  t.end();
});
