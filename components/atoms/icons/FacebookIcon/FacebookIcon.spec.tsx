import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import FacebookIcon from './FacebookIcon';

test('FacebookIcon - renders', (t) => {
  try {
    const component = render(<FacebookIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the FacebookIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
