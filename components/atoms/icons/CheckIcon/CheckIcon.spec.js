import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import CheckIcon from './CheckIcon';

test('CheckIcon - renders', (t) => {
  const component = shallow(<CheckIcon />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the CheckIcon component.'
  );

  t.end();
});
