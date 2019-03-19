import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import ArrowIcon from './ArrowIcon';

test('ArrowIcon - renders', (t) => {
  const component = shallow(<ArrowIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ArrowIcon component.'
  );

  t.end();
});
