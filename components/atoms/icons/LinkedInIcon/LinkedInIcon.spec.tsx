import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import LinkedInIcon from './LinkedInIcon';

test('LinkedInIcon - renders', (t) => {
  try {
    const component = render(<LinkedInIcon />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the LinkedInIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('LinkedInIcon - renders full version', (t) => {
  try {
    const component = render(<LinkedInIcon isFull={true} />);

    t.equals(
      component.container.querySelectorAll('path').length,
      9,
      'Should load the full version of the LinkedInIcon component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
