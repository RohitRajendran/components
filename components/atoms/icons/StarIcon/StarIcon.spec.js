import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import StarIcon from './StarIcon';

test('StarIcon - renders', (t) => {
  const component = shallow(<StarIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the StarIcon component.'
  );

  t.end();
});
