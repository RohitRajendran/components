import {cleanup, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import CompassCircleIllustration from './CompassCircleIllustration';

test('CompassCircleIllustration - renders', (t) => {
  try {
    const component = render(<CompassCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CompassCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Non-animated compass');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('CompassCircleIllustration - renders and animates', (t) => {
  try {
    const component = render(<CompassCircleIllustration isAnimated />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the animated CompassCircleIllustration component.',
    );

    t.true(component.getByTestId('animated'), 'Animated compass');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
