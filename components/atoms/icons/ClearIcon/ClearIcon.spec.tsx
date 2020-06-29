import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import ClearIcon from './ClearIcon';

test('ClearIcon - renders', (t) => {
  try {
    const component = render(<ClearIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ClearIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
