import {cleanup, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import Loader from './Loader';

test('Loader - renders', (t) => {
  try {
    const component = render(<Loader />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      2,
      'Should load the Loader component SVG tags.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
