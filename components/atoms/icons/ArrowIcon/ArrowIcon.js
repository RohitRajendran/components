/** @module ArrowIcon */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/** Displays the ArrowIcon component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the ArrowIcon component.
 */
const ArrowIcon = ({width, height, fill, className, direction, style}) => {
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
      style={
        /**
         * Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style
         * https://www.w3.org/TR/SVG11/types.html#DataTypeLength
         * */
        {
          width,
          height,
          ...style,
        }
      }
      viewBox="0 0 12 8"
    >
      <path fill={fill} fillRule="evenodd" d="M6 8L11.196.5H.804z" />
    </svg>
  );
};

ArrowIcon.propTypes = {
  /** The width of the arrow with unit sizing (px, rem, etc). */
  width: PropTypes.string,
  /** The height of the arrow with unit sizing (px, rem, etc). */
  height: PropTypes.string,
  /** The color of the arrow. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Changes the direction of the arrow. */
  direction: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  /** Additional inline styles to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

ArrowIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  fill: '#5B6279',
};

export default ArrowIcon;
