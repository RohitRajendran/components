/** @module CheckIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

type CheckIconProps = IconProps & {
  /** Determines if the checkbox should have a background or not. */
  removeBackground?: boolean;
};

/** Displays the CheckIcon component.*/
const CheckIcon: FC<CheckIconProps> = ({
  width,
  height,
  fill,
  removeBackground,
  className,
  style,
}) => {
  if (!removeBackground) {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
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
        viewBox="0 0 32 32"
        transform="rotate(0)"
      >
        <g fill="none" fillRule="evenodd">
          <circle cx="16" cy="16" fill={fill} r="16" />
          <path
            d="m9 17.326 6.286 4.674 7.714-11"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
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
      >
        <defs />
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g
            transform="translate(-5.000000, -6.000000)"
            stroke={fill}
            strokeWidth="2"
          >
            <polyline
              id="Path-2"
              transform="translate(12.430807, 11.718643) rotate(-9.000000) translate(-12.430807, -11.718643) "
              points="6.45580887 11.0950718 10.8757611 15.6024354 18.405805 7.83485057"
            />
          </g>
        </g>
      </svg>
    );
  }
};

CheckIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  fill: '#008422',
};

export {CheckIcon as PureCheckIcon};
export default memo(CheckIcon);
