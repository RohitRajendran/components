import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import HomeCircleIllustration from './HomeCircleIllustration';

test('HomeCircleIllustration - renders', (t) => {
  try {
    const component = render(<HomeCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the HomeCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HomeCircleIllustration - renders the draft illustration', (t) => {
  try {
    const component = render(<HomeCircleIllustration draft />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the HomeCircleIllustration component.',
    );

    t.true(component.getByTestId('draft'), 'Draft illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HomeCircleIllustration - renders the color illustration', (t) => {
  try {
    const component = render(<HomeCircleIllustration color />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the HomeCircleIllustration component.',
    );

    t.true(component.getByTestId('color'), 'Color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HomeCircleIllustration - renders the illuminated illustration', (t) => {
  try {
    const component = render(<HomeCircleIllustration illuminate />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the HomeCircleIllustration component.',
    );

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HomeCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<HomeCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the HomeCircleIllustration component.',
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
