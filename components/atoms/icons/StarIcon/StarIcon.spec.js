import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import StarIcon from './StarIcon';

test('StarIcon - renders', (t) => {
  const component = shallow(<StarIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the StarIcon component.',
  );

  t.end();
});
