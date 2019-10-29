import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import PlantCircleIllustration from './PlantCircleIllustration';

test('PlantCircleIllustration - renders', (t) => {
  const component = shallow(<PlantCircleIllustration id="foo" fill="white" />);

  t.equals(
    component.find('#foo-purple').length,
    1,
    'Should load the PlantIllustration component.',
  );

  t.end();
});

test('PlantCircleIllustration - renders color', (t) => {
  const component = shallow(
    <PlantCircleIllustration color id="foo" fill="white" />,
  );

  t.equals(
    component.find('#foo-color').length,
    1,
    'Should load the PlantIllustration component.',
  );

  t.end();
});

test('PlantCircleIllustration - renders draft', (t) => {
  const component = shallow(
    <PlantCircleIllustration draft id="foo" fill="white" />,
  );

  t.equals(
    component.find('#foo-draft').length,
    1,
    'Should load the PlantIllustration component.',
  );

  t.end();
});

test('PlantCircleIllustration - renders illuminated', (t) => {
  const component = shallow(
    <PlantCircleIllustration illuminate id="foo" fill="white" />,
  );

  t.equals(
    component.find('#foo-illuminated').length,
    1,
    'Should load the PlantIllustration component.',
  );

  t.end();
});

test('PlantCircleIllustration - handleClick', (t) => {
  const component = mount(<PlantCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.',
  );

  t.end();
});
