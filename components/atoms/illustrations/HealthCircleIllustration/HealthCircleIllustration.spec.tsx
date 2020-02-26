import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import HealthCircleIllustration from './HealthCircleIllustration';

test('HealthCircleIllustration - renders', (t) => {
  try {
    const component = render(<HealthCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the HealthCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HealthCircleIllustration - renders the draft illustration', (t) => {
  try {
    const component = render(<HealthCircleIllustration draft={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GiftIllustration component.',
    );

    t.true(component.getByTestId('draft'), 'Draft illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HealthCircleIllustration - renders the color illustration', (t) => {
  try {
    const component = render(<HealthCircleIllustration color={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GiftIllustration component.',
    );

    t.true(component.getByTestId('color'), 'Color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HealthCircleIllustration - renders the illuminated illustration', (t) => {
  try {
    const component = render(<HealthCircleIllustration illuminate={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GiftIllustration component.',
    );

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HealthCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<HealthCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GiftIllustration component.',
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
