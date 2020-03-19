import {cleanup, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import Portal from './Portal';

test('Portal - renders', (t) => {
  try {
    // Removes items from the document body so this test run is more accurate.
    document.getElementsByTagName('html')[0].innerHTML = '';

    const component = render(
      <Portal className="test-container">
        <span>Hello</span>
      </Portal>,
      {container: document.body},
    );

    t.equals(
      component.container.querySelectorAll('.uic--portal-container').length,
      1,
      'Should load the portal container.',
    );

    t.true(component.getByText('Hello'));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
