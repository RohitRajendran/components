import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import AdminIcon from './AdminIcon';

test('AdminIcon - renders', (t) => {
  try {
    const component = render(<AdminIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the AdminIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
