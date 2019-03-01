import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {disallowedIf} from 'airbnb-prop-types';
import {colors} from '../../constants/colors';
import detectIe from '../DetectIe';
import _ from 'lodash';
import * as d3Shape from 'd3-shape';
import * as d3Scale from 'd3-scale';
import * as d3Interpolate from 'd3-interpolate';

import './style.scss';

/** Accepts a percent and returns a string representing how high your chance of success is.
 * @param {integer} percent - The Chance of Success percent.
 * @returns {string} - Returns a string with the likely hood of success.
 */
export const percentDescriptor = (percent) => {
  if (percent > 84) {
    return 'Very High';
  } else if (percent > 69) {
    return 'High';
  } else if (percent > 49) {
    return 'Moderate';
  } else if (percent > 29) {
    return 'Low';
  } else {
    return 'Very Low';
  }
};

/** Accepts a percent and returns true or false if the percent is in range.
 * @param {integer} percent - The Chance of Success percent.
 * @returns {boolean} - Returns true or false if the percent is in range.
 */
export const percentIsValid = (percent) =>
  percent !== null && percent >= 0 && percent <= 100;

/** Displays the ChanceOfSuccess metre.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the ChanceOfSuccess component.
 */
const ChanceOfSuccess = (props) => {
  const {
    currentPlanChanceOfSuccess,
    refreshedPlanChanceOfSuccess,
    identifier,
    percent,
    isRunningPlan,
    className,
    isDraftPlan,
    compact,
    isIe,
  } = props;

  const refreshedPlanChanceOfSuccessDifference =
    (currentPlanChanceOfSuccess && refreshedPlanChanceOfSuccess) !== null
      ? Math.abs(currentPlanChanceOfSuccess - refreshedPlanChanceOfSuccess)
      : null;

  const diameter = compact ? 74 : 135;
  const radius = diameter / 2;
  const thickness = compact ? 4 : 6;
  const circleRadius = compact ? 5 : 10;
  const svgSize = diameter + 2 * (circleRadius - thickness / 2);
  const arc = d3Shape
    .arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius)
    .cornerRadius(thickness / 2);
  const min = 0;
  const max = 100;
  const numPaths = 20;

  const angleScale = d3Scale
    .scaleLinear()
    .domain([min, max])
    .range([-0.75 * Math.PI, 0.75 * Math.PI]);

  const colorArray = isDraftPlan
    ? [colors.gunmetal, colors.white]
    : [
        colors.dangerRed,
        '#B34D00',
        '#C76501',
        '#ED9403',
        '#6BB508',
        colors.safeGreen,
      ];
  const colorScale = d3Scale
    .scaleSequential(d3Interpolate.interpolateRgbBasis(colorArray))
    .domain([min, max]);

  const step = (max - min) / numPaths;
  const percentageRange = _.range(min, max, step);

  const circleTheta = angleScale(50);
  const arcRadiusForCircle = radius - thickness / 2;

  let percentageText = percent;
  let percentageSize = compact ? '3.2rem' : '4.4rem';
  const isPercentageValid = percentIsValid(percent);

  if (!isPercentageValid) {
    percentageText = 'TBD';
    percentageSize = '4rem';
  }

  // Adds approximate space for the shadow on the indicator circle
  const shadowOffset = 5;

  // Gets the difference between the start and end of the circle (-130 and 130)
  // and then runs a calculation to get the correct degree for the stop animation.
  // Inline styles are provided to map this to the animation.
  const circleRange = 130;
  const circleEndFrame = Math.round(percent * 2.6 - circleRange);

  // For arcs, the coordinate system has 0 at 12 o'clock and pi at 6 o'clock
  // For sin/cos 0 is at 3 o'clock and pi is at 9 o'clock
  // So, must rotate a g element containing the indicator circle
  return (
    <Fragment>
      <style>
        {`
        @keyframes chance-of-success_static-${identifier} {
        0% {
          transform: rotate(-${circleRange}deg);
          fill: #B30052
        }
        
        20% {
          fill: #b34d00;
        }
      
        40% {
          fill: #c76501;
        }
      
        60% {
          fill: #ed9403;
        }
      
        80% {
          fill: #6bb508;
        }
      
        100% {
          transform: rotate(${circleEndFrame}deg);
          fill: $safe-green;
        }
      }
      `}

        {`
      @keyframes chance-of-success_static_draft-${identifier} {
        0% {
          transform: rotate(-${circleRange}deg);
        }

        100% {
          transform: rotate(${circleEndFrame}deg);
        } 
      }

      .chance-of-success_static-${identifier} circle {
        animation: chance-of-success_static-${identifier} 1s cubic-bezier(0.45, 0.05, 0.55, 0.95)
          alternate;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }

      .chance-of-success_static_draft-${identifier} circle {
        animation: chance-of-success_static_draft-${identifier} 1s
          cubic-bezier(0.45, 0.05, 0.55, 0.95) alternate;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }`}
      </style>

      <svg
        viewBox={`${-shadowOffset} 0 ${svgSize + 2 * shadowOffset} ${svgSize}`}
        className={`chance-of-success ${
          isRunningPlan
            ? 'chance-of-success__in-progress'
            : !isDraftPlan
            ? `chance-of-success_static-${identifier}`
            : `chance-of-success_static_draft-${identifier}`
        } ${className || ''}`}
      >
        <defs>
          <filter
            id="circle-shadow"
            x="-20%"
            y="-20%"
            width="200%"
            height="250%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="-2" dy="2" result="offsetblur" />
            <feFlood floodColor="black" floodOpacity="1" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g transform={`translate(${svgSize / 2}, ${svgSize / 2})`}>
          {percentageRange.map((value, index) => {
            // If we are on the last iteration, just use value + step for end angle.
            // Otherwise, extend the end angle a bit to make smooth lines
            const endDomainValue =
              index + 1 === percentageRange.length
                ? value + step
                : value + step + step / 2;
            return (
              <path
                key={value}
                d={arc({
                  startAngle: angleScale(value),
                  endAngle: angleScale(endDomainValue),
                })}
                fill={colorScale(value)}
                id="motionPath"
              />
            );
          })}
          {(isPercentageValid || isRunningPlan) && (
            <g transform="rotate(-90)">
              <circle
                cx={arcRadiusForCircle * Math.cos(circleTheta)}
                cy={arcRadiusForCircle * Math.sin(circleTheta)}
                r={circleRadius}
                fill={colorScale(percent)}
                stroke={colors.slate}
                strokeWidth="1"
                strokeOpacity="0.5"
                filter="url(#circle-shadow)"
                transform={`${
                  isIe && circleEndFrame
                    ? `rotate(${circleEndFrame})`
                    : 'rotate(0)'
                }`}
              />
            </g>
          )}
          <text
            fill={colors.white}
            x="0"
            y={compact ? 9 : 11}
            fontSize={percentageSize}
            textAnchor="middle"
          >
            {percentageText}
          </text>
          {isPercentageValid && !compact && (
            <g>
              {refreshedPlanChanceOfSuccess &&
                currentPlanChanceOfSuccess &&
                !isDraftPlan && (
                  <polygon
                    transform={`translate(-15.000000, 49.000000) scale(1, ${
                      refreshedPlanChanceOfSuccess < currentPlanChanceOfSuccess
                        ? '-1'
                        : '1'
                    }) translate(-6.000000, -11.000000)`}
                    points="6 6 12 16 2.76445533e-14 16"
                    fill={`${
                      refreshedPlanChanceOfSuccess < currentPlanChanceOfSuccess
                        ? '#b70048'
                        : '#009a00'
                    }`}
                  />
                )}
              <text
                fill={colors.white}
                x={`${
                  refreshedPlanChanceOfSuccess &&
                  currentPlanChanceOfSuccess &&
                  !isDraftPlan
                    ? '8'
                    : '0'
                }`}
                y={radius - 14}
                fontSize="1.4rem"
                textAnchor="middle"
              >
                {refreshedPlanChanceOfSuccess &&
                currentPlanChanceOfSuccess &&
                !isDraftPlan
                  ? `${refreshedPlanChanceOfSuccessDifference}%`
                  : percentDescriptor(percent)}
              </text>
            </g>
          )}
        </g>
      </svg>
    </Fragment>
  );
};

ChanceOfSuccess.propTypes = {
  currentPlanChanceOfSuccess: disallowedIf(
    PropTypes.number,
    'isDraftPlan',
    PropTypes.bool
  ),
  refreshedPlanChanceOfSuccess: disallowedIf(
    PropTypes.number,
    'isDraftPlan',
    PropTypes.bool
  ),
  identifier: PropTypes.string,
  percent: PropTypes.number,
  isRunningPlan: PropTypes.bool,
  className: PropTypes.string,
  isDraftPlan: PropTypes.bool,
  compact: PropTypes.bool,
  isIe: PropTypes.bool,
};

export default detectIe(ChanceOfSuccess);
export {ChanceOfSuccess as PureChanceOfSuccess};
