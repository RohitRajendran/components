import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import InfoIcon from './InfoIcon';

test('InfoIcon - renders', (t) => {
  try {
    const component = render(<InfoIcon iconFill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Render the InfoIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
