import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import TrashIcon from './TrashIcon';

test('TrashIcon - renders', (t) => {
  try {
    const component = render(<TrashIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the TrashIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
