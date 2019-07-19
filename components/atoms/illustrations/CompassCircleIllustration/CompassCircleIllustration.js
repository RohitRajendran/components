/** @module CompassCircleIllustration */
import PropTypes from 'prop-types';
import React, {memo} from 'react';

const CompassCircleIllustration = ({
  className,
  style,
  width,
  height,
  isAnimated,
  animationDuration,
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
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 140 140"
    >
      <defs>
        <style>{`.compass-illustration-1{fill:none;}.compass-illustration-2{fill:#fde5cb;}.compass-illustration-3{fill:#f17732;}.compass-illustration-4{fill:#99052e;}.compass-illustration-5{fill:#10004c;}.compass-illustration-6{fill:#5fcbeb;}.compass-illustration-7{fill:#2870b5;}.compass-illustration-8{fill:#feca1e;}.compass-illustration-9{fill:url(#_4-dot);}.compass-illustration-10{fill:url(#_5-dot);}.compass-illustration-11{fill:#f8f7f4;}.compass-illustration-12{fill:url(#_2-dot);}.compass-illustration-13{clip-path:url(#clip-path);}`}</style>
        <pattern
          id="_4-dot"
          data-name="4-dot"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
        >
          <rect className="compass-illustration-1" width="4" height="4" />
          <circle className="compass-illustration-3" cx="3" cy="4" r="0.35" />
          <circle className="compass-illustration-3" cx="1" cy="4" r="0.35" />
          <circle className="compass-illustration-3" cx="4" cy="2" r="0.35" />
          <circle className="compass-illustration-3" cx="2" cy="2" r="0.35" />
          <circle className="compass-illustration-3" cy="2" r="0.35" />
          <circle className="compass-illustration-3" cx="3" r="0.35" />
          <circle className="compass-illustration-3" cx="1" r="0.35" />
        </pattern>
        <pattern
          id="_5-dot"
          data-name="5-dot"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
        >
          <rect className="compass-illustration-1" width="4" height="4" />
          <circle className="compass-illustration-4" cx="3" cy="4" r="0.35" />
          <circle className="compass-illustration-4" cx="1" cy="4" r="0.35" />
          <circle className="compass-illustration-4" cx="4" cy="2" r="0.35" />
          <circle className="compass-illustration-4" cx="2" cy="2" r="0.35" />
          <circle className="compass-illustration-4" cy="2" r="0.35" />
          <circle className="compass-illustration-4" cx="3" r="0.35" />
          <circle className="compass-illustration-4" cx="1" r="0.35" />
        </pattern>
        <pattern
          id="_2-dot"
          data-name="2-dot"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
        >
          <rect className="compass-illustration-1" width="4" height="4" />
          <circle className="compass-illustration-2" cx="3" cy="4" r="0.35" />
          <circle className="compass-illustration-2" cx="1" cy="4" r="0.35" />
          <circle className="compass-illustration-2" cx="4" cy="2" r="0.35" />
          <circle className="compass-illustration-2" cx="2" cy="2" r="0.35" />
          <circle className="compass-illustration-2" cy="2" r="0.35" />
          <circle className="compass-illustration-2" cx="3" r="0.35" />
          <circle className="compass-illustration-2" cx="1" r="0.35" />
        </pattern>
        <clipPath id="clip-path">
          <circle
            className="compass-illustration-1"
            cx="70"
            cy="69.8"
            r="44.34"
          />
        </clipPath>
      </defs>
      <g id="Circle-BG">
        <circle className="compass-illustration-5" cx="70" cy="70" r="70" />
      </g>
      <g id="_404" data-name="404">
        <circle className="compass-illustration-6" cx="70" cy="19.71" r="5.9" />
        <circle
          className="compass-illustration-5"
          cx="70"
          cy="19.71"
          r="3.26"
        />
        <circle
          className="compass-illustration-6"
          cx="70"
          cy="69.8"
          r="46.22"
        />
        <path
          className="compass-illustration-7"
          d="M108.9,94.78a46.23,46.23,0,1,1-68.36-60.6C44.43,75.69,75.9,93.83,108.9,94.78Z"
        />
        <circle
          className="compass-illustration-8"
          cx="70"
          cy="69.8"
          r="44.34"
        />
        <path
          className="compass-illustration-3"
          d="M40.8,36.44a44.34,44.34,0,1,0,65.91,58.24C75.13,93,45.5,75.44,40.8,36.44Z"
        />
        <circle
          className="compass-illustration-9"
          cx="70"
          cy="69.8"
          r="44.34"
        />
        <path
          className="compass-illustration-10"
          d="M40.8,36.44a44.34,44.34,0,1,0,65.91,58.24C75.13,93,45.5,75.44,40.8,36.44Z"
        />
        <circle
          className="compass-illustration-11"
          cx="70"
          cy="69.8"
          r="37.88"
        />
        <circle
          className="compass-illustration-12"
          cx="70"
          cy="69.8"
          r="37.88"
        />
        <circle
          className="compass-illustration-12"
          cx="69.98"
          cy="69.8"
          r="37.88"
        />
        <path
          className="compass-illustration-2"
          d="M42.11,44.16A37.88,37.88,0,1,0,99.16,94C72.67,90.37,48.93,74.88,42.11,44.16Z"
        />
        <polygon
          className="compass-illustration-8"
          points="70 37.7 74.19 70 65.81 70 70 37.7"
        />
        <polygon
          className="compass-illustration-8"
          points="70 101.92 74.19 70 65.81 70 70 101.92"
        />
        <polygon
          className="compass-illustration-8"
          points="37.89 69.81 70.19 65.63 70.19 74 37.89 69.81"
        />
        <polygon
          className="compass-illustration-8"
          points="102.11 69.81 70.19 65.63 70.19 74 102.11 69.81"
        />
        <polygon
          className="compass-illustration-8"
          points="56.23 56.04 71.88 68.1 68.29 71.69 56.23 56.04"
        />
        <polygon
          className="compass-illustration-8"
          points="83.77 83.58 71.88 68.1 68.29 71.69 83.77 83.58"
        />
        <polygon
          className="compass-illustration-8"
          points="56.23 83.58 68.29 67.94 71.88 71.53 56.23 83.58"
        />
        <path
          className="compass-illustration-3"
          d="M55.9,72.15c-1.18-1.35-2.29-2.76-3.36-4.24l-14.65,1.9Z"
        />
        <path
          className="compass-illustration-3"
          d="M72.19,85.24c-1.63-.91-3.22-1.88-4.76-2.93L70,101.92Z"
        />
        <path
          className="compass-illustration-3"
          d="M62.6,78.68c-.53-.44-1.05-.88-1.56-1.34l-4.81,6.24Z"
        />
        <polygon
          className="compass-illustration-8"
          points="83.77 56.04 68.29 67.94 71.88 71.53 83.77 56.04"
        />
        <circle
          className="compass-illustration-5"
          cx="69.98"
          cy="69.8"
          r="5.89"
        />
        <path
          className="compass-illustration-3"
          d="M70,36a1,1,0,0,1-1-1V29.21a1,1,0,0,1,2,0V35A1,1,0,0,1,70,36Z"
        />
        <path
          className="compass-illustration-3"
          d="M59.55,37.62A1,1,0,0,1,58.29,37l-1.78-5.47a1,1,0,1,1,1.9-.62l1.78,5.47A1,1,0,0,1,59.55,37.62Z"
        />
        <path
          className="compass-illustration-3"
          d="M50.11,42.43a1,1,0,0,1-1.39-.22l-3.39-4.66A1,1,0,0,1,47,36.37L50.34,41A1,1,0,0,1,50.11,42.43Z"
        />
        <path
          className="compass-illustration-4"
          d="M42.63,49.91a1,1,0,0,1-1.4.22l-4.65-3.38a1,1,0,0,1,1.17-1.62l4.66,3.38A1,1,0,0,1,42.63,49.91Z"
        />
        <path
          className="compass-illustration-4"
          d="M37.82,59.34a1,1,0,0,1-1.26.64l-5.47-1.77a1,1,0,0,1,.62-1.91l5.47,1.78A1,1,0,0,1,37.82,59.34Z"
        />
        <path
          className="compass-illustration-4"
          d="M36.17,69.8a1,1,0,0,1-1,1H29.41a1,1,0,1,1,0-2h5.76A1,1,0,0,1,36.17,69.8Z"
        />
        <path
          className="compass-illustration-4"
          d="M37.82,80.25a1,1,0,0,1-.64,1.26l-5.47,1.78a1,1,0,0,1-.62-1.9l5.47-1.78A1,1,0,0,1,37.82,80.25Z"
        />
        <path
          className="compass-illustration-4"
          d="M42.63,89.68a1,1,0,0,1-.22,1.4l-4.66,3.38a1,1,0,0,1-1.39-.22,1,1,0,0,1,.22-1.4l4.65-3.38A1,1,0,0,1,42.63,89.68Z"
        />
        <path
          className="compass-illustration-4"
          d="M50.11,97.17a1,1,0,0,1,.23,1.39L47,103.22a1,1,0,0,1-1.39.22,1,1,0,0,1-.23-1.39l3.39-4.66A1,1,0,0,1,50.11,97.17Z"
        />
        <path
          className="compass-illustration-4"
          d="M59.55,102a1,1,0,0,1,.64,1.26l-1.78,5.48a1,1,0,1,1-1.9-.62l1.78-5.48A1,1,0,0,1,59.55,102Z"
        />
        <path
          className="compass-illustration-4"
          d="M70,103.63a1,1,0,0,1,1,1v5.75a1,1,0,0,1-2,0v-5.75A1,1,0,0,1,70,103.63Z"
        />
        <path
          className="compass-illustration-4"
          d="M80.45,102a1,1,0,0,1,1.26.64l1.78,5.48a1,1,0,0,1-1.9.62l-1.78-5.48A1,1,0,0,1,80.45,102Z"
        />
        <path
          className="compass-illustration-4"
          d="M89.89,97.17a1,1,0,0,1,1.39.22l3.39,4.66a1,1,0,0,1-.23,1.39,1,1,0,0,1-1.39-.22l-3.39-4.66A1,1,0,0,1,89.89,97.17Z"
        />
        <path
          className="compass-illustration-3"
          d="M97.37,89.68a1,1,0,0,1,1.4-.22l4.65,3.38a1,1,0,0,1,.22,1.4,1,1,0,0,1-1.39.22l-4.66-3.38A1,1,0,0,1,97.37,89.68Z"
        />
        <path
          className="compass-illustration-3"
          d="M102.18,80.25a1,1,0,0,1,1.26-.64l5.47,1.78a1,1,0,1,1-.62,1.9l-5.47-1.78A1,1,0,0,1,102.18,80.25Z"
        />
        <path
          className="compass-illustration-3"
          d="M103.83,69.8a1,1,0,0,1,1-1h5.76a1,1,0,0,1,0,2h-5.76A1,1,0,0,1,103.83,69.8Z"
        />
        <path
          className="compass-illustration-3"
          d="M102.18,59.34a1,1,0,0,1,.64-1.26l5.47-1.78a1,1,0,0,1,.62,1.91L103.44,60A1,1,0,0,1,102.18,59.34Z"
        />
        <path
          className="compass-illustration-3"
          d="M97.37,49.91a1,1,0,0,1,.22-1.4l4.66-3.38a1,1,0,0,1,1.17,1.62l-4.65,3.38A1,1,0,0,1,97.37,49.91Z"
        />
        <path
          className="compass-illustration-3"
          d="M89.89,42.43a1,1,0,0,1-.23-1.4l3.39-4.66a1,1,0,0,1,1.62,1.18l-3.39,4.66A1,1,0,0,1,89.89,42.43Z"
        />
        <path
          className="compass-illustration-3"
          d="M80.45,37.62a1,1,0,0,1-.64-1.26l1.78-5.47a1,1,0,1,1,1.9.62L81.71,37A1,1,0,0,1,80.45,37.62Z"
        />

        <g className="compass-illustration-13">
          {isAnimated && (
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 69.98 69.98"
              to="360 69.98 69.98"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          )}
          <path
            className="compass-illustration-5"
            d="M83.47,48.26c1.21-7,4.38-13.15,3.88-13.4S84,40.92,79,46.05a14,14,0,0,0-4,9.6L63.24,81.81l1.27.63L78.2,57.27A14.43,14.43,0,0,0,83.47,48.26Z"
          />
        </g>
      </g>
    </svg>
  );
};

CompassCircleIllustration.propTypes = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width: PropTypes.string,
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height: PropTypes.string,
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** Determines if the illustration should be animated or not. */
  isAnimated: PropTypes.bool,
  /** Determines the animation duration in seconds. */
  animationDuration: PropTypes.number,
};

CompassCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  isAnimated: false,
  animationDuration: 10,
};

export default memo(CompassCircleIllustration);
