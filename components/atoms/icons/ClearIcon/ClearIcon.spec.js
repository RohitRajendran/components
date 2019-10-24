import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import ClearIcon from './ClearIcon';

test('ClearIcon - renders', (t) => {
  const component = shallow(<ClearIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ClearIcon component.'
  );

  t.end();
});
