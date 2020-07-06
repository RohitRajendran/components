/** @module StarCircleIcon */
import React, {FC, memo} from 'react';
import {colors} from '~constants/js/colors';
import {IconProps} from '../icons';

type StarCircleIconProps = IconProps & {
  /** The outer color of the icon. */
  outerFill?: string;
};

/** Displays the StarCircleIcon component.*/
const StarCircleIcon: FC<StarCircleIconProps> = ({
  width,
  height,
  fill,
  outerFill,
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    style={
      /** Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style */
      {
        width,
        height,
        ...style,
      }
    }
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <circle fill={outerFill} cx="12" cy="12" r="12"></circle>
      <polygon
        fill={fill}
        points="12 14.4 8.47328849 16.854102 9.71746433 12.7416408 6.2936609 10.145898 10.5893154 10.0583592 12 6 13.4106846 10.0583592 17.7063391 10.145898 14.2825357 12.7416408 15.5267115 16.854102"
      ></polygon>
    </g>
  </svg>
);

StarCircleIcon.defaultProps = {
  width: '1.6rem',
  height: '1.6rem',
  fill: colors.white,
  outerFill: colors.green,
};

export {StarCircleIcon as PureStarCircleIcon};
export default memo(StarCircleIcon);
