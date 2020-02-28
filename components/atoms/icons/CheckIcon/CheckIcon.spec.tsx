import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import CheckIcon from './CheckIcon';

test('CheckIcon - renders', (t) => {
  try {
    const component = render(<CheckIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CheckIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
