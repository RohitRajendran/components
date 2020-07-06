/** @module CloseIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

/** Displays the CloseIcon component.*/
const CloseIcon: FC<IconProps> = ({width, height, fill, className, style}) => (
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
    viewBox="0 0 13 13"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={fill}
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M9.682 3.318L3.318 9.682M3.318 3.318l6.364 6.364" />
    </g>
  </svg>
);

CloseIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  fill: '#5B6279',
};

export {CloseIcon as PureCloseIcon};
export default memo(CloseIcon);
