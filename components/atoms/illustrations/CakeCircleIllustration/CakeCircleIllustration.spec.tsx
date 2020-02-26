import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import CakeCircleIllustration from './CakeCircleIllustration';

test('CakeCircleIllustration - renders', (t) => {
  try {
    const component = render(<CakeCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CakeCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('CakeCircleIllustration - renders the illuminated illustration', (t) => {
  try {
    const component = render(<CakeCircleIllustration illuminate={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CakeCircleIllustration component.',
    );

    t.true(component.getByTestId('illuminated'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('CakeCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<CakeCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CakeCircleIllustration component.',
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
