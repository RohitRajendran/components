/** @module ArrowIcon */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/** Displays the ArrowIcon component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the ArrowIcon component.
 */
const ArrowIcon = ({width, height, fill, className}) => {
  const containerClasses = classNames(className);

  return (
    <svg
      className={containerClasses}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 8"
    >
      <path fill={fill} fillRule="evenodd" d="M6 8L11.196.5H.804z" />
    </svg>
  );
};

ArrowIcon.propTypes = {
  /** The width of the arrow. */
  width: PropTypes.string,
  /** The height of the arrow. */
  height: PropTypes.string,
  /** The color of the arrow. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
};

ArrowIcon.defaultProps = {
  width: '13',
  height: '13',
  fill: '#5B6279',
};

export default ArrowIcon;
