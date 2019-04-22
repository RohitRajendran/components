import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import SushiCircleIllustration from './SushiCircleIllustration';

test('SushiCircleIllustration - renders', (t) => {
  const component = shallow(<SushiCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});

test('SushiCircleIllustration - handleClick', (t) => {
  const component = mount(<SushiCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
