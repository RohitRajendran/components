import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import StarCircleIcon from './StarCircleIcon';

test('StarCircleIcon - renders', (t) => {
  try {
    const component = render(<StarCircleIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Render the StarCircleIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
