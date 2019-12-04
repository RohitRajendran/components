import {shallow} from 'enzyme';
import test from 'tape';
const sinon = require('sinon')

/* This order is important. useState must be stubbed before we import the component.
 We also need to require React instead of importing it. */
const React = require('react');
const setStateStub = sinon.stub();

sinon.stub(React, 'useState').callsFake(() => {
  // The default state value is on the left, and the setState stub is on the right.
  return [false, setStateStub];
});

/* The component must be imported using require().default instead of import. */
const PlantCircleIllustration = require('./PlantCircleIllustration').default;

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
  const component = shallow(<PlantCircleIllustration id="foo" fill="white" />);

  component.simulate('click');

  t.equals(setStateStub.args[0][0], true, 'Should toggle illuminated to true.');

  t.end();
});
