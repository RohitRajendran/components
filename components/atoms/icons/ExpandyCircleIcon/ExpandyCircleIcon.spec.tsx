import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import ExpandyCircleIcon from './ExpandyCircleIcon';

test('ExpandyCircleIcon - renders', (t) => {
  try {
    const component = render(<ExpandyCircleIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ExpandyCircleIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
