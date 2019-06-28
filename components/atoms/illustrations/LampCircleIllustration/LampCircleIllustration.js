/** @module LampCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a lamp illustration. */
class LampCircleIllustration extends PureComponent {
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
            <style>{`.lamp-cls-1{fill:none;}.lamp-cls-2{fill:#fde5cb;}.lamp-cls-3{fill:#f17732;}.lamp-cls-4{fill:#99052e;}.lamp-cls-5{fill:#10004c;}.lamp-cls-6{fill:#f8f7f4;}.lamp-cls-7{fill:url(#_2-dot);}.lamp-cls-8{fill:#2870b5;}.lamp-cls-9{fill:#feca1e;}.lamp-cls-10{fill:url(#_4-dot);}.lamp-cls-11{fill:url(#_5-dot);}.lamp-cls-12{fill:#5fcbeb;}`}</style>
            <pattern
              id="_2-dot"
              data-name="2-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="lamp-cls-1" width="4" height="4" />
              <circle className="lamp-cls-2" cx="3" cy="4" r="0.35" />
              <circle className="lamp-cls-2" cx="1" cy="4" r="0.35" />
              <circle className="lamp-cls-2" cx="4" cy="2" r="0.35" />
              <circle className="lamp-cls-2" cx="2" cy="2" r="0.35" />
              <circle className="lamp-cls-2" cy="2" r="0.35" />
              <circle className="lamp-cls-2" cx="3" r="0.35" />
              <circle className="lamp-cls-2" cx="1" r="0.35" />
            </pattern>
            <pattern
              id="_4-dot"
              data-name="4-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="lamp-cls-1" width="4" height="4" />
              <circle className="lamp-cls-3" cx="3" cy="4" r="0.35" />
              <circle className="lamp-cls-3" cx="1" cy="4" r="0.35" />
              <circle className="lamp-cls-3" cx="4" cy="2" r="0.35" />
              <circle className="lamp-cls-3" cx="2" cy="2" r="0.35" />
              <circle className="lamp-cls-3" cy="2" r="0.35" />
              <circle className="lamp-cls-3" cx="3" r="0.35" />
              <circle className="lamp-cls-3" cx="1" r="0.35" />
            </pattern>
            <pattern
              id="_5-dot"
              data-name="5-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="lamp-cls-1" width="4" height="4" />
              <circle className="lamp-cls-4" cx="3" cy="4" r="0.35" />
              <circle className="lamp-cls-4" cx="1" cy="4" r="0.35" />
              <circle className="lamp-cls-4" cx="4" cy="2" r="0.35" />
              <circle className="lamp-cls-4" cx="2" cy="2" r="0.35" />
              <circle className="lamp-cls-4" cy="2" r="0.35" />
              <circle className="lamp-cls-4" cx="3" r="0.35" />
              <circle className="lamp-cls-4" cx="1" r="0.35" />
            </pattern>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="lamp-cls-5" cx="75" cy="75" r="70" />
          </g>
          <g id="essentials-color-2">
            <path
              className="lamp-cls-6"
              d="M60.46,32.69h29.7l12.06-22.22a70.19,70.19,0,0,0-53.92-.19Z"
            />
            <path
              className="lamp-cls-7"
              d="M60.46,32.69h29.7l12.06-22.22a70.19,70.19,0,0,0-53.92-.19Z"
            />
            <path
              className="lamp-cls-6"
              d="M107.9,76.38H42.72L22.89,121.72a70,70,0,0,0,104.75-.56Z"
            />
            <path
              className="lamp-cls-7"
              d="M107.9,76.38H42.72L22.89,121.72a70,70,0,0,0,104.75-.56Z"
            />
            <path
              className="lamp-cls-8"
              d="M77.33,31.08a2.08,2.08,0,1,0-4.08,0,2.43,2.43,0,0,0,1.52,2.39v3.06h1V33.47A2.44,2.44,0,0,0,77.33,31.08Z"
            />
            <polygon
              className="lamp-cls-9"
              points="107.88 76.36 42.7 76.36 60.43 32.7 90.14 32.7 107.88 76.36"
            />
            <polygon
              className="lamp-cls-10"
              points="107.88 76.36 42.7 76.36 60.43 32.7 90.14 32.7 107.88 76.36"
            />
            <rect
              className="lamp-cls-8"
              x="74.04"
              y="73.69"
              width="2.48"
              height="11.19"
            />
            <path
              className="lamp-cls-3"
              d="M107.88,76.36H42.7l12.06-29.7C73.25,78,107.88,76.36,107.88,76.36Z"
            />
            <path
              className="lamp-cls-11"
              d="M107.88,76.36H42.7l12.06-29.7C73.25,78,107.88,76.36,107.88,76.36Z"
            />
            <path
              className="lamp-cls-4"
              d="M48.36,72.32a5.37,5.37,0,0,0,.34-10.73L44.87,71A5.33,5.33,0,0,0,48.36,72.32Z"
            />
            <circle className="lamp-cls-4" cx="59.12" cy="66.93" r="5.38" />
            <circle className="lamp-cls-3" cx="69.93" cy="66.93" r="5.38" />
            <circle className="lamp-cls-3" cx="80.69" cy="66.93" r="5.38" />
            <path
              className="lamp-cls-4"
              d="M75.37,67.5a5.32,5.32,0,0,0,8.1,4A59.69,59.69,0,0,1,75.37,67.5Z"
            />
            <circle className="lamp-cls-3" cx="91.45" cy="66.93" r="5.38" />
            <path
              className="lamp-cls-3"
              d="M102.22,72.32A5.32,5.32,0,0,0,105.7,71l-3.82-9.41a5.37,5.37,0,0,0,.34,10.73Z"
            />
            <path
              className="lamp-cls-4"
              d="M69.93,72.32a5.37,5.37,0,0,0,5.33-4.88,59.6,59.6,0,0,1-7.56-5.39,5.38,5.38,0,0,0,2.23,10.27Z"
            />
            <rect
              className="lamp-cls-12"
              x="71.14"
              y="84.12"
              width="8.28"
              height="4.1"
            />
            <path
              className="lamp-cls-12"
              d="M91,110.74c0,9.09-7.06,10.41-15.75,10.41s-15.75-1.32-15.75-10.41,7.05-22.51,15.75-22.51S91,101.65,91,110.74Z"
            />
            <path
              className="lamp-cls-8"
              d="M89.8,116.2c-2.39,4.21-8,5-14.51,5-8.7,0-15.75-1.32-15.75-10.41a27.75,27.75,0,0,1,2.69-11.12C71.48,116.92,88.76,117.62,89.8,116.2Z"
            />
            <path
              className="lamp-cls-8"
              d="M83.42,120.43a35.85,35.85,0,0,1-8.13.72c-8.7,0-15.75-1.32-15.75-10.41C59.54,110.74,64.5,121.79,83.42,120.43Z"
            />
            <rect
              className="lamp-cls-8"
              x="71.14"
              y="88.23"
              width="8.28"
              height="1.08"
            />
            <ellipse
              className="lamp-cls-5"
              cx="75.29"
              cy="111.45"
              rx="4.93"
              ry="1.97"
            />
            <path
              className="lamp-cls-3"
              d="M72.46,111.45c0,1.09,1.15,2,2.83,2,2.72,0,4.92-.88,4.92-2s-2.2-2-4.92-2C73.53,109.49,72.46,110.37,72.46,111.45Z"
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
            <style>{`.lamp-cls-1{fill:none;}.lamp-cls-2{fill:#f17732;}.lamp-cls-3{fill:#99052e;}.lamp-cls-4{fill:#10004c;}.lamp-cls-5{fill:#2870b5;}.lamp-cls-6{fill:#5fcbeb;}.lamp-cls-7{fill:#feca1e;}.lamp-cls-8{fill:url(#_4-dot);}.lamp-cls-9{fill:url(#_5-dot);}`}</style>
            <pattern
              id="_4-dot"
              data-name="4-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="lamp-cls-1" width="4" height="4" />
              <circle className="lamp-cls-2" cx="3" cy="4" r="0.35" />
              <circle className="lamp-cls-2" cx="1" cy="4" r="0.35" />
              <circle className="lamp-cls-2" cx="4" cy="2" r="0.35" />
              <circle className="lamp-cls-2" cx="2" cy="2" r="0.35" />
              <circle className="lamp-cls-2" cy="2" r="0.35" />
              <circle className="lamp-cls-2" cx="3" r="0.35" />
              <circle className="lamp-cls-2" cx="1" r="0.35" />
            </pattern>
            <pattern
              id="_5-dot"
              data-name="5-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="lamp-cls-1" width="4" height="4" />
              <circle className="lamp-cls-3" cx="3" cy="4" r="0.35" />
              <circle className="lamp-cls-3" cx="1" cy="4" r="0.35" />
              <circle className="lamp-cls-3" cx="4" cy="2" r="0.35" />
              <circle className="lamp-cls-3" cx="2" cy="2" r="0.35" />
              <circle className="lamp-cls-3" cy="2" r="0.35" />
              <circle className="lamp-cls-3" cx="3" r="0.35" />
              <circle className="lamp-cls-3" cx="1" r="0.35" />
            </pattern>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="lamp-cls-4" cx="75" cy="75" r="70" />
          </g>
          <g id="essentials-color">
            <path
              className="lamp-cls-5"
              d="M77.33,31.08a2.08,2.08,0,1,0-4.08,0,2.43,2.43,0,0,0,1.52,2.39v3.06h1V33.47A2.44,2.44,0,0,0,77.33,31.08Z"
            />
            <rect
              className="lamp-cls-5"
              x="74.04"
              y="73.69"
              width="2.48"
              height="11.19"
            />
            <rect
              className="lamp-cls-6"
              x="71.14"
              y="84.12"
              width="8.28"
              height="4.1"
            />
            <path
              className="lamp-cls-6"
              d="M91,110.74c0,9.09-7.06,10.41-15.75,10.41s-15.75-1.32-15.75-10.41,7.05-22.51,15.75-22.51S91,101.65,91,110.74Z"
            />
            <path
              className="lamp-cls-5"
              d="M89.8,116.2c-2.39,4.21-8,5-14.51,5-8.7,0-15.75-1.32-15.75-10.41a27.75,27.75,0,0,1,2.69-11.12C71.48,116.92,88.76,117.62,89.8,116.2Z"
            />
            <rect
              className="lamp-cls-5"
              x="71.14"
              y="88.23"
              width="8.28"
              height="1.08"
            />
            <polygon
              className="lamp-cls-7"
              points="107.88 76.36 42.7 76.36 60.43 32.7 90.14 32.7 107.88 76.36"
            />
            <polygon
              className="lamp-cls-8"
              points="107.88 76.36 42.7 76.36 60.43 32.7 90.14 32.7 107.88 76.36"
            />
            <ellipse
              className="lamp-cls-4"
              cx="75.29"
              cy="111.45"
              rx="4.93"
              ry="1.97"
            />
            <path
              className="lamp-cls-2"
              d="M72.46,111.45c0,1.09,1.15,2,2.83,2,2.72,0,4.92-.88,4.92-2s-2.2-2-4.92-2C73.53,109.49,72.46,110.37,72.46,111.45Z"
            />
            <path
              className="lamp-cls-2"
              d="M107.88,76.36H42.7l12.06-29.7C73.25,78,107.88,76.36,107.88,76.36Z"
            />
            <path
              className="lamp-cls-9"
              d="M107.88,76.36H42.7l12.06-29.7C73.25,78,107.88,76.36,107.88,76.36Z"
            />
            <path
              className="lamp-cls-3"
              d="M48.36,72.32a5.37,5.37,0,0,0,.34-10.73L44.87,71A5.33,5.33,0,0,0,48.36,72.32Z"
            />
            <circle className="lamp-cls-3" cx="59.12" cy="66.93" r="5.38" />
            <circle className="lamp-cls-2" cx="69.93" cy="66.93" r="5.38" />
            <circle className="lamp-cls-2" cx="80.69" cy="66.93" r="5.38" />
            <path
              className="lamp-cls-3"
              d="M75.37,67.5a5.32,5.32,0,0,0,8.1,4A59.69,59.69,0,0,1,75.37,67.5Z"
            />
            <circle className="lamp-cls-2" cx="91.45" cy="66.93" r="5.38" />
            <path
              className="lamp-cls-2"
              d="M102.22,72.32A5.32,5.32,0,0,0,105.7,71l-3.82-9.41a5.37,5.37,0,0,0,.34,10.73Z"
            />
            <path
              className="lamp-cls-3"
              d="M69.93,72.32a5.37,5.37,0,0,0,5.33-4.88,59.6,59.6,0,0,1-7.56-5.39,5.38,5.38,0,0,0,2.23,10.27Z"
            />
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
            <style>{`.lamp-cls-1{fill:#5b6279;}.lamp-cls-2{fill:#9da1af;}.lamp-cls-3{fill:#cdcfd6;}.lamp-cls-4{fill:#8c91a1;}.lamp-cls-5{fill:#adb0bc;}.lamp-cls-6{fill:#fff;}.lamp-cls-7{fill:#dee0e4;}.lamp-cls-8{fill:#6b7186;}.lamp-cls-9{fill:#7c8194;}`}</style>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="lamp-cls-1" cx="75" cy="75" r="70" />
          </g>
          <g id="essentials-gray">
            <path
              className="lamp-cls-2"
              d="M77.33,31.08a2.08,2.08,0,1,0-4.08,0,2.43,2.43,0,0,0,1.52,2.39v3.06h1V33.47A2.44,2.44,0,0,0,77.33,31.08Z"
            />
            <rect
              className="lamp-cls-2"
              x="74.04"
              y="73.69"
              width="2.48"
              height="11.19"
            />
            <path
              className="lamp-cls-3"
              d="M91,110.74c0,9.09-7.06,10.41-15.75,10.41s-15.75-1.32-15.75-10.41,7.05-22.51,15.75-22.51S91,101.65,91,110.74Z"
            />
            <rect
              className="lamp-cls-3"
              x="71.14"
              y="84.12"
              width="8.28"
              height="4.1"
            />
            <rect
              className="lamp-cls-4"
              x="71.14"
              y="88.23"
              width="8.28"
              height="1.08"
            />
            <path
              className="lamp-cls-5"
              d="M83.42,120.43a35.85,35.85,0,0,1-8.13.72c-8.7,0-15.75-1.32-15.75-10.41C59.54,110.74,64.5,121.79,83.42,120.43Z"
            />
            <polygon
              className="lamp-cls-6"
              points="107.88 76.36 42.7 76.36 60.43 32.7 90.14 32.7 107.88 76.36"
            />
            <ellipse
              className="lamp-cls-1"
              cx="75.29"
              cy="111.45"
              rx="4.93"
              ry="1.97"
            />
            <path
              className="lamp-cls-6"
              d="M72.46,111.45c0,1.09,1.15,2,2.83,2,2.72,0,4.92-.88,4.92-2s-2.2-2-4.92-2C73.53,109.49,72.46,110.37,72.46,111.45Z"
            />
            <path
              className="lamp-cls-7"
              d="M107.88,76.36H42.7l12.06-29.7C73.25,78,107.88,76.36,107.88,76.36Z"
            />
            <path
              className="lamp-cls-8"
              d="M48.36,72.32a5.37,5.37,0,0,0,.34-10.73L44.87,71A5.33,5.33,0,0,0,48.36,72.32Z"
            />
            <circle className="lamp-cls-8" cx="59.12" cy="66.93" r="5.38" />
            <circle className="lamp-cls-9" cx="69.93" cy="66.93" r="5.38" />
            <circle className="lamp-cls-9" cx="80.69" cy="66.93" r="5.38" />
            <path
              className="lamp-cls-8"
              d="M75.37,67.5a5.32,5.32,0,0,0,8.1,4A59.69,59.69,0,0,1,75.37,67.5Z"
            />
            <circle className="lamp-cls-9" cx="91.45" cy="66.93" r="5.38" />
            <path
              className="lamp-cls-9"
              d="M102.22,72.32A5.32,5.32,0,0,0,105.7,71l-3.82-9.41a5.37,5.37,0,0,0,.34,10.73Z"
            />
            <path
              className="lamp-cls-8"
              d="M69.93,72.32a5.37,5.37,0,0,0,5.33-4.88,59.6,59.6,0,0,1-7.56-5.39,5.38,5.38,0,0,0,2.23,10.27Z"
            />
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
            <style>{`.lamp-cls-1{fill:#10004c;}.lamp-cls-2{fill:#6f6693;}.lamp-cls-3{fill:#cfccdb;}.lamp-cls-4{fill:#8780a5;}.lamp-cls-5{fill:#281a5e;}.lamp-cls-6{fill:#3f336f;}.lamp-cls-7{fill:#fff;}.lamp-cls-8{fill:#b7b3c9;}.lamp-cls-9{fill:#8c91a1;}`}</style>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="lamp-cls-1" cx="75" cy="75" r="70" />
          </g>
          <g id="essentials-purple">
            <rect
              className="lamp-cls-2"
              x="74.04"
              y="73.69"
              width="2.48"
              height="11.19"
            />
            <path
              className="lamp-cls-3"
              d="M91,110.74c0,9.09-7.06,10.41-15.75,10.41s-15.75-1.32-15.75-10.41,7.05-22.51,15.75-22.51S91,101.65,91,110.74Z"
            />
            <path
              className="lamp-cls-4"
              d="M83.42,120.43a35.85,35.85,0,0,1-8.13.72c-8.7,0-15.75-1.32-15.75-10.41C59.54,110.74,64.5,121.79,83.42,120.43Z"
            />
            <ellipse
              className="lamp-cls-1"
              cx="75.29"
              cy="111.45"
              rx="4.93"
              ry="1.97"
            />
            <path
              className="lamp-cls-3"
              d="M107.88,76.36H42.7l12.06-29.7C73.25,78,107.88,76.36,107.88,76.36Z"
            />
            <path
              className="lamp-cls-5"
              d="M48.36,72.32a5.37,5.37,0,0,0,.34-10.73L44.87,71A5.33,5.33,0,0,0,48.36,72.32Z"
            />
            <circle className="lamp-cls-5" cx="59.12" cy="66.93" r="5.38" />
            <circle className="lamp-cls-6" cx="69.93" cy="66.93" r="5.38" />
            <circle className="lamp-cls-6" cx="80.69" cy="66.93" r="5.38" />
            <path
              className="lamp-cls-5"
              d="M75.37,67.5a5.32,5.32,0,0,0,8.1,4A59.69,59.69,0,0,1,75.37,67.5Z"
            />
            <circle className="lamp-cls-6" cx="91.45" cy="66.93" r="5.38" />
            <path
              className="lamp-cls-6"
              d="M102.22,72.32A5.32,5.32,0,0,0,105.7,71l-3.82-9.41a5.37,5.37,0,0,0,.34,10.73Z"
            />
            <path
              className="lamp-cls-5"
              d="M69.93,72.32a5.37,5.37,0,0,0,5.33-4.88,59.6,59.6,0,0,1-7.56-5.39,5.38,5.38,0,0,0,2.23,10.27Z"
            />
            <path
              className="lamp-cls-2"
              d="M77.33,31.08a2.08,2.08,0,1,0-4.08,0,2.43,2.43,0,0,0,1.52,2.39v3.06h1V33.47A2.44,2.44,0,0,0,77.33,31.08Z"
            />
            <polygon
              className="lamp-cls-7"
              points="107.88 76.36 42.7 76.36 60.43 32.7 90.14 32.7 107.88 76.36"
            />
            <rect
              className="lamp-cls-2"
              x="74.04"
              y="73.69"
              width="2.48"
              height="11.19"
            />
            <path
              className="lamp-cls-8"
              d="M91,110.74c0,9.09-7.06,10.41-15.75,10.41s-15.75-1.32-15.75-10.41,7.05-22.51,15.75-22.51S91,101.65,91,110.74Z"
            />
            <rect
              className="lamp-cls-8"
              x="71.14"
              y="84.12"
              width="8.28"
              height="4.1"
            />
            <rect
              className="lamp-cls-9"
              x="71.14"
              y="88.23"
              width="8.28"
              height="1.08"
            />
            <path
              className="lamp-cls-4"
              d="M83.42,120.43a35.85,35.85,0,0,1-8.13.72c-8.7,0-15.75-1.32-15.75-10.41C59.54,110.74,64.5,121.79,83.42,120.43Z"
            />
            <ellipse
              className="lamp-cls-1"
              cx="75.29"
              cy="111.45"
              rx="4.93"
              ry="1.97"
            />
            <path
              className="lamp-cls-7"
              d="M72.46,111.45c0,1.09,1.15,2,2.83,2,2.72,0,4.92-.88,4.92-2s-2.2-2-4.92-2C73.53,109.49,72.46,110.37,72.46,111.45Z"
            />
            <path
              className="lamp-cls-3"
              d="M107.88,76.36H42.7l12.06-29.7C73.25,78,107.88,76.36,107.88,76.36Z"
            />
            <path
              className="lamp-cls-5"
              d="M48.36,72.32a5.37,5.37,0,0,0,.34-10.73L44.87,71A5.33,5.33,0,0,0,48.36,72.32Z"
            />
            <circle className="lamp-cls-5" cx="59.12" cy="66.93" r="5.38" />
            <circle className="lamp-cls-6" cx="69.93" cy="66.93" r="5.38" />
            <circle className="lamp-cls-6" cx="80.69" cy="66.93" r="5.38" />
            <path
              className="lamp-cls-5"
              d="M75.37,67.5a5.32,5.32,0,0,0,8.1,4A59.69,59.69,0,0,1,75.37,67.5Z"
            />
            <circle className="lamp-cls-6" cx="91.45" cy="66.93" r="5.38" />
            <path
              className="lamp-cls-6"
              d="M102.22,72.32A5.32,5.32,0,0,0,105.7,71l-3.82-9.41a5.37,5.37,0,0,0,.34,10.73Z"
            />
            <path
              className="lamp-cls-5"
              d="M69.93,72.32a5.37,5.37,0,0,0,5.33-4.88,59.6,59.6,0,0,1-7.56-5.39,5.38,5.38,0,0,0,2.23,10.27Z"
            />
          </g>
        </svg>
      );
    }
  }
}

LampCircleIllustration.propTypes = {
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

LampCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
};

export default LampCircleIllustration;
