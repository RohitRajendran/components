import {cleanup, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import AccountCircleIllustration from './AccountCircleIllustration';

test('AccountCircleIllustration - renders', (t) => {
  const component = render(<AccountCircleIllustration fill="white" />);

  try {
    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the AccountIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
