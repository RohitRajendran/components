import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import LampCircleIllustration from './LampCircleIllustration';

test('LampCircleIllustration - renders', (t) => {
  const component = shallow(<LampCircleIllustration />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});

test('LampCircleIllustration - renders the color illustration', (t) => {
  const component = shallow(<LampCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});

test('LampCircleIllustration - renders the color illustration', (t) => {
  const component = shallow(<LampCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});

test('LampCircleIllustration - handleClick', (t) => {
  const component = mount(<LampCircleIllustration />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
