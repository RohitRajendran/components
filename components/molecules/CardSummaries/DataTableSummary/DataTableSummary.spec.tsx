import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import DataTableSummary from './DataTableSummary';

test('DataTableSummary - Renders', (t) => {
  try {
    const {getByText} = render(
      <DataTableSummary
        shortTitle="This is a simpler question"
        dataTableConfig={{
          columns: [
            {
              accessor: 'name',
              Header: 'Name',
            },
            {
              accessor: 'id',
              Header: 'ID',
            },
          ],
          data: [
            {
              name: 'James',
              id: 'abcd',
            },
            {
              name: 'Rohit',
              id: 'efgh',
            },
          ],
        }}
        editCard={(() => null) as React.MouseEventHandler}
      />,
    );

    t.true(getByText('This is a simpler question'));
    t.true(getByText('Name'));
    t.true(getByText('ID'));
    t.true(getByText('James'));
    t.true(getByText('abcd'));
    t.true(getByText('Rohit'));
    t.true(getByText('efgh'));

    t.true(getByText('Edit'), 'Should have edit card button');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('DataTableSummary - Renders using to param', (t) => {
  try {
    const {getByText} = render(
      <DataTableSummary
        shortTitle="This is a simpler question"
        dataTableConfig={{
          columns: [
            {
              accessor: 'name',
              Header: 'Name',
            },
            {
              accessor: 'id',
              Header: 'ID',
            },
          ],
          data: [
            {
              name: 'James',
              id: 'abcd',
            },
            {
              name: 'Rohit',
              id: 'efgh',
            },
          ],
        }}
        to="url"
      />,
    );

    t.true(getByText('This is a simpler question'));
    t.true(getByText('Name'));
    t.true(getByText('ID'));
    t.true(getByText('James'));
    t.true(getByText('abcd'));
    t.true(getByText('Rohit'));
    t.true(getByText('efgh'));

    t.true(getByText('Edit'), 'Should have edit card button');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
