import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import HealthMeterCircleIllustration from './HealthMeterCircleIllustration';

test('HealthMeterCircleIllustration - renders', (t) => {
  const component = shallow(<HealthMeterCircleIllustration />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the HealthMeterCircleIllustration component.'
  );

  t.end();
});

test('HealthMeterCircleIllustration - renders the draft illustration', (t) => {
  const component = shallow(<HealthMeterCircleIllustration draft={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the HealthMeterCircleIllustration component.'
  );

  t.end();
});

test('HealthMeterCircleIllustration - renders the color illustration', (t) => {
  const component = shallow(<HealthMeterCircleIllustration color={true} />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the HealthMeterCircleIllustration component.'
  );

  t.end();
});

test('HealthMeterCircleIllustration - handleClick', (t) => {
  const component = mount(<HealthMeterCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
