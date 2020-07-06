/** @module TradeIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

type TradeIconProps = IconProps & {
  /** Title for the svg. */
  title?: string;
};

/** Displays the TradeIcon component.*/
const TradeIcon: FC<TradeIconProps> = ({
  title,
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
    viewBox="0 0 29 29"
    aria-labelledby="title"
  >
    <title>{title}</title>
    <g
      fill="none"
      fillRule="nonzero"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="M16.97 9.192L4.95 21.213 3.536 9.9l3.535 3.536 7.071-7.071zM12.02 19.799l12.022-12.02 1.414 11.313-3.536-3.536-7.07 7.071z" />
    </g>
  </svg>
);

TradeIcon.defaultProps = {
  title: 'Trade',
  width: '2.4rem',
  height: '2.4rem',
  fill: '#4D00BA',
};

export {TradeIcon as PureTradeIcon};
export default memo(TradeIcon);
