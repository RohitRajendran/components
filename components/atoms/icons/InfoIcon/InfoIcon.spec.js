import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import InfoIcon from './InfoIcon';

test('InfoIcon - renders', (t) => {
  const component = shallow(<InfoIcon fill="white" />);

  t.equals(component.find('svg').length, 1, 'Render the InfoIcon component.');

  t.end();
});
