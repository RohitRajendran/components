/** @module TrashIcon */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/** Displays the TrashIcon component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the TrashIcon component.
 */
const TrashIcon = ({width, height, fill, className}) => {
  const containerClasses = classNames(className);

  return (
    <svg
      className={containerClasses}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 25"
    >
      <g fill="none" fillRule="nonzero" stroke={fill} strokeWidth="1.5">
        <path d="M4 6h14l-.834 14.176A3 3 0 0 1 14.171 23H7.83a3 3 0 0 1-2.995-2.824L4 6z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M1.455 5.75h19.09M11 9.205v10M14 9.205v10M8 9.205v10"
        />
        <path d="M9.236 2h3.528a2 2 0 0 1 1.789 1.106L16 6H6l1.447-2.894A2 2 0 0 1 9.237 2z" />
      </g>
    </svg>
  );
};

TrashIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  className: PropTypes.string,
};

TrashIcon.defaultProps = {
  width: '22',
  height: '25',
  fill: '#4D00BA',
};

export default TrashIcon;
