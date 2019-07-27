/** @module RamenCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a ramen illustration. */
class RamenCircleIllustration extends PureComponent {
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
          viewBox="0 0 150 150"
        >
          <defs>
            <style>{`.ramen-cls-1{fill:none;}.ramen-cls-2{fill:#f17732;}.ramen-cls-3{fill:#99052e;}.ramen-cls-4{fill:#10004c;}.ramen-cls-5{fill:#2870b5;}.ramen-cls-6{fill:#feca1e;}.ramen-cls-7{fill:url(#_4-dot);}.ramen-cls-8{fill:url(#_5-dot);}`}</style>
            <pattern
              data-name="4-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="ramen-cls-1" width="4" height="4" />
              <circle className="ramen-cls-2" cx="3" cy="4" r="0.35" />
              <circle className="ramen-cls-2" cx="1" cy="4" r="0.35" />
              <circle className="ramen-cls-2" cx="4" cy="2" r="0.35" />
              <circle className="ramen-cls-2" cx="2" cy="2" r="0.35" />
              <circle className="ramen-cls-2" cy="2" r="0.35" />
              <circle className="ramen-cls-2" cx="3" r="0.35" />
              <circle className="ramen-cls-2" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="5-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="ramen-cls-1" width="4" height="4" />
              <circle className="ramen-cls-3" cx="3" cy="4" r="0.35" />
              <circle className="ramen-cls-3" cx="1" cy="4" r="0.35" />
              <circle className="ramen-cls-3" cx="4" cy="2" r="0.35" />
              <circle className="ramen-cls-3" cx="2" cy="2" r="0.35" />
              <circle className="ramen-cls-3" cy="2" r="0.35" />
              <circle className="ramen-cls-3" cx="3" r="0.35" />
              <circle className="ramen-cls-3" cx="1" r="0.35" />
            </pattern>
          </defs>
          <g>
            <circle className="ramen-cls-4" cx="75" cy="75" r="70" />
          </g>
          <g>
            <polygon
              className="ramen-cls-5"
              points="19.85 60.23 91.89 102.38 92.15 101.94 20.87 58.53 19.85 60.23"
            />
            <polygon
              className="ramen-cls-5"
              points="26.98 51.35 90.77 105.18 91.09 104.8 28.27 49.85 26.98 51.35"
            />
            <path
              className="ramen-cls-6"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="ramen-cls-7"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="ramen-cls-2"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <path
              className="ramen-cls-8"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <rect
              className="ramen-cls-3"
              x="61.41"
              y="110.43"
              width="27.16"
              height="2.68"
            />
            <rect
              className="ramen-cls-3"
              x="44.49"
              y="79.79"
              width="60.99"
              height="4.21"
            />
            <rect
              className="ramen-cls-4"
              x="44.49"
              y="86.62"
              width="60.99"
              height="1.34"
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
          viewBox="0 0 150 150"
        >
          <defs>
            <style>{`.ramen-cls-1,.ramen-cls-10,.ramen-cls-8{fill:#5fcbeb;}.ramen-cls-1{clip-rule:evenodd;}.ramen-cls-2{fill:none;}.ramen-cls-3{fill:#f17732;}.ramen-cls-4{fill:#99052e;}.ramen-cls-5{fill:#10004c;}.ramen-cls-6{fill:#f8f7f4;}.ramen-cls-7{fill:#fde5cb;}.ramen-cls-11,.ramen-cls-8{fill-rule:evenodd;}.ramen-cls-9{clip-path:url(#clip-path);}.ramen-cls-11,.ramen-cls-12{fill:#2870b5;}.ramen-cls-13{fill:#feca1e;}.ramen-cls-14{fill:url(#_4-dot);}.ramen-cls-15{fill:url(#_5-dot);}`}</style>
            <clipPath id="clip-path">
              <path
                className="ramen-cls-1"
                d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
              />
            </clipPath>
            <pattern
              data-name="4-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="ramen-cls-2" width="4" height="4" />
              <circle className="ramen-cls-3" cx="3" cy="4" r="0.35" />
              <circle className="ramen-cls-3" cx="1" cy="4" r="0.35" />
              <circle className="ramen-cls-3" cx="4" cy="2" r="0.35" />
              <circle className="ramen-cls-3" cx="2" cy="2" r="0.35" />
              <circle className="ramen-cls-3" cy="2" r="0.35" />
              <circle className="ramen-cls-3" cx="3" r="0.35" />
              <circle className="ramen-cls-3" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="5-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="ramen-cls-2" width="4" height="4" />
              <circle className="ramen-cls-4" cx="3" cy="4" r="0.35" />
              <circle className="ramen-cls-4" cx="1" cy="4" r="0.35" />
              <circle className="ramen-cls-4" cx="4" cy="2" r="0.35" />
              <circle className="ramen-cls-4" cx="2" cy="2" r="0.35" />
              <circle className="ramen-cls-4" cy="2" r="0.35" />
              <circle className="ramen-cls-4" cx="3" r="0.35" />
              <circle className="ramen-cls-4" cx="1" r="0.35" />
            </pattern>
          </defs>
          <g>
            <circle className="ramen-cls-5" cx="75" cy="75" r="70" />
          </g>
          <g>
            <ellipse
              className="ramen-cls-6"
              cx="70.66"
              cy="74.73"
              rx="13.56"
              ry="14.68"
            />
            <ellipse
              className="ramen-cls-7"
              cx="70.66"
              cy="74.73"
              rx="11.09"
              ry="12"
            />
            <path
              className="ramen-cls-8"
              d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
            />
            <g className="ramen-cls-9">
              <rect
                className="ramen-cls-10"
                x="87.1"
                y="65.54"
                width="16.16"
                height="7.11"
                transform="translate(-6.26 128.6) rotate(-66.37)"
              />
            </g>
            <path
              className="ramen-cls-8"
              d="M98.41,65.21c-1.38-2.75,9.59-5.8,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="ramen-cls-11"
              d="M98.41,65.21s9.22-3.61,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="ramen-cls-8"
              d="M97.59,64.5c2.38-.69-1.81-8.86-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <path
              className="ramen-cls-11"
              d="M97.59,64.5s-2.91-7.44-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <ellipse
              className="ramen-cls-6"
              cx="70.66"
              cy="74.73"
              rx="8.19"
              ry="8.86"
            />
            <ellipse
              className="ramen-cls-7"
              cx="70.66"
              cy="74.73"
              rx="5.85"
              ry="6.33"
            />
            <ellipse
              className="ramen-cls-6"
              cx="85.49"
              cy="71.02"
              rx="8.03"
              ry="8.69"
            />
            <ellipse
              className="ramen-cls-7"
              cx="85.49"
              cy="71.76"
              rx="5.86"
              ry="7.09"
            />
            <ellipse
              className="ramen-cls-6"
              cx="58.05"
              cy="75"
              rx="13.56"
              ry="10.64"
            />
            <ellipse
              className="ramen-cls-7"
              cx="58.05"
              cy="75"
              rx="10.58"
              ry="8.3"
            />
            <ellipse
              className="ramen-cls-6"
              cx="58.05"
              cy="75"
              rx="7.3"
              ry="5.72"
            />
            <ellipse
              className="ramen-cls-7"
              cx="58.05"
              cy="75"
              rx="3.8"
              ry="2.98"
            />
            <polygon
              className="ramen-cls-12"
              points="39.19 33.4 81.41 105.39 81.85 105.14 40.91 32.41 39.19 33.4"
            />
            <polygon
              className="ramen-cls-12"
              points="49.75 29.14 79.06 107.28 79.53 107.11 51.61 28.46 49.75 29.14"
            />
            <ellipse
              className="ramen-cls-6"
              cx="84.9"
              cy="75.46"
              rx="20.59"
              ry="7.98"
            />
            <ellipse
              className="ramen-cls-7"
              cx="84.9"
              cy="76.63"
              rx="17.41"
              ry="6.75"
            />
            <ellipse
              className="ramen-cls-6"
              cx="84.9"
              cy="77.47"
              rx="13.37"
              ry="5.18"
            />
            <path
              className="ramen-cls-13"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="ramen-cls-14"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="ramen-cls-3"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <path
              className="ramen-cls-15"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <rect
              className="ramen-cls-4"
              x="61.41"
              y="110.43"
              width="27.16"
              height="2.68"
            />
            <rect
              className="ramen-cls-4"
              x="44.49"
              y="79.79"
              width="60.99"
              height="4.21"
            />
            <rect
              className="ramen-cls-5"
              x="44.49"
              y="86.62"
              width="60.99"
              height="1.34"
            />
          </g>
        </svg>
      );
    } else if (draft) {
      return (
        <svg
          {...elementProps}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 150 150"
        >
          <defs>
            <style>{`.ramen-cls-1,.ramen-cls-5,.ramen-cls-7{fill:#adb0bc;}.ramen-cls-1{clip-rule:evenodd;}.ramen-cls-2{fill:#5b6279;}.ramen-cls-3{fill:#eeeff1;}.ramen-cls-4{fill:#dee0e4;}.ramen-cls-5,.ramen-cls-8{fill-rule:evenodd;}.ramen-cls-6{clip-path:url(#clip-path);}.ramen-cls-13,.ramen-cls-8{fill:#8c91a1;}.ramen-cls-9{fill:#cdcfd6;}.ramen-cls-10{fill:#bdc0c9;}.ramen-cls-11{fill:#fff;}.ramen-cls-12{fill:#9da1af;}.ramen-cls-14{fill:#7c8194;}`}</style>
            <clipPath id="clip-path">
              <path
                className="ramen-cls-1"
                d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
              />
            </clipPath>
          </defs>
          <g>
            <circle className="ramen-cls-2" cx="75" cy="75" r="70" />
          </g>
          <g>
            <ellipse
              className="ramen-cls-3"
              cx="70.66"
              cy="74.73"
              rx="13.56"
              ry="14.68"
            />
            <ellipse
              className="ramen-cls-4"
              cx="70.66"
              cy="74.73"
              rx="11.09"
              ry="12"
            />
            <path
              className="ramen-cls-5"
              d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
            />
            <g className="ramen-cls-6">
              <rect
                className="ramen-cls-7"
                x="87.1"
                y="65.54"
                width="16.16"
                height="7.11"
                transform="translate(-6.26 128.6) rotate(-66.37)"
              />
            </g>
            <path
              className="ramen-cls-5"
              d="M98.41,65.21c-1.38-2.75,9.59-5.8,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="ramen-cls-8"
              d="M98.41,65.21s9.22-3.61,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="ramen-cls-5"
              d="M97.59,64.5c2.38-.69-1.81-8.86-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <path
              className="ramen-cls-8"
              d="M97.59,64.5s-2.91-7.44-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <ellipse
              className="ramen-cls-9"
              cx="70.66"
              cy="74.73"
              rx="8.19"
              ry="8.86"
            />
            <ellipse
              className="ramen-cls-10"
              cx="70.66"
              cy="74.73"
              rx="5.85"
              ry="6.33"
            />
            <ellipse
              className="ramen-cls-3"
              cx="85.49"
              cy="71.02"
              rx="8.03"
              ry="8.69"
            />
            <ellipse
              className="ramen-cls-4"
              cx="85.49"
              cy="71.76"
              rx="5.86"
              ry="7.09"
            />
            <ellipse
              className="ramen-cls-3"
              cx="58.05"
              cy="75"
              rx="13.56"
              ry="10.64"
            />
            <ellipse
              className="ramen-cls-4"
              cx="58.05"
              cy="75"
              rx="10.58"
              ry="8.3"
            />
            <ellipse
              className="ramen-cls-9"
              cx="58.05"
              cy="75"
              rx="7.3"
              ry="5.72"
            />
            <ellipse
              className="ramen-cls-10"
              cx="58.05"
              cy="75"
              rx="3.8"
              ry="2.98"
            />
            <polygon
              className="ramen-cls-11"
              points="39.19 33.4 81.41 105.39 81.85 105.14 40.91 32.41 39.19 33.4"
            />
            <polygon
              className="ramen-cls-11"
              points="49.75 29.14 79.06 107.28 79.53 107.11 51.61 28.46 49.75 29.14"
            />
            <ellipse
              className="ramen-cls-3"
              cx="84.9"
              cy="75.46"
              rx="20.59"
              ry="7.98"
            />
            <ellipse
              className="ramen-cls-4"
              cx="84.9"
              cy="76.63"
              rx="17.41"
              ry="6.75"
            />
            <ellipse
              className="ramen-cls-9"
              cx="84.9"
              cy="77.47"
              rx="13.37"
              ry="5.18"
            />
            <path
              className="ramen-cls-7"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="ramen-cls-12"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <rect
              className="ramen-cls-13"
              x="61.41"
              y="110.43"
              width="27.16"
              height="2.68"
            />
            <rect
              className="ramen-cls-14"
              x="44.49"
              y="79.79"
              width="60.99"
              height="4.21"
            />
            <rect
              className="ramen-cls-13"
              x="44.49"
              y="86.62"
              width="60.99"
              height="1.34"
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
          viewBox="0 0 150 150"
        >
          <defs>
            <style>{`.ramen-cls-1,.ramen-cls-5,.ramen-cls-7{fill:#8780a5;}.ramen-cls-1{clip-rule:evenodd;}.ramen-cls-2{fill:#10004c;}.ramen-cls-3{fill:#e7e6ed;}.ramen-cls-4{fill:#cfccdb;}.ramen-cls-5,.ramen-cls-8{fill-rule:evenodd;}.ramen-cls-6{clip-path:url(#clip-path);}.ramen-cls-13,.ramen-cls-8{fill:#584d82;}.ramen-cls-9{fill:#b7b3c9;}.ramen-cls-10{fill:#9f99b7;}.ramen-cls-11{fill:#fff;}.ramen-cls-12{fill:#6f6693;}.ramen-cls-14{fill:#3f336f;}`}</style>
            <clipPath id="clip-path">
              <path
                className="ramen-cls-1"
                d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
              />
            </clipPath>
          </defs>
          <g>
            <circle className="ramen-cls-2" cx="75" cy="75" r="70" />
          </g>
          <g>
            <ellipse
              className="ramen-cls-3"
              cx="70.66"
              cy="74.73"
              rx="13.56"
              ry="14.68"
            />
            <ellipse
              className="ramen-cls-4"
              cx="70.66"
              cy="74.73"
              rx="11.09"
              ry="12"
            />
            <path
              className="ramen-cls-5"
              d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
            />
            <g className="ramen-cls-6">
              <rect
                className="ramen-cls-7"
                x="87.1"
                y="65.54"
                width="16.16"
                height="7.11"
                transform="translate(-6.26 128.6) rotate(-66.37)"
              />
            </g>
            <path
              className="ramen-cls-5"
              d="M98.41,65.21c-1.38-2.75,9.59-5.8,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="ramen-cls-8"
              d="M98.41,65.21s9.22-3.61,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="ramen-cls-5"
              d="M97.59,64.5c2.38-.69-1.81-8.86-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <path
              className="ramen-cls-8"
              d="M97.59,64.5s-2.91-7.44-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <ellipse
              className="ramen-cls-9"
              cx="70.66"
              cy="74.73"
              rx="8.19"
              ry="8.86"
            />
            <ellipse
              className="ramen-cls-10"
              cx="70.66"
              cy="74.73"
              rx="5.85"
              ry="6.33"
            />
            <ellipse
              className="ramen-cls-3"
              cx="85.49"
              cy="71.02"
              rx="8.03"
              ry="8.69"
            />
            <ellipse
              className="ramen-cls-4"
              cx="85.49"
              cy="71.76"
              rx="5.86"
              ry="7.09"
            />
            <ellipse
              className="ramen-cls-3"
              cx="58.05"
              cy="75"
              rx="13.56"
              ry="10.64"
            />
            <ellipse
              className="ramen-cls-4"
              cx="58.05"
              cy="75"
              rx="10.58"
              ry="8.3"
            />
            <ellipse
              className="ramen-cls-9"
              cx="58.05"
              cy="75"
              rx="7.3"
              ry="5.72"
            />
            <ellipse
              className="ramen-cls-10"
              cx="58.05"
              cy="75"
              rx="3.8"
              ry="2.98"
            />
            <polygon
              className="ramen-cls-11"
              points="39.19 33.4 81.41 105.39 81.85 105.14 40.91 32.41 39.19 33.4"
            />
            <polygon
              className="ramen-cls-11"
              points="49.75 29.14 79.06 107.28 79.53 107.11 51.61 28.46 49.75 29.14"
            />
            <ellipse
              className="ramen-cls-3"
              cx="84.9"
              cy="75.46"
              rx="20.59"
              ry="7.98"
            />
            <ellipse
              className="ramen-cls-4"
              cx="84.9"
              cy="76.63"
              rx="17.41"
              ry="6.75"
            />
            <ellipse
              className="ramen-cls-9"
              cx="84.9"
              cy="77.47"
              rx="13.37"
              ry="5.18"
            />
            <path
              className="ramen-cls-7"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="ramen-cls-12"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <rect
              className="ramen-cls-13"
              x="61.41"
              y="110.43"
              width="27.16"
              height="2.68"
            />
            <rect
              className="ramen-cls-14"
              x="44.49"
              y="79.79"
              width="60.99"
              height="4.21"
            />
            <rect
              className="ramen-cls-13"
              x="44.49"
              y="86.62"
              width="60.99"
              height="1.34"
            />
          </g>
        </svg>
      );
    }
  }
}

RamenCircleIllustration.propTypes = {
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

RamenCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
};

export default RamenCircleIllustration;
