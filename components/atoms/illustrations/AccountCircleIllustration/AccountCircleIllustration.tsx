/** @module AccountCircleIllustration */
import React, {FC, memo} from 'react';
import {colors} from '~constants/js/colors.js';

type AccountCircleIllustrationProps = {
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
};

/** Renders an account illustration. */
const AccountCircleIllustration: FC<AccountCircleIllustrationProps> = ({
  fill,
  width,
  height,
  className,
  style,
}) => (
  <svg
    className={className}
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
    viewBox="0 0 232 232"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <circle id="path-1" cx="116" cy="116" r="116" />
      <rect
        id="path-3"
        x="0.759894594"
        y="0"
        width="106.53131"
        height="5.15862069"
      />
      <rect
        id="path-5"
        x="0.759894594"
        y="0"
        width="106.53131"
        height="5.15862069"
      />
      <polygon
        id="path-7"
        points="0.319106466 0 115.488091 0 115.488091 5.15862069 0.319106466 5.15862069"
      />
      <polygon
        id="path-9"
        points="0.319106466 0 115.488091 0 115.488091 5.15862069 0.319106466 5.15862069"
      />
      <polygon
        id="path-11"
        points="82.4645742 0 164.522475 42.5586207 0.406672925 42.5586207"
      />
    </defs>
    <g
      id="First-Plan-Info-Collection"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g transform="translate(-605.000000, -140.000000)">
        <g transform="translate(605.000000, 140.000000)">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <use id="Mask" fill={colors.midnight} xlinkHref="#path-1" />
          <g mask="url(#mask-2)">
            <g transform="translate(-31.000000, 28.000000)">
              <g transform="translate(94.365854, 64.482759)">
                <mask id="mask-4" fill="white">
                  <use xlinkHref="#path-3" />
                </mask>
                <use id="Mask" fill={fill} opacity="0.25" xlinkHref="#path-3" />
                <polygon
                  fill={fill}
                  opacity="0.100000001"
                  mask="url(#mask-4)"
                  points="-40.0731707 -58.0344828 54.2926829 -58.0344828 54.2926829 92.8551724 -40.0731707 92.8551724"
                />
              </g>
              <g id="Group" transform="translate(65.926829, 15.475862)">
                <polygon
                  fill={fill}
                  opacity="0.1"
                  points="82.4645742 5.90121023 146.292826 39.2367208 18.6363225 39.2367208"
                />
                <polygon
                  fill={fill}
                  opacity="0.1"
                  points="82.4645742 9.21073476 133.619184 35.9271963 31.3099646 35.9271963"
                />
                <polygon
                  fill={fill}
                  opacity="0.300000012"
                  points="33.5177559 54.1655172 45.0346543 54.1655172 45.0346543 125.096552 33.5177559 125.096552"
                />
                <polygon
                  fill={fill}
                  opacity="0.200000003"
                  points="102.619146 54.1655172 114.136045 54.1655172 114.136045 125.096552 102.619146 125.096552"
                />
                <polygon
                  fill={fill}
                  opacity="0.200000003"
                  points="85.3437988 54.1655172 96.8606972 54.1655172 96.8606972 125.096552 85.3437988 125.096552"
                />
                <polygon
                  fill={fill}
                  opacity="0.300000012"
                  points="50.7931035 54.1655172 62.310002 54.1655172 62.310002 125.096552 50.7931035 125.096552"
                />
                <polygon
                  fill={fill}
                  opacity="0.300000012"
                  points="68.0684512 54.1655172 79.5853496 54.1655172 79.5853496 125.096552 68.0684512 125.096552"
                />
                <polygon
                  fill={fill}
                  opacity="0.200000003"
                  points="119.894494 54.1655172 131.411392 54.1655172 131.411392 125.096552 119.894494 125.096552"
                />
                <g transform="translate(28.439024, 125.096552)">
                  <mask id="mask-6" fill="white">
                    <use xlinkHref="#path-5" />
                  </mask>
                  <use
                    id="Mask"
                    fill={fill}
                    opacity="0.300000012"
                    xlinkHref="#path-5"
                  />
                  <polygon
                    fill={fill}
                    opacity="0.100000001"
                    mask="url(#mask-6)"
                    points="-40.0731707 -134.124138 54.2926829 -134.124138 54.2926829 16.7655172 -40.0731707 16.7655172"
                  />
                </g>
                <g transform="translate(24.560976, 130.255172)">
                  <mask id="mask-8" fill="white">
                    <use xlinkHref="#path-7" />
                  </mask>
                  <use
                    id="Mask"
                    fill={fill}
                    opacity="0.2"
                    xlinkHref="#path-7"
                  />
                  <polygon
                    fill={fill}
                    opacity="0.100000001"
                    mask="url(#mask-8)"
                    points="-36.195122 -139.282759 58.1707317 -139.282759 58.1707317 11.6068966 -36.195122 11.6068966"
                  />
                </g>
                <g
                  id="Rectangle-42"
                  transform="translate(24.560976, 43.848276)"
                >
                  <mask id="mask-10" fill="white">
                    <use xlinkHref="#path-9" />
                  </mask>
                  <use
                    id="Mask"
                    fill={fill}
                    opacity="0.149999991"
                    xlinkHref="#path-9"
                  />
                  <polygon
                    fill={fill}
                    opacity="0.100000001"
                    mask="url(#mask-10)"
                    points="-36.195122 -52.8758621 58.1707317 -52.8758621 58.1707317 98.0137931 -36.195122 98.0137931"
                  />
                </g>
                <g>
                  <mask id="mask-12" fill="white">
                    <use xlinkHref="#path-11" />
                  </mask>
                  <use
                    id="Mask"
                    fill={fill}
                    opacity="0.2"
                    xlinkHref="#path-11"
                  />
                  <polygon
                    fill={fill}
                    opacity="0.100000001"
                    mask="url(#mask-12)"
                    points="-11.6341463 -9.02758621 82.7317073 -9.02758621 82.7317073 141.862069 -11.6341463 141.862069"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

AccountCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  fill: '#ffffff',
};

export default memo(AccountCircleIllustration);
