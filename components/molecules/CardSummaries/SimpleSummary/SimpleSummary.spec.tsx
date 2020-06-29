import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import SimpleSummary from './SimpleSummary';

test('SimpleSummary - Renders', (t) => {
  try {
    const {container, getByText} = render(
      <SimpleSummary
        shortTitle="This is a simpler question"
        answers={['This is the first answer', 'This is the second answer']}
        to="test"
      />,
    );

    t.equals(
      container.querySelectorAll('p').length,
      2,
      'Displays both answers',
    );

    t.true(getByText('Edit'));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('SimpleSummary - Renders with customized link', (t) => {
  try {
    const editCardText = 'Go back, sucka';
    const {getByText} = render(
      <SimpleSummary
        shortTitle="This is a simpler question"
        answers={['This is the first answer', 'This is the second answer']}
        editCardText={editCardText}
        to="test"
      />,
    );

    t.true(getByText(editCardText));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('SimpleSummary - Renders without link', (t) => {
  try {
    const {container} = render(
      <SimpleSummary
        shortTitle="This is a simpler question"
        answers={['This is the first answer', 'This is the second answer']}
      />,
    );

    t.false(
      container.querySelectorAll('Button').length,
      'Should not display edit card button',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
