/** @module FacebookIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

/** Displays the FacebookIcon component.*/
const FacebookIcon: FC<IconProps> = ({
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
    viewBox="0 0 11 18"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-138.000000, -35.000000)" fill={fill}>
        <g>
          <g transform="translate(138.000000, 35.000000)">
            <g>
              <path d="M0.531610743,5.63245568 L2.70170358,5.63245568 L2.70170358,4.72325114 C2.70170358,3.69234205 2.83190915,2.93347841 3.08363992,2.43950114 C3.35273143,1.92404659 3.83883223,1.53745568 4.55062268,1.21529659 C5.24505239,0.8931375 6.13913064,0.7356375 7.23285743,0.7356375 C8.33526459,0.7356375 9.41163064,0.871660227 10.4793163,1.14370568 L9.95849403,3.38450114 C9.33350729,3.26279659 8.73456167,3.19836477 8.17033753,3.19836477 C7.59743302,3.19836477 7.20681631,3.31291023 6.96376592,3.53484205 C6.70335477,3.74245568 6.59050995,4.16484205 6.59050995,4.78052386 L6.59050995,5.63245568 L9.50711472,5.63245568 L9.50711472,8.16677386 L6.59050995,8.16677386 L6.59050995,17.7599557 L2.70170358,17.7599557 L2.70170358,8.16677386 L0.531610743,8.16677386 L0.531610743,5.63245568 Z"></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

FacebookIcon.defaultProps = {
  width: '1.1rem',
  height: '1.8rem',
  fill: '#fff',
};

export {FacebookIcon as PureFacebookIcon};
export default memo(FacebookIcon);
