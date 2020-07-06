/** @module ClearIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

/** Displays the ClearIcon component.*/
const ClearIcon: FC<IconProps> = ({width, height, fill, className, style}) => (
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
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M9.682 3.318L3.318 9.682M3.318 3.318l6.364 6.364" />
    </g>
  </svg>
);

ClearIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  fill: '#5B6279',
};

export {ClearIcon as PureClearIcon};
export default memo(ClearIcon);
