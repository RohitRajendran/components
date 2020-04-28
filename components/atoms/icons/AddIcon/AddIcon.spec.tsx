import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import AddIcon from './AddIcon';

test('AddIcon - renders', (t) => {
  try {
    const component = render(<AddIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the AddIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
