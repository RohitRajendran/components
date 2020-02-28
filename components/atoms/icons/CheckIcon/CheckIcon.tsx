/** @module CheckIcon */
import React, {FC, memo} from 'react';

type CheckIconProps = {
  /** The width of the arrow with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the arrow with unit sizing (px, rem, etc). */
  height?: string;
  /** The color of the arrow. */
  fill?: string;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Additional inline styles to apply to the container. */
  style?: React.CSSProperties;
};

/** Displays the CheckIcon component.*/
const CheckIcon: FC<CheckIconProps> = ({
  width,
  height,
  fill,
  className,
  style,
}) => (
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
    viewBox="0 0 32 32"
    transform="rotate(0)"
  >
    <g fill="none" fillRule="evenodd">
      <circle cx="16" cy="16" fill={fill} r="16" />
      <path
        d="m9 17.326 6.286 4.674 7.714-11"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
  </svg>
);

CheckIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  fill: '#008422',
};

export default memo(CheckIcon);
