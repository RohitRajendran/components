/** @module StarIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

/** Displays the StarIcon component.*/
const StarIcon: FC<IconProps> = ({width, height, fill, className, style}) => (
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
    viewBox="0 0 14 13"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M7 9.8l-4.114 2.863 1.451-4.798L.343 4.837l5.011-.102L7 0l1.646 4.735 5.011.102-3.994 3.028 1.451 4.798z"
    />
  </svg>
);

StarIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  fill: '#5B6279',
};

export {StarIcon as PureStarIcon};
export default memo(StarIcon);
