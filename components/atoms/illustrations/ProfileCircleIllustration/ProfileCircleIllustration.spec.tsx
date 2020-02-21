import {cleanup, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import ProfileCircleIllustration from './ProfileCircleIllustration';

test('ProfileCircleIllustration - renders', (t) => {
  const component = render(<ProfileCircleIllustration fill="white" />);

  try {
    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ProfileCircleIllustration component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
