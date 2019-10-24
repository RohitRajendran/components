import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import StarCircleIcon from './StarCircleIcon';

test('StarCircleIcon - renders', (t) => {
  const component = shallow(<StarCircleIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Render the StarCircleIcon component.'
  );

  t.end();
});
