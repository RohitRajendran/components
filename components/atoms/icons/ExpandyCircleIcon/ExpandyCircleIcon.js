/** @module ExpandyCircleIcon */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/** Displays the ExpandyCircleIcon component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the ExpandyCircleIcon component.
 */
const ExpandyCircleIcon = ({width, height, fill, className, rotation}) => {
  const containerClasses = classNames(
    {
      'uic--rotate': true,
      'uic--rotate-right': rotation === 'right',
      'uic--rotate-down': rotation === 'down',
      'uic--rotate-left': rotation === 'left',
      'uic--rotate-up': rotation === 'up',
    },
    className
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={containerClasses}
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
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
};

ExpandyCircleIcon.propTypes = {
  /** The width of the arrow. */
  width: PropTypes.string,
  /** The height of the arrow. */
  height: PropTypes.string,
  /** The color of the arrow. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Changes the rotation of the arrow. */
  rotation: PropTypes.oneOf(['up', 'right', 'down', 'left']),
};

ExpandyCircleIcon.defaultProps = {
  width: '24',
  height: '24',
  fill: '#4d00ba',
};

export default ExpandyCircleIcon;
