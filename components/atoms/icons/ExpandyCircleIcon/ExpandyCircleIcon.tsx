/** @module ExpandyCircleIcon */
import classNames from 'classnames';
import React, {FC, memo} from 'react';

type ExpandyCircleIconProps = {
  /** The width of the arrow with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the arrow with unit sizing (px, rem, etc). */
  height?: string;
  /** The color of the arrow. */
  fill?: string;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Changes the direction of the arrow. */
  direction?: 'up' | 'right' | 'down' | 'left';
  /** Additional inline styles to apply to the container. */
  style?: React.CSSProperties;
};

/** Displays the ExpandyCircleIcon component. */
const ExpandyCircleIcon: FC<ExpandyCircleIconProps> = ({
  width,
  height,
  fill,
  className,
  direction,
  style,
}) => {
  const containerClasses = classNames(
    {
      'uic--rotate-right': direction === 'right',
      'uic--rotate-down': direction === 'down',
      'uic--rotate-left': direction === 'left',
      'uic--rotate-up': direction === 'up',
    },
    className,
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={containerClasses}
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
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="12" cy="12" r="12" fill={fill} />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.243 11L12 15.243 7.757 11"
        />
      </g>
    </svg>
  );
};

ExpandyCircleIcon.defaultProps = {
  width: '2.4rem',
  height: '2.4rem',
  fill: '#4d00ba',
};

export default memo(ExpandyCircleIcon);
