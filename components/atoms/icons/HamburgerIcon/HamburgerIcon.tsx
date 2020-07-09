/** @module HamburgerIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

/** Displays the HamburgerIcon component.*/
const HamburgerIcon: FC<IconProps> = ({
  width,
  height,
  fill,
  className,
  style,
}) => (
  <svg
    className={className}
    style={{
      width,
      height,
      ...style,
    }}
    viewBox="0 0 26 17"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="bevel"
    >
      <g
        id="Navigation-/-Mobile"
        transform="translate(-277.000000, -16.000000)"
        stroke={fill}
      >
        <g transform="translate(-26.000000, -19.000000)" id="icon-/-menu">
          <g transform="translate(304.000000, 36.000000)">
            <g>
              <path
                d="M8.8817842e-15,0.5 L24,0.5"
                id="Line"
                strokeWidth="2"
              ></path>
              <path
                d="M8.8817842e-15,7.5 L24,7.5"
                id="Line-Copy"
                strokeWidth="2"
              ></path>
              <path
                d="M8.8817842e-15,14.5 L24,14.5"
                id="Line-Copy-2"
                strokeWidth="2"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

HamburgerIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  fill: '#fff',
};

export {HamburgerIcon as PureHamburgerIcon};
export default memo(HamburgerIcon);
