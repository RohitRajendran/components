import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import CarCircleIllustration from './CarCircleIllustration';

test('CarCircleIllustration - renders', (t) => {
  try {
    const component = render(<CarCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CarCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('CarCircleIllustration - renders the draft illustration', (t) => {
  try {
    const component = render(<CarCircleIllustration draft />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CarCircleIllustration component.',
    );

    t.true(component.getByTestId('draft'), 'Draft illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('CarCircleIllustration - renders the colored illustration', (t) => {
  try {
    const component = render(<CarCircleIllustration color />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CarCircleIllustration component.',
    );

    t.true(component.getByTestId('color'), 'Color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('CarCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<CarCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CarCircleIllustration component.',
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
