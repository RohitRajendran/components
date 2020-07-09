/** @module ErrorFlagIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

/** Displays the ErrorFlagIcon component.*/
const ErrorFlagIcon: FC<IconProps> = ({
  width,
  height,
  fill,
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={
      /** Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style */
      {
        width,
        height,
        ...style,
      }
    }
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="evenodd">
      <circle cx="12" cy="12" r="12" fill={fill} />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M11.34 7.938L11.289 6h1.972l-.068 1.938-.272 5.797h-1.309l-.272-5.797zm-.34 8.33c0-.385.122-.703.366-.952a1.22 1.22 0 0 1 .909-.374c.363 0 .663.125.901.374.238.25.357.567.357.952s-.119.703-.357.952c-.238.25-.538.374-.901.374a1.22 1.22 0 0 1-.91-.374c-.243-.25-.365-.567-.365-.952z"
      />
    </g>
  </svg>
);

ErrorFlagIcon.defaultProps = {
  width: '2.4rem',
  height: '2.4rem',
  fill: '#B30052',
};

export {ErrorFlagIcon as PureErrorFlagIcon};
export default memo(ErrorFlagIcon);
