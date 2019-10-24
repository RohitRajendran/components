/** @module ArrowEllipsisIcon */
import PropTypes from 'prop-types';
import React from 'react';

/** Displays the ArrowEllipsisIcon component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the ArrowEllipsisIcon component.
 */
const ArrowEllipsisIcon = ({width, height, fill, className, style}) => (
  <svg
    className={className}
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
    viewBox="0 0 24 24"
    transform="rotate(0)"
  >
    <g fill="none" fillRule="evenodd">
      <rect width="24" height="24" fill={fill} rx="12" />
      <path
        fill="#FFF"
        d="M18.502 13c.275 0 .498.232.498.5 0 .276-.22.5-.498.5H5.498A.504.504 0 0 1 5 13.5c0-.276.22-.5.498-.5h13.004zM18.502 16c.275 0 .498.232.498.5 0 .276-.22.5-.498.5H5.498A.504.504 0 0 1 5 16.5c0-.276.22-.5.498-.5h13.004zM12 5l6 6H6z"
      />
    </g>
  </svg>
);

ArrowEllipsisIcon.propTypes = {
  /** The width of the arrow with unit sizing (px, rem, etc). */
  width: PropTypes.string,
  /** The height of the arrow with unit sizing (px, rem, etc). */
  height: PropTypes.string,
  /** The color of the arrow. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional inline styles to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

ArrowEllipsisIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  fill: '#5B6279',
};

export default ArrowEllipsisIcon;
