/** @module InfoBoxFormattedRows */
import React, {FC} from 'react';

type InfoBoxFormattedRowsProps = {
  /** Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** Data that will displayed as formatted rows in our InfoBox. */
  rowData: Array<{
    /** Optional unique key for a row of data. */
    key?: string;
    /** Label that will be displayed on the left side of the row. */
    label: string;
    /** Value that will be displayed on the right side of the row. */
    value: string;
  }>;
};

/**
 * Renders custom InfoBox JSX content as well-defined rows
 * where data labels are on the left and their associated
 * values are on on the right.
 */
const InfoBoxFormattedRows: FC<InfoBoxFormattedRowsProps> = ({
  rowData,
  className,
  style,
}) => (
  <ul className={className} style={style}>
    {rowData.map((row) => (
      <li
        className="uic--info-box-formatted-row"
        key={row.key ? row.key : row.label}
      >
        <div className="uic--row-label">{row.label}</div>
        <div className="uic--mcg-subhead-text">{row.value}</div>
      </li>
    ))}
  </ul>
);

export default InfoBoxFormattedRows;
