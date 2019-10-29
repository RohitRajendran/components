import {object} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import DataTable from './DataTable';
import DataTableReadme from './DataTable.mdx';

const stories = storiesOf('Complex Organisms/DataTable', module);

stories.addParameters({
  docs: {
    page: DataTableReadme,
  },
});

const defaultColumns = [
  {
    accessor: 'name',
    Header: 'Name',
    Footer: 'Total',
  },
  {
    accessor: 'id',
    Header: 'ID',
  },
  {
    accessor: 'description',
    Header: 'Description',
  },
  {
    accessor: 'amount',
    Header: 'Amount',
    className: 'uic--text-right',
    headerClassName: 'uic--text-right',
    Footer: ({data}) => data.reduce((sum, val) => sum + val.amount, 0),
  },
];

const defaultData = [
  {
    name: 'James',
    id: 'abcd',
    description: 'The man',
    amount: 300,
  },
  {
    name: 'Rohit',
    id: 'efgh',
    description: 'The myth',
    amount: 200,
  },
  {
    name: 'David',
    id: 'ijkl',
    description: 'The legend',
    amount: 1000,
  },
  {
    name: 'Cal',
    id: 'wxyz',
    description: '?',
    amount: 100,
  },
];

const defaultProps = (columns = defaultColumns, data = defaultData) => ({
  data: object('Data', data),
  columns: object('Columns', columns),
});

stories.add('default', () => <DataTable {...defaultProps()} />);

stories.add('expanding rows', () => (
  <DataTable
    {...defaultProps(
      [
        {
          expander: true,
          className: 'rt-expandable',
          headerClassName: 'rt-expandable',
        },
      ].concat(defaultColumns),
    )}
    SubComponent={() => (
      <div style={{fontSize: '1.6rem', padding: '2rem'}}>
        I was hidden before
      </div>
    )}
  />
));
