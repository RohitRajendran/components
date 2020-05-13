import {render, cleanup, fireEvent, getAllByRole} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import PaginatedTile from './PaginatedTile';
import Button from '~components/atoms/Button/Button';

const validatePageContent = (
  page: number,
  items: any[],
  itemsPerPage: number,
  t: test.Test,
  getByText: any,
) => {
  const start = page * itemsPerPage;
  const included = items.slice(start, start + itemsPerPage);
  const excluded = items.filter((item) => !included.includes(item));

  t.true(included.every((item) => getByText(item)));
  t.true(
    excluded.every((item) => {
      try {
        getByText(item);
      } catch {
        return true;
      }
      return false;
    }),
  );
};

test('PaginatedTile - renders', (t) => {
  const props = {
    items: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    itemsPerPage: 3,
    ListTemplate: ({paginatedItems}: {paginatedItems: any}) => {
      return (
        <ul>
          {paginatedItems.map((item: any) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    },
  };

  const {getAllByRole, getByText} = render(<PaginatedTile {...props} />);

  const paginationControls = getAllByRole('button');

  t.equals(paginationControls.length, 2);

  //validate page 1
  t.true(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(0, props.items, props.itemsPerPage, t, getByText);

  //validate page 2
  fireEvent.click(paginationControls[1]);
  t.false(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(1, props.items, props.itemsPerPage, t, getByText);

  //validate page 3
  fireEvent.click(paginationControls[1]);
  t.false(paginationControls[0].hasAttribute('disabled'));
  t.true(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(2, props.items, props.itemsPerPage, t, getByText);

  //validate page 2 (after transitioning from page 3)
  fireEvent.click(paginationControls[0]);
  t.false(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(1, props.items, props.itemsPerPage, t, getByText);

  cleanup();
  t.end();
});

test('PaginatedTile - no template - renders', (t) => {
  const props = {
    items: ['Page 1', 'Page 2'],
    itemsPerPage: 1,
  };

  const {getAllByRole, getByText} = render(<PaginatedTile {...props} />);

  const paginationControls = getAllByRole('button');

  t.equals(paginationControls.length, 2);

  //validate page 1
  t.true(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(0, props.items, props.itemsPerPage, t, getByText);

  //validate page 2
  fireEvent.click(paginationControls[1]);
  t.false(paginationControls[0].hasAttribute('disabled'));
  t.true(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(1, props.items, props.itemsPerPage, t, getByText);

  cleanup();
  t.end();
});

test('PaginatedTile - no pagination controls - renders', (t) => {
  const props = {
    items: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    itemsPerPage: 1,
    ListTemplate: ({paginatedItems}: {paginatedItems: any}) => {
      return (
        <ul>
          {paginatedItems.map((item: any) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    },
  };

  const {getAllByRole, getByText} = render(<PaginatedTile {...props} />);

  try {
    getAllByRole('button');
  } catch {
    t.ok;
  }

  //validate page 1
  validatePageContent(0, props.items, props.itemsPerPage, t, getByText);

  cleanup();
  t.end();
});

test('PaginatedTile - no template - renders', (t) => {
  const props = {
    items: ['Page 1'],
    itemsPerPage: 1,
  };

  const {getAllByRole, getByText} = render(<PaginatedTile {...props} />);

  try {
    getAllByRole('button');
    t.fail('no pagination controls expected');
  } catch {}

  //validate page 1
  validatePageContent(0, props.items, props.itemsPerPage, t, getByText);

  cleanup();
  t.end();
});

test('PaginatedTile - with footer content - renders', (t) => {
  const props = {
    items: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    itemsPerPage: 2,
    ListTemplate: ({paginatedItems}: {paginatedItems: any}) => {
      return (
        <ul>
          {paginatedItems.map((item: any) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    },
    tileProps: {
      footerContent: (
        <Button variant="link" to="#">
          View Montezuma the Cat
        </Button>
      ),
    },
  };

  const {getAllByRole, getByText} = render(<PaginatedTile {...props} />);

  const paginationControls = getAllByRole('button');
  t.equals(paginationControls.length, 2);

  t.equals(getAllByRole('link').length, 1);

  //validate page 1
  t.true(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(0, props.items, props.itemsPerPage, t, getByText);

  cleanup();
  t.end();
});

test('PaginatedTile - no footer content and no pagination - renders', (t) => {
  const props = {
    items: ['Monday', 'Tuesday'],
    itemsPerPage: 2,
    ListTemplate: ({paginatedItems}: {paginatedItems: any}) => {
      return (
        <ul>
          {paginatedItems.map((item: any) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    },
  };

  const {getByRole, getByText} = render(<PaginatedTile {...props} />);

  try {
    console.log(getByRole('contentinfo'));
    t.fail('footer should not be displayed');
  } catch {}

  //validate page 1
  validatePageContent(0, props.items, props.itemsPerPage, t, getByText);

  cleanup();
  t.end();
});
