import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import ArrowIcon from './ArrowIcon';

test('ArrowIcon - renders', (t) => {
  try {
    const component = render(<ArrowIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ArrowIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
