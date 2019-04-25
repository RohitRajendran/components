/** @module RamenCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a sushi illustration. */
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
            <style>{`.cls-1{fill:none;}.cls-2{fill:#f17732;}.cls-3{fill:#99052e;}.cls-4{fill:#10004c;}.cls-5{fill:#2870b5;}.cls-6{fill:#feca1e;}.cls-7{fill:url(#_4-dot);}.cls-8{fill:url(#_5-dot);}`}</style>
            <pattern
              id="_4-dot"
              data-name="4-dot"
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
              id="_5-dot"
              data-name="5-dot"
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
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="cls-4" cx="75" cy="75" r="70" />
          </g>
          <g id="lifestyle-color-2">
            <polygon
              className="cls-5"
              points="19.85 60.23 91.89 102.38 92.15 101.94 20.87 58.53 19.85 60.23"
            />
            <polygon
              className="cls-5"
              points="26.98 51.35 90.77 105.18 91.09 104.8 28.27 49.85 26.98 51.35"
            />
            <path
              className="cls-6"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="cls-7"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="cls-2"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <path
              className="cls-8"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <rect
              className="cls-3"
              x="61.41"
              y="110.43"
              width="27.16"
              height="2.68"
            />
            <rect
              className="cls-3"
              x="44.49"
              y="79.79"
              width="60.99"
              height="4.21"
            />
            <rect
              className="cls-4"
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
            <style>{`.cls-1,.cls-10,.cls-8{fill:#5fcbeb;}.cls-1{clip-rule:evenodd;}.cls-2{fill:none;}.cls-3{fill:#f17732;}.cls-4{fill:#99052e;}.cls-5{fill:#10004c;}.cls-6{fill:#f8f7f4;}.cls-7{fill:#fde5cb;}.cls-11,.cls-8{fill-rule:evenodd;}.cls-9{clip-path:url(#clip-path);}.cls-11,.cls-12{fill:#2870b5;}.cls-13{fill:#feca1e;}.cls-14{fill:url(#_4-dot);}.cls-15{fill:url(#_5-dot);}`}</style>
            <clipPath id="clip-path">
              <path
                className="cls-1"
                d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
              />
            </clipPath>
            <pattern
              id="_4-dot"
              data-name="4-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="cls-2" width="4" height="4" />
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
              <rect className="cls-2" width="4" height="4" />
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
          <g id="lifestyle-color">
            <ellipse
              className="cls-6"
              cx="70.66"
              cy="74.73"
              rx="13.56"
              ry="14.68"
            />
            <ellipse
              className="cls-7"
              cx="70.66"
              cy="74.73"
              rx="11.09"
              ry="12"
            />
            <path
              className="cls-8"
              d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
            />
            <g className="cls-9">
              <rect
                className="cls-10"
                x="87.1"
                y="65.54"
                width="16.16"
                height="7.11"
                transform="translate(-6.26 128.6) rotate(-66.37)"
              />
            </g>
            <path
              className="cls-8"
              d="M98.41,65.21c-1.38-2.75,9.59-5.8,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="cls-11"
              d="M98.41,65.21s9.22-3.61,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="cls-8"
              d="M97.59,64.5c2.38-.69-1.81-8.86-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <path
              className="cls-11"
              d="M97.59,64.5s-2.91-7.44-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <ellipse
              className="cls-6"
              cx="70.66"
              cy="74.73"
              rx="8.19"
              ry="8.86"
            />
            <ellipse
              className="cls-7"
              cx="70.66"
              cy="74.73"
              rx="5.85"
              ry="6.33"
            />
            <ellipse
              className="cls-6"
              cx="85.49"
              cy="71.02"
              rx="8.03"
              ry="8.69"
            />
            <ellipse
              className="cls-7"
              cx="85.49"
              cy="71.76"
              rx="5.86"
              ry="7.09"
            />
            <ellipse
              className="cls-6"
              cx="58.05"
              cy="75"
              rx="13.56"
              ry="10.64"
            />
            <ellipse className="cls-7" cx="58.05" cy="75" rx="10.58" ry="8.3" />
            <ellipse className="cls-6" cx="58.05" cy="75" rx="7.3" ry="5.72" />
            <ellipse className="cls-7" cx="58.05" cy="75" rx="3.8" ry="2.98" />
            <polygon
              className="cls-12"
              points="39.19 33.4 81.41 105.39 81.85 105.14 40.91 32.41 39.19 33.4"
            />
            <polygon
              className="cls-12"
              points="49.75 29.14 79.06 107.28 79.53 107.11 51.61 28.46 49.75 29.14"
            />
            <ellipse
              className="cls-6"
              cx="84.9"
              cy="75.46"
              rx="20.59"
              ry="7.98"
            />
            <ellipse
              className="cls-7"
              cx="84.9"
              cy="76.63"
              rx="17.41"
              ry="6.75"
            />
            <ellipse
              className="cls-6"
              cx="84.9"
              cy="77.47"
              rx="13.37"
              ry="5.18"
            />
            <path
              className="cls-13"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="cls-14"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="cls-3"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <path
              className="cls-15"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <rect
              className="cls-4"
              x="61.41"
              y="110.43"
              width="27.16"
              height="2.68"
            />
            <rect
              className="cls-4"
              x="44.49"
              y="79.79"
              width="60.99"
              height="4.21"
            />
            <rect
              className="cls-5"
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
            <style>{`.cls-1,.cls-5,.cls-7{fill:#adb0bc;}.cls-1{clip-rule:evenodd;}.cls-2{fill:#5b6279;}.cls-3{fill:#eeeff1;}.cls-4{fill:#dee0e4;}.cls-5,.cls-8{fill-rule:evenodd;}.cls-6{clip-path:url(#clip-path);}.cls-13,.cls-8{fill:#8c91a1;}.cls-9{fill:#cdcfd6;}.cls-10{fill:#bdc0c9;}.cls-11{fill:#fff;}.cls-12{fill:#9da1af;}.cls-14{fill:#7c8194;}`}</style>
            <clipPath id="clip-path">
              <path
                className="cls-1"
                d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
              />
            </clipPath>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="cls-2" cx="75" cy="75" r="70" />
          </g>
          <g id="lifestyle-gray">
            <ellipse
              className="cls-3"
              cx="70.66"
              cy="74.73"
              rx="13.56"
              ry="14.68"
            />
            <ellipse
              className="cls-4"
              cx="70.66"
              cy="74.73"
              rx="11.09"
              ry="12"
            />
            <path
              className="cls-5"
              d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
            />
            <g className="cls-6">
              <rect
                className="cls-7"
                x="87.1"
                y="65.54"
                width="16.16"
                height="7.11"
                transform="translate(-6.26 128.6) rotate(-66.37)"
              />
            </g>
            <path
              className="cls-5"
              d="M98.41,65.21c-1.38-2.75,9.59-5.8,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="cls-8"
              d="M98.41,65.21s9.22-3.61,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="cls-5"
              d="M97.59,64.5c2.38-.69-1.81-8.86-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <path
              className="cls-8"
              d="M97.59,64.5s-2.91-7.44-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <ellipse
              className="cls-9"
              cx="70.66"
              cy="74.73"
              rx="8.19"
              ry="8.86"
            />
            <ellipse
              className="cls-10"
              cx="70.66"
              cy="74.73"
              rx="5.85"
              ry="6.33"
            />
            <ellipse
              className="cls-3"
              cx="85.49"
              cy="71.02"
              rx="8.03"
              ry="8.69"
            />
            <ellipse
              className="cls-4"
              cx="85.49"
              cy="71.76"
              rx="5.86"
              ry="7.09"
            />
            <ellipse
              className="cls-3"
              cx="58.05"
              cy="75"
              rx="13.56"
              ry="10.64"
            />
            <ellipse className="cls-4" cx="58.05" cy="75" rx="10.58" ry="8.3" />
            <ellipse className="cls-9" cx="58.05" cy="75" rx="7.3" ry="5.72" />
            <ellipse className="cls-10" cx="58.05" cy="75" rx="3.8" ry="2.98" />
            <polygon
              className="cls-11"
              points="39.19 33.4 81.41 105.39 81.85 105.14 40.91 32.41 39.19 33.4"
            />
            <polygon
              className="cls-11"
              points="49.75 29.14 79.06 107.28 79.53 107.11 51.61 28.46 49.75 29.14"
            />
            <ellipse
              className="cls-3"
              cx="84.9"
              cy="75.46"
              rx="20.59"
              ry="7.98"
            />
            <ellipse
              className="cls-4"
              cx="84.9"
              cy="76.63"
              rx="17.41"
              ry="6.75"
            />
            <ellipse
              className="cls-9"
              cx="84.9"
              cy="77.47"
              rx="13.37"
              ry="5.18"
            />
            <path
              className="cls-7"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="cls-12"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <rect
              className="cls-13"
              x="61.41"
              y="110.43"
              width="27.16"
              height="2.68"
            />
            <rect
              className="cls-14"
              x="44.49"
              y="79.79"
              width="60.99"
              height="4.21"
            />
            <rect
              className="cls-13"
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
            <style>{`.cls-1,.cls-5,.cls-7{fill:#8780a5;}.cls-1{clip-rule:evenodd;}.cls-2{fill:#10004c;}.cls-3{fill:#e7e6ed;}.cls-4{fill:#cfccdb;}.cls-5,.cls-8{fill-rule:evenodd;}.cls-6{clip-path:url(#clip-path);}.cls-13,.cls-8{fill:#584d82;}.cls-9{fill:#b7b3c9;}.cls-10{fill:#9f99b7;}.cls-11{fill:#fff;}.cls-12{fill:#6f6693;}.cls-14{fill:#3f336f;}`}</style>
            <clipPath id="clip-path">
              <path
                className="cls-1"
                d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
              />
            </clipPath>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="cls-2" cx="75" cy="75" r="70" />
          </g>
          <g id="lifestyle-purple">
            <ellipse
              className="cls-3"
              cx="70.66"
              cy="74.73"
              rx="13.56"
              ry="14.68"
            />
            <ellipse
              className="cls-4"
              cx="70.66"
              cy="74.73"
              rx="11.09"
              ry="12"
            />
            <path
              className="cls-5"
              d="M98.13,64.5a36.07,36.07,0,0,0-4.81,9.66l-1-.43A22.58,22.58,0,0,1,98.13,64.5Z"
            />
            <g className="cls-6">
              <rect
                className="cls-7"
                x="87.1"
                y="65.54"
                width="16.16"
                height="7.11"
                transform="translate(-6.26 128.6) rotate(-66.37)"
              />
            </g>
            <path
              className="cls-5"
              d="M98.41,65.21c-1.38-2.75,9.59-5.8,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="cls-8"
              d="M98.41,65.21s9.22-3.61,16.47,1.33C110.44,64.59,102.17,72.74,98.41,65.21Z"
            />
            <path
              className="cls-5"
              d="M97.59,64.5c2.38-.69-1.81-8.86-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <path
              className="cls-8"
              d="M97.59,64.5s-2.91-7.44-9.8-9C91.37,57,91.07,66.39,97.59,64.5Z"
            />
            <ellipse
              className="cls-9"
              cx="70.66"
              cy="74.73"
              rx="8.19"
              ry="8.86"
            />
            <ellipse
              className="cls-10"
              cx="70.66"
              cy="74.73"
              rx="5.85"
              ry="6.33"
            />
            <ellipse
              className="cls-3"
              cx="85.49"
              cy="71.02"
              rx="8.03"
              ry="8.69"
            />
            <ellipse
              className="cls-4"
              cx="85.49"
              cy="71.76"
              rx="5.86"
              ry="7.09"
            />
            <ellipse
              className="cls-3"
              cx="58.05"
              cy="75"
              rx="13.56"
              ry="10.64"
            />
            <ellipse className="cls-4" cx="58.05" cy="75" rx="10.58" ry="8.3" />
            <ellipse className="cls-9" cx="58.05" cy="75" rx="7.3" ry="5.72" />
            <ellipse className="cls-10" cx="58.05" cy="75" rx="3.8" ry="2.98" />
            <polygon
              className="cls-11"
              points="39.19 33.4 81.41 105.39 81.85 105.14 40.91 32.41 39.19 33.4"
            />
            <polygon
              className="cls-11"
              points="49.75 29.14 79.06 107.28 79.53 107.11 51.61 28.46 49.75 29.14"
            />
            <ellipse
              className="cls-3"
              cx="84.9"
              cy="75.46"
              rx="20.59"
              ry="7.98"
            />
            <ellipse
              className="cls-4"
              cx="84.9"
              cy="76.63"
              rx="17.41"
              ry="6.75"
            />
            <ellipse
              className="cls-9"
              cx="84.9"
              cy="77.47"
              rx="13.37"
              ry="5.18"
            />
            <path
              className="cls-7"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a18,18,0,0,0,18-18V74.73Z"
            />
            <path
              className="cls-12"
              d="M44.49,74.73V92.44a18,18,0,0,0,18,18h25a17.93,17.93,0,0,0,11.23-4C82.08,113.85,44.49,97.09,44.49,74.73Z"
            />
            <rect
              className="cls-13"
              x="61.41"
              y="110.43"
              width="27.16"
              height="2.68"
            />
            <rect
              className="cls-14"
              x="44.49"
              y="79.79"
              width="60.99"
              height="4.21"
            />
            <rect
              className="cls-13"
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

RamenCircleIllustration.defaultProps = {
  height: '140',
  width: '144',
};

export default RamenCircleIllustration;
