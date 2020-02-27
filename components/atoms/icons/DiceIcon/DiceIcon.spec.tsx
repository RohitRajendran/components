import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import DiceIcon from './DiceIcon';

test('DiceIcon - renders', (t) => {
  try {
    const component = render(<DiceIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the DiceIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
