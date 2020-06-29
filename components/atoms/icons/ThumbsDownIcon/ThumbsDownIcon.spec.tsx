import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import ThumbsDownIcon from './ThumbsDownIcon';

test('ThumbsDownIcon - renders', (t) => {
  try {
    const component = render(<ThumbsDownIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ThumbsDownIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
