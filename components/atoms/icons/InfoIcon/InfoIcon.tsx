/** @module InfoIcon */
import React, {FC, memo} from 'react';
import {colors} from '~constants/js/colors';
import {IconProps} from '../icons';

type InfoIconProps = Omit<IconProps, 'fill'> & {
  /** The color of the background. */
  circleFill?: string;
  /** The color of the "i" inside the circle. */
  iconFill?: string;
};

/** Displays the InfoIcon component.*/
const InfoIcon: FC<InfoIconProps> = ({
  circleFill,
  className,
  height,
  iconFill,
  style,
  width,
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...style,
      height,
      width,
    }}
    width={width}
    height={height}
    viewBox="0 0 14 14"
  >
    <title>Info</title>
    <g stroke="none" strokeWidth="1" fillRule="evenodd">
      <circle fill={circleFill} cx="7" cy="7" r="7" />
      <path
        d="M6.765,4.377 C6.54299889,4.377 6.36000072,4.31250065 6.216,4.1835 C6.07199928,4.05449935 6,3.88800102 6,3.684 C6,3.47999898 6.07199928,3.31500063 6.216,3.189 C6.36000072,3.06299937 6.54299889,3 6.765,3 C6.99300114,3 7.17749929,3.06299937 7.3185,3.189 C7.4595007,3.31500063 7.53,3.47999898 7.53,3.684 C7.53,3.88800102 7.4595007,4.05449935 7.3185,4.1835 C7.17749929,4.31250065 6.99300114,4.377 6.765,4.377 Z M6.108,6.034 L7.431,6.034 L7.431,10.498 L6.108,10.498 L6.108,6.034 Z"
        fill={iconFill}
      />
    </g>
  </svg>
);

InfoIcon.defaultProps = {
  width: '1.6rem',
  height: '1.6rem',
  circleFill: colors.royal,
  iconFill: colors.white,
};

export {InfoIcon as PureInfoIcon};
export default memo(InfoIcon);
