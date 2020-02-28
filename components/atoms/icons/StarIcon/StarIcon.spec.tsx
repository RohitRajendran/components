import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import StarIcon from './StarIcon';

test('StarIcon - renders', (t) => {
  try {
    const component = render(<StarIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the StarIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
