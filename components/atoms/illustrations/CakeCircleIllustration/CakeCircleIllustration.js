/** @module CakeCircleIllustratio */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a cake illustration. */
class CakeCircleIllustration extends PureComponent {
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
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="140"
          height="140"
          viewBox="0 0 140 140"
        >
          <defs>
            <style>{`.cake-circle-1{fill:none;}.cake-circle-2{fill:#fde5cb;}.cake-circle-3{fill:#f17732;}.cake-circle-4{fill:#99052e;}.cake-circle-5{fill:#10004c;}.cake-circle-6{fill:#5fcbeb;}.cake-circle-7{fill:#feca1e;}.cake-circle-8{fill:#2870b5;}.cake-circle-9{fill:#f8f7f4;}.cake-circle-10{fill:url(#_2-dot);}.cake-circle-11{fill:url(#_4-dot);}.cake-circle-12{fill:url(#_5-dot);}`}</style>
            <pattern
              data-name="2-dot"
              width="4"
              height="4"
              patternTransform="translate(-38 6.85)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cake-circle-1" width="4" height="4" />
              <circle className="cake-circle-2" cx="3" cy="4" r="0.35" />
              <circle className="cake-circle-2" cx="1" cy="4" r="0.35" />
              <circle className="cake-circle-2" cx="4" cy="2" r="0.35" />
              <circle className="cake-circle-2" cx="2" cy="2" r="0.35" />
              <circle className="cake-circle-2" cy="2" r="0.35" />
              <circle className="cake-circle-2" cx="3" r="0.35" />
              <circle className="cake-circle-2" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="4-dot"
              width="4"
              height="4"
              patternTransform="translate(-38 6.85)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cake-circle-1" width="4" height="4" />
              <circle className="cake-circle-3" cx="3" cy="4" r="0.35" />
              <circle className="cake-circle-3" cx="1" cy="4" r="0.35" />
              <circle className="cake-circle-3" cx="4" cy="2" r="0.35" />
              <circle className="cake-circle-3" cx="2" cy="2" r="0.35" />
              <circle className="cake-circle-3" cy="2" r="0.35" />
              <circle className="cake-circle-3" cx="3" r="0.35" />
              <circle className="cake-circle-3" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="5-dot"
              width="4"
              height="4"
              patternTransform="translate(-38 6.85)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cake-circle-1" width="4" height="4" />
              <circle className="cake-circle-4" cx="3" cy="4" r="0.35" />
              <circle className="cake-circle-4" cx="1" cy="4" r="0.35" />
              <circle className="cake-circle-4" cx="4" cy="2" r="0.35" />
              <circle className="cake-circle-4" cx="2" cy="2" r="0.35" />
              <circle className="cake-circle-4" cy="2" r="0.35" />
              <circle className="cake-circle-4" cx="3" r="0.35" />
              <circle className="cake-circle-4" cx="1" r="0.35" />
            </pattern>
          </defs>

