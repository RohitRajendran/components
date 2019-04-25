/** @module ShoppingCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a shopping illustration. */
class ShoppingCircleIllustration extends PureComponent {
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
    const {color, draft, width, height, className, style} = this.props;

    const elementProps = {
      width,
      height,
      className,
      style,
      onClick: this.handleClick,
    };

    if (this.state.illuminated) {
      return (
        <svg
          {...elementProps}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 150 150"
        >
          <defs>
            <style>{`.cls-1{fill:none;}.cls-2{fill:#fde5cb;}.cls-3{fill:#f17732;}.cls-4{fill:#99052e;}.cls-5{fill:#10004c;}.cls-6{fill:#f8f7f4;}.cls-7{fill:url(#_2-dot);}.cls-8{fill:#feca1e;}.cls-9{fill:url(#_4-dot);}.cls-10{fill:url(#_5-dot);}.cls-11{fill:#2870b5;}.cls-12{fill:#5fcbeb;}`}</style>
            <pattern
              id="_2-dot"
              data-name="2-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cls-1" width="4" height="4" />
              <circle className="cls-2" cx="3" cy="4" r="0.35" />
              <circle className="cls-2" cx="1" cy="4" r="0.35" />
              <circle className="cls-2" cx="4" cy="2" r="0.35" />
              <circle className="cls-2" cx="2" cy="2" r="0.35" />
              <circle className="cls-2" cy="2" r="0.35" />
              <circle className="cls-2" cx="3" r="0.35" />
              <circle className="cls-2" cx="1" r="0.35" />
            </pattern>
            <pattern
              id="_4-dot"
              data-name="4-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cls-1" width="4" height="4" />
              <circle className="cls-3" cx="3" cy="4" r="0.35" />
              <circle className="cls-3" cx="1" cy="4" r="0.35" />
              <circle className="cls-3" cx="4" cy="2" r="0.35" />
              <circle className="cls-3" cx="2" cy="2" r="0.35" />
              <circle className="cls-3" cy="2" r="0.35" />
              <circle className="cls-3" cx="3" r="0.35" />
              <circle className="cls-3" cx="1" r="0.35" />
            </pattern>
            <pattern
              id="_5-dot"
              data-name="5-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cls-1" width="4" height="4" />
              <circle className="cls-4" cx="3" cy="4" r="0.35" />
              <circle className="cls-4" cx="1" cy="4" r="0.35" />
              <circle className="cls-4" cx="4" cy="2" r="0.35" />
              <circle className="cls-4" cx="2" cy="2" r="0.35" />
              <circle className="cls-4" cy="2" r="0.35" />
              <circle className="cls-4" cx="3" r="0.35" />
              <circle className="cls-4" cx="1" r="0.35" />
            </pattern>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="cls-5" cx="75" cy="75" r="70" />
          </g>
          <g id="experience-color-2">
            <rect
              className="cls-6"
              x="52.67"
              y="28.34"
              width="24.69"
              height="34.75"
              transform="translate(-10.07 19.66) rotate(-15.98)"
            />
            <polygon
              className="cls-7"
              points="81.66 59.02 57.93 65.82 48.36 32.41 72.1 25.61 81.66 59.02"
            />
            <polygon
              className="cls-8"
              points="72.12 25.61 65.67 27.45 58.28 49.42 81.09 57.09 72.12 25.61"
            />
            <rect
              className="cls-4"
              x="64.21"
              y="23.58"
              width="44.52"
              height="33.8"
              transform="translate(17.34 -25.37) rotate(18.52)"
            />
            <polygon
              className="cls-8"
              points="107.03 45.83 105.11 43.52 103.19 45.83 101.27 43.52 99.36 45.83 97.44 43.52 95.52 45.83 93.6 43.52 91.68 45.83 89.76 43.52 87.84 45.83 85.92 43.52 84 45.83 82.08 43.52 80.16 45.83 78.3 43.59 76.44 45.83 74.52 43.52 72.61 45.83 70.69 43.52 68.77 45.83 66.85 43.52 64.93 45.83 63.01 43.52 61.09 45.83 59.17 43.52 57.25 45.83 55.33 43.52 53.41 45.83 51.49 43.52 51.49 107.01 108.94 107.01 108.94 43.53 107.03 45.83"
            />
            <polygon
              className="cls-9"
              points="107.03 45.83 105.11 43.52 103.19 45.83 101.27 43.52 99.36 45.83 97.44 43.52 95.52 45.83 93.6 43.52 91.68 45.83 89.76 43.52 87.84 45.83 85.92 43.52 84 45.83 82.08 43.52 80.16 45.83 78.3 43.59 76.44 45.83 74.52 43.52 72.61 45.83 70.69 43.52 68.77 45.83 66.85 43.52 64.93 45.83 63.01 43.52 61.09 45.83 59.17 43.52 57.25 45.83 55.33 43.52 53.41 45.83 51.49 43.52 51.49 107.01 108.94 107.01 108.94 43.53 107.03 45.83"
            />
            <path
              className="cls-3"
              d="M51.5,43.52V107h57.44C78.87,107,51.48,75.26,51.5,43.52Z"
            />
            <path
              className="cls-10"
              d="M51.5,43.52V107h57.44C78.87,107,51.48,75.26,51.5,43.52Z"
            />
            <rect
              className="cls-4"
              x="97.26"
              y="75.58"
              width="11.24"
              height="19.48"
              transform="translate(222.86 144.21) rotate(166.47)"
            />
            <path
              className="cls-5"
              d="M107.64,81.09c-2.5.78-4.22,2.41-4.22,4.3,0,2.4,2.78,4.38,6.39,4.72Z"
            />
            <ellipse
              className="cls-11"
              cx="112.21"
              cy="85.48"
              rx="7.49"
              ry="3.87"
            />
            <ellipse
              className="cls-12"
              cx="43.68"
              cy="69.18"
              rx="13.36"
              ry="6.9"
            />
            <rect
              className="cls-12"
              x="97.05"
              y="85.31"
              width="22.65"
              height="25.84"
            />
            <path
              className="cls-11"
              d="M119.7,111.15H97.05V95C97.05,103.09,110.94,111.15,119.7,111.15Z"
            />
            <path
              className="cls-11"
              d="M51.63,63.65,48.76,75.56c4.86-1,8.28-3.5,8.28-6.38C57,66.91,54.91,64.9,51.63,63.65Z"
            />
            <rect
              className="cls-5"
              x="50.72"
              y="54.24"
              width="20.04"
              height="42.86"
              transform="translate(19.38 -12.11) rotate(13.53)"
            />
            <path
              className="cls-6"
              d="M40.15,69.18s0-.08,0-.13c0-7,5.08-12.82,11.36-12.82s11.35,5.85,11.35,12.82v.13h1.3v-.13C64.15,61.28,58.48,55,51.5,55S38.84,61.28,38.84,69.05c0,0,0,.09,0,.13Z"
            />
            <rect
              className="cls-11"
              x="30.33"
              y="69.18"
              width="42.31"
              height="41.96"
            />
            <path
              className="cls-4"
              d="M72.64,111.15H30.33v-42C30.33,92.58,48.25,111.17,72.64,111.15Z"
            />
            <rect
              className="cls-6"
              x="30.33"
              y="76.87"
              width="42.31"
              height="19.08"
            />
            <rect
              className="cls-7"
              x="30.33"
              y="76.87"
              width="42.31"
              height="19.08"
            />
            <path
              className="cls-3"
              d="M31,76.87h-.67V96h9.31A41.41,41.41,0,0,1,31,76.87Z"
            />
            <rect
              className="cls-3"
              x="57.04"
              y="84.88"
              width="12.54"
              height="3.06"
            />
            <rect
              className="cls-2"
              x="30.33"
              y="98.92"
              width="42.31"
              height="1.66"
            />
            <path
              className="cls-3"
              d="M42.3,98.92h-12v1.66H44.06C43.46,100,42.87,99.49,42.3,98.92Z"
            />
            <path
              className="cls-6"
              d="M103,85.31v-.06c0-3.33,2.43-6,5.42-6s5.43,2.7,5.43,6v.06h.62v-.06c0-3.71-2.71-6.72-6-6.72s-6,3-6,6.72v.06Z"
            />
            <circle className="cls-6" cx="108.37" cy="96.14" r="4.97" />
            <circle className="cls-4" cx="108.37" cy="102.15" r="2.54" />
            <path
              className="cls-6"
              d="M68.67,50.06V42.29c0-7.06,5.14-13,11.49-13s11.5,5.92,11.5,13c0,0,0,7.72,0,7.77H93c0-.05,0-7.73,0-7.77,0-7.87-5.74-14.24-12.82-14.24S67.35,34.42,67.35,42.29c0,0,0,7.72,0,7.77Z"
            />
            <circle className="cls-5" cx="67.99" cy="50.06" r="1.6" />
            <circle className="cls-5" cx="92.24" cy="50.06" r="1.6" />
          </g>
        </svg>
      );
    } else if (color) {
      return (
        <svg
          {...elementProps}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 150 150"
        >
          <defs>
            <style>{`.cls-1{fill:none;}.cls-2{fill:#fde5cb;}.cls-3{fill:#f17732;}.cls-4{fill:#99052e;}.cls-5{fill:#10004c;}.cls-6{fill:#feca1e;}.cls-7{fill:url(#_4-dot);}.cls-8{fill:url(#_5-dot);}.cls-9{fill:#5fcbeb;}.cls-10{fill:#2870b5;}.cls-11{fill:#fff;}.cls-12{fill:#f8f7f4;}.cls-13{fill:url(#_2-dot);}`}</style>
            <pattern
              id="_4-dot"
              data-name="4-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cls-1" width="4" height="4" />
              <circle className="cls-3" cx="3" cy="4" r="0.35" />
              <circle className="cls-3" cx="1" cy="4" r="0.35" />
              <circle className="cls-3" cx="4" cy="2" r="0.35" />
              <circle className="cls-3" cx="2" cy="2" r="0.35" />
              <circle className="cls-3" cy="2" r="0.35" />
              <circle className="cls-3" cx="3" r="0.35" />
              <circle className="cls-3" cx="1" r="0.35" />
            </pattern>
            <pattern
              id="_5-dot"
              data-name="5-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cls-1" width="4" height="4" />
              <circle className="cls-4" cx="3" cy="4" r="0.35" />
              <circle className="cls-4" cx="1" cy="4" r="0.35" />
              <circle className="cls-4" cx="4" cy="2" r="0.35" />
              <circle className="cls-4" cx="2" cy="2" r="0.35" />
              <circle className="cls-4" cy="2" r="0.35" />
              <circle className="cls-4" cx="3" r="0.35" />
              <circle className="cls-4" cx="1" r="0.35" />
            </pattern>
            <pattern
              id="_2-dot"
              data-name="2-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cls-1" width="4" height="4" />
              <circle className="cls-2" cx="3" cy="4" r="0.35" />
              <circle className="cls-2" cx="1" cy="4" r="0.35" />
              <circle className="cls-2" cx="4" cy="2" r="0.35" />
              <circle className="cls-2" cx="2" cy="2" r="0.35" />
              <circle className="cls-2" cy="2" r="0.35" />
              <circle className="cls-2" cx="3" r="0.35" />
              <circle className="cls-2" cx="1" r="0.35" />
            </pattern>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="cls-5" cx="75" cy="75" r="70" />
          </g>
          <g id="experience-color-2">
            <polygon
              className="cls-6"
              points="107.03 45.83 105.11 43.52 103.19 45.83 101.27 43.52 99.36 45.83 97.44 43.52 95.52 45.83 93.6 43.52 91.68 45.83 89.76 43.52 87.84 45.83 85.92 43.52 84 45.83 82.08 43.52 80.16 45.83 78.3 43.59 76.44 45.83 74.52 43.52 72.61 45.83 70.69 43.52 68.77 45.83 66.85 43.52 64.93 45.83 63.01 43.52 61.09 45.83 59.17 43.52 57.25 45.83 55.33 43.52 53.41 45.83 51.49 43.52 51.49 107.01 108.94 107.01 108.94 43.53 107.03 45.83"
            />
            <polygon
              className="cls-7"
              points="107.03 45.83 105.11 43.52 103.19 45.83 101.27 43.52 99.36 45.83 97.44 43.52 95.52 45.83 93.6 43.52 91.68 45.83 89.76 43.52 87.84 45.83 85.92 43.52 84 45.83 82.08 43.52 80.16 45.83 78.3 43.59 76.44 45.83 74.52 43.52 72.61 45.83 70.69 43.52 68.77 45.83 66.85 43.52 64.93 45.83 63.01 43.52 61.09 45.83 59.17 43.52 57.25 45.83 55.33 43.52 53.41 45.83 51.49 43.52 51.49 107.01 108.94 107.01 108.94 43.53 107.03 45.83"
            />
            <path
              className="cls-3"
              d="M51.5,43.52V107h57.44C78.87,107,51.48,75.26,51.5,43.52Z"
            />
            <path
              className="cls-8"
              d="M51.5,43.52V107h57.44C78.87,107,51.48,75.26,51.5,43.52Z"
            />
            <rect
              className="cls-9"
              x="97.05"
              y="85.31"
              width="22.65"
              height="25.84"
            />
            <path
              className="cls-10"
              d="M119.7,111.15H97.05V95C97.05,103.09,110.94,111.15,119.7,111.15Z"
            />
            <path
              className="cls-11"
              d="M40.15,69.18s0-.08,0-.13c0-7,5.08-12.82,11.36-12.82s11.35,5.85,11.35,12.82v.13h1.3v-.13C64.15,61.28,58.48,55,51.5,55S38.84,61.28,38.84,69.05c0,0,0,.09,0,.13Z"
            />
            <rect
              className="cls-10"
              x="30.33"
              y="69.18"
              width="42.31"
              height="41.96"
            />
            <path
              className="cls-4"
              d="M72.64,111.15H30.33v-42C30.33,92.58,48.25,111.17,72.64,111.15Z"
            />
            <rect
              className="cls-12"
              x="30.33"
              y="76.87"
              width="42.31"
              height="19.08"
            />
            <rect
              className="cls-13"
              x="30.33"
              y="76.87"
              width="42.31"
              height="19.08"
            />
            <path
              className="cls-6"
              d="M31,76.87h-.67V96h9.31A41.41,41.41,0,0,1,31,76.87Z"
            />
            <rect
              className="cls-3"
              x="49.28"
              y="84.88"
              width="20.3"
              height="3.06"
            />
            <rect
              className="cls-2"
              x="30.33"
              y="98.92"
              width="42.31"
              height="1.66"
            />
            <path
              className="cls-3"
              d="M42.3,98.92h-12v1.66H44.06C43.46,100,42.87,99.49,42.3,98.92Z"
            />
            <rect
              className="cls-5"
              x="69.73"
              y="56.99"
              width="21.15"
              height="6.06"
            />
            <rect
              className="cls-4"
              x="71.92"
              y="59.19"
              width="16.57"
              height="1.62"
            />
            <path
              className="cls-12"
              d="M103,85.31v-.06c0-3.33,2.43-6,5.42-6s5.43,2.7,5.43,6v.06h.62v-.06c0-3.71-2.71-6.72-6-6.72s-6,3-6,6.72v.06Z"
            />
            <circle className="cls-12" cx="108.37" cy="96.14" r="4.97" />
            <circle className="cls-4" cx="108.37" cy="102.15" r="2.54" />
            <path
              className="cls-12"
              d="M68.67,50.06V42.29c0-7.06,5.14-13,11.49-13s11.5,5.92,11.5,13c0,0,0,7.72,0,7.77H93c0-.05,0-7.73,0-7.77,0-7.87-5.74-14.24-12.82-14.24S67.35,34.42,67.35,42.29c0,0,0,7.72,0,7.77Z"
            />
            <circle className="cls-5" cx="67.99" cy="50.06" r="1.6" />
            <circle className="cls-5" cx="92.24" cy="50.06" r="1.6" />
          </g>
          <g id="experience-color">
            <polygon
              className="cls-6"
              points="107.03 45.83 105.11 43.52 103.19 45.83 101.27 43.52 99.36 45.83 97.44 43.52 95.52 45.83 93.6 43.52 91.68 45.83 89.76 43.52 87.84 45.83 85.92 43.52 84 45.83 82.08 43.52 80.16 45.83 78.3 43.59 76.44 45.83 74.52 43.52 72.61 45.83 70.69 43.52 68.77 45.83 66.85 43.52 64.93 45.83 63.01 43.52 61.09 45.83 59.17 43.52 57.25 45.83 55.33 43.52 53.41 45.83 51.49 43.52 51.49 107.01 108.94 107.01 108.94 43.53 107.03 45.83"
            />
            <polygon
              className="cls-7"
              points="107.03 45.83 105.11 43.52 103.19 45.83 101.27 43.52 99.36 45.83 97.44 43.52 95.52 45.83 93.6 43.52 91.68 45.83 89.76 43.52 87.84 45.83 85.92 43.52 84 45.83 82.08 43.52 80.16 45.83 78.3 43.59 76.44 45.83 74.52 43.52 72.61 45.83 70.69 43.52 68.77 45.83 66.85 43.52 64.93 45.83 63.01 43.52 61.09 45.83 59.17 43.52 57.25 45.83 55.33 43.52 53.41 45.83 51.49 43.52 51.49 107.01 108.94 107.01 108.94 43.53 107.03 45.83"
            />
            <path
              className="cls-3"
              d="M51.5,43.52V107h57.44C78.87,107,51.48,75.26,51.5,43.52Z"
            />
            <path
              className="cls-8"
              d="M51.5,43.52V107h57.44C78.87,107,51.48,75.26,51.5,43.52Z"
            />
            <rect
              className="cls-9"
              x="97.05"
              y="85.31"
              width="22.65"
              height="25.84"
            />
            <path
              className="cls-10"
              d="M119.7,111.15H97.05V95C97.05,103.09,110.94,111.15,119.7,111.15Z"
            />
            <path
              className="cls-12"
              d="M40.15,69.18s0-.08,0-.13c0-7,5.08-12.82,11.36-12.82s11.35,5.85,11.35,12.82v.13h1.3v-.13C64.15,61.28,58.48,55,51.5,55S38.84,61.28,38.84,69.05c0,0,0,.09,0,.13Z"
            />
            <rect
              className="cls-10"
              x="30.33"
              y="69.18"
              width="42.31"
              height="41.96"
            />
            <path
              className="cls-4"
              d="M72.64,111.15H30.33v-42C30.33,92.58,48.25,111.17,72.64,111.15Z"
            />
            <rect
              className="cls-12"
              x="30.33"
              y="76.87"
              width="42.31"
              height="19.08"
            />
            <rect
              className="cls-13"
              x="30.33"
              y="76.87"
              width="42.31"
              height="19.08"
            />
            <path
              className="cls-3"
              d="M31,76.87h-.67V96h9.31A41.41,41.41,0,0,1,31,76.87Z"
            />
            <rect
              className="cls-3"
              x="57.04"
              y="84.88"
              width="12.54"
              height="3.06"
            />
            <rect
              className="cls-2"
              x="30.33"
              y="98.92"
              width="42.31"
              height="1.66"
            />
            <path
              className="cls-3"
              d="M42.3,98.92h-12v1.66H44.06C43.46,100,42.87,99.49,42.3,98.92Z"
            />
            <path
              className="cls-12"
              d="M103,85.31v-.06c0-3.33,2.43-6,5.42-6s5.43,2.7,5.43,6v.06h.62v-.06c0-3.71-2.71-6.72-6-6.72s-6,3-6,6.72v.06Z"
            />
            <circle className="cls-12" cx="108.37" cy="96.14" r="4.97" />
            <circle className="cls-4" cx="108.37" cy="102.15" r="2.54" />
            <path
              className="cls-12"
              d="M68.67,50.06V42.29c0-7.06,5.14-13,11.49-13s11.5,5.92,11.5,13c0,0,0,7.72,0,7.77H93c0-.05,0-7.73,0-7.77,0-7.87-5.74-14.24-12.82-14.24S67.35,34.42,67.35,42.29c0,0,0,7.72,0,7.77Z"
            />
            <circle className="cls-5" cx="67.99" cy="50.06" r="1.6" />
            <circle className="cls-5" cx="92.24" cy="50.06" r="1.6" />
          </g>
        </svg>
      );
    } else if (draft) {
      return (
        <svg
          {...elementProps}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 150"
        >
          <defs>
            <style>{`.cls-1{fill:#5b6279;}.cls-2{fill:#9da1af;}.cls-3{fill:#8c91a1;}.cls-4{fill:#dee0e4;}.cls-5{fill:#cdcfd6;}.cls-6{fill:#fff;}.cls-7{fill:#7c8194;}.cls-8{fill:#6b7186;}.cls-9{fill:#bdc0c9;}.cls-10{fill:#adb0bc;}.cls-11{fill:#eeeff1;}`}</style>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="cls-1" cx="75" cy="75" r="70" />
          </g>
          <g id="experience-gray">
            <polygon
              className="cls-2"
              points="107.03 43.11 105.11 40.8 103.19 43.11 101.27 40.8 99.36 43.11 97.44 40.8 95.52 43.11 93.6 40.8 91.68 43.11 89.76 40.8 87.84 43.11 85.92 40.8 84 43.11 82.08 40.8 80.16 43.11 78.3 40.87 76.44 43.11 74.52 40.8 72.61 43.11 70.69 40.8 68.77 43.11 66.85 40.8 64.93 43.11 63.01 40.8 61.09 43.11 59.17 40.8 57.25 43.11 55.33 40.8 53.41 43.11 51.49 40.8 51.49 104.3 108.94 104.3 108.94 40.82 107.03 43.11"
            />
            <path
              className="cls-3"
              d="M51.5,40.8v63.5h57.44C78.87,104.3,51.48,72.55,51.5,40.8Z"
            />
            <rect
              className="cls-4"
              x="97.05"
              y="82.6"
              width="22.65"
              height="25.84"
            />
            <path
              className="cls-5"
              d="M119.7,108.44H97.05V92.31C97.05,100.37,110.94,108.44,119.7,108.44Z"
            />
            <path
              className="cls-6"
              d="M40.15,66.47s0-.09,0-.13c0-7,5.08-12.82,11.36-12.82s11.35,5.85,11.35,12.82v.13h1.3v-.13c0-7.77-5.67-14.07-12.65-14.07s-12.66,6.3-12.66,14.07c0,0,0,.09,0,.13Z"
            />
            <rect
              className="cls-7"
              x="30.33"
              y="66.47"
              width="42.31"
              height="41.96"
            />
            <path
              className="cls-8"
              d="M72.64,108.44H30.33v-42C30.33,89.87,48.25,108.46,72.64,108.44Z"
            />
            <rect
              className="cls-9"
              x="30.33"
              y="74.15"
              width="42.31"
              height="19.08"
            />
            <path
              className="cls-10"
              d="M31,74.15h-.67V93.24h9.31A41.45,41.45,0,0,1,31,74.15Z"
            />
            <rect
              className="cls-4"
              x="57.04"
              y="82.17"
              width="12.54"
              height="3.06"
            />
            <rect
              className="cls-11"
              x="30.33"
              y="96.2"
              width="42.31"
              height="1.66"
            />
            <path
              className="cls-5"
              d="M42.3,96.2h-12v1.66H44.06C43.46,97.33,42.87,96.78,42.3,96.2Z"
            />
            <path
              className="cls-6"
              d="M103,82.6v-.06c0-3.33,2.43-6,5.42-6s5.43,2.7,5.43,6v.06h.62v-.06c0-3.72-2.71-6.72-6-6.72s-6,3-6,6.72v.06Z"
            />
            <circle className="cls-6" cx="108.37" cy="93.42" r="4.97" />
            <circle className="cls-7" cx="108.37" cy="99.44" r="2.54" />
            <path
              className="cls-6"
              d="M68.67,47.34V39.58c0-7.06,5.14-13,11.49-13s11.5,5.92,11.5,13c0,0,0,7.72,0,7.76H93s0-7.72,0-7.76c0-7.87-5.74-14.25-12.82-14.25S67.35,31.71,67.35,39.58c0,0,0,7.72,0,7.76Z"
            />
            <circle className="cls-7" cx="67.99" cy="47.34" r="1.6" />
            <circle className="cls-7" cx="92.24" cy="47.34" r="1.6" />
          </g>
        </svg>
      );
    } else {
      return (
        <svg
          {...elementProps}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 150"
        >
          <defs>
            <style>{`.cls-1{fill:#10004c;}.cls-2{fill:#6f6693;}.cls-3{fill:#584d82;}.cls-4{fill:#cfccdb;}.cls-5{fill:#b7b3c9;}.cls-6{fill:#fff;}.cls-7{fill:#3f336f;}.cls-8{fill:#281a5e;}.cls-9{fill:#9f99b7;}.cls-10{fill:#8780a5;}.cls-11{fill:#e7e6ed;}.cls-12{fill:#f8f7f4;}`}</style>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="cls-1" cx="75" cy="75" r="70" />
          </g>
          <g id="experience-color-2">
            <polygon
              className="cls-2"
              points="107.03 43.11 105.11 40.8 103.19 43.11 101.27 40.8 99.36 43.11 97.44 40.8 95.52 43.11 93.6 40.8 91.68 43.11 89.76 40.8 87.84 43.11 85.92 40.8 84 43.11 82.08 40.8 80.16 43.11 78.3 40.87 76.44 43.11 74.52 40.8 72.61 43.11 70.69 40.8 68.77 43.11 66.85 40.8 64.93 43.11 63.01 40.8 61.09 43.11 59.17 40.8 57.25 43.11 55.33 40.8 53.41 43.11 51.49 40.8 51.49 104.3 108.94 104.3 108.94 40.82 107.03 43.11"
            />
            <path
              className="cls-3"
              d="M51.5,40.8v63.5h57.44C78.87,104.3,51.48,72.55,51.5,40.8Z"
            />
            <rect
              className="cls-4"
              x="97.05"
              y="82.6"
              width="22.65"
              height="25.84"
            />
            <path
              className="cls-5"
              d="M119.7,108.44H97.05V92.31C97.05,100.37,110.94,108.44,119.7,108.44Z"
            />
            <path
              className="cls-6"
              d="M40.15,66.47s0-.09,0-.13c0-7,5.08-12.82,11.36-12.82s11.35,5.85,11.35,12.82v.13h1.3v-.13c0-7.77-5.67-14.07-12.65-14.07s-12.66,6.3-12.66,14.07c0,0,0,.09,0,.13Z"
            />
            <rect
              className="cls-7"
              x="30.33"
              y="66.47"
              width="42.31"
              height="41.96"
            />
            <path
              className="cls-8"
              d="M72.64,108.44H30.33v-42C30.33,89.87,48.25,108.46,72.64,108.44Z"
            />
            <rect
              className="cls-9"
              x="30.33"
              y="74.15"
              width="42.31"
              height="19.08"
            />
            <path
              className="cls-10"
              d="M31,74.15h-.67V93.24h9.31A41.45,41.45,0,0,1,31,74.15Z"
            />
            <rect
              className="cls-4"
              x="49.28"
              y="82.17"
              width="20.3"
              height="3.06"
            />
            <rect
              className="cls-11"
              x="30.33"
              y="96.2"
              width="42.31"
              height="1.66"
            />
            <path
              className="cls-5"
              d="M42.3,96.2h-12v1.66H44.06C43.46,97.33,42.87,96.78,42.3,96.2Z"
            />
            <rect
              className="cls-1"
              x="69.73"
              y="54.27"
              width="21.15"
              height="6.06"
            />
            <rect
              className="cls-6"
              x="71.92"
              y="56.48"
              width="16.57"
              height="1.62"
            />
            <path
              className="cls-12"
              d="M103,82.6v-.06c0-3.33,2.43-6,5.42-6s5.43,2.7,5.43,6v.06h.62v-.06c0-3.72-2.71-6.72-6-6.72s-6,3-6,6.72v.06Z"
            />
            <circle className="cls-1" cx="108.37" cy="93.42" r="4.97" />
            <circle className="cls-7" cx="108.37" cy="99.44" r="2.54" />
            <path
              className="cls-6"
              d="M68.67,47.34V39.58c0-7.06,5.14-13,11.49-13s11.5,5.92,11.5,13c0,0,0,7.72,0,7.76H93s0-7.72,0-7.76c0-7.87-5.74-14.25-12.82-14.25S67.35,31.71,67.35,39.58c0,0,0,7.72,0,7.76Z"
            />
            <circle className="cls-7" cx="67.99" cy="47.34" r="1.6" />
            <circle className="cls-7" cx="92.24" cy="47.34" r="1.6" />
          </g>
          <g id="experience-color">
            <polygon
              className="cls-2"
              points="107.03 43.11 105.11 40.8 103.19 43.11 101.27 40.8 99.36 43.11 97.44 40.8 95.52 43.11 93.6 40.8 91.68 43.11 89.76 40.8 87.84 43.11 85.92 40.8 84 43.11 82.08 40.8 80.16 43.11 78.3 40.87 76.44 43.11 74.52 40.8 72.61 43.11 70.69 40.8 68.77 43.11 66.85 40.8 64.93 43.11 63.01 40.8 61.09 43.11 59.17 40.8 57.25 43.11 55.33 40.8 53.41 43.11 51.49 40.8 51.49 104.3 108.94 104.3 108.94 40.82 107.03 43.11"
            />
            <path
              className="cls-3"
              d="M51.5,40.8v63.5h57.44C78.87,104.3,51.48,72.55,51.5,40.8Z"
            />
            <rect
              className="cls-4"
              x="97.05"
              y="82.6"
              width="22.65"
              height="25.84"
            />
            <path
              className="cls-5"
              d="M119.7,108.44H97.05V92.31C97.05,100.37,110.94,108.44,119.7,108.44Z"
            />
            <path
              className="cls-6"
              d="M40.15,66.47s0-.09,0-.13c0-7,5.08-12.82,11.36-12.82s11.35,5.85,11.35,12.82v.13h1.3v-.13c0-7.77-5.67-14.07-12.65-14.07s-12.66,6.3-12.66,14.07c0,0,0,.09,0,.13Z"
            />
            <rect
              className="cls-7"
              x="30.33"
              y="66.47"
              width="42.31"
              height="41.96"
            />
            <path
              className="cls-8"
              d="M72.64,108.44H30.33v-42C30.33,89.87,48.25,108.46,72.64,108.44Z"
            />
            <rect
              className="cls-9"
              x="30.33"
              y="74.15"
              width="42.31"
              height="19.08"
            />
            <path
              className="cls-10"
              d="M31,74.15h-.67V93.24h9.31A41.45,41.45,0,0,1,31,74.15Z"
            />
            <rect
              className="cls-4"
              x="49.28"
              y="82.17"
              width="20.3"
              height="3.06"
            />
            <rect
              className="cls-11"
              x="30.33"
              y="96.2"
              width="42.31"
              height="1.66"
            />
            <path
              className="cls-5"
              d="M42.3,96.2h-12v1.66H44.06C43.46,97.33,42.87,96.78,42.3,96.2Z"
            />
            <rect
              className="cls-1"
              x="69.73"
              y="54.27"
              width="21.15"
              height="6.06"
            />
            <rect
              className="cls-6"
              x="71.92"
              y="56.48"
              width="16.57"
              height="1.62"
            />
            <path
              className="cls-12"
              d="M103,82.6v-.06c0-3.33,2.43-6,5.42-6s5.43,2.7,5.43,6v.06h.62v-.06c0-3.72-2.71-6.72-6-6.72s-6,3-6,6.72v.06Z"
            />
            <circle className="cls-1" cx="108.37" cy="93.42" r="4.97" />
            <circle className="cls-7" cx="108.37" cy="99.44" r="2.54" />
            <path
              className="cls-6"
              d="M68.67,47.34V39.58c0-7.06,5.14-13,11.49-13s11.5,5.92,11.5,13c0,0,0,7.72,0,7.76H93s0-7.72,0-7.76c0-7.87-5.74-14.25-12.82-14.25S67.35,31.71,67.35,39.58c0,0,0,7.72,0,7.76Z"
            />
            <circle className="cls-7" cx="67.99" cy="47.34" r="1.6" />
            <circle className="cls-7" cx="92.24" cy="47.34" r="1.6" />
          </g>
          <g id="experience-purple">
            <polygon
              className="cls-2"
              points="107.03 43.11 105.11 40.8 103.19 43.11 101.27 40.8 99.36 43.11 97.44 40.8 95.52 43.11 93.6 40.8 91.68 43.11 89.76 40.8 87.84 43.11 85.92 40.8 84 43.11 82.08 40.8 80.16 43.11 78.3 40.87 76.44 43.11 74.52 40.8 72.61 43.11 70.69 40.8 68.77 43.11 66.85 40.8 64.93 43.11 63.01 40.8 61.09 43.11 59.17 40.8 57.25 43.11 55.33 40.8 53.41 43.11 51.49 40.8 51.49 104.3 108.94 104.3 108.94 40.82 107.03 43.11"
            />
            <path
              className="cls-3"
              d="M51.5,40.8v63.5h57.44C78.87,104.3,51.48,72.55,51.5,40.8Z"
            />
            <rect
              className="cls-4"
              x="97.05"
              y="82.6"
              width="22.65"
              height="25.84"
            />
            <path
              className="cls-5"
              d="M119.7,108.44H97.05V92.31C97.05,100.37,110.94,108.44,119.7,108.44Z"
            />
            <path
              className="cls-6"
              d="M40.15,66.47s0-.09,0-.13c0-7,5.08-12.82,11.36-12.82s11.35,5.85,11.35,12.82v.13h1.3v-.13c0-7.77-5.67-14.07-12.65-14.07s-12.66,6.3-12.66,14.07c0,0,0,.09,0,.13Z"
            />
            <rect
              className="cls-7"
              x="30.33"
              y="66.47"
              width="42.31"
              height="41.96"
            />
            <path
              className="cls-8"
              d="M72.64,108.44H30.33v-42C30.33,89.87,48.25,108.46,72.64,108.44Z"
            />
            <rect
              className="cls-9"
              x="30.33"
              y="74.15"
              width="42.31"
              height="19.08"
            />
            <path
              className="cls-10"
              d="M31,74.15h-.67V93.24h9.31A41.45,41.45,0,0,1,31,74.15Z"
            />
            <rect
              className="cls-4"
              x="57.04"
              y="82.17"
              width="12.54"
              height="3.06"
            />
            <rect
              className="cls-11"
              x="30.33"
              y="96.2"
              width="42.31"
              height="1.66"
            />
            <path
              className="cls-5"
              d="M42.3,96.2h-12v1.66H44.06C43.46,97.33,42.87,96.78,42.3,96.2Z"
            />
            <path
              className="cls-12"
              d="M103,82.6v-.06c0-3.33,2.43-6,5.42-6s5.43,2.7,5.43,6v.06h.62v-.06c0-3.72-2.71-6.72-6-6.72s-6,3-6,6.72v.06Z"
            />
            <circle className="cls-6" cx="108.37" cy="93.42" r="4.97" />
            <circle className="cls-7" cx="108.37" cy="99.44" r="2.54" />
            <path
              className="cls-6"
              d="M68.67,47.34V39.58c0-7.06,5.14-13,11.49-13s11.5,5.92,11.5,13c0,0,0,7.72,0,7.76H93s0-7.72,0-7.76c0-7.87-5.74-14.25-12.82-14.25S67.35,31.71,67.35,39.58c0,0,0,7.72,0,7.76Z"
            />
            <circle className="cls-7" cx="67.99" cy="47.34" r="1.6" />
            <circle className="cls-7" cx="92.24" cy="47.34" r="1.6" />
          </g>
        </svg>
      );
    }
  }
}

ShoppingCircleIllustration.propTypes = {
  /** The width of the illustration. */
  width: PropTypes.string,
  /** The height of the illustration. */
  height: PropTypes.string,
  /** Determines if the color variant should be shown or not. */
  color: PropTypes.bool,
  /** Determines if the draft variant should be shown or not. */
  draft: PropTypes.bool,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional inline styles to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

ShoppingCircleIllustration.defaultProps = {
  height: '140',
  width: '144',
};

export default ShoppingCircleIllustration;
