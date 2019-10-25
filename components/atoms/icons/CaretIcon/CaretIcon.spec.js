import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import CaretIcon from './CaretIcon';

test('CaretIcon - renders', (t) => {
  const component = shallow(<CaretIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the CaretIcon component.'
  );

  t.end();
});
