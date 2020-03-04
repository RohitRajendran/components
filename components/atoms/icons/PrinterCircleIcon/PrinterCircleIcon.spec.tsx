import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import PrinterCircleIcon from './PrinterCircleIcon';

test('PrinterCircleIcon - renders', (t) => {
  try {
    const component = render(<PrinterCircleIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PrinterCircleIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
