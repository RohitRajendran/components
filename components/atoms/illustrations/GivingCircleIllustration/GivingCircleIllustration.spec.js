import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import GivingCircleIllustration from './GivingCircleIllustration';

test('GivingCircleIllustration - renders', (t) => {
  const component = shallow(<GivingCircleIllustration />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the GivingCircleIllustration component.'
  );

  t.end();
});

test('GivingCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<GivingCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the GivingCircleIllustration component.'
  );

  t.end();
});

test('GivingCircleIllustration - renders the color illustration', (t) => {
  const component = shallow(<GivingCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the GivingCircleIllustration component.'
  );

  t.end();
});

test('GivingCircleIllustration - handleClick', (t) => {
  const component = mount(<GivingCircleIllustration />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
