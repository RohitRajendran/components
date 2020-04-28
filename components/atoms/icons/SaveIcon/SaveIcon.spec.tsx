import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import SaveIcon from './SaveIcon';

test('SaveIcon - renders', (t) => {
  try {
    const component = render(<SaveIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the SaveIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
