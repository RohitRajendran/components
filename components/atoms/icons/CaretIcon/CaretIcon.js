/** @module CaretIcon */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/** Displays the CaretIcon component.
 * @param {object} props - Component props.
 * @returns {JSX.Element} - JSX representation of the CaretIcon component.
 */
const CaretIcon = ({width, height, fill, className, direction}) => {
  const containerClasses = classNames(
    {
      'uic--rotate-right': direction === 'right',
      'uic--rotate-down': direction === 'down',
      'uic--rotate-left': direction === 'left',
      'uic--rotate-up': direction === 'up',
    },
    className
  );

  return (
    <svg
      className={containerClasses}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 8"
    >
      <polyline
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform="translate(11.000000, -11.000000) rotate(45)"
        points="10 8.41421356 10 16.4142136 2 16.4142136"
      />
    </svg>
  );
};

CaretIcon.propTypes = {
  /** The width of the arrow. */
  width: PropTypes.string,
  /** The height of the arrow. */
  height: PropTypes.string,
  /** The color of the arrow. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Changes the direction of the arrow. */
  direction: PropTypes.oneOf(['up', 'right', 'down', 'left']),
};

CaretIcon.defaultProps = {
  width: '14',
  height: '14',
  fill: '#5B6279',
};

export default CaretIcon;
