/** @module PrinterCircleIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

/** Displays the PrinterCircleIcon component.*/
const PrinterCircleIcon: FC<IconProps> = ({
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
      /** Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style */
      {
        width,
        height,
        ...style,
      }
    }
    viewBox="0 0 36 36"
  >
    <g fill="none">
      <circle cx="18" cy="18" fill={fill} r="18" />
      <g transform="translate(7.5 7.5)">
        <path
          d="m16.5 0v4.5a1.5 1.5 0 0 1 -1.5 1.5h-9a1.5 1.5 0 0 1 -1.5-1.5v-4.5z"
          stroke="#fff"
        />
        <path
          d="m16.5 16.5v-3a1.5 1.5 0 0 0 -1.5-1.5h-9a1.5 1.5 0 0 0 -1.5 1.5v3h-3a1.5 1.5 0 0 1 -1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h18a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1 -1.5 1.5z"
          fill="#fff"
        />
        <path
          d="m5.5 12h10a1 1 0 0 1 1 1v8h-12v-8a1 1 0 0 1 1-1z"
          stroke="#fff"
        />
        <circle cx="3" cy="9" fill={fill} r="1.5" />
      </g>
    </g>
  </svg>
);

PrinterCircleIcon.defaultProps = {
  width: '2.1rem',
  height: '1.5rem',
  fill: '#fff',
};

export {PrinterCircleIcon as PurePrinterCircleIcon};
export default memo(PrinterCircleIcon);
