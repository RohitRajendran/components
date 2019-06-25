/** @module HomeCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a gift illustration. */
class HomeCircleIllustration extends PureComponent {
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
    const {
      illuminate,
      color,
      draft,
      width,
      height,
      className,
      style,
    } = this.props;

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
            <style>{`.cls-1{fill:none;}.cls-2{fill:#fde5cb;}.cls-3{fill:#f17732;}.cls-4{fill:#10004c;}.cls-5{fill:#5fcbeb;}.cls-6{fill:#2870b5;}.cls-7{fill:#feca1e;}.cls-8{fill:#f8f7f4;}.cls-9{fill:url(#_2-dot);}.cls-10{fill:#99052e;}.cls-11{fill:url(#_4-dot);}`}</style>
            <pattern
              id="_2-dot"
              data-name="2-dot"
              width="4"
              height="4"
              patternTransform="translate(0.72 65.71)"
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
              patternTransform="translate(4.72 65.79)"
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
          </defs>
          <g id="Circle-BG">
            <circle className="cls-4" cx="70" cy="70" r="70" />
          </g>
          <g id="asset-house">
            <rect
              className="cls-5"
              x="32.07"
              y="79.21"
              width="77.31"
              height="23.79"
            />
            <path
              className="cls-6"
              d="M32.07,96.22v-17h77.3v1.37S45.62,82.63,32.07,96.22Z"
            />
            <rect
              className="cls-4"
              x="39.42"
              y="86.53"
              width="7.06"
              height="11.35"
            />
            <rect
              className="cls-6"
              x="79.37"
              y="84.1"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-4"
              x="79.37"
              y="87.88"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-6"
              x="79.37"
              y="91.66"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-4"
              x="79.37"
              y="95.44"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-6"
              x="79.37"
              y="99.23"
              width="23.6"
              height="3.78"
            />
            <path
              className="cls-7"
              d="M57.46,84.1V103l-32.1,20.91A69.79,69.79,0,0,0,46.67,136l22.08-33,0-18.91Z"
            />
            <rect
              className="cls-8"
              x="57.46"
              y="84.1"
              width="11.29"
              height="18.9"
            />
            <polygon
              className="cls-8"
              points="113.6 79.22 27.84 79.22 32.07 71.34 109.37 71.34 113.6 79.22"
            />
            <polygon
              className="cls-9"
              points="113.6 79.22 27.84 79.22 32.07 71.34 109.37 71.34 113.6 79.22"
            />
            <rect
              className="cls-5"
              x="73.26"
              y="61.22"
              width="36.12"
              height="10.12"
            />
            <path
              className="cls-6"
              d="M73.26,68.41V61.22h36.11v1.44S81.37,62.5,73.26,68.41Z"
            />
            <polygon
              className="cls-8"
              points="113.6 61.22 27.84 61.22 32.07 39.68 109.37 39.68 113.6 61.22"
            />
            <polygon
              className="cls-9"
              points="113.6 61.22 27.84 61.22 32.07 39.68 109.37 39.68 113.6 61.22"
            />
            <polygon
              className="cls-7"
              points="52.66 29.41 77.49 61.2 27.84 61.2 52.66 29.41"
            />
            <polygon
              className="cls-2"
              points="29.2 54.28 27.84 61.2 74.61 61.2 57.8 39.68 44.23 39.68 29.2 54.28"
            />
            <polygon
              className="cls-8"
              points="52.66 29.41 77.49 61.2 27.84 61.2 52.66 29.41"
            />
            <polygon
              className="cls-5"
              points="73.22 61.15 52.66 33.64 32.11 61.15 32.07 61.15 32.07 71.34 73.26 71.34 73.26 61.15 73.22 61.15"
            />
            <path
              className="cls-6"
              d="M52.66,33.64l8.6,11.5c-12.54-2.36-29.19,16-29.19,16Z"
            />
            <polygon
              className="cls-3"
              points="63.1 42.78 77.49 61.2 48.72 61.2 63.1 42.78"
            />
            <polygon
              className="cls-10"
              points="63.1 42.78 77.49 61.2 48.72 61.2 63.1 42.78"
            />
            <polygon
              className="cls-7"
              points="73.22 61.15 62.96 47.42 52.7 61.15 52.66 61.15 52.66 71.34 73.26 71.34 73.26 61.15 73.22 61.15"
            />
            <polygon
              className="cls-11"
              points="73.22 61.15 62.96 47.42 52.7 61.15 52.66 61.15 52.66 71.34 73.26 71.34 73.26 61.15 73.22 61.15"
            />
            <path
              className="cls-3"
              d="M63,47.42l5.79,7.74c-5.47-3.17-16,6-16,6Z"
            />
            <rect
              className="cls-4"
              x="59.95"
              y="63.21"
              width="6.66"
              height="5.92"
            />
            <rect
              className="cls-4"
              x="40.29"
              y="63.21"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-4"
              x="79.59"
              y="63.43"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-4"
              x="88.61"
              y="63.43"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-4"
              x="97.64"
              y="63.43"
              width="5.33"
              height="5.92"
            />
          </g>
        </svg>
      );
    } else if (color) {
      return (
        <svg
          {...elementProps}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 140 140"
        >
          <defs>
            <style>{`.cls-1{fill:none;}.cls-2{fill:#fde5cb;}.cls-3{fill:#f17732;}.cls-4{fill:#10004c;}.cls-5{fill:#5fcbeb;}.cls-6{fill:#2870b5;}.cls-7{fill:#f8f7f4;}.cls-8{fill:url(#_2-dot);}.cls-9{fill:#feca1e;}.cls-10{fill:#99052e;}.cls-11{fill:url(#_4-dot);}`}</style>
            <pattern
              id="_2-dot"
              data-name="2-dot"
              width="4"
              height="4"
              patternTransform="translate(0.72)"
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
              patternTransform="translate(4.72 0.08)"
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
          </defs>
          <g id="Circle-BG">
            <circle className="cls-4" cx="70" cy="70" r="70" />
          </g>
          <g id="asset-house">
            <rect
              className="cls-5"
              x="32.07"
              y="79.21"
              width="77.31"
              height="23.79"
            />
            <path
              className="cls-6"
              d="M32.07,96.22v-17h77.3v1.37S45.62,82.63,32.07,96.22Z"
            />
            <rect
              className="cls-6"
              x="79.37"
              y="84.1"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-4"
              x="79.37"
              y="87.88"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-6"
              x="79.37"
              y="91.66"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-4"
              x="79.37"
              y="95.44"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-6"
              x="79.37"
              y="99.23"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-6"
              x="57.46"
              y="84.1"
              width="11.29"
              height="18.9"
            />
            <path
              className="cls-4"
              d="M57.46,86.27c3.66-.76,7.47-1.42,11.29-2V84.1H57.46Z"
            />
            <rect
              className="cls-4"
              x="39.42"
              y="86.53"
              width="7.06"
              height="11.35"
            />
            <polygon
              className="cls-7"
              points="113.6 79.22 27.84 79.22 32.07 71.34 109.37 71.34 113.6 79.22"
            />
            <polygon
              className="cls-8"
              points="113.6 79.22 27.84 79.22 32.07 71.34 109.37 71.34 113.6 79.22"
            />
            <rect
              className="cls-5"
              x="73.26"
              y="61.22"
              width="36.12"
              height="10.12"
            />
            <path
              className="cls-6"
              d="M73.26,68.41V61.22h36.11v1.44S81.37,62.5,73.26,68.41Z"
            />
            <polygon
              className="cls-7"
              points="113.6 61.22 27.84 61.22 32.07 39.68 109.37 39.68 113.6 61.22"
            />
            <polygon
              className="cls-8"
              points="113.6 61.22 27.84 61.22 32.07 39.68 109.37 39.68 113.6 61.22"
            />
            <polygon
              className="cls-9"
              points="52.66 29.41 77.49 61.2 27.84 61.2 52.66 29.41"
            />
            <polygon
              className="cls-2"
              points="29.2 54.28 27.84 61.2 74.61 61.2 57.8 39.68 44.23 39.68 29.2 54.28"
            />
            <polygon
              className="cls-7"
              points="52.66 29.41 77.49 61.2 27.84 61.2 52.66 29.41"
            />
            <polygon
              className="cls-5"
              points="73.22 61.15 52.66 33.64 32.11 61.15 32.07 61.15 32.07 71.34 73.26 71.34 73.26 61.15 73.22 61.15"
            />
            <path
              className="cls-6"
              d="M52.66,33.64l8.6,11.5c-12.54-2.36-29.19,16-29.19,16Z"
            />
            <polygon
              className="cls-3"
              points="63.1 42.78 77.49 61.2 48.72 61.2 63.1 42.78"
            />
            <polygon
              className="cls-10"
              points="63.1 42.78 77.49 61.2 48.72 61.2 63.1 42.78"
            />
            <polygon
              className="cls-9"
              points="73.22 61.15 62.96 47.42 52.7 61.15 52.66 61.15 52.66 71.34 73.26 71.34 73.26 61.15 73.22 61.15"
            />
            <polygon
              className="cls-11"
              points="73.22 61.15 62.96 47.42 52.7 61.15 52.66 61.15 52.66 71.34 73.26 71.34 73.26 61.15 73.22 61.15"
            />
            <path
              className="cls-3"
              d="M63,47.42l5.79,7.74c-5.47-3.17-16,6-16,6Z"
            />
            <rect
              className="cls-4"
              x="59.95"
              y="63.21"
              width="6.66"
              height="5.92"
            />
            <rect
              className="cls-4"
              x="40.29"
              y="63.21"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-4"
              x="79.59"
              y="63.43"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-4"
              x="88.61"
              y="63.43"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-4"
              x="97.64"
              y="63.43"
              width="5.33"
              height="5.92"
            />
          </g>
        </svg>
      );
    } else if (draft) {
      return (
        <svg
          {...elementProps}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 140 140"
        >
          <defs>
            <style>{`.cls-1{fill:#5b6279;}.cls-2{fill:#cdcfd6;}.cls-3{fill:#9da1af;}.cls-4{fill:#8c91a1;}.cls-5{fill:#fff;}.cls-6{fill:#feca1e;}.cls-7{fill:#eeeff1;}.cls-8{fill:#f17732;}.cls-9{fill:#6b7186;}.cls-10{fill:#adb0bc;}`}</style>
          </defs>
          <g id="Circle-BG">
            <circle className="cls-1" cx="70" cy="70" r="70" />
          </g>
          <g id="asset-house">
            <rect
              className="cls-2"
              x="32.07"
              y="79.21"
              width="77.31"
              height="23.79"
            />
            <path
              className="cls-3"
              d="M32.07,96.22v-17h77.3v1.37S45.62,82.63,32.07,96.22Z"
            />
            <rect
              className="cls-4"
              x="79.37"
              y="84.1"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-1"
              x="79.37"
              y="87.88"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-4"
              x="79.37"
              y="91.66"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-1"
              x="79.37"
              y="95.44"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-4"
              x="79.37"
              y="99.23"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-4"
              x="57.46"
              y="84.1"
              width="11.29"
              height="18.9"
            />
            <path
              className="cls-1"
              d="M57.46,86.27c3.66-.76,7.47-1.42,11.29-2V84.1H57.46Z"
            />
            <rect
              className="cls-1"
              x="39.42"
              y="86.53"
              width="7.06"
              height="11.35"
            />
            <polygon
              className="cls-5"
              points="113.6 79.22 27.84 79.22 32.07 71.34 109.37 71.34 113.6 79.22"
            />
            <rect
              className="cls-2"
              x="73.26"
              y="61.22"
              width="36.12"
              height="10.12"
            />
            <path
              className="cls-3"
              d="M73.26,68.41V61.22h36.11v1.44S81.37,62.5,73.26,68.41Z"
            />
            <polygon
              className="cls-5"
              points="113.6 61.22 27.84 61.22 32.07 39.68 109.37 39.68 113.6 61.22"
            />
            <polygon
              className="cls-6"
              points="52.66 29.41 77.49 61.2 27.84 61.2 52.66 29.41"
            />
            <polygon
              className="cls-7"
              points="29.2 54.28 27.84 61.2 74.61 61.2 57.8 39.68 44.23 39.68 29.2 54.28"
            />
            <polygon
              className="cls-5"
              points="52.66 29.41 77.49 61.2 27.84 61.2 52.66 29.41"
            />
            <polygon
              className="cls-2"
              points="73.22 61.15 52.66 33.64 32.11 61.15 32.07 61.15 32.07 71.34 73.26 71.34 73.26 61.15 73.22 61.15"
            />
            <path
              className="cls-3"
              d="M52.66,33.64l8.6,11.5c-12.54-2.36-29.19,16-29.19,16Z"
            />
            <polygon
              className="cls-8"
              points="63.1 42.78 77.49 61.2 48.72 61.2 63.1 42.78"
            />
            <polygon
              className="cls-9"
              points="63.1 42.78 77.49 61.2 48.72 61.2 63.1 42.78"
            />
            <polygon
              className="cls-10"
              points="73.22 61.15 62.96 47.42 52.7 61.15 52.66 61.15 52.66 71.34 73.26 71.34 73.26 61.15 73.22 61.15"
            />
            <path
              className="cls-4"
              d="M63,47.42l5.79,7.74c-5.47-3.17-16,6-16,6Z"
            />
            <rect
              className="cls-1"
              x="59.95"
              y="63.21"
              width="6.66"
              height="5.92"
            />
            <rect
              className="cls-1"
              x="40.29"
              y="63.21"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-1"
              x="79.59"
              y="63.43"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-1"
              x="88.61"
              y="63.43"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-1"
              x="97.64"
              y="63.43"
              width="5.33"
              height="5.92"
            />
          </g>
        </svg>
      );
    } else {
      return (
        <svg
          {...elementProps}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 140 140"
        >
          <defs>
            <style>{`.cls-1{fill:#10004c;}.cls-2{fill:#b7b3c9;}.cls-3{fill:#6f6693;}.cls-4{fill:#584d82;}.cls-5{fill:#fff;}.cls-6{fill:#feca1e;}.cls-7{fill:#e7e6ed;}.cls-8{fill:#f17732;}.cls-9{fill:#281a5e;}.cls-10{fill:#8780a5;}`}</style>
          </defs>
          <g id="Circle-BG">
            <circle className="cls-1" cx="70" cy="70" r="70" />
          </g>
          <g id="asset-house">
            <rect
              className="cls-2"
              x="32.07"
              y="79.21"
              width="77.31"
              height="23.79"
            />
            <path
              className="cls-3"
              d="M32.07,96.22v-17h77.3v1.37S45.62,82.63,32.07,96.22Z"
            />
            <rect
              className="cls-4"
              x="79.37"
              y="84.1"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-1"
              x="79.37"
              y="87.88"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-4"
              x="79.37"
              y="91.66"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-1"
              x="79.37"
              y="95.44"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-4"
              x="79.37"
              y="99.23"
              width="23.6"
              height="3.78"
            />
            <rect
              className="cls-4"
              x="57.46"
              y="84.1"
              width="11.29"
              height="18.9"
            />
            <path
              className="cls-1"
              d="M57.46,86.27c3.66-.76,7.47-1.42,11.29-2V84.1H57.46Z"
            />
            <rect
              className="cls-1"
              x="39.42"
              y="86.53"
              width="7.06"
              height="11.35"
            />
            <polygon
              className="cls-5"
              points="113.6 79.22 27.84 79.22 32.07 71.34 109.37 71.34 113.6 79.22"
            />
            <rect
              className="cls-2"
              x="73.26"
              y="61.22"
              width="36.12"
              height="10.12"
            />
            <path
              className="cls-3"
              d="M73.26,68.41V61.22h36.11v1.44S81.37,62.5,73.26,68.41Z"
            />
            <polygon
              className="cls-5"
              points="113.6 61.22 27.84 61.22 32.07 39.68 109.37 39.68 113.6 61.22"
            />
            <polygon
              className="cls-6"
              points="52.66 29.41 77.49 61.2 27.84 61.2 52.66 29.41"
            />
            <polygon
              className="cls-7"
              points="29.2 54.28 27.84 61.2 74.61 61.2 57.8 39.68 44.23 39.68 29.2 54.28"
            />
            <polygon
              className="cls-5"
              points="52.66 29.41 77.49 61.2 27.84 61.2 52.66 29.41"
            />
            <polygon
              className="cls-2"
              points="73.22 61.15 52.66 33.64 32.11 61.15 32.07 61.15 32.07 71.34 73.26 71.34 73.26 61.15 73.22 61.15"
            />
            <path
              className="cls-3"
              d="M52.66,33.64l8.6,11.5c-12.54-2.36-29.19,16-29.19,16Z"
            />
            <polygon
              className="cls-8"
              points="63.1 42.78 77.49 61.2 48.72 61.2 63.1 42.78"
            />
            <polygon
              className="cls-9"
              points="63.1 42.78 77.49 61.2 48.72 61.2 63.1 42.78"
            />
            <polygon
              className="cls-10"
              points="73.22 61.15 62.96 47.42 52.7 61.15 52.66 61.15 52.66 71.34 73.26 71.34 73.26 61.15 73.22 61.15"
            />
            <path
              className="cls-4"
              d="M63,47.42l5.79,7.74c-5.47-3.17-16,6-16,6Z"
            />
            <rect
              className="cls-1"
              x="59.95"
              y="63.21"
              width="6.66"
              height="5.92"
            />
            <rect
              className="cls-1"
              x="40.29"
              y="63.21"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-1"
              x="79.59"
              y="63.43"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-1"
              x="88.61"
              y="63.43"
              width="5.33"
              height="5.92"
            />
            <rect
              className="cls-1"
              x="97.64"
              y="63.43"
              width="5.33"
              height="5.92"
            />
          </g>
        </svg>
      );
    }
  }
}

HomeCircleIllustration.propTypes = {
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

HomeCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
};

export default HomeCircleIllustration;
