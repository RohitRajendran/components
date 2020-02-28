import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import ErrorFlagIcon from './ErrorFlagIcon';

test('ErrorFlagIcon - renders', (t) => {
  try {
    const component = render(<ErrorFlagIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ErrorFlagIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
