import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import ExpandyCircleIcon from './ExpandyCircleIcon';

test('ExpandyCircleIcon - renders', (t) => {
  const component = shallow(<ExpandyCircleIcon fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ExpandyCircleIcon component.'
  );

  t.end();
});
