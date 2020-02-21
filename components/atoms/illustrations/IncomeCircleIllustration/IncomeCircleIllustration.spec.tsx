import {cleanup, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import IncomeCircleIllustration from './IncomeCircleIllustration';

test('IncomeCircleIllustration - renders', (t) => {
  const component = render(<IncomeCircleIllustration fill="white" />);

  try {
    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the IncomeCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
