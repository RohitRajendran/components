import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import ThumbsUpIcon from './ThumbsUpIcon';

test('ThumbsUpIcon - renders', (t) => {
  try {
    const component = render(<ThumbsUpIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ThumbsUpIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
