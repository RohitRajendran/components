import React from 'react';
import test from 'tape';
import PaginationControls from './PaginationControls';
import {render, cleanup, fireEvent} from '@testing-library/react';
import {stub} from 'sinon';

test('PaginationControls - renders', (t) => {
  const props = {
    previousDisabled: false,
    nextDisabled: false,
    previous: stub(),
    next: stub(),
  };

  const {getAllByRole} = render(<PaginationControls {...props} />);

  const paginationControls = getAllByRole('button');

  t.equals(paginationControls.length, 2);
  t.false(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));

  fireEvent.click(paginationControls[0]);
  fireEvent.click(paginationControls[1]);

  t.equals(
    props.previous.callCount,
    1,
    'Should call the previous button onClick once.',
  );
  t.equals(
    props.next.callCount,
    1,
    'Should call the next button onClick once.',
  );

  cleanup();
  t.end();
});

test('PaginationControls - previous button disabled - renders', (t) => {
  const props = {
    previousDisabled: true,
    nextDisabled: false,
    previous: stub(),
    next: stub(),
  };

  const {getAllByRole} = render(<PaginationControls {...props} />);

  const paginationControls = getAllByRole('button');

  t.equals(paginationControls.length, 2);
  t.true(paginationControls[0].hasAttribute('disabled'));
  t.false(paginationControls[1].hasAttribute('disabled'));

  fireEvent.click(paginationControls[0]);
  fireEvent.click(paginationControls[1]);

  t.equals(
    props.previous.callCount,
    0,
    'Should not call the previous button onClick as its disabled.',
  );
  t.equals(
    props.next.callCount,
    1,
    'Should call the next button onClick once.',
  );

  cleanup();
  t.end();
});

test('PaginationControls - next button disabled - renders', (t) => {
  const props = {
    previousDisabled: false,
    nextDisabled: true,
    previous: stub(),
    next: stub(),
  };

  const {getAllByRole} = render(<PaginationControls {...props} />);

  const paginationControls = getAllByRole('button');

  t.equals(paginationControls.length, 2);
  t.false(paginationControls[0].hasAttribute('disabled'));
  t.true(paginationControls[1].hasAttribute('disabled'));

  fireEvent.click(paginationControls[0]);
  fireEvent.click(paginationControls[1]);

  t.equals(
    props.previous.callCount,
    1,
    'Should call the previous button onClick once.',
  );
  t.equals(
    props.next.callCount,
    0,
    'Should not call the next button onClick as its disabled.',
  );

  cleanup();
  t.end();
});

test('PaginationControls - both disabled - renders', (t) => {
  const props = {
    previousDisabled: true,
    nextDisabled: true,
    previous: stub(),
    next: stub(),
  };

  const {getAllByRole} = render(<PaginationControls {...props} />);

  const paginationControls = getAllByRole('button');

  t.equals(paginationControls.length, 2);
  t.true(paginationControls[0].hasAttribute('disabled'));
  t.true(paginationControls[1].hasAttribute('disabled'));

  fireEvent.click(paginationControls[0]);
  fireEvent.click(paginationControls[1]);

  t.equals(
    props.previous.callCount,
    0,
    'Should not call the previous button onClick as its disabled.',
  );
  t.equals(
    props.next.callCount,
    0,
    'Should not call the next button onClick as its disabled.',
  );

  cleanup();
  t.end();
});
