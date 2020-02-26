import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import CreditCardCircleIllustration from './CreditCardCircleIllustration';

test('CreditCardCircleIllustration - renders', (t) => {
  try {
    const component = render(<CreditCardCircleIllustration id="foo" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CreditCardCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('CreditCardCircleIllustration - renders color', (t) => {
  try {
    const component = render(<CreditCardCircleIllustration color id="foo" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CreditCardCircleIllustration component.',
    );

    t.true(component.getByTestId('color'), 'Color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('CreditCardCircleIllustration - renders draft', (t) => {
  try {
    const component = render(<CreditCardCircleIllustration draft id="foo" />);
    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CreditCardCircleIllustration component.',
    );

    t.true(component.getByTestId('draft'), 'Draft illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('CreditCardCircleIllustration - renders illuminated', (t) => {
  try {
    const component = render(
      <CreditCardCircleIllustration illuminate id="foo" />,
    );

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CreditCardCircleIllustration component.',
    );

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('CreditCardCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<CreditCardCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CreditCardCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');

    fireEvent.click(getByTestId(component.container, 'default'));

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
