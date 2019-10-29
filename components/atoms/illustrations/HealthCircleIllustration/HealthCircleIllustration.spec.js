import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import HealthCircleIllustration from './HealthCircleIllustration';

test('HealthCircleIllustration - renders', (t) => {
  const component = shallow(<HealthCircleIllustration />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the HealthIllustration component.',
  );

  t.end();
});

test('HealthCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<HealthCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the HealthIllustration component.',
  );

  t.end();
});

test('HealthCircleIllustration - renders the color illustration', (t) => {
  const component = shallow(<HealthCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the HealthIllustration component.',
  );

  t.end();
});

test('HealthCircleIllustration - handleClick', (t) => {
  const component = mount(<HealthCircleIllustration />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.',
  );

  t.end();
});
