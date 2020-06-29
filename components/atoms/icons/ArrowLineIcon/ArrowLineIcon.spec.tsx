import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import ArrowLineIcon from './ArrowLineIcon';

test('ArrowLineIcon - renders', (t) => {
  try {
    const component = render(<ArrowLineIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ArrowLineIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
