/** @module ClearIcon */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/** Displays the ClearIcon component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the ClearIcon component.
 */
const ClearIcon = ({width, height, fill, className}) => {
  const containerClasses = classNames(className);

  return (
    <svg
      className={containerClasses}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13 13"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke={fill}
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M9.682 3.318L3.318 9.682M3.318 3.318l6.364 6.364" />
      </g>
    </svg>
  );
};

ClearIcon.propTypes = {
  /** The width of the icon. */
  width: PropTypes.string,
  /** The height of the icon. */
  height: PropTypes.string,
  /** The color of the icon. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
};

ClearIcon.defaultProps = {
  width: '13',
  height: '13',
  fill: '#5B6279',
};

export default ClearIcon;
