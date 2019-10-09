import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import DollarCircleIllustration from './DollarCircleIllustration';

test('DollarCircleIllustration - renders', (t) => {
  const component = shallow(<DollarCircleIllustration id="foo" fill="white" />);

  t.equals(
    component.find('#foo-purple').length,
    1,
    'Should load the CreditCardIllustration component.'
  );

  t.end();
});

test('DollarCircleIllustration - renders color', (t) => {
  const component = shallow(
    <DollarCircleIllustration color id="foo" fill="white" />
  );

  t.equals(
    component.find('#foo-color').length,
    1,
    'Should load the CreditCardIllustration component.'
  );

  t.end();
});

test('DollarCircleIllustration - renders draft', (t) => {
  const component = shallow(
    <DollarCircleIllustration draft id="foo" fill="white" />
  );

  t.equals(
    component.find('#foo-draft').length,
    1,
    'Should load the CreditCardIllustration component.'
  );

  t.end();
});

test('DollarCircleIllustration - renders illuminated', (t) => {
  const component = shallow(
    <DollarCircleIllustration illuminate id="foo" fill="white" />
  );

  t.equals(
    component.find('#foo-illuminated').length,
    1,
    'Should load the CreditCardIllustration component.'
  );

  t.end();
});

test('DollarCircleIllustration - handleClick', (t) => {
  const component = mount(<DollarCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
