import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import CaretIcon from './CaretIcon';

test('CaretIcon - renders', (t) => {
  try {
    const component = render(<CaretIcon fill="white" />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the CaretIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
