/** @module ExpandyCircleIcon */
import React from 'react';
import PropTypes from 'prop-types';

/** Displays the ExpandyCircleIcon component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the ExpandyCircleIcon component.
 */
const ExpandyCircleIcon = ({width, height, fill, className}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="evenodd" transform="rotate(-90 12 12)">
      <circle cx="12" cy="12" r="12" fill={fill} />
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.243 11L12 15.243 7.757 11"
      />
    </g>
  </svg>
);

ExpandyCircleIcon.propTypes = {
  /** The width of the arrow. */
  width: PropTypes.string,
  /** The height of the arrow. */
  height: PropTypes.string,
  /** The color of the arrow. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
};

ExpandyCircleIcon.defaultProps = {
  width: '24',
  height: '24',
  fill: '#4d00ba',
};

export default ExpandyCircleIcon;
