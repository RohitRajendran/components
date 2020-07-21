/** @module DataTable */
import React, {FC} from 'react';
import ReactTable, {TableProps} from 'react-table';
import CaretIcon from '../../../components/atoms/icons/CaretIcon/CaretIcon';
import './DataTable.scss';

type ExpanderProps = {
  /** Whether the expander is active or not */
  isExpanded: boolean;
};

const Expander: FC<ExpanderProps> = ({isExpanded}) => (
  <CaretIcon direction={isExpanded ? 'down' : 'right'} />
);

export type DataTableProps = Partial<TableProps>;

/**
 * A component for displaying tabular data. The API matches that of react-table.
 */
const DataTable: FC<DataTableProps> = (props) => (
  <ReactTable
    className="uic--react-table -highlight"
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

export default DataTable;
