import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import TwitterIcon from './TwitterIcon';

test('TwitterIcon - renders', (t) => {
  try {
    const component = render(<TwitterIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the TwitterIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
