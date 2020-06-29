import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import FormSummary from './FormSummary';

test('FormSummary - Renders one answer', (t) => {
  try {
    const {getByText, container} = render(
      <FormSummary
        shortTitle="This is a simpler question"
        answerGroups={[
          {
            answers: [
              {label: 'From', value: 'Bank of America Checking…8765'},
              {label: 'To', value: 'United Income Brokerage…2653'},
              {label: 'Amount', value: '$3,000.00'},
            ],
          },
        ]}
        editCard={(() => null) as React.MouseEventHandler}
      />,
    );

    t.true(getByText('This is a simpler question'));

    t.equals(
      container.querySelectorAll('.uic--striped').length,
      0,
      'Should not add striped class',
    );

    t.equals(
      container.querySelectorAll('h3').length,
      0,
      'Should not show group name',
    );

    t.equals(
      container.querySelectorAll('.uic--card-summary-answer').length,
      3,
      'Should show 3 answers',
    );
    t.true(getByText('Edit'), 'Should have edit card button');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('FormSummary - Renders one answer with a to link', (t) => {
  try {
    const {getByText, container} = render(
      <FormSummary
        shortTitle="This is a simpler question"
        answerGroups={[
          {
            answers: [
              {label: 'From', value: 'Bank of America Checking…8765'},
              {label: 'To', value: 'United Income Brokerage…2653'},
              {label: 'Amount', value: '$3,000.00'},
            ],
          },
        ]}
        to="hello"
      />,
    );

    t.true(getByText('This is a simpler question'));

    t.equals(
      container.querySelectorAll('.uic--striped').length,
      0,
      'Should not add striped class',
    );

    t.equals(
      container.querySelectorAll('h3').length,
      0,
      'Should not show group name',
    );

    t.equals(
      container.querySelectorAll('.uic--card-summary-answer').length,
      3,
      'Should show 3 answers',
    );
    t.true(getByText('Edit'), 'Should have edit card button');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('FormSummary - Renders one answer without edit card button', (t) => {
  try {
    const {getByText, container} = render(
      <FormSummary
        shortTitle="This is a simpler question"
        answerGroups={[
          {
            key: 'group0',
            groupName: 'group',
            answers: [
              {label: 'From', value: 'Bank of America Checking…8765'},
              {label: 'To', value: 'United Income Brokerage…2653'},
              {label: 'Amount', value: '$3,000.00'},
            ],
          },
          {
            groupName: 'group',
            answers: [
              {label: 'From', value: 'Bank of America Checking…8765'},
              {label: 'To', value: 'United Income Brokerage…2653'},
              {label: 'Amount', value: '$3,000.00'},
            ],
          },
        ]}
      />,
    );

    t.true(getByText('This is a simpler question'));

    t.equals(
      container.querySelectorAll('.uic--card-summary-group').length,
      2,
      'Should show one summary group',
    );
    t.equals(
      container.querySelectorAll('.uic--striped').length,
      2,
      'Should have striped class',
    );
    t.equals(
      container.querySelectorAll('h3').length,
      2,
      'Should show group names',
    );
    t.equals(
      container.querySelectorAll('.uic--card-summary-answer').length,
      6,
      'Should show 3 answers',
    );

    t.equals(
      container.querySelectorAll('button').length,
      0,
      'Should not find a button',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
