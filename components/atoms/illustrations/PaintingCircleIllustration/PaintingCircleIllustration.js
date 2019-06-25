/** @module PaintingCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a gift illustration. */
class PaintingCircleIllustration extends PureComponent {
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
            <style>{`.cls-1{fill:none;}.cls-2{fill:#f17732;}.cls-3{fill:#10004c;}.cls-4{fill:#5fcbeb;}.cls-5{fill:#2870b5;}.cls-6{fill:#f8f7f4;}.cls-7{fill:#99052e;}.cls-8{fill:#feca1e;}.cls-9{fill:url(#_4-dot);}.cls-10{fill:#fde5cb;}.cls-11{fill:url(#_4-dot-3);}`}</style>
            <pattern
              id="_4-dot"
              data-name="4-dot"
              width="4"
              height="4"
              patternTransform="translate(1.02 3.87)"
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
              id="_4-dot-3"
              data-name="4-dot"
              width="4"
              height="4"
              patternTransform="translate(0.78 -0.23) rotate(-90)"
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
          <title>app</title>
          <g id="Circle-BG">
            <circle className="cls-3" cx="70" cy="70" r="70" />
            <circle className="cls-3" cx="70" cy="70" r="70" />
          </g>
          <g id="asset-other">
            <rect
              className="cls-4"
              x="29.58"
              y="36.99"
              width="80.85"
              height="66.01"
            />
            <path
              className="cls-5"
              d="M110.42,103H29.58V37C54,103,110.42,103,110.42,103Z"
            />
            <rect
              className="cls-3"
              x="35.49"
              y="42.78"
              width="69.01"
              height="54.44"
            />
            <rect
              className="cls-6"
              x="35.57"
              y="42.78"
              width="25.07"
              height="9.2"
            />
            <rect
              className="cls-6"
              x="87.42"
              y="66.82"
              width="10.38"
              height="12.54"
            />
            <rect
              className="cls-7"
              x="87.42"
              y="42.78"
              width="17.08"
              height="22.5"
            />
            <rect
              className="cls-6"
              x="74.15"
              y="42.78"
              width="11.76"
              height="36.58"
            />
            <rect
              className="cls-6"
              x="87.42"
              y="81.03"
              width="17.08"
              height="16.16"
            />
            <rect
              className="cls-8"
              x="99.38"
              y="66.82"
              width="5.13"
              height="12.54"
            />
            <rect
              className="cls-9"
              x="99.38"
              y="66.82"
              width="5.13"
              height="12.54"
            />
            <rect
              className="cls-10"
              x="55.52"
              y="80.11"
              width="5.14"
              height="29.03"
              transform="translate(-36.53 152.71) rotate(-90)"
            />
            <rect
              className="cls-6"
              x="77.46"
              y="88.74"
              width="5.14"
              height="11.76"
              transform="translate(-14.59 174.65) rotate(-90)"
            />
            <path
              className="cls-10"
              d="M74.15,92.16v5H84.7A87.57,87.57,0,0,1,74.15,92.16Z"
            />
            <rect
              className="cls-7"
              x="36.21"
              y="91.4"
              width="5.14"
              height="6.43"
              transform="translate(-55.84 133.4) rotate(-90)"
            />
            <rect
              className="cls-6"
              x="62.13"
              y="42.78"
              width="10.47"
              height="9.2"
            />
            <rect
              className="cls-8"
              x="35.49"
              y="53.44"
              width="37.04"
              height="37.04"
            />
            <polygon
              className="cls-11"
              points="72.59 53.38 72.59 90.48 35.49 90.48 35.49 53.38 72.59 53.38"
            />
            <path
              className="cls-2"
              d="M35.49,90.48h35.8c-11.93-7.3-24.48-18.84-34.35-37.1H35.49Z"
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
            <style>{`.cls-1{fill:none;}.cls-2{fill:#f17732;}.cls-3{fill:#10004c;}.cls-4{fill:#5fcbeb;}.cls-5{fill:#2870b5;}.cls-6{fill:#f8f7f4;}.cls-7{fill:#fde5cb;}.cls-8{fill:#99052e;}.cls-9{fill:#feca1e;}.cls-10{fill:url(#_4-dot);}`}</style>
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
          </defs>
          <title>app</title>
          <g id="Circle-BG">
            <circle className="cls-3" cx="70" cy="70" r="70" />
            <circle className="cls-3" cx="70" cy="70" r="70" />
          </g>
          <g id="asset-other">
            <rect
              className="cls-4"
              x="29.58"
              y="36.99"
              width="80.85"
              height="66.01"
            />
            <path
              className="cls-5"
              d="M110.42,103H29.58V37C54,103,110.42,103,110.42,103Z"
            />
            <rect
              className="cls-3"
              x="35.49"
              y="42.78"
              width="69.01"
              height="54.44"
            />
            <rect
              className="cls-6"
              x="35.49"
              y="70.4"
              width="23.65"
              height="26.82"
            />
            <path
              className="cls-7"
              d="M59.14,81.57A95.37,95.37,0,0,1,48.32,70.4H35.49V97.22H59.14Z"
            />
            <rect
              className="cls-8"
              x="60.82"
              y="42.78"
              width="37.04"
              height="37.04"
            />
            <rect
              className="cls-6"
              x="48.76"
              y="56.16"
              width="10.38"
              height="12.54"
            />
            <rect
              className="cls-6"
              x="48.76"
              y="42.78"
              width="10.38"
              height="11.84"
            />
            <rect
              className="cls-9"
              x="35.49"
              y="42.78"
              width="11.76"
              height="25.92"
            />
            <rect
              className="cls-6"
              x="79.34"
              y="81.52"
              width="25.17"
              height="15.7"
            />
            <path
              className="cls-7"
              d="M79.34,94.85v2.37h5.43Q82.12,96.17,79.34,94.85Z"
            />
            <rect
              className="cls-9"
              x="60.82"
              y="81.52"
              width="4.53"
              height="15.7"
            />
            <rect
              className="cls-10"
              x="60.82"
              y="81.52"
              width="4.53"
              height="15.7"
            />
            <path
              className="cls-2"
              d="M65.35,86.51c-1.51-1.1-3-2.26-4.53-3.51V97.22h4.53Z"
            />
            <rect
              className="cls-6"
              x="99.37"
              y="50.79"
              width="5.14"
              height="29.03"
            />
            <rect
              className="cls-9"
              x="99.37"
              y="42.78"
              width="5.14"
              height="6.43"
            />
            <rect
              className="cls-10"
              x="35.49"
              y="42.78"
              width="11.76"
              height="25.92"
            />
            <rect
              className="cls-10"
              x="99.37"
              y="42.78"
              width="5.14"
              height="6.43"
            />
            <rect
              className="cls-6"
              x="66.98"
              y="91.02"
              width="10.47"
              height="6.2"
            />
            <path
              className="cls-7"
              d="M77.45,93.92q-2.6-1.32-5.27-2.9H67v6.2H77.45Z"
            />
            <path
              className="cls-2"
              d="M35.49,50.6V68.7H47A108.76,108.76,0,0,1,35.49,50.6Z"
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
            <style>{`.cls-1{fill:#5b6279;}.cls-2{fill:#bdc0c9;}.cls-3{fill:#9da1af;}.cls-4{fill:#fff;}.cls-5{fill:#dee0e4;}.cls-6{fill:#adb0bc;}.cls-7{fill:#cdcfd6;}`}</style>
          </defs>
          <title>app</title>
          <g id="Circle-BG">
            <circle className="cls-1" cx="70" cy="70" r="70" />
          </g>
          <g id="asset-other">
            <rect
              className="cls-2"
              x="29.58"
              y="36.99"
              width="80.85"
              height="66.01"
            />
            <path
              className="cls-3"
              d="M110.42,103H29.58V37C54,103,110.42,103,110.42,103Z"
            />
            <rect
              className="cls-1"
              x="35.49"
              y="42.78"
              width="69.01"
              height="54.44"
            />
            <rect
              className="cls-4"
              x="35.49"
              y="70.4"
              width="23.65"
              height="26.82"
            />
            <path
              className="cls-5"
              d="M59.14,81.57A95.37,95.37,0,0,1,48.32,70.4H35.49V97.22H59.14Z"
            />
            <rect
              className="cls-6"
              x="60.82"
              y="42.78"
              width="37.04"
              height="37.04"
            />
            <rect
              className="cls-4"
              x="48.76"
              y="56.16"
              width="10.38"
              height="12.54"
            />
            <rect
              className="cls-4"
              x="48.76"
              y="42.78"
              width="10.38"
              height="11.84"
            />
            <rect
              className="cls-5"
              x="35.49"
              y="42.78"
              width="11.76"
              height="25.92"
            />
            <path
              className="cls-2"
              d="M35.49,50.6V68.7H47A108.76,108.76,0,0,1,35.49,50.6Z"
            />
            <rect
              className="cls-4"
              x="79.34"
              y="81.52"
              width="25.17"
              height="15.7"
            />
            <path
              className="cls-5"
              d="M79.34,94.85v2.37h5.43Q82.12,96.17,79.34,94.85Z"
            />
            <rect
              className="cls-7"
              x="60.82"
              y="81.52"
              width="4.53"
              height="15.7"
            />
            <path
              className="cls-6"
              d="M65.35,86.51c-1.51-1.1-3-2.26-4.53-3.51V97.22h4.53Z"
            />
            <rect
              className="cls-4"
              x="99.37"
              y="50.79"
              width="5.14"
              height="29.03"
            />
            <rect
              className="cls-7"
              x="99.37"
              y="42.78"
              width="5.14"
              height="6.43"
            />
            <rect
              className="cls-4"
              x="66.98"
              y="91.02"
              width="10.47"
              height="6.2"
            />
            <path
              className="cls-5"
              d="M77.45,93.92q-2.6-1.32-5.27-2.9H67v6.2H77.45Z"
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
            <style>{`.cls-1{fill:#10004c;}.cls-2{fill:#9f99b7;}.cls-3{fill:#6f6693;}.cls-4{fill:#fff;}.cls-5{fill:#cfccdb;}.cls-6{fill:#8780a5;}.cls-7{fill:#b7b3c9;}`}</style>
          </defs>
          <title>app</title>
          <g id="Circle-BG">
            <circle className="cls-1" cx="70" cy="70" r="70" />
            <circle className="cls-1" cx="70" cy="70" r="70" />
          </g>
          <g id="asset-other">
            <rect
              className="cls-2"
              x="29.58"
              y="36.99"
              width="80.85"
              height="66.01"
            />
            <path
              className="cls-3"
              d="M110.42,103H29.58V37C54,103,110.42,103,110.42,103Z"
            />
            <rect
              className="cls-1"
              x="35.49"
              y="42.78"
              width="69.01"
              height="54.44"
            />
            <rect
              className="cls-4"
              x="35.49"
              y="70.4"
              width="23.65"
              height="26.82"
            />
            <path
              className="cls-5"
              d="M59.14,81.57A95.37,95.37,0,0,1,48.32,70.4H35.49V97.22H59.14Z"
            />
            <rect
              className="cls-6"
              x="60.82"
              y="42.78"
              width="37.04"
              height="37.04"
            />
            <rect
              className="cls-4"
              x="48.76"
              y="56.16"
              width="10.38"
              height="12.54"
            />
            <rect
              className="cls-4"
              x="48.76"
              y="42.78"
              width="10.38"
              height="11.84"
            />
            <rect
              className="cls-5"
              x="35.49"
              y="42.78"
              width="11.76"
              height="25.92"
            />
            <path
              className="cls-2"
              d="M35.49,50.6V68.7H47A108.76,108.76,0,0,1,35.49,50.6Z"
            />
            <rect
              className="cls-4"
              x="79.34"
              y="81.52"
              width="25.17"
              height="15.7"
            />
            <path
              className="cls-5"
              d="M79.34,94.85v2.37h5.43Q82.12,96.17,79.34,94.85Z"
            />
            <rect
              className="cls-7"
              x="60.82"
              y="81.52"
              width="4.53"
              height="15.7"
            />
            <path
              className="cls-6"
              d="M65.35,86.51c-1.51-1.1-3-2.26-4.53-3.51V97.22h4.53Z"
            />
            <rect
              className="cls-4"
              x="99.37"
              y="50.79"
              width="5.14"
              height="29.03"
            />
            <rect
              className="cls-7"
              x="99.37"
              y="42.78"
              width="5.14"
              height="6.43"
            />
            <rect
              className="cls-4"
              x="66.98"
              y="91.02"
              width="10.47"
              height="6.2"
            />
            <path
              className="cls-5"
              d="M77.45,93.92q-2.6-1.32-5.27-2.9H67v6.2H77.45Z"
            />
          </g>
        </svg>
      );
    }
  }
}

PaintingCircleIllustration.propTypes = {
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

PaintingCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
};

export default PaintingCircleIllustration;
