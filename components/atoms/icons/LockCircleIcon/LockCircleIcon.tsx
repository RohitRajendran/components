/** @module LockCircleIcon */
import React, {FC} from 'react';
import {colors} from '../../../../constants/js/colors';
import {IconProps} from '../icons';

type LockCircleIconProps = IconProps & {
  /** The color of the circle that surrounds the icon. */
  outerFill?: string;
  /** The aria label for the lock icon. */
  title?: string;
};

const LockCircleIcon: FC<LockCircleIconProps> = ({
  className,
  fill,
  height,
  outerFill,
  style,
  title,
  width,
}) => (
  <svg
    className={className}
    style={{
      width,
      height,
      ...style,
    }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="title"
  >
    <title>{title}</title>
    <g fill="none" fillRule="evenodd">
      <circle cx="12" cy="12" fill={outerFill} r="12" />
      <path
        d="m12 4c2.21 0 4 1.79 4 4v1c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-8c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2v-1c0-2.21 1.79-4 4-4zm0 7c-1.105 0-2 .895-2 2 0 .74.402 1.387 1 1.732v2.268h2l.001-2.268c.597-.346.999-.992.999-1.732 0-1.105-.895-2-2-2zm0-5c-1.054 0-1.918.816-1.995 1.85l-.005.15v1h4v-1c0-1.105-.895-2-2-2z"
        fill={fill}
      />
    </g>
  </svg>
);

LockCircleIcon.defaultProps = {
  height: '2.4rem',
  width: '2.4rem',
  fill: colors.white,
  outerFill: colors.royal,
  title: 'Lock Icon',
};

export default LockCircleIcon;
