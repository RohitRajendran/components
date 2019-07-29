/** @module HealthMeterCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a health meter illustration. */
class HealthMeterCircleIllustration extends PureComponent {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      illuminated: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /** Click handler which toggles the illustration easter egg.
   * @returns {undefined}
   */
  handleClick() {
    this.setState({illuminated: !this.state.illuminated});
  }

  /** @inheritdoc */
  render() {
    const {illuminate, width, height, className, style} = this.props;

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
      onClick: this.handleClick,
    };

    if (illuminate || this.state.illuminated) {
      return (
        <svg
          {...elementProps}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 140 140"
        >
          <defs>
            <style>{`.health-meter-circle-1{fill:none;}.health-meter-circle-2{fill:#fde5cb;}.health-meter-circle-3{fill:#f17732;}.health-meter-circle-4{fill:#99052e;}.health-meter-circle-5{fill:#10004c;}.health-meter-circle-6{fill:#5fcbeb;}.health-meter-circle-7{fill:#2870b5;}.health-meter-circle-8{fill:#feca1e;}.health-meter-circle-9{fill:url(#_4-dot);}.health-meter-circle-10{fill:url(#_5-dot);}.health-meter-circle-11{fill:#f8f7f4;}.health-meter-circle-12{fill:url(#_2-dot);}`}</style>
            <pattern
              data-name="4-dot"
              width="4"
              height="4"
              patternTransform="translate(-38 5.63)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="health-meter-circle-1" width="4" height="4" />
              <circle
                className="health-meter-circle-3"
                cx="3"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-3"
                cx="1"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-3"
                cx="4"
                cy="2"
                r="0.35"
              />
              <circle
                className="health-meter-circle-3"
                cx="2"
                cy="2"
                r="0.35"
              />
              <circle className="health-meter-circle-3" cy="2" r="0.35" />
              <circle className="health-meter-circle-3" cx="3" r="0.35" />
              <circle className="health-meter-circle-3" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="5-dot"
              width="4"
              height="4"
              patternTransform="translate(-38 5.63)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="health-meter-circle-1" width="4" height="4" />
              <circle
                className="health-meter-circle-4"
                cx="3"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-4"
                cx="1"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-4"
                cx="4"
                cy="2"
                r="0.35"
              />
              <circle
                className="health-meter-circle-4"
                cx="2"
                cy="2"
                r="0.35"
              />
              <circle className="health-meter-circle-4" cy="2" r="0.35" />
              <circle className="health-meter-circle-4" cx="3" r="0.35" />
              <circle className="health-meter-circle-4" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="2-dot"
              width="4"
              height="4"
              patternTransform="translate(-38 5.63)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="health-meter-circle-1" width="4" height="4" />
              <circle
                className="health-meter-circle-2"
                cx="3"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-2"
                cx="1"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-2"
                cx="4"
                cy="2"
                r="0.35"
              />
              <circle
                className="health-meter-circle-2"
                cx="2"
                cy="2"
                r="0.35"
              />
              <circle className="health-meter-circle-2" cy="2" r="0.35" />
              <circle className="health-meter-circle-2" cx="3" r="0.35" />
              <circle className="health-meter-circle-2" cx="1" r="0.35" />
            </pattern>
          </defs>

          <g>
            <circle className="health-meter-circle-5" cx="70" cy="70" r="70" />
            <circle className="health-meter-circle-5" cx="70" cy="70" r="70" />
          </g>
          <g>
            <path
              className="health-meter-circle-6"
              d="M119.6,46.33c-.57.75-4.32,8.22-9.42,2.83a56,56,0,0,0-96,34.92c-.15,2.18,1.54,5.31,3.73,5.31H122.1c2.19,0,3-2.18,3.73-5.31.66-2.8,3-3.12,4.9-1.22,1.14,1.13,2.06-.31,1.4-1C128.73,78,124.89,80,124,84c-.55,2.38-1.48,3.91-3.6,3.91H19.63A3.62,3.62,0,0,1,16,84a54.11,54.11,0,0,1,93-33.55c6.56,7.12,11.79-2.69,12.15-3.38A.88.88,0,0,0,119.6,46.33Z"
            />
            <path
              className="health-meter-circle-7"
              d="M32.78,46.33A55.87,55.87,0,0,0,14.17,84.08c-.15,2.18,1.54,5.31,3.73,5.31H122.1a3.09,3.09,0,0,0,2.25-1.18C96.09,86.29,41.47,76.58,32.78,46.33Z"
            />
            <path
              className="health-meter-circle-8"
              d="M70,33.77A54.11,54.11,0,0,0,16,84a3.62,3.62,0,0,0,3.6,3.91H120.37A3.62,3.62,0,0,0,124,84,54.11,54.11,0,0,0,70,33.77Z"
            />
            <path
              className="health-meter-circle-9"
              d="M70,33.77A54.11,54.11,0,0,0,16,84a3.62,3.62,0,0,0,3.6,3.91H120.37A3.62,3.62,0,0,0,124,84,54.11,54.11,0,0,0,70,33.77Z"
            />
            <circle
              className="health-meter-circle-7"
              cx="70"
              cy="85.18"
              r="7.62"
            />
            <path
              className="health-meter-circle-3"
              d="M33.27,48.15A53.94,53.94,0,0,0,16,84a3.62,3.62,0,0,0,3.6,3.91H120.37C75.89,85.18,41.22,71.26,33.27,48.15Z"
            />
            <path
              className="health-meter-circle-10"
              d="M33.27,48.15A53.94,53.94,0,0,0,16,84a3.62,3.62,0,0,0,3.6,3.91H120.37C75.89,85.18,41.22,71.26,33.27,48.15Z"
            />
            <path
              className="health-meter-circle-11"
              d="M115.08,82.75a2.77,2.77,0,0,0,2.75-3.22,48.55,48.55,0,0,0-95.66,0,2.77,2.77,0,0,0,2.75,3.22Z"
            />
            <path
              className="health-meter-circle-12"
              d="M115.08,82.75a2.77,2.77,0,0,0,2.75-3.22,48.55,48.55,0,0,0-95.66,0,2.77,2.77,0,0,0,2.75,3.22Z"
            />
            <path
              className="health-meter-circle-2"
              d="M24.92,82.75H84.6c-23.55-5.69-41.26-15.6-48.9-29.23a48.46,48.46,0,0,0-13.53,26A2.77,2.77,0,0,0,24.92,82.75Z"
            />
            <rect
              className="health-meter-circle-5"
              x="85.13"
              y="65.26"
              width="2.26"
              height="28.14"
              transform="translate(131.7 -28.69) rotate(70.21)"
            />
            <path
              className="health-meter-circle-4"
              d="M122.23,82.21C114.47,85,96.52,75.6,96.52,75.6s7.84-18.69,15.6-21.48,14.32,6.62,7.88,13C129.06,67.66,130,79.42,122.23,82.21Z"
            />
            <path
              className="health-meter-circle-5"
              d="M122.23,82.21C114.47,85,96.52,75.6,96.52,75.6s1-2.4,2.65-5.6c5.45,7.56,19.54,11.73,24,11.82A6.87,6.87,0,0,1,122.23,82.21Z"
            />
            <circle
              className="health-meter-circle-5"
              cx="70"
              cy="85.18"
              r="5.89"
            />
            <rect
              className="health-meter-circle-3"
              x="68.85"
              y="35.79"
              width="2.29"
              height="6.89"
              rx="0.98"
            />
            <rect
              className="health-meter-circle-3"
              x="53.86"
              y="38.17"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(-10.17 19.03) rotate(-18)"
            />
            <rect
              className="health-meter-circle-3"
              x="40.32"
              y="45.06"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(-20.59 33.64) rotate(-36)"
            />
            <rect
              className="health-meter-circle-4"
              x="29.59"
              y="55.8"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(-35.26 49.29) rotate(-54)"
            />
            <rect
              className="health-meter-circle-4"
              x="22.69"
              y="69.33"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(-52.74 72.96) rotate(-72)"
            />
            <rect
              className="health-meter-circle-3"
              x="131.13"
              y="64.93"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(186.77 -70.2) rotate(84.13)"
            />
            <rect
              className="health-meter-circle-3"
              x="126.03"
              y="49.61"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(78.35 -75.81) rotate(46.61)"
            />
            <rect
              className="health-meter-circle-3"
              x="97.38"
              y="45.06"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(47.33 -48.65) rotate(36)"
            />
            <rect
              className="health-meter-circle-3"
              x="83.85"
              y="38.17"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(17.02 -24.23) rotate(18)"
            />
          </g>
        </svg>
      );
    } else {
      return (
        <svg
          {...elementProps}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 140 140"
        >
          <defs>
            <style>{`.health-meter-circle-1{fill:none;}.health-meter-circle-2{fill:#fde5cb;}.health-meter-circle-3{fill:#f17732;}.health-meter-circle-4{fill:#99052e;}.health-meter-circle-5{fill:#10004c;}.health-meter-circle-6{fill:#5fcbeb;}.health-meter-circle-7{fill:#2870b5;}.health-meter-circle-8{fill:#feca1e;}.health-meter-circle-9{fill:url(#_4-dot);}.health-meter-circle-10{fill:url(#_5-dot);}.health-meter-circle-11{fill:#f8f7f4;}.health-meter-circle-12{fill:url(#_2-dot);}`}</style>
            <pattern
              data-name="4-dot"
              width="4"
              height="4"
              patternTransform="translate(-22 21.63)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="health-meter-circle-1" width="4" height="4" />
              <circle
                className="health-meter-circle-3"
                cx="3"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-3"
                cx="1"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-3"
                cx="4"
                cy="2"
                r="0.35"
              />
              <circle
                className="health-meter-circle-3"
                cx="2"
                cy="2"
                r="0.35"
              />
              <circle className="health-meter-circle-3" cy="2" r="0.35" />
              <circle className="health-meter-circle-3" cx="3" r="0.35" />
              <circle className="health-meter-circle-3" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="5-dot"
              width="4"
              height="4"
              patternTransform="translate(-22 21.63)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="health-meter-circle-1" width="4" height="4" />
              <circle
                className="health-meter-circle-4"
                cx="3"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-4"
                cx="1"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-4"
                cx="4"
                cy="2"
                r="0.35"
              />
              <circle
                className="health-meter-circle-4"
                cx="2"
                cy="2"
                r="0.35"
              />
              <circle className="health-meter-circle-4" cy="2" r="0.35" />
              <circle className="health-meter-circle-4" cx="3" r="0.35" />
              <circle className="health-meter-circle-4" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="2-dot"
              width="4"
              height="4"
              patternTransform="translate(-22 21.63)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="health-meter-circle-1" width="4" height="4" />
              <circle
                className="health-meter-circle-2"
                cx="3"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-2"
                cx="1"
                cy="4"
                r="0.35"
              />
              <circle
                className="health-meter-circle-2"
                cx="4"
                cy="2"
                r="0.35"
              />
              <circle
                className="health-meter-circle-2"
                cx="2"
                cy="2"
                r="0.35"
              />
              <circle className="health-meter-circle-2" cy="2" r="0.35" />
              <circle className="health-meter-circle-2" cx="3" r="0.35" />
              <circle className="health-meter-circle-2" cx="1" r="0.35" />
            </pattern>
          </defs>

          <g>
            <circle className="health-meter-circle-5" cx="70" cy="70" r="70" />
            <circle className="health-meter-circle-5" cx="70" cy="70" r="70" />
          </g>
          <g>
            <path
              className="health-meter-circle-6"
              d="M70,32.15A56,56,0,0,0,14.17,84.08c-.15,2.18,1.54,5.31,3.73,5.31H122.1c2.19,0,3.88-3.13,3.73-5.31A56,56,0,0,0,70,32.15Z"
            />
            <path
              className="health-meter-circle-7"
              d="M32.78,46.33A55.87,55.87,0,0,0,14.17,84.08c-.15,2.18,1.54,5.31,3.73,5.31H122.1a3.09,3.09,0,0,0,2.25-1.18C96.09,86.29,41.47,76.58,32.78,46.33Z"
            />
            <path
              className="health-meter-circle-8"
              d="M70,33.77A54.11,54.11,0,0,0,16,84a3.62,3.62,0,0,0,3.6,3.91H120.37A3.62,3.62,0,0,0,124,84,54.11,54.11,0,0,0,70,33.77Z"
            />
            <path
              className="health-meter-circle-9"
              d="M70,33.77A54.11,54.11,0,0,0,16,84a3.62,3.62,0,0,0,3.6,3.91H120.37A3.62,3.62,0,0,0,124,84,54.11,54.11,0,0,0,70,33.77Z"
            />
            <circle
              className="health-meter-circle-7"
              cx="70"
              cy="85.18"
              r="7.62"
            />
            <path
              className="health-meter-circle-3"
              d="M33.27,48.15A53.94,53.94,0,0,0,16,84a3.62,3.62,0,0,0,3.6,3.91H120.37C75.89,85.18,41.22,71.26,33.27,48.15Z"
            />
            <path
              className="health-meter-circle-10"
              d="M33.27,48.15A53.94,53.94,0,0,0,16,84a3.62,3.62,0,0,0,3.6,3.91H120.37C75.89,85.18,41.22,71.26,33.27,48.15Z"
            />
            <path
              className="health-meter-circle-11"
              d="M115.08,82.75a2.77,2.77,0,0,0,2.75-3.22,48.55,48.55,0,0,0-95.66,0,2.77,2.77,0,0,0,2.75,3.22Z"
            />
            <path
              className="health-meter-circle-12"
              d="M115.08,82.75a2.77,2.77,0,0,0,2.75-3.22,48.55,48.55,0,0,0-95.66,0,2.77,2.77,0,0,0,2.75,3.22Z"
            />
            <path
              className="health-meter-circle-2"
              d="M24.92,82.75H84.6c-23.55-5.69-41.26-15.6-48.9-29.23a48.46,48.46,0,0,0-13.53,26A2.77,2.77,0,0,0,24.92,82.75Z"
            />
            <rect
              className="health-meter-circle-5"
              x="78.68"
              y="60.41"
              width="2.26"
              height="25.01"
              transform="translate(63.03 -33.88) rotate(38.65)"
            />
            <path
              className="health-meter-circle-4"
              d="M100.71,61.52c-3.17,4-15.63,4.81-15.63,4.81S83.17,54,86.34,50a4.77,4.77,0,0,1,8.34,4.31C99.6,51.67,103.88,57.55,100.71,61.52Z"
            />
            <path
              className="health-meter-circle-5"
              d="M96.51,64.1a49.2,49.2,0,0,1-11.43,2.23,54.25,54.25,0,0,1-.55-9.08C86.78,64.48,93.94,64.16,96.51,64.1Z"
            />
            <circle
              className="health-meter-circle-5"
              cx="70"
              cy="85.18"
              r="5.89"
            />
            <rect
              className="health-meter-circle-3"
              x="68.85"
              y="35.79"
              width="2.29"
              height="6.89"
              rx="0.98"
            />
            <rect
              className="health-meter-circle-3"
              x="53.86"
              y="38.17"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(-10.17 19.03) rotate(-18)"
            />
            <rect
              className="health-meter-circle-3"
              x="40.32"
              y="45.06"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="matrix(0.81, -0.59, 0.59, 0.81, -20.59, 33.64)"
            />
            <rect
              className="health-meter-circle-4"
              x="29.59"
              y="55.8"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(-35.26 49.29) rotate(-54)"
            />
            <rect
              className="health-meter-circle-4"
              x="22.69"
              y="69.33"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(-52.74 72.96) rotate(-72)"
            />
            <rect
              className="health-meter-circle-3"
              x="115.02"
              y="69.33"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(149.48 -60.19) rotate(72)"
            />
            <rect
              className="health-meter-circle-3"
              x="108.12"
              y="55.8"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(92.97 -63.98) rotate(54)"
            />
            <rect
              className="health-meter-circle-3"
              x="97.38"
              y="45.06"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(47.33 -48.65) rotate(36)"
            />
            <rect
              className="health-meter-circle-3"
              x="83.85"
              y="38.17"
              width="2.29"
              height="6.89"
              rx="0.98"
              transform="translate(17.02 -24.23) rotate(18)"
            />
          </g>
        </svg>
      );
    }
  }
}

HealthMeterCircleIllustration.propTypes = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width: PropTypes.string,
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height: PropTypes.string,
  /** Determines if the illustration should default to the illuminated state. */
  illuminate: PropTypes.bool,
  /** Determines if the color variant should be shown or not. */
  color: PropTypes.bool,
  /** Determines if the draft variant should be shown or not. */
  draft: PropTypes.bool,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional inline styles to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

HealthMeterCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
};

export default HealthMeterCircleIllustration;
