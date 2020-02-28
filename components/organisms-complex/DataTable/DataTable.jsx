/** @module DataTable */
import PropTypes from 'prop-types';
import React from 'react';
import ReactTable from 'react-table';
import CaretIcon from '~components/atoms/icons/CaretIcon/CaretIcon.tsx';
import './DataTable.scss';

const Expander = ({isExpanded}) => (
  <CaretIcon direction={isExpanded ? 'down' : 'right'} />
);

Expander.propTypes = {
  /** Whether the expander is active or not */
  isExpanded: PropTypes.bool,
};

/**
 * A component for displaying tabular data. The API matches that of react-table.
 * @param {object} props - Component props
 * @returns {JSX.Element} The rendered component
 */
const DataTable = ({columns, data, ...props}) => (
  <ReactTable
    className="uic--react-table -highlight"
    columns={columns}
    data={data}
    filterable={false}
    resizable={false}
    showPagination={false}
    minRows={1}
    noDataText="No rows found"
    ExpanderComponent={Expander}
    expanderDefaults={{width: 30}}
    {...props}
  />
);

DataTable.propTypes = {
  /** The collection of column configuration options */
  columns: PropTypes.arrayOf(PropTypes.shape({})),
  /** The collection of row data objects */
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

export default DataTable;
