import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import LockCircleIcon from './LockCircleIcon';

test('LockCircleIcon - renders', (t) => {
  try {
    const component = render(<LockCircleIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the LockCircleIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
