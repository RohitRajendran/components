import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import MedicareCircleIllustration from './MedicareCircleIllustration';

test('MedicareCircleIllustration - renders', (t) => {
  const component = shallow(<MedicareCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the MedicareCircleIllustration component.'
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
