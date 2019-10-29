import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import ArrowLineIcon from './ArrowLineIcon';

test('ArrowLineIcon - renders', (t) => {
  const component = shallow(<ArrowLineIcon />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ArrowLineIcon component.',
  );

  t.end();
});
