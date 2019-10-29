import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import ProfileCircleIllustration from './ProfileCircleIllustration';

test('ProfileCircleIllustration - renders', (t) => {
  const component = shallow(<ProfileCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the ProfileCircleIllustration component.',
  );

  t.end();
});

test('ProfileCircleIllustration - handleClick', (t) => {
  const component = mount(<ProfileCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.',
  );

  t.end();
});
