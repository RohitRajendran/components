import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import HealthCircleIllustration from './HealthCircleIllustration';

test('HealthCircleIllustration - renders', (t) => {
  const component = shallow(<HealthCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});

test('HealthCircleIllustration - handleClick', (t) => {
  const component = mount(<HealthCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
