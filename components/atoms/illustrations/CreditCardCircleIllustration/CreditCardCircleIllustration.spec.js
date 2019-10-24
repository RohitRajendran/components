import {mount, shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import CreditCardCircleIllustration from './CreditCardCircleIllustration';

test('CreditCardCircleIllustration - renders', (t) => {
  const component = shallow(
    <CreditCardCircleIllustration id="foo" fill="white" />
  );

  t.equals(
    component.find('#foo-purple').length,
    1,
    'Should load the CreditCardIllustration component.'
  );

  t.end();
});

test('CreditCardCircleIllustration - renders color', (t) => {
  const component = shallow(
    <CreditCardCircleIllustration color id="foo" fill="white" />
  );

  t.equals(
    component.find('#foo-color').length,
    1,
    'Should load the CreditCardIllustration component.'
  );

  t.end();
});

test('CreditCardCircleIllustration - renders draft', (t) => {
  const component = shallow(
    <CreditCardCircleIllustration draft id="foo" fill="white" />
  );

  t.equals(
    component.find('#foo-draft').length,
    1,
    'Should load the CreditCardIllustration component.'
  );

  t.end();
});

test('CreditCardCircleIllustration - renders illuminated', (t) => {
  const component = shallow(
    <CreditCardCircleIllustration illuminate id="foo" fill="white" />
  );

  t.equals(
    component.find('#foo-illuminated').length,
    1,
    'Should load the CreditCardIllustration component.'
  );

  t.end();
});

test('CreditCardCircleIllustration - handleClick', (t) => {
  const component = mount(<CreditCardCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
