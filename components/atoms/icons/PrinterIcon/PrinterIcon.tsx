/** @module PrinterIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

/** Displays the PrinterIcon component.*/
const PrinterIcon: FC<IconProps> = ({
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
    viewBox="0 0 22 22"
  >
    <g fill="none">
      <path
        d="m17 .5v4.5a1.5 1.5 0 0 1 -1.5 1.5h-9a1.5 1.5 0 0 1 -1.5-1.5v-4.5z"
        stroke={fill}
      />
      <path
        d="m20 5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1 -1.5 1.5h-3v-3a1.5 1.5 0 0 0 -1.5-1.5h-9a1.5 1.5 0 0 0 -1.5 1.5v3h-3a1.5 1.5 0 0 1 -1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5zm-16.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
        fill={fill}
      />
      <path
        d="m6 12.5h10a1 1 0 0 1 1 1v8h-12v-8a1 1 0 0 1 1-1z"
        stroke={fill}
      />
    </g>
  </svg>
);

PrinterIcon.defaultProps = {
  width: '2.1rem',
  height: '1.5rem',
  fill: '#fff',
};

export {PrinterIcon as PurePrinterIcon};
export default memo(PrinterIcon);
