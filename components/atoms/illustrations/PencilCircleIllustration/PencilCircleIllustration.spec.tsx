import {cleanup, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import PencilCircleIllustration from './PencilCircleIllustration';

test('PencilCircleIllustration - renders', (t) => {
  const component = render(<PencilCircleIllustration />);

  try {
    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PencilCircleIllustration component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
