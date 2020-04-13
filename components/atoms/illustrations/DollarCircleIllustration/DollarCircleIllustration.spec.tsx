import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import DollarCircleIllustration from './DollarCircleIllustration';

test('DollarCircleIllustration - renders', (t) => {
  try {
    const component = render(<DollarCircleIllustration id="foo" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the DollarCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('DollarCircleIllustration - renders color', (t) => {
  try {
    const component = render(<DollarCircleIllustration color />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the DollarCircleIllustration component.',
    );

    t.true(component.getByTestId('color'), 'Color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('DollarCircleIllustration - renders draft', (t) => {
  try {
    const component = render(<DollarCircleIllustration draft />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the DollarCircleIllustration component.',
    );

    t.true(component.getByTestId('draft'), 'Draft illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('DollarCircleIllustration - renders illuminated', (t) => {
  try {
    const component = render(<DollarCircleIllustration illuminate />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the DollarCircleIllustration component.',
    );

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('DollarCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<DollarCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the DollarCircleIllustration component.',
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