          <g>
            <circle className="cake-circle-5" cx="70" cy="70" r="70" />
            <circle className="cake-circle-5" cx="70" cy="70" r="70" />
          </g>
          <g>
            <rect
              className="cake-circle-6"
              x="28.16"
              y="41.72"
              width="1.52"
              height="14.55"
              transform="translate(-9.06 6.64) rotate(-11.33)"
            />
            <rect
              className="cake-circle-4"
              x="27.1"
              y="42.69"
              width="1.52"
              height="2.07"
              transform="translate(-8.05 6.33) rotate(-11.33)"
            />
            <path
              className="cake-circle-7"
              d="M28.44,38.34a1.66,1.66,0,1,1-3.14,1.09,6.43,6.43,0,0,1,.52-4.76C25.84,37,27.89,36.77,28.44,38.34Z"
            />
            <rect
              className="cake-circle-6"
              x="43.01"
              y="44.96"
              width="1.52"
              height="14.55"
              transform="translate(-5.73 5.4) rotate(-6.62)"
            />
            <rect
              className="cake-circle-4"
              x="42.39"
              y="45.87"
              width="1.52"
              height="2.07"
              transform="translate(-5.12 5.29) rotate(-6.62)"
            />
            <path
              className="cake-circle-7"
              d="M44.18,41.59a1.67,1.67,0,1,1-3.23.83,6.49,6.49,0,0,1,.92-4.71C41.69,40,43.76,40,44.18,41.59Z"
            />
            <rect
              className="cake-circle-6"
              x="57.99"
              y="38.78"
              width="1.52"
              height="14.55"
              transform="translate(-3.81 5.33) rotate(-5.03)"
            />
            <rect
              className="cake-circle-4"
              x="57.51"
              y="39.67"
              width="1.52"
              height="2.07"
              transform="translate(-3.35 5.27) rotate(-5.03)"
            />
            <path
              className="cake-circle-7"
              d="M59.44,35.42a1.69,1.69,0,0,1-1.24,2,1.71,1.71,0,0,1-2-1.3,6.42,6.42,0,0,1,1-4.68C57,33.79,59.07,33.79,59.44,35.42Z"
            />
            <rect
              className="cake-circle-8"
              x="79.74"
              y="39.55"
              width="1.52"
              height="14.55"
              transform="translate(-7.63 16.73) rotate(-11.33)"
            />
            <rect
              className="cake-circle-3"
              x="78.68"
              y="40.52"
              width="1.52"
              height="2.07"
              transform="translate(-6.62 16.42) rotate(-11.33)"
            />
            <path
              className="cake-circle-2"
              d="M80,36.18a1.66,1.66,0,1,1-3.14,1.09,6.46,6.46,0,0,1,.53-4.77C77.42,34.82,79.48,34.6,80,36.18Z"
            />
            <rect
              className="cake-circle-8"
              x="85.83"
              y="43.28"
              width="1.52"
              height="14.55"
              transform="translate(9.03 -12.99) rotate(9.05)"
            />
            <rect
              className="cake-circle-3"
              x="86.67"
              y="44.22"
              width="1.52"
              height="2.07"
              transform="translate(8.21 -13.19) rotate(9.05)"
            />
            <path
              className="cake-circle-7"
              d="M89.85,40.41a1.7,1.7,0,0,1-1.7,1.68,1.72,1.72,0,0,1-1.63-1.75,6.5,6.5,0,0,1,2.16-4.29C87.88,38.23,89.89,38.74,89.85,40.41Z"
            />
            <rect
              className="cake-circle-6"
              x="94.39"
              y="39.7"
              width="1.52"
              height="14.55"
              transform="translate(2.78 -5.25) rotate(3.21)"
            />
            <rect
              className="cake-circle-4"
              x="94.7"
              y="40.57"
              width="1.52"
              height="2.07"
              transform="translate(2.48 -5.28) rotate(3.21)"
            />
            <path
              className="cake-circle-3"
              d="M97.37,36.54a1.67,1.67,0,1,1-3.32.27,6.42,6.42,0,0,1,1.71-4.48C95.19,34.58,97.24,34.88,97.37,36.54Z"
            />
            <rect
              className="cake-circle-8"
              x="102.53"
              y="45.88"
              width="1.52"
              height="14.55"
              transform="translate(-5.83 13.31) rotate(-7.17)"
            />
            <rect
              className="cake-circle-3"
              x="101.86"
              y="46.79"
              width="1.52"
              height="2.07"
              transform="translate(-5.17 13.19) rotate(-7.17)"
            />
            <path
              className="cake-circle-7"
              d="M103.59,42.5a1.7,1.7,0,0,1-1.17,2.09,1.72,1.72,0,0,1-2-1.23,6.44,6.44,0,0,1,.87-4.71C101.09,41,103.16,40.89,103.59,42.5Z"
            />
            <rect
              className="cake-circle-8"
              x="107.16"
              y="40.52"
              width="1.52"
              height="14.55"
              transform="translate(13.05 -22.43) rotate(12.62)"
            />
            <rect
              className="cake-circle-3"
              x="108.34"
              y="41.51"
              width="1.52"
              height="2.07"
              transform="translate(11.94 -22.82) rotate(12.62)"
            />
            <path
              className="cake-circle-7"
              d="M111.81,37.87a1.66,1.66,0,1,1-3.31-.28,6.41,6.41,0,0,1,2.41-4.14C110,35.57,112,36.21,111.81,37.87Z"
            />
            <rect
              className="cake-circle-8"
              x="64.23"
              y="41.36"
              width="1.52"
              height="14.55"
              transform="matrix(0.99, 0.13, -0.13, 0.99, 6.85, -8.01)"
            />
            <rect
              className="cake-circle-3"
              x="64.93"
              y="42.27"
              width="1.52"
              height="2.07"
              transform="translate(6.16 -8.14) rotate(7.44)"
            />
            <path
              className="cake-circle-3"
              d="M68,38.4a1.71,1.71,0,0,1-1.65,1.73,1.73,1.73,0,0,1-1.68-1.71,6.46,6.46,0,0,1,2-4.34C65.94,36.28,68,36.73,68,38.4Z"
            />
            <rect
              className="cake-circle-8"
              x="49.24"
              y="43.07"
              width="1.52"
              height="14.55"
              transform="translate(5.91 -5.25) rotate(6.39)"
            />
            <rect
              className="cake-circle-3"
              x="49.84"
              y="43.98"
              width="1.52"
              height="2.07"
              transform="translate(5.32 -5.35) rotate(6.39)"
            />
            <path
              className="cake-circle-2"
              d="M52.79,40.06a1.7,1.7,0,0,1-1.62,1.76,1.72,1.72,0,0,1-1.71-1.68,6.41,6.41,0,0,1,1.95-4.37C50.72,38,52.75,38.4,52.79,40.06Z"
            />
            <rect
              className="cake-circle-8"
              x="34.23"
              y="39.59"
              width="1.52"
              height="14.55"
              transform="translate(5 -3.35) rotate(5.9)"
            />
            <rect
              className="cake-circle-3"
              x="34.78"
              y="40.49"
              width="1.52"
              height="2.07"
              transform="translate(4.45 -3.43) rotate(5.9)"
            />
            <path
              className="cake-circle-3"
              d="M37.69,36.55a1.71,1.71,0,0,1-1.61,1.78,1.73,1.73,0,0,1-1.72-1.67,6.42,6.42,0,0,1,1.92-4.39C35.61,34.49,37.63,34.89,37.69,36.55Z"
            />
            <rect
              className="cake-circle-6"
              x="72.82"
              y="46.08"
              width="1.52"
              height="14.55"
              transform="translate(-4.2 6.33) rotate(-4.79)"
            />
            <rect
              className="cake-circle-4"
              x="72.37"
              y="46.97"
              width="1.52"
              height="2.07"
              transform="translate(-3.75 6.27) rotate(-4.79)"
            />
            <path
              className="cake-circle-7"
              d="M74.32,42.73a1.7,1.7,0,0,1-1.25,2,1.73,1.73,0,0,1-2-1.32,6.49,6.49,0,0,1,1.07-4.67C71.89,41.08,74,41.1,74.32,42.73Z"
            />
            <rect
              className="cake-circle-6"
              x="111.18"
              y="35.19"
              width="1.52"
              height="17.79"
              transform="translate(213.04 109.3) rotate(-168.67)"
            />
            <rect
              className="cake-circle-4"
              x="112.55"
              y="36.19"
              width="1.52"
              height="2.07"
              transform="translate(217.11 95.99) rotate(-168.67)"
            />
            <path
              className="cake-circle-7"
              d="M112.74,31.84a1.66,1.66,0,1,0,3.14,1.09,6.43,6.43,0,0,0-.53-4.76C115.34,30.49,113.28,30.27,112.74,31.84Z"
            />
            <rect
              className="cake-circle-6"
              x="97.64"
              y="37.46"
              width="1.52"
              height="14.55"
              transform="translate(190.98 100.53) rotate(-173.38)"
            />
            <rect
              className="cake-circle-4"
              x="98.26"
              y="38.37"
              width="1.52"
              height="2.07"
              transform="translate(192.84 89.96) rotate(-173.38)"
            />
            <path
              className="cake-circle-7"
              d="M98,34.09a1.66,1.66,0,1,0,3.22.83,6.44,6.44,0,0,0-.91-4.71C100.48,32.52,98.42,32.47,98,34.09Z"
            />
            <rect
              className="cake-circle-4"
              x="83.89"
              y="32.27"
              width="1.52"
              height="20.93"
              transform="translate(165.22 92.73) rotate(-174.97)"
            />
            <rect
              className="cake-circle-6"
              x="84.64"
              y="33.17"
              width="1.52"
              height="2.07"
              transform="translate(167.47 75.77) rotate(-174.97)"
            />
            <path
              className="cake-circle-7"
              d="M84.23,28.92a1.67,1.67,0,1,0,3.25.74,6.47,6.47,0,0,0-1-4.68C86.67,27.29,84.6,27.29,84.23,28.92Z"
            />
            <rect
              className="cake-circle-4"
              x="60.09"
              y="32.99"
              width="1.52"
              height="20.96"
              transform="translate(111.97 98.04) rotate(-168.67)"
            />
            <rect
              className="cake-circle-6"
              x="61.77"
              y="34.02"
              width="1.52"
              height="2.07"
              transform="translate(116.96 81.72) rotate(-168.67)"
            />
            <path
              className="cake-circle-2"
              d="M62,29.68a1.67,1.67,0,1,0,3.15,1.09A6.46,6.46,0,0,0,64.57,26C64.56,28.32,62.5,28.1,62,29.68Z"
            />
            <rect
              className="cake-circle-8"
              x="54.23"
              y="36.78"
              width="1.52"
              height="14.55"
              transform="translate(116.23 78.92) rotate(170.95)"
            />
            <rect
              className="cake-circle-3"
              x="53.38"
              y="37.72"
              width="1.52"
              height="2.07"
              transform="translate(113.71 68.5) rotate(170.95)"
            />
            <path
              className="cake-circle-7"
              d="M51.73,33.91a1.66,1.66,0,1,0,3.32-.07,6.44,6.44,0,0,0-2.15-4.29C53.69,31.73,51.69,32.24,51.73,33.91Z"
            />
            <rect
              className="cake-circle-6"
              x="46.19"
              y="33.19"
              width="1.52"
              height="19.06"
              transform="translate(96.21 82.76) rotate(176.79)"
            />
            <rect
              className="cake-circle-4"
              x="45.76"
              y="34.07"
              width="1.52"
              height="2.07"
              transform="translate(94.93 67.56) rotate(176.79)"
            />
            <path
              className="cake-circle-3"
              d="M44.61,30a1.66,1.66,0,1,0,3.31.27,6.41,6.41,0,0,0-1.7-4.48C46.79,28.08,44.74,28.38,44.61,30Z"
            />
            <rect
              className="cake-circle-7"
              x="37.63"
              y="37.38"
              width="1.52"
              height="14.55"
              transform="translate(70.9 93.76) rotate(-172.83)"
            />
            <rect
              className="cake-circle-3"
              x="38.3"
              y="38.29"
              width="1.52"
              height="2.07"
              transform="translate(72.9 83.22) rotate(-172.83)"
            />
            <path
              className="cake-circle-7"
              d="M38.09,34a1.71,1.71,0,0,0,1.16,2.09,1.73,1.73,0,0,0,2.06-1.23,6.44,6.44,0,0,0-.88-4.71C40.59,32.46,38.52,32.39,38.09,34Z"
            />
            <rect
              className="cake-circle-4"
              x="30.92"
              y="33.95"
              width="1.52"
              height="20.3"
              transform="translate(72.23 80.2) rotate(167.38)"
            />
            <rect
              className="cake-circle-6"
              x="29.12"
              y="35.01"
              width="1.52"
              height="2.07"
              transform="translate(66.91 64.7) rotate(167.38)"
            />
            <path
              className="cake-circle-7"
              d="M27.16,31.37a1.67,1.67,0,1,0,3.32-.28A6.42,6.42,0,0,0,28.06,27C29,29.07,27,29.71,27.16,31.37Z"
            />
            <rect
              className="cake-circle-8"
              x="75.38"
              y="34.39"
              width="1.52"
              height="17.92"
              transform="translate(157.26 76.47) rotate(172.56)"
            />
            <rect
              className="cake-circle-3"
              x="74.47"
              y="35.32"
              width="1.52"
              height="2.07"
              transform="translate(154.53 62.65) rotate(172.56)"
            />
            <path
              className="cake-circle-3"
              d="M73,31.44a1.66,1.66,0,1,0,3.32,0,6.43,6.43,0,0,0-2-4.34C75,29.32,73,29.78,73,31.44Z"
            />
            <rect
              className="cake-circle-7"
              x="91.22"
              y="36.57"
              width="1.52"
              height="14.55"
              transform="translate(188.26 77.2) rotate(173.61)"
            />
            <rect
              className="cake-circle-3"
              x="90.62"
              y="37.48"
              width="1.52"
              height="2.07"
              transform="matrix(-0.99, 0.11, -0.11, -0.99, 186.48, 66.62)"
            />
            <path
              className="cake-circle-2"
              d="M89.19,33.56a1.7,1.7,0,0,0,1.62,1.76,1.73,1.73,0,0,0,1.71-1.68,6.46,6.46,0,0,0-2-4.37C91.26,31.48,89.23,31.9,89.19,33.56Z"
            />
            <rect
              className="cake-circle-4"
              x="104.45"
              y="33.08"
              width="1.52"
              height="18.85"
              transform="translate(214.23 73.96) rotate(174.1)"
            />
            <rect
              className="cake-circle-6"
              x="103.67"
              y="33.99"
              width="1.52"
              height="2.07"
              transform="translate(211.92 59.12) rotate(174.1)"
            />
            <path
              className="cake-circle-3"
              d="M102.29,30.05a1.66,1.66,0,1,0,3.32.11,6.46,6.46,0,0,0-1.91-4.39C104.37,28,102.34,28.39,102.29,30.05Z"
            />
            <rect
              className="cake-circle-6"
              x="68.43"
              y="37.58"
              width="1.52"
              height="14.55"
              transform="translate(134.41 95.33) rotate(-175.21)"
            />
            <rect
              className="cake-circle-4"
              x="68.88"
              y="38.47"
              width="1.52"
              height="2.07"
              transform="translate(135.75 84.68) rotate(-175.21)"
            />
            <path
              className="cake-circle-7"
              d="M68.46,34.23A1.66,1.66,0,1,0,71.7,35a6.44,6.44,0,0,0-1.06-4.67C70.89,32.58,68.82,32.6,68.46,34.23Z"
            />
            <path
              className="cake-circle-9"
              d="M30.65,50.94h78.7a4.71,4.71,0,0,1,4.71,4.71V71.28a0,0,0,0,1,0,0H25.94a0,0,0,0,1,0,0V55.65A4.71,4.71,0,0,1,30.65,50.94Z"
            />
            <path
              className="cake-circle-10"
              d="M30.65,50.94h78.7a4.71,4.71,0,0,1,4.71,4.71V71.28a0,0,0,0,1,0,0H25.94a0,0,0,0,1,0,0V55.65A4.71,4.71,0,0,1,30.65,50.94Z"
            />
            <path
              className="cake-circle-9"
              d="M25.94,71.33h88.12a0,0,0,0,1,0,0v19a4.71,4.71,0,0,1-4.71,4.71H30.65a4.71,4.71,0,0,1-4.71-4.71v-19A0,0,0,0,1,25.94,71.33Z"
            />
            <path
              className="cake-circle-10"
              d="M25.94,71.33h88.12a0,0,0,0,1,0,0v19a4.71,4.71,0,0,1-4.71,4.71H30.65a4.71,4.71,0,0,1-4.71-4.71v-19A0,0,0,0,1,25.94,71.33Z"
            />
            <path
              className="cake-circle-2"
              d="M87.84,92.28H25.94V55.65a4.89,4.89,0,0,1,5-4.71h1.73C56.1,97.3,87.84,92.28,87.84,92.28Z"
            />
            <path
              className="cake-circle-7"
              d="M30.65,50.94a4.72,4.72,0,0,0-4.71,4.71v3.74a10.07,10.07,0,0,0,15.31-8.45Z"
            />
            <path
              className="cake-circle-3"
              d="M37.09,58.93c-1.49-2.48-3-5.13-4.41-8H31a4.89,4.89,0,0,0-5,4.71v3.74a10,10,0,0,0,11.15-.46Z"
            />
            <path
              className="cake-circle-11"
              d="M30.65,50.94a4.72,4.72,0,0,0-4.71,4.71v3.74a10.07,10.07,0,0,0,15.31-8.45Z"
            />
            <path
              className="cake-circle-12"
              d="M37.09,58.93c-1.49-2.48-3-5.13-4.41-8H31a4.89,4.89,0,0,0-5,4.71v3.74a10,10,0,0,0,11.15-.46Z"
            />
            <path
              className="cake-circle-7"
              d="M46.7,61a10.1,10.1,0,0,0,10.1-10.1H36.6A10.1,10.1,0,0,0,46.7,61Z"
            />
            <path
              className="cake-circle-7"
              d="M62.24,61a10.1,10.1,0,0,0,10.1-10.1H52.14A10.1,10.1,0,0,0,62.24,61Z"
            />
            <path
              className="cake-circle-7"
              d="M77.77,61a10.1,10.1,0,0,0,10.1-10.1H67.67A10.1,10.1,0,0,0,77.77,61Z"
            />
            <path
              className="cake-circle-7"
              d="M93.31,61a10.1,10.1,0,0,0,10.1-10.1H83.21A10.1,10.1,0,0,0,93.31,61Z"
            />
            <path
              className="cake-circle-7"
              d="M108.85,61a10,10,0,0,0,5.21-1.46V55.65a4.72,4.72,0,0,0-4.71-4.71H98.75A10.1,10.1,0,0,0,108.85,61Z"
            />
            <path
              className="cake-circle-3"
              d="M41.26,71.58c0-.09,0-.17,0-.25H25.94v8.88a10.08,10.08,0,0,0,15.32-8.63Z"
            />
            <path
              className="cake-circle-7"
              d="M36.6,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H36.63C36.62,71.47,36.6,71.61,36.6,71.76Z"
            />
            <path
              className="cake-circle-11"
              d="M36.6,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H36.63C36.62,71.47,36.6,71.61,36.6,71.76Z"
            />
            <path
              className="cake-circle-3"
              d="M46.7,81.86a10,10,0,0,0,6.86-2.71,74.07,74.07,0,0,1-7.64-7.82H36.63c0,.14,0,.28,0,.43A10.1,10.1,0,0,0,46.7,81.86Z"
            />
            <path
              className="cake-circle-12"
              d="M41.26,71.58c0-.09,0-.17,0-.25H25.94v8.88a10.08,10.08,0,0,0,15.32-8.63Z"
            />
            <path
              className="cake-circle-12"
              d="M46.7,81.86a10,10,0,0,0,6.86-2.71,74.07,74.07,0,0,1-7.64-7.82H36.63c0,.14,0,.28,0,.43A10.1,10.1,0,0,0,46.7,81.86Z"
            />
            <path
              className="cake-circle-7"
              d="M52.14,71.76a10.1,10.1,0,0,0,20.2,0c0-.15,0-.29,0-.43H52.17C52.16,71.47,52.14,71.61,52.14,71.76Z"
            />
            <path
              className="cake-circle-7"
              d="M67.67,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H67.7C67.69,71.47,67.67,71.61,67.67,71.76Z"
            />
            <path
              className="cake-circle-7"
              d="M83.21,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H83.24C83.23,71.47,83.21,71.61,83.21,71.76Z"
            />
            <path
              className="cake-circle-7"
              d="M98.75,71.76a10.08,10.08,0,0,0,15.31,8.64V71.33H98.77C98.77,71.47,98.75,71.61,98.75,71.76Z"
            />
            <path
              className="cake-circle-11"
              d="M46.7,61a10.1,10.1,0,0,0,10.1-10.1H36.6A10.1,10.1,0,0,0,46.7,61Z"
            />
            <path
              className="cake-circle-11"
              d="M62.24,61a10.1,10.1,0,0,0,10.1-10.1H52.14A10.1,10.1,0,0,0,62.24,61Z"
            />
            <path
              className="cake-circle-11"
              d="M77.77,61a10.1,10.1,0,0,0,10.1-10.1H67.67A10.1,10.1,0,0,0,77.77,61Z"
            />
            <path
              className="cake-circle-11"
              d="M93.31,61a10.1,10.1,0,0,0,10.1-10.1H83.21A10.1,10.1,0,0,0,93.31,61Z"
            />
            <path
              className="cake-circle-11"
              d="M108.85,61a10,10,0,0,0,5.21-1.46V55.65a4.72,4.72,0,0,0-4.71-4.71H98.75A10.1,10.1,0,0,0,108.85,61Z"
            />
            <path
              className="cake-circle-11"
              d="M52.14,71.76a10.1,10.1,0,0,0,20.2,0c0-.15,0-.29,0-.43H52.17C52.16,71.47,52.14,71.61,52.14,71.76Z"
            />
            <path
              className="cake-circle-11"
              d="M67.67,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H67.7C67.69,71.47,67.67,71.61,67.67,71.76Z"
            />
            <path
              className="cake-circle-11"
              d="M83.21,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H83.24C83.23,71.47,83.21,71.61,83.21,71.76Z"
            />
            <path
              className="cake-circle-11"
              d="M98.75,71.76a10.08,10.08,0,0,0,15.31,8.64V71.33H98.77C98.77,71.47,98.75,71.61,98.75,71.76Z"
            />
            <circle className="cake-circle-4" cx="27.24" cy="71.42" r="3.29" />
            <circle className="cake-circle-4" cx="33.82" cy="71.42" r="3.29" />
            <circle className="cake-circle-4" cx="40.41" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="46.99" cy="71.42" r="3.29" />
            <path
              className="cake-circle-4"
              d="M47,74.71a3.23,3.23,0,0,0,1.57-.42c-1.4-1.49-2.8-3.1-4.19-4.85a3.24,3.24,0,0,0-.67,2A3.29,3.29,0,0,0,47,74.71Z"
            />
            <circle className="cake-circle-3" cx="53.57" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="60.16" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="66.74" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="73.32" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="79.91" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="86.49" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="93.07" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="99.66" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="106.24" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="112.82" cy="71.42" r="3.29" />
            <circle className="cake-circle-4" cx="27.24" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="33.82" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="40.41" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="46.99" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="53.57" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="60.16" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="66.74" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="73.32" cy="92.3" r="3.29" />
            <path
              className="cake-circle-4"
              d="M76.61,92.28a3.29,3.29,0,0,0-.13-.88,45.9,45.9,0,0,1-5.31-1.57A3.28,3.28,0,0,0,70,92.28Z"
            />
            <circle className="cake-circle-3" cx="79.91" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="86.49" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="93.07" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="99.66" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="106.24" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="112.82" cy="92.3" r="3.29" />
            <path
              className="cake-circle-8"
              d="M121.11,92.3H18.89c-1.7,0-3.09.92-3.09,2h0c0,1.12,1.39,2.05,3.09,2.05,0,0,14.9.95,51.11.95s51.11-.95,51.11-.95c1.7,0,3.09-.93,3.09-2.05h0C124.2,93.22,122.81,92.3,121.11,92.3Z"
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
            <style>{`.cake-circle-1{fill:none;}.cake-circle-2{fill:#fde5cb;}.cake-circle-3{fill:#f17732;}.cake-circle-4{fill:#99052e;}.cake-circle-5{fill:#10004c;}.cake-circle-6{fill:#5fcbeb;}.cake-circle-7{fill:#feca1e;}.cake-circle-8{fill:#2870b5;}.cake-circle-9{fill:#f8f7f4;}.cake-circle-10{fill:url(#_2-dot);}.cake-circle-11{fill:url(#_4-dot);}.cake-circle-12{fill:url(#_5-dot);}`}</style>
            <pattern
              data-name="2-dot"
              width="4"
              height="4"
              patternTransform="translate(-38 5.63)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cake-circle-1" width="4" height="4" />
              <circle className="cake-circle-2" cx="3" cy="4" r="0.35" />
              <circle className="cake-circle-2" cx="1" cy="4" r="0.35" />
              <circle className="cake-circle-2" cx="4" cy="2" r="0.35" />
              <circle className="cake-circle-2" cx="2" cy="2" r="0.35" />
              <circle className="cake-circle-2" cy="2" r="0.35" />
              <circle className="cake-circle-2" cx="3" r="0.35" />
              <circle className="cake-circle-2" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="4-dot"
              width="4"
              height="4"
              patternTransform="translate(-38 5.63)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cake-circle-1" width="4" height="4" />
              <circle className="cake-circle-3" cx="3" cy="4" r="0.35" />
              <circle className="cake-circle-3" cx="1" cy="4" r="0.35" />
              <circle className="cake-circle-3" cx="4" cy="2" r="0.35" />
              <circle className="cake-circle-3" cx="2" cy="2" r="0.35" />
              <circle className="cake-circle-3" cy="2" r="0.35" />
              <circle className="cake-circle-3" cx="3" r="0.35" />
              <circle className="cake-circle-3" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="5-dot"
              width="4"
              height="4"
              patternTransform="translate(-38 5.63)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cake-circle-1" width="4" height="4" />
              <circle className="cake-circle-4" cx="3" cy="4" r="0.35" />
              <circle className="cake-circle-4" cx="1" cy="4" r="0.35" />
              <circle className="cake-circle-4" cx="4" cy="2" r="0.35" />
              <circle className="cake-circle-4" cx="2" cy="2" r="0.35" />
              <circle className="cake-circle-4" cy="2" r="0.35" />
              <circle className="cake-circle-4" cx="3" r="0.35" />
              <circle className="cake-circle-4" cx="1" r="0.35" />
            </pattern>
          </defs>

