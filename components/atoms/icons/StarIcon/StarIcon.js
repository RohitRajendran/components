/** @module StarIcon */
import React from 'react';
import PropTypes from 'prop-types';

/** Displays the StarIcon component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the StarIcon component.
 */
const StarIcon = ({width, height, fill, className}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 14 13"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M7 9.8l-4.114 2.863 1.451-4.798L.343 4.837l5.011-.102L7 0l1.646 4.735 5.011.102-3.994 3.028 1.451 4.798z"
    />
  </svg>
);

StarIcon.propTypes = {
  /** The width of the icon. */
  width: PropTypes.string,
  /** The height of the icon. */
  height: PropTypes.string,
  /** The color of the icon. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
};

StarIcon.defaultProps = {
  width: '13',
  height: '13',
  fill: '#5B6279',
};

export default StarIcon;
