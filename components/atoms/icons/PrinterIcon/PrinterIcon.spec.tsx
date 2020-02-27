import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import PrinterIcon from './PrinterIcon';

test('PrinterIcon - renders', (t) => {
  try {
    const component = render(<PrinterIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PrinterIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
