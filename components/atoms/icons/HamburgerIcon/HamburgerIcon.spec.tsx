import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import HamburgerIcon from './HamburgerIcon';

test('HamburgerIcon - renders', (t) => {
  try {
    const component = render(<HamburgerIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the HamburgerIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
