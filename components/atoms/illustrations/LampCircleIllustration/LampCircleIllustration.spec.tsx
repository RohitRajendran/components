import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import LampCircleIllustration from './LampCircleIllustration';

test('LampCircleIllustration - renders', (t) => {
  try {
    const component = render(<LampCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the LampCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('LampCircleIllustration - renders the draft illustration', (t) => {
  try {
    const component = render(<LampCircleIllustration draft={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the LampCircleIllustration component.',
    );

    t.true(component.getByTestId('draft'), 'Draft illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('LampCircleIllustration - renders the color illustration', (t) => {
  try {
    const component = render(<LampCircleIllustration color={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the LampCircleIllustration component.',
    );

    t.true(component.getByTestId('color'), 'Color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('LampCircleIllustration - renders the illuminated illustration', (t) => {
  try {
    const component = render(<LampCircleIllustration illuminate={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the LampCircleIllustration component.',
    );

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('LampCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<LampCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the LampCircleIllustration component.',
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
