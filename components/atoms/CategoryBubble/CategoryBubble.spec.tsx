import {cleanup, render, getByText} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import CategoryBubble from './CategoryBubble';

test('CategoryBubble - render', (t) => {
  try {
    const component = render(<CategoryBubble label="Blogs" color="#b30052" />);

    t.true(
      getByText(component.container, 'Blogs'),
      'Should show the correct text.',
    );

    t.equals(
      getByText(component.container, 'Blogs').style.backgroundColor,
      'rgb(179, 0, 82)',
      'The color should be correct.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
