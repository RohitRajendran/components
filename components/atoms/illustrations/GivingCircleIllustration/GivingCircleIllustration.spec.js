import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import GivingCircleIllustration from './GivingCircleIllustration';

test('GivingCircleIllustration - renders', (t) => {
  const component = shallow(<GivingCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});

test('GivingCircleIllustration - handleClick', (t) => {
  const component = mount(<GivingCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