          <g>
            <circle className="cake-circle-5" cx="70" cy="70" r="70" />
            <circle className="cake-circle-5" cx="70" cy="70" r="70" />
          </g>
          <g>
            <rect
              className="cake-circle-6"
              x="28.16"
              y="41.72"
              width="1.52"
              height="14.55"
              transform="translate(-9.06 6.64) rotate(-11.33)"
            />
            <rect
              className="cake-circle-4"
              x="27.1"
              y="42.69"
              width="1.52"
              height="2.07"
              transform="translate(-8.05 6.33) rotate(-11.33)"
            />
            <path
              className="cake-circle-7"
              d="M28.44,38.34a1.66,1.66,0,1,1-3.14,1.09,6.43,6.43,0,0,1,.52-4.76C25.84,37,27.89,36.77,28.44,38.34Z"
            />
            <rect
              className="cake-circle-6"
              x="43.01"
              y="44.96"
              width="1.52"
              height="14.55"
              transform="translate(-5.73 5.4) rotate(-6.62)"
            />
            <rect
              className="cake-circle-4"
              x="42.39"
              y="45.87"
              width="1.52"
              height="2.07"
              transform="translate(-5.12 5.29) rotate(-6.62)"
            />
            <path
              className="cake-circle-7"
              d="M44.18,41.59a1.67,1.67,0,1,1-3.23.83,6.49,6.49,0,0,1,.92-4.71C41.69,40,43.76,40,44.18,41.59Z"
            />
            <rect
              className="cake-circle-6"
              x="57.99"
              y="38.78"
              width="1.52"
              height="14.55"
              transform="translate(-3.81 5.33) rotate(-5.03)"
            />
            <rect
              className="cake-circle-4"
              x="57.51"
              y="39.67"
              width="1.52"
              height="2.07"
              transform="translate(-3.35 5.27) rotate(-5.03)"
            />
            <path
              className="cake-circle-7"
              d="M59.44,35.42a1.69,1.69,0,0,1-1.24,2,1.71,1.71,0,0,1-2-1.3,6.42,6.42,0,0,1,1-4.68C57,33.79,59.07,33.79,59.44,35.42Z"
            />
            <rect
              className="cake-circle-8"
              x="79.74"
              y="39.55"
              width="1.52"
              height="14.55"
              transform="translate(-7.63 16.73) rotate(-11.33)"
            />
            <rect
              className="cake-circle-3"
              x="78.68"
              y="40.52"
              width="1.52"
              height="2.07"
              transform="translate(-6.62 16.42) rotate(-11.33)"
            />
            <path
              className="cake-circle-2"
              d="M80,36.18a1.66,1.66,0,1,1-3.14,1.09,6.46,6.46,0,0,1,.53-4.77C77.42,34.82,79.48,34.6,80,36.18Z"
            />
            <rect
              className="cake-circle-8"
              x="86.73"
              y="43.28"
              width="1.52"
              height="14.55"
              transform="translate(9.04 -13.13) rotate(9.05)"
            />
            <rect
              className="cake-circle-3"
              x="87.57"
              y="44.22"
              width="1.52"
              height="2.07"
              transform="translate(8.22 -13.33) rotate(9.05)"
            />
            <path
              className="cake-circle-7"
              d="M90.75,40.41a1.7,1.7,0,0,1-1.7,1.68,1.72,1.72,0,0,1-1.63-1.75,6.5,6.5,0,0,1,2.16-4.29C88.78,38.23,90.79,38.74,90.75,40.41Z"
            />
            <rect
              className="cake-circle-6"
              x="94.39"
              y="39.7"
              width="1.52"
              height="14.55"
              transform="translate(2.78 -5.25) rotate(3.21)"
            />
            <rect
              className="cake-circle-4"
              x="94.7"
              y="40.57"
              width="1.52"
              height="2.07"
              transform="translate(2.48 -5.28) rotate(3.21)"
            />
            <path
              className="cake-circle-3"
              d="M97.37,36.54a1.67,1.67,0,1,1-3.32.27,6.42,6.42,0,0,1,1.71-4.48C95.19,34.58,97.24,34.88,97.37,36.54Z"
            />
            <rect
              className="cake-circle-8"
              x="103.13"
              y="45.88"
              width="1.52"
              height="14.55"
              transform="translate(-5.82 13.39) rotate(-7.17)"
            />
            <rect
              className="cake-circle-3"
              x="102.46"
              y="46.79"
              width="1.52"
              height="2.07"
              transform="translate(-5.16 13.26) rotate(-7.17)"
            />
            <path
              className="cake-circle-7"
              d="M104.19,42.5A1.7,1.7,0,0,1,103,44.59a1.72,1.72,0,0,1-2-1.23,6.44,6.44,0,0,1,.87-4.71C101.69,41,103.76,40.89,104.19,42.5Z"
            />
            <rect
              className="cake-circle-8"
              x="109.16"
              y="40.52"
              width="1.52"
              height="14.55"
              transform="translate(13.1 -22.87) rotate(12.62)"
            />
            <rect
              className="cake-circle-3"
              x="110.34"
              y="41.51"
              width="1.52"
              height="2.07"
              transform="translate(11.99 -23.25) rotate(12.62)"
            />
            <path
              className="cake-circle-7"
              d="M113.81,37.87a1.66,1.66,0,1,1-3.31-.28,6.41,6.41,0,0,1,2.41-4.14C112,35.57,114,36.21,113.81,37.87Z"
            />
            <rect
              className="cake-circle-8"
              x="64.23"
              y="41.36"
              width="1.52"
              height="14.55"
              transform="matrix(0.99, 0.13, -0.13, 0.99, 6.85, -8.01)"
            />
            <rect
              className="cake-circle-3"
              x="64.93"
              y="42.27"
              width="1.52"
              height="2.07"
              transform="translate(6.16 -8.14) rotate(7.44)"
            />
            <path
              className="cake-circle-3"
              d="M68,38.4a1.71,1.71,0,0,1-1.65,1.73,1.73,1.73,0,0,1-1.68-1.71,6.46,6.46,0,0,1,2-4.34C65.94,36.28,68,36.73,68,38.4Z"
            />
            <rect
              className="cake-circle-8"
              x="49.24"
              y="43.07"
              width="1.52"
              height="14.55"
              transform="translate(5.91 -5.25) rotate(6.39)"
            />
            <rect
              className="cake-circle-3"
              x="49.84"
              y="43.98"
              width="1.52"
              height="2.07"
              transform="translate(5.32 -5.35) rotate(6.39)"
            />
            <path
              className="cake-circle-2"
              d="M52.79,40.06a1.7,1.7,0,0,1-1.62,1.76,1.72,1.72,0,0,1-1.71-1.68,6.41,6.41,0,0,1,1.95-4.37C50.72,38,52.75,38.4,52.79,40.06Z"
            />
            <rect
              className="cake-circle-8"
              x="34.23"
              y="39.59"
              width="1.52"
              height="14.55"
              transform="translate(5 -3.35) rotate(5.9)"
            />
            <rect
              className="cake-circle-3"
              x="34.78"
              y="40.49"
              width="1.52"
              height="2.07"
              transform="translate(4.45 -3.43) rotate(5.9)"
            />
            <path
              className="cake-circle-3"
              d="M37.69,36.55a1.71,1.71,0,0,1-1.61,1.78,1.73,1.73,0,0,1-1.72-1.67,6.42,6.42,0,0,1,1.92-4.39C35.61,34.49,37.63,34.89,37.69,36.55Z"
            />
            <rect
              className="cake-circle-6"
              x="72.82"
              y="46.08"
              width="1.52"
              height="14.55"
              transform="translate(-4.2 6.33) rotate(-4.79)"
            />
            <rect
              className="cake-circle-4"
              x="72.37"
              y="46.97"
              width="1.52"
              height="2.07"
              transform="translate(-3.75 6.27) rotate(-4.79)"
            />
            <path
              className="cake-circle-7"
              d="M74.32,42.73a1.7,1.7,0,0,1-1.25,2,1.73,1.73,0,0,1-2-1.32,6.49,6.49,0,0,1,1.07-4.67C71.89,41.08,74,41.1,74.32,42.73Z"
            />
            <path
              className="cake-circle-9"
              d="M30.65,50.94h78.7a4.71,4.71,0,0,1,4.71,4.71V71.28a0,0,0,0,1,0,0H25.94a0,0,0,0,1,0,0V55.65A4.71,4.71,0,0,1,30.65,50.94Z"
            />
            <path
              className="cake-circle-10"
              d="M30.65,50.94h78.7a4.71,4.71,0,0,1,4.71,4.71V71.28a0,0,0,0,1,0,0H25.94a0,0,0,0,1,0,0V55.65A4.71,4.71,0,0,1,30.65,50.94Z"
            />
            <path
              className="cake-circle-9"
              d="M25.94,71.33h88.12a0,0,0,0,1,0,0v19a4.71,4.71,0,0,1-4.71,4.71H30.65a4.71,4.71,0,0,1-4.71-4.71v-19A0,0,0,0,1,25.94,71.33Z"
            />
            <path
              className="cake-circle-10"
              d="M25.94,71.33h88.12a0,0,0,0,1,0,0v19a4.71,4.71,0,0,1-4.71,4.71H30.65a4.71,4.71,0,0,1-4.71-4.71v-19A0,0,0,0,1,25.94,71.33Z"
            />
            <path
              className="cake-circle-2"
              d="M87.84,92.28H25.94V55.65a4.89,4.89,0,0,1,5-4.71h1.73C56.1,97.3,87.84,92.28,87.84,92.28Z"
            />
            <path
              className="cake-circle-7"
              d="M30.65,50.94a4.72,4.72,0,0,0-4.71,4.71v3.74a10.07,10.07,0,0,0,15.31-8.45Z"
            />
            <path
              className="cake-circle-3"
              d="M37.09,58.93c-1.49-2.48-3-5.13-4.41-8H31a4.89,4.89,0,0,0-5,4.71v3.74a10,10,0,0,0,11.15-.46Z"
            />
            <path
              className="cake-circle-11"
              d="M30.65,50.94a4.72,4.72,0,0,0-4.71,4.71v3.74a10.07,10.07,0,0,0,15.31-8.45Z"
            />
            <path
              className="cake-circle-12"
              d="M37.09,58.93c-1.49-2.48-3-5.13-4.41-8H31a4.89,4.89,0,0,0-5,4.71v3.74a10,10,0,0,0,11.15-.46Z"
            />
            <path
              className="cake-circle-7"
              d="M46.7,61a10.1,10.1,0,0,0,10.1-10.1H36.6A10.1,10.1,0,0,0,46.7,61Z"
            />
            <path
              className="cake-circle-7"
              d="M62.24,61a10.1,10.1,0,0,0,10.1-10.1H52.14A10.1,10.1,0,0,0,62.24,61Z"
            />
            <path
              className="cake-circle-7"
              d="M77.77,61a10.1,10.1,0,0,0,10.1-10.1H67.67A10.1,10.1,0,0,0,77.77,61Z"
            />
            <path
              className="cake-circle-7"
              d="M93.31,61a10.1,10.1,0,0,0,10.1-10.1H83.21A10.1,10.1,0,0,0,93.31,61Z"
            />
            <path
              className="cake-circle-7"
              d="M108.85,61a10,10,0,0,0,5.21-1.46V55.65a4.72,4.72,0,0,0-4.71-4.71H98.75A10.1,10.1,0,0,0,108.85,61Z"
            />
            <path
              className="cake-circle-3"
              d="M41.26,71.58c0-.09,0-.17,0-.25H25.94v8.88a10.08,10.08,0,0,0,15.32-8.63Z"
            />
            <path
              className="cake-circle-7"
              d="M36.6,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H36.63C36.62,71.47,36.6,71.61,36.6,71.76Z"
            />
            <path
              className="cake-circle-11"
              d="M36.6,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H36.63C36.62,71.47,36.6,71.61,36.6,71.76Z"
            />
            <path
              className="cake-circle-3"
              d="M46.7,81.86a10,10,0,0,0,6.86-2.71,74.07,74.07,0,0,1-7.64-7.82H36.63c0,.14,0,.28,0,.43A10.1,10.1,0,0,0,46.7,81.86Z"
            />
            <path
              className="cake-circle-12"
              d="M41.26,71.58c0-.09,0-.17,0-.25H25.94v8.88a10.08,10.08,0,0,0,15.32-8.63Z"
            />
            <path
              className="cake-circle-12"
              d="M46.7,81.86a10,10,0,0,0,6.86-2.71,74.07,74.07,0,0,1-7.64-7.82H36.63c0,.14,0,.28,0,.43A10.1,10.1,0,0,0,46.7,81.86Z"
            />
            <path
              className="cake-circle-7"
              d="M52.14,71.76a10.1,10.1,0,0,0,20.2,0c0-.15,0-.29,0-.43H52.17C52.16,71.47,52.14,71.61,52.14,71.76Z"
            />
            <path
              className="cake-circle-7"
              d="M67.67,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H67.7C67.69,71.47,67.67,71.61,67.67,71.76Z"
            />
            <path
              className="cake-circle-7"
              d="M83.21,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H83.24C83.23,71.47,83.21,71.61,83.21,71.76Z"
            />
            <path
              className="cake-circle-7"
              d="M98.75,71.76a10.08,10.08,0,0,0,15.31,8.64V71.33H98.77C98.77,71.47,98.75,71.61,98.75,71.76Z"
            />
            <path
              className="cake-circle-11"
              d="M46.7,61a10.1,10.1,0,0,0,10.1-10.1H36.6A10.1,10.1,0,0,0,46.7,61Z"
            />
            <path
              className="cake-circle-11"
              d="M62.24,61a10.1,10.1,0,0,0,10.1-10.1H52.14A10.1,10.1,0,0,0,62.24,61Z"
            />
            <path
              className="cake-circle-11"
              d="M77.77,61a10.1,10.1,0,0,0,10.1-10.1H67.67A10.1,10.1,0,0,0,77.77,61Z"
            />
            <path
              className="cake-circle-11"
              d="M93.31,61a10.1,10.1,0,0,0,10.1-10.1H83.21A10.1,10.1,0,0,0,93.31,61Z"
            />
            <path
              className="cake-circle-11"
              d="M108.85,61a10,10,0,0,0,5.21-1.46V55.65a4.72,4.72,0,0,0-4.71-4.71H98.75A10.1,10.1,0,0,0,108.85,61Z"
            />
            <path
              className="cake-circle-11"
              d="M52.14,71.76a10.1,10.1,0,0,0,20.2,0c0-.15,0-.29,0-.43H52.17C52.16,71.47,52.14,71.61,52.14,71.76Z"
            />
            <path
              className="cake-circle-11"
              d="M67.67,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H67.7C67.69,71.47,67.67,71.61,67.67,71.76Z"
            />
            <path
              className="cake-circle-11"
              d="M83.21,71.76a10.1,10.1,0,1,0,20.2,0c0-.15,0-.29,0-.43H83.24C83.23,71.47,83.21,71.61,83.21,71.76Z"
            />
            <path
              className="cake-circle-11"
              d="M98.75,71.76a10.08,10.08,0,0,0,15.31,8.64V71.33H98.77C98.77,71.47,98.75,71.61,98.75,71.76Z"
            />
            <circle className="cake-circle-4" cx="27.24" cy="71.42" r="3.29" />
            <circle className="cake-circle-4" cx="33.82" cy="71.42" r="3.29" />
            <circle className="cake-circle-4" cx="40.41" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="46.99" cy="71.42" r="3.29" />
            <path
              className="cake-circle-4"
              d="M47,74.71a3.23,3.23,0,0,0,1.57-.42c-1.4-1.49-2.8-3.1-4.19-4.85a3.24,3.24,0,0,0-.67,2A3.29,3.29,0,0,0,47,74.71Z"
            />
            <circle className="cake-circle-3" cx="53.57" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="60.16" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="66.74" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="73.32" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="79.91" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="86.49" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="93.07" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="99.66" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="106.24" cy="71.42" r="3.29" />
            <circle className="cake-circle-3" cx="112.82" cy="71.42" r="3.29" />
            <circle className="cake-circle-4" cx="27.24" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="33.82" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="40.41" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="46.99" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="53.57" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="60.16" cy="92.3" r="3.29" />
            <circle className="cake-circle-4" cx="66.74" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="73.32" cy="92.3" r="3.29" />
            <path
              className="cake-circle-4"
              d="M76.61,92.28a3.29,3.29,0,0,0-.13-.88,45.9,45.9,0,0,1-5.31-1.57A3.28,3.28,0,0,0,70,92.28Z"
            />
            <circle className="cake-circle-3" cx="79.91" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="86.49" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="93.07" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="99.66" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="106.24" cy="92.3" r="3.29" />
            <circle className="cake-circle-3" cx="112.82" cy="92.3" r="3.29" />
            <path
              className="cake-circle-8"
              d="M121.11,92.3H18.89c-1.7,0-3.09.92-3.09,2h0c0,1.12,1.39,2.05,3.09,2.05,0,0,14.9.95,51.11.95s51.11-.95,51.11-.95c1.7,0,3.09-.93,3.09-2.05h0C124.2,93.22,122.81,92.3,121.11,92.3Z"
            />
          </g>
        </svg>
      );
    }
  }
}

CakeCircleIllustration.propTypes = {
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

CakeCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
};

export default CakeCircleIllustration;
