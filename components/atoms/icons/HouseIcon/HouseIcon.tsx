/** @module HouseIcon */
import classNames from 'classnames';
import React, {FC, Fragment} from 'react';
import detectBrowser from '~components/utilities/DetectBrowser/DetectBrowser';
import {colors} from '~constants/js/colors';
import {IconProps} from '../icons';

type HouseIconProps = Omit<IconProps, 'fill'> & {
  /** Animations are disabled for ie users as they don't work. */
  isIE: boolean;
  /** Unique identifier for the house component block. */
  id?: string;
  /** The number of houses to display. */
  houses: number;
  /** How many of the houses should be highlight. */
  highlight?: number;
};

/** Displays the HouseIcon component.*/
const HouseIcon: FC<HouseIconProps> = ({
  width,
  height,
  isIE,
  id,
  houses,
  highlight,
  className,
  style,
}) => {
  const containerClasses = classNames(
    {
      'uic--d-inline-block': true,
    },
    className,
  );

  return (
    <Fragment>
      {[...Array(houses).keys()].map((item, i) => {
        return (
          <div
            className={containerClasses}
            style={{
              width,
              height,
              ...style,
            }}
            key={`${id}-${i}`}
          >
            <svg viewBox="0 0 30 30" preserveAspectRatio="none">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                {highlight &&
                  (item < highlight - 1 || item === highlight - 1) &&
                  !isIE && (
                    <linearGradient id={`${id}-${i}`} x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor={colors['light-gray']} />
                      <stop offset="100%" stopColor={colors['light-gray']}>
                        <animate
                          attributeName="offset"
                          to="0%"
                          dur="0.5s"
                          begin={i === 0 ? '0s' : `${i / 4}s`}
                          fill="freeze"
                        />
                      </stop>
                      <stop offset="100%" stopColor={colors.midnight}>
                        <animate
                          attributeName="offset"
                          to="0%"
                          dur="0.5s"
                          begin={i === 0 ? '0s' : `${i / 4}s`}
                          fill="freeze"
                        />
                      </stop>
                    </linearGradient>
                  )}
                <g
                  transform="translate(-1161.000000, -558.000000)"
                  fill={
                    (highlight &&
                      `${
                        (item < highlight - 1 || item === highlight - 1) &&
                        !isIE
                          ? `url(#${id}-${i})`
                          : (item < highlight - 1 || item === highlight - 1) &&
                            isIE
                          ? colors.midnight
                          : colors['light-gray']
                      }`) ||
                    colors['light-gray']
                  }
                >
                  <g transform="translate(437.000000, 475.000000)">
                    <g transform="translate(340.000000, 83.000000)">
                      <g transform="translate(384.000000, 0.000000)">
                        <polygon points="21 6.66002593 21 3 25 3 25 11.1000432 30 16.6500648 25.3846154 16.6500648 25.3846154 30 4.61538462 30 4.62306431 16.6500648 0 16.6500648 15 0" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        );
      })}
    </Fragment>
  );
};

HouseIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  id: 'uic--house-icon',
  houses: 10,
};

export default detectBrowser(HouseIcon);
export {HouseIcon as PureHouseIcon};
