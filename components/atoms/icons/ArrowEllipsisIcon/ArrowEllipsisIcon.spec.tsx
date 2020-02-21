import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import ArrowEllipsisIcon from './ArrowEllipsisIcon';

test('ArrowEllipsisIcon - renders', (t) => {
  try {
    const component = render(<ArrowEllipsisIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ArrowEllipsisIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
