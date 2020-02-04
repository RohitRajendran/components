import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import {PureHouseIcon} from './HouseIcon';

test('HouseIcon - renders', (t) => {
  const component = shallow(
    <PureHouseIcon houses={10} highlight={10} isIE={false} />,
  );

  t.equals(
    component.find('svg').length,
    10,
    'Should load the HouseIcon component 10 times due to the provided houses prop.',
  );

  t.end();
});
