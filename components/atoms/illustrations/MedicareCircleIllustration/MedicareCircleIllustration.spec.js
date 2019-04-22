import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import MedicareCircleIllustration from './MedicareCircleIllustration';

test('MedicareCircleIllustration - renders', (t) => {
  const component = shallow(<MedicareCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});

test('MedicareCircleIllustration - handleClick', (t) => {
  const component = mount(<MedicareCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
