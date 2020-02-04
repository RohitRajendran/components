/** @module Spinner */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import detectBrowser from '~components/utilities/DetectBrowser/DetectBrowser';

/** Displays the Spinner component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the Spinner component.
 */
const Spinner = (props) => {
  const {width, height, fill, style, isIe, className} = props;

  const containerClasses = classNames(
    {
      [`spinner-${isIe ? 'ie' : 'normal'}`]: true,
    },
    className,
  );
  if (isIe) {
    return (
      <svg
        className={containerClasses}
        width={width}
        height={height}
        viewBox={`0 0 100 100`}
        preserveAspectRatio="xMidYMid"
        style={style}
      >
        <rect x="0" y="0" width="100" height="100" fill="none" />
        <rect
          x="45"
          y="45"
          width="10"
          height="10"
          rx="6"
          ry="6"
          fill={fill}
          opacity="1"
          transform="rotate(0 50 50) translate(0 -30)"
        />
        <rect
          x="45"
          y="45"
          width="10"
          height="10"
          rx="6"
          ry="6"
          fill={fill}
          opacity=".9"
          transform="rotate(45 50 50) translate(0 -30)"
        />
        <rect
          x="45"
          y="45"
          width="10"
          height="10"
          rx="6"
          ry="6"
          fill={fill}
          opacity=".8"
          transform="rotate(90 50 50) translate(0 -30)"
        />
        <rect
          x="45"
          y="45"
          width="10"
          height="10"
          rx="6"
          ry="6"
          fill={fill}
          opacity=".7"
          transform="rotate(135 50 50) translate(0 -30)"
        />
        <rect
          x="45"
          y="45"
          width="10"
          height="10"
          rx="6"
          ry="6"
          fill={fill}
          opacity=".5"
          transform="rotate(180 50 50) translate(0 -30)"
        />
        <rect
          x="45"
          y="45"
          width="10"
          height="10"
          rx="6"
          ry="6"
          fill={fill}
          opacity=".3"
          transform="rotate(225 50 50) translate(0 -30)"
        />
        <rect
          x="45"
          y="45"
          width="10"
          height="10"
          rx="6"
          ry="6"
          fill={fill}
          opacity=".2"
          transform="rotate(270 50 50) translate(0 -30)"
        />
        <rect
          x="45"
          y="45"
          width="10"
          height="10"
          rx="6"
          ry="6"
          fill={fill}
          opacity=".1"
          transform="rotate(315 50 50) translate(0 -30)"
        />
      </svg>
    );
  }

  return (
    <svg
      className={containerClasses}
      width={width}
      height={height}
      viewBox={`0 0 100 100`}
      preserveAspectRatio="xMidYMid"
      style={style}
    >
      <rect x="0" y="0" width="100" height="100" fill="none" />
      <rect
        x="45"
        y="45"
        width="10"
        height="10"
        rx="6"
        ry="6"
        fill={fill}
        transform="rotate(0 50 50) translate(0 -30)"
      >
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="45"
        y="45"
        width="10"
        height="10"
        rx="6"
        ry="6"
        fill={fill}
        transform="rotate(45 50 50) translate(0 -30)"
      >
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="1s"
          begin="0.125s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="45"
        y="45"
        width="10"
        height="10"
        rx="6"
        ry="6"
        fill={fill}
        transform="rotate(90 50 50) translate(0 -30)"
      >
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="1s"
          begin="0.25s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="45"
        y="45"
        width="10"
        height="10"
        rx="6"
        ry="6"
        fill={fill}
        transform="rotate(135 50 50) translate(0 -30)"
      >
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="1s"
          begin="0.375s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="45"
        y="45"
        width="10"
        height="10"
        rx="6"
        ry="6"
        fill={fill}
        transform="rotate(180 50 50) translate(0 -30)"
      >
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="1s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="45"
        y="45"
        width="10"
        height="10"
        rx="6"
        ry="6"
        fill={fill}
        transform="rotate(225 50 50) translate(0 -30)"
      >
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="1s"
          begin="0.625s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="45"
        y="45"
        width="10"
        height="10"
        rx="6"
        ry="6"
        fill={fill}
        transform="rotate(270 50 50) translate(0 -30)"
      >
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="1s"
          begin="0.75s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="45"
        y="45"
        width="10"
        height="10"
        rx="6"
        ry="6"
        fill={fill}
        transform="rotate(315 50 50) translate(0 -30)"
      >
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="1s"
          begin="0.875s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

Spinner.propTypes = {
  /** The width of the spinner. */
  width: PropTypes.string,
  /** The height of the spinner. */
  height: PropTypes.string,
  /** The color of the spinner. */
  fill: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** Prevents animation playback, applicable for users on Internet Explorer. */
  isIe: PropTypes.bool,
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
};

Spinner.defaultProps = {
  width: '20',
  height: '20',
  fill: '#ffffff',
};

export default detectBrowser(Spinner);
export {Spinner as PureSpinner};
