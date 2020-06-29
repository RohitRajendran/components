import {cleanup, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import MedicareCircleIllustration from './MedicareCircleIllustration';

test('MedicareCircleIllustration - renders', (t) => {
  const component = render(<MedicareCircleIllustration fill="white" />);

  try {
    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the MedicareCircleIllustration component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
