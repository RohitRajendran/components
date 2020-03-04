import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import CloseIcon from './CloseIcon';

test('CloseIcon - renders', (t) => {
  try {
    const component = render(<CloseIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CloseIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
