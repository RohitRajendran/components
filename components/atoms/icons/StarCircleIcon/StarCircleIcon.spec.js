import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
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
