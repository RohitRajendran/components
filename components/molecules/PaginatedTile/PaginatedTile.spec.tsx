import {
  render,
  cleanup,
  fireEvent,
  Matcher,
  SelectorMatcherOptions,
} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import PaginatedTile from './PaginatedTile';
import Button from '~components/atoms/Button/Button';

const items = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const getPages = (itemsPerPage: number): React.ReactNode[] => {
  const pages = [];
  for (let page = 0; page < Math.ceil(items.length / itemsPerPage); page++) {
    const pageItems = items.slice(
      page * itemsPerPage,
      page * itemsPerPage + itemsPerPage,
    );
    pages.push(
      <ul style={{fontSize: '1.4rem', color: 'inherit'}}>
        {pageItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>,
    );
  }
  return pages;
};

const validatePageContent = (
  page: number,
  itemsPerPage: number,
  t: test.Test,
  getByText: (
    text: Matcher,
    options?: SelectorMatcherOptions | undefined,
    waitForElementOptions?: unknown,
  ) => HTMLElement,
): void => {
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
  const itemsPerPage = 3;

  const {getAllByRole, getByText} = render(
    <PaginatedTile pages={getPages(itemsPerPage)} />,
  );

  const paginationControls = getAllByRole('button');

  t.equals(paginationControls.length, 2);

  //validate page 1
  t.true(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(0, itemsPerPage, t, getByText);

  //validate page 2
  fireEvent.click(paginationControls[1]);
  t.false(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(1, itemsPerPage, t, getByText);

  //validate page 3
  fireEvent.click(paginationControls[1]);
  t.false(paginationControls[0].hasAttribute('disabled'));
  t.true(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(2, itemsPerPage, t, getByText);

  //validate page 2 (after transitioning from page 3)
  fireEvent.click(paginationControls[0]);
  t.false(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(1, itemsPerPage, t, getByText);

  cleanup();
  t.end();
});

test('PaginatedTile - footer content with pagination - renders', (t) => {
  const itemsPerPage = 2;
  const {getAllByRole, getByText} = render(
    <PaginatedTile
      pages={getPages(itemsPerPage)}
      footerContent={
        <Button variant="link" to="#">
          View Montezuma the Cat
        </Button>
      }
    />,
  );

  const paginationControls = getAllByRole('button');
  t.equals(paginationControls.length, 2);

  t.equals(getAllByRole('link').length, 1);

  //validate page 1
  t.true(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));
  validatePageContent(0, itemsPerPage, t, getByText);

  cleanup();
  t.end();
});

test('PaginatedTile - footer content with no pagination - renders', (t) => {
  const itemsPerPage = 7;
  const {getAllByRole, getByText} = render(
    <PaginatedTile
      pages={getPages(itemsPerPage)}
      footerContent={
        <Button variant="link" to="#">
          View Montezuma the Cat
        </Button>
      }
    />,
  );

  //validate pagination controls
  try {
    getAllByRole('button');
    t.fail('no pagination controls expected');
  } catch {
    t.pass();
  }

  //validate footer content
  t.equals(getAllByRole('link').length, 1);

  //validate page 1
  validatePageContent(0, itemsPerPage, t, getByText);

  cleanup();
  t.end();
});

test('PaginatedTile - no footer content and no pagination - renders', (t) => {
  const itemsPerPage = 7;
  const {getByRole, getByText} = render(
    <PaginatedTile pages={getPages(itemsPerPage)} />,
  );

  //validate footer
  try {
    getByRole('contentinfo');
    t.fail('footer should not be displayed');
  } catch {
    t.pass();
  }

  //validate page 1
  validatePageContent(0, itemsPerPage, t, getByText);

  cleanup();
  t.end();
});
