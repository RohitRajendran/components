import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import TradeIcon from './TradeIcon';

test('TradeIcon - renders', (t) => {
  try {
    const component = render(<TradeIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the TradeIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
