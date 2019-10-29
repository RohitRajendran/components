import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import DiceIcon from './DiceIcon';

test('DiceIcon - renders', (t) => {
  const component = shallow(<DiceIcon />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the DiceIcon component.',
  );

  t.end();
});
