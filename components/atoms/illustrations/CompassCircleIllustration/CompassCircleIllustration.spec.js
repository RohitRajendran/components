import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import CompassCircleIllustration from './CompassCircleIllustration';

test('CompassCircleIllustration - renders', (t) => {
  const component = shallow(<CompassCircleIllustration />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the CompassCircleIllustration component.',
  );

  t.end();
});

test('CompassCircleIllustration - renders and animates', (t) => {
  const component = shallow(<CompassCircleIllustration isAnimated={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the animated CompassCircleIllustration component.',
  );

  t.end();
});
