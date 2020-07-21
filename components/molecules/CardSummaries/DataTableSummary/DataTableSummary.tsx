/** @module FormSummary */
import React, {Fragment, FC} from 'react';
import Button from '~components/atoms/Button/Button';
import '../CardSummaries.scss';
import DataTable, {
  DataTableProps,
} from '~components/organisms-complex/DataTable/DataTable';
type DataTableSummaryWithTo = {
  /** The URL that the user should be directed to when edit is clicked, used instead of `editCard` for Hogwarts Express. */
  to?: string | null;
};

type DataTableSummaryWithEdit = {
  /** Handler called to edit the card, used instead of `to` for McGonagall. */
  editCard?: React.MouseEventHandler | null;
};

type DataTableSummaryProps = {
  /** An TableProps configuration object. */
  dataTableConfig: DataTableProps;
  /** A shorter version of the card title. */
  shortTitle: string;
} & (DataTableSummaryWithTo | DataTableSummaryWithEdit);

const DataTableSummary: FC<DataTableSummaryProps> = ({
  dataTableConfig,
  shortTitle,
  ...props
}) => {
  const propsWithTo = props as DataTableSummaryWithTo;
  const propsWithEdit = props as DataTableSummaryWithEdit;

  const showEditButton = Boolean(propsWithTo.to || propsWithEdit.editCard);

  return (
    <Fragment>
      <div className="uic--card-summary uic--container-fluid">
        <div className="uic--row">
          <div className="uic--col-6 uic--col-sm-11">
            <h2 className="uic--card-summary-label" data-cy={shortTitle}>
              {shortTitle}
            </h2>
          </div>
          {showEditButton && (
            <div className="uic--col-6 uic--col-sm-1">
              <div className="uic--d-flex uic--justify-content-end">
                {propsWithTo && propsWithTo.to && (
                  <Button variant="link" to={propsWithTo.to}>
                    Edit
                  </Button>
                )}

                {propsWithEdit && propsWithEdit.editCard && (
                  <Button variant="link" onClick={propsWithEdit.editCard}>
                    Edit
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="uic--card-summary uic--container-fluid">
        <DataTable {...dataTableConfig} />
      </div>
    </Fragment>
  );
};

export default DataTableSummary;
