import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import Loader from './Loader';

test('Loader - renders', (t) => {
  const component = shallow(<Loader fill="white" />);

  t.equals(
    component.find('svg').length,
    2,
    'Should load the Loader component SVG tags.'
  );

  t.end();
});
