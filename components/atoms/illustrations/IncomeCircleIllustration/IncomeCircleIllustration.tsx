/** @module IncomeCircleIllustration */
import React, {FC, memo} from 'react';
import {colors} from '~constants/js/colors';

type IncomeCircleIllustrationProps = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height?: string;
  /** The color of the illustration. */
  fill?: string;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Additional inline styles to apply to the container. */
  style?: React.CSSProperties;
  /** Allows you to adjust the id of the SVG, this can be useful when using multiple of the same SVG on the same page. */
  id?: string;
};

/** Renders an income illustration. */
const IncomeCircleIllustration: FC<IncomeCircleIllustrationProps> = ({
  fill,
  width,
  height,
  className,
  style,
  id,
}) => {
  const elementProps = {
    className,
    style: {
      /**
       * Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style
       * https://www.w3.org/TR/SVG11/types.html#DataTypeLength
       * */
      width,
      height,
      ...style,
    },
  };

  return (
    <svg
      {...elementProps}
      viewBox="0 0 232 232"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={`${id}-title ${id}-description`}
    >
      <title id={`${id}-title`}>Income Circle Illustration</title>
      <desc id={`${id}-description`}>Envelope with a check in it</desc>
      <defs>
        <circle id="path-1" cx="116" cy="116" r="116" />
        <path
          d="M39.171007,-3.55271368e-14 L72.8994987,19.5713431 L86.7735793,23.2961203 C90.6372305,24.3333955 94.7040869,24.3333955 98.5677381,23.2961203 L172.198101,3.52856189 L166.117115,-4.26325641e-14 L185.341317,-3.19744231e-14 L97.9018133,23.6953654 C94.4761548,24.6236898 90.8651625,24.6236898 87.439504,23.6953654 L0,-3.19744231e-14 L39.171007,-3.19744231e-14 Z"
          id="path-3"
        />
        <path
          d="M166.117115,66.3448276 L70.615318,10.9288178 L80.3235224,3.31021656 C87.5721756,-2.37822961 97.7691418,-2.37822961 105.017795,3.31021656 L185.341317,66.3448276 L166.117115,66.3448276 Z M39.171007,66.3448276 L0,66.3448276 L16.6513434,53.2775352 L39.171007,66.3448276 Z"
          id="path-5"
        />
        <path
          d="M179.814868,86.4595964 L106.184505,106.227155 C102.320853,107.26443 98.2539969,107.26443 94.3903457,106.227155 L80.5162652,102.502378 L0.944792775,56.3301206 L32.6813197,1.08367247 L179.814868,86.4595964 Z M39.3532934,31.8965517 C43.5599174,31.8965517 46.9700599,28.4692143 46.9700599,24.2413793 C46.9700599,20.0135443 43.5599174,16.5862069 39.3532934,16.5862069 C35.1466695,16.5862069 31.7365269,20.0135443 31.7365269,24.2413793 C31.7365269,28.4692143 35.1466695,31.8965517 39.3532934,31.8965517 Z"
          id="path-7"
        />
        <path
          d="M0,0 L88.0034657,23.6263081 C91.0607959,24.4471102 94.2805215,24.4471102 97.3378516,23.6263081 L185.341317,0 L185.341317,74 L0,74 L0,0 Z"
          id="path-9"
        />
      </defs>
      <g
        id="First-Plan-Info-Collection"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Intro-Page---Household-Income"
          transform="translate(-605.000000, -140.000000)"
        >
          <g id="Image" transform="translate(605.000000, 140.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1" />
            </mask>
            <use id="Mask" fill={colors.midnight} xlinkHref="#path-1" />
            <g
              id="Illustration-/-Source-/-Other-Income-Purple"
              mask="url(#mask-2)"
            >
              <g transform="translate(54.000000, 16.000000)" id="Rectangle-46">
                <g transform="translate(15.233533, 96.965517)">
                  <mask id="mask-4" fill="white">
                    <use xlinkHref="#path-3" />
                  </mask>
                  <use
                    id="Mask"
                    fill={fill}
                    opacity="0.100000001"
                    xlinkHref="#path-3"
                  />
                  <rect
                    fill={fill}
                    opacity="0.100000001"
                    mask="url(#mask-4)"
                    x="-16.502994"
                    y="-90.5862069"
                    width="109.173653"
                    height="176.068966"
                  />
                </g>
                <g transform="translate(15.233533, 30.620690)">
                  <mask id="mask-6" fill="white">
                    <use xlinkHref="#path-5" />
                  </mask>
                  <use
                    id="Mask"
                    fill={fill}
                    opacity="0.200000003"
                    xlinkHref="#path-5"
                  />
                  <path
                    d="M104.892289,8.15910241 L180.263473,66.3448276 L5.07784431,66.3448276 L80.4490281,8.15910241 C87.648866,2.6009067 97.6924514,2.6009067 104.892289,8.15910241 Z"
                    id="Triangle"
                    fill={fill}
                    opacity="0.100000001"
                    mask="url(#mask-6)"
                  />
                  <rect
                    fill={fill}
                    opacity="0.100000001"
                    mask="url(#mask-6)"
                    x="-16.502994"
                    y="-24.2413793"
                    width="109.173653"
                    height="176.068966"
                  />
                </g>
                <g transform="translate(7.616766, 14.034483)">
                  <mask id="mask-8" fill="white">
                    <use xlinkHref="#path-7" />
                  </mask>
                  <use
                    id="Combined-Shape"
                    fill={fill}
                    opacity="0.400000006"
                    xlinkHref="#path-7"
                  />
                  <polygon
                    id="Rectangle"
                    fill={fill}
                    opacity="0.200000003"
                    mask="url(#mask-8)"
                    points="22.0743846 38.5339059 151.87269 113.850857 142.492916 130.17902 12.6946108 54.862069"
                  />
                  <polygon
                    id="Rectangle"
                    fill={fill}
                    opacity="0.200000003"
                    mask="url(#mask-8)"
                    points="24.2136014 34.598679 154.011907 109.91563 152.742446 112.125488 22.9441403 36.8085369"
                  />
                  <rect
                    fill={fill}
                    opacity="0.100000001"
                    mask="url(#mask-8)"
                    x="-8.88622754"
                    y="-7.65517241"
                    width="109.173653"
                    height="176.068966"
                  />
                </g>
                <g transform="translate(15.233533, 96.965517)">
                  <mask id="mask-10" fill="white">
                    <use xlinkHref="#path-9" />
                  </mask>
                  <use
                    id="Mask"
                    fill={fill}
                    opacity="0.3"
                    xlinkHref="#path-9"
                  />
                  <rect
                    fill={fill}
                    opacity="0.100000001"
                    mask="url(#mask-10)"
                    x="-16.502994"
                    y="-90.5862069"
                    width="109.173653"
                    height="176.068966"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

IncomeCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  fill: '#ffffff',
  id: 'income-circle-illustration',
};

export default memo(IncomeCircleIllustration);
