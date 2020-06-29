import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import PlantCircleIllustration from './PlantCircleIllustration';

test('PlantCircleIllustration - renders', (t) => {
  try {
    const component = render(<PlantCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PlantCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('PlantCircleIllustration - renders the draft illustration', (t) => {
  try {
    const component = render(<PlantCircleIllustration draft />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PlantCircleIllustration component.',
    );

    t.true(component.getByTestId('draft'), 'Draft illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('PlantCircleIllustration - renders the color illustration', (t) => {
  try {
    const component = render(<PlantCircleIllustration color />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PlantCircleIllustration component.',
    );

    t.true(component.getByTestId('color'), 'Color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('PlantCircleIllustration - renders the illuminated illustration', (t) => {
  try {
    const component = render(<PlantCircleIllustration illuminate />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PlantCircleIllustration component.',
    );

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('PlantCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<PlantCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PlantCircleIllustration component.',
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
