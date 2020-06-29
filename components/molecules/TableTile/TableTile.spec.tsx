import React from 'react';
import test from 'tape';
import TableTile from './TableTile';
import {render, fireEvent, cleanup} from '@testing-library/react';

test('TableTile - validate pagination logic - renders', (t) => {
  const itemsPerPage = 3;
  const props = {
    title: '1. Test-Exempt Accounts',
    items: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    itemsPerPage,
  };

  const {getAllByRole, container, getByText} = render(<TableTile {...props} />);

  t.true(getByText(props.title), 'Title expected');

  const paginationControls = getAllByRole('button');
  t.equals(paginationControls.length, 2);

  t.true(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));

  t.equals(
    container.querySelectorAll('.uic--table-tile__cell').length,
    3,
    'Expected 3 cells for page 1',
  );

  t.true(
    Array.from(
      container.querySelectorAll('.uic--table-tile__cell'),
    ).every((cell, index) =>
      cell.classList.contains(
        (index + 1) % 2
          ? 'uic--table-tile__cell--odd'
          : 'uic--table-tile__cell--even',
      ),
    ),
    'Alternating cell colors is incorrect',
  );

  fireEvent.click(paginationControls[1]);
  t.equals(
    container.querySelectorAll('.uic--table-tile__cell').length,
    3,
    'Expected 3 cells for page 2',
  );

  fireEvent.click(paginationControls[1]);
  t.equals(
    container.querySelectorAll('.uic--table-tile__cell').length,
    1,
    'Expected 3 cells for page 3',
  );

  cleanup();
  t.end();
});
