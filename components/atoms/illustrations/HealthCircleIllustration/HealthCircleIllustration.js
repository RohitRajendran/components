/** @module HealthCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a health illustration. */
class HealthCircleIllustration extends PureComponent {
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
            <style>{`.health-cls-1{fill:none;}.health-cls-2{fill:#f17732;}.health-cls-3{fill:#99052e;}.health-cls-4{fill:#10004c;}.health-cls-5{fill:#2870b5;}.health-cls-6{fill:#5fcbeb;}.health-cls-7{fill:#feca1e;}.health-cls-8{fill:url(#_4-dot);}.health-cls-9{fill:url(#_5-dot);}`}</style>
            <pattern
              id="_4-dot"
              data-name="4-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="health-cls-1" width="4" height="4" />
              <circle className="health-cls-2" cx="3" cy="4" r="0.35" />
              <circle className="health-cls-2" cx="1" cy="4" r="0.35" />
              <circle className="health-cls-2" cx="4" cy="2" r="0.35" />
              <circle className="health-cls-2" cx="2" cy="2" r="0.35" />
              <circle className="health-cls-2" cy="2" r="0.35" />
              <circle className="health-cls-2" cx="3" r="0.35" />
              <circle className="health-cls-2" cx="1" r="0.35" />
            </pattern>
            <pattern
              id="_5-dot"
              data-name="5-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="health-cls-1" width="4" height="4" />
              <circle className="health-cls-3" cx="3" cy="4" r="0.35" />
              <circle className="health-cls-3" cx="1" cy="4" r="0.35" />
              <circle className="health-cls-3" cx="4" cy="2" r="0.35" />
              <circle className="health-cls-3" cx="2" cy="2" r="0.35" />
              <circle className="health-cls-3" cy="2" r="0.35" />
              <circle className="health-cls-3" cx="3" r="0.35" />
              <circle className="health-cls-3" cx="1" r="0.35" />
            </pattern>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="health-cls-4" cx="75" cy="75" r="70" />
          </g>
          <g id="health-color-2">
            <path
              className="health-cls-5"
              d="M102.82,34.23C102,33,99,31.79,89.11,32.62a1.34,1.34,0,0,0,.23,2.68c5.12-.43,10.31-.22,11.2.38.73,2.81,0,27.41-8.7,39.66-3.1,4.38-6.86,6.6-11.18,6.6s-8.07-2.22-11.17-6.6c-8.65-12.2-9.42-36.65-8.71-39.63,1.06-.64,6.17-.83,11.21-.41a1.34,1.34,0,1,0,.22-2.68c-9.9-.83-12.92.42-13.7,1.61-1.42,2.15-.79,25.33,6.76,39.38,3.94,7.31,9.11,11,15.39,11s11.47-3.71,15.4-11C103.61,59.56,104.24,36.38,102.82,34.23Z"
            />
            <path
              className="health-cls-3"
              d="M58.09,44.8c.58,8.51,2.62,20.33,7.18,28.81,3.94,7.31,9.11,11,15.39,11C70.8,83.24,62.82,73,58.09,44.8Z"
            />
            <path
              className="health-cls-5"
              d="M91.73,116.11q-.49,0-1,0c-6.63-.35-11-3.85-11.39-9l-.25.09c-8.64,3.27-17.55,6.65-24.34,6.5-14.41-.31-17-9.53-17-27.59a1.34,1.34,0,1,1,2.68,0c0,19.31,3.1,24.66,14.42,24.91,6.22.11,14.93-3.16,23.33-6.33l1.17-.45V83.29a1.35,1.35,0,1,1,2.69,0v19.92c9.08-3.37,16.71-5.72,20.56-2.74,1.84,1.42,2.59,3.89,2.23,7.33C104.24,113.13,97.89,116.11,91.73,116.11Zm-9.72-10v.28c0,4.85,4.58,6.82,8.87,7.05,5.08.27,10.83-1.91,11.25-5.88.26-2.45-.15-4.11-1.2-4.92C98.07,100.38,90.19,103,82,106.07Z"
            />
            <path
              className="health-cls-3"
              d="M54.76,113.67c-14.41-.31-17-9.53-17-27.59a1.34,1.34,0,0,1,1.34-1.34C39.06,108,43.8,112.38,54.76,113.67Z"
            />
            <path
              className="health-cls-6"
              d="M80.66,94.34a2.23,2.23,0,0,1-2.23-2.24V83.56a2.24,2.24,0,1,1,4.47,0V92.1A2.24,2.24,0,0,1,80.66,94.34Z"
            />
            <path
              className="health-cls-3"
              d="M80.66,87.77a14.94,14.94,0,0,0,2.24-.17v-4a2.19,2.19,0,0,0-.44-1.33,10.15,10.15,0,0,1-3.59,0,2.19,2.19,0,0,0-.44,1.33v4A14.91,14.91,0,0,0,80.66,87.77Z"
            />
            <path
              className="health-cls-6"
              d="M93.35,75.71A2.24,2.24,0,0,0,90.2,76c-2.76,3.38-5.88,5-9.54,5s-6.77-1.65-9.53-5a2.24,2.24,0,0,0-3.47,2.84c3.62,4.42,8,6.67,13,6.67s9.39-2.25,13-6.67A2.24,2.24,0,0,0,93.35,75.71Z"
            />
            <path
              className="health-cls-2"
              d="M68,75.71a2.24,2.24,0,0,0-.32,3.15c3.62,4.42,8,6.67,13,6.67a15.27,15.27,0,0,0,5.24-.9C78.93,85.43,73.54,83.8,68,75.71Z"
            />
            <path
              className="health-cls-7"
              d="M54.76,71.73c0,8.67-15.7,23.09-15.7,23.09S23.36,80.4,23.36,71.73,35,59.92,39.06,68.58C42.79,59.79,54.76,63.06,54.76,71.73Z"
            />
            <path
              className="health-cls-8"
              d="M54.76,71.73c0,8.67-15.7,23.09-15.7,23.09S23.36,80.4,23.36,71.73,35,59.92,39.06,68.58C42.79,59.79,54.76,63.06,54.76,71.73Z"
            />
            <path
              className="health-cls-2"
              d="M48.35,84.76a111.3,111.3,0,0,1-9.29,10.06s-9.88-9.07-14-17.15a13.66,13.66,0,0,1-1.74-5.94C26.89,79.74,35.36,88.71,48.35,84.76Z"
            />
            <path
              className="health-cls-9"
              d="M48.35,84.76a111.3,111.3,0,0,1-9.29,10.06s-9.88-9.07-14-17.15a13.66,13.66,0,0,1-1.74-5.94C26.89,79.74,35.36,88.71,48.35,84.76Z"
            />
            <circle className="health-cls-7" cx="72.1" cy="33.64" r="3.91" />
            <circle className="health-cls-8" cx="72.1" cy="33.64" r="3.91" />
            <path
              className="health-cls-2"
              d="M75,36.29a3.91,3.91,0,0,1-6.12-4.83A5.55,5.55,0,0,0,75,36.29Z"
            />
            <circle className="health-cls-7" cx="89.23" cy="33.64" r="3.91" />
            <circle className="health-cls-8" cx="89.23" cy="33.64" r="3.91" />
            <path
              className="health-cls-2"
              d="M92.1,36.29a3.87,3.87,0,0,1-2.87,1.27,3.92,3.92,0,0,1-3.91-3.92A3.87,3.87,0,0,1,86,31.46,5.55,5.55,0,0,0,92.1,36.29Z"
            />
            <path
              className="health-cls-3"
              d="M82,106.35v-.27l-2.66,1a9.5,9.5,0,0,0,.29,1.72l2.55-.9A6.93,6.93,0,0,1,82,106.35Z"
            />
            <path className="health-cls-3" d="M82.48,105.9l.19-.07h0Z" />
            <path
              className="health-cls-3"
              d="M82.39,103.07l-.38.14v-1.94l-2.69,1v1.93l-.66.25Z"
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
            <style>{`.health-cls-1{fill:none;}.health-cls-2{fill:#f17732;}.health-cls-3{fill:#99052e;}.health-cls-4{fill:#10004c;}.health-cls-5{fill:#2870b5;}.health-cls-6{fill:#5fcbeb;}.health-cls-7{fill:#feca1e;}.health-cls-8{fill:url(#_4-dot);}.health-cls-9{fill:url(#_5-dot);}`}</style>
            <pattern
              id="_4-dot"
              data-name="4-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="health-cls-1" width="4" height="4" />
              <circle className="health-cls-2" cx="3" cy="4" r="0.35" />
              <circle className="health-cls-2" cx="1" cy="4" r="0.35" />
              <circle className="health-cls-2" cx="4" cy="2" r="0.35" />
              <circle className="health-cls-2" cx="2" cy="2" r="0.35" />
              <circle className="health-cls-2" cy="2" r="0.35" />
              <circle className="health-cls-2" cx="3" r="0.35" />
              <circle className="health-cls-2" cx="1" r="0.35" />
            </pattern>
            <pattern
              id="_5-dot"
              data-name="5-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="health-cls-1" width="4" height="4" />
              <circle className="health-cls-3" cx="3" cy="4" r="0.35" />
              <circle className="health-cls-3" cx="1" cy="4" r="0.35" />
              <circle className="health-cls-3" cx="4" cy="2" r="0.35" />
              <circle className="health-cls-3" cx="2" cy="2" r="0.35" />
              <circle className="health-cls-3" cy="2" r="0.35" />
              <circle className="health-cls-3" cx="3" r="0.35" />
              <circle className="health-cls-3" cx="1" r="0.35" />
            </pattern>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="health-cls-4" cx="75" cy="75" r="70" />
          </g>
          <g id="health-color">
            <path
              className="health-cls-5"
              d="M102.82,34.23C102,33,99,31.79,89.11,32.62a1.34,1.34,0,0,0,.23,2.68c5.12-.43,10.31-.22,11.2.38.73,2.81,0,27.41-8.7,39.66-3.1,4.38-6.86,6.6-11.18,6.6s-8.07-2.22-11.17-6.6c-8.65-12.2-9.42-36.65-8.71-39.63,1.06-.64,6.17-.83,11.21-.41a1.34,1.34,0,1,0,.22-2.68c-9.9-.83-12.92.42-13.7,1.61-1.42,2.15-.79,25.33,6.76,39.38,3.94,7.31,9.11,11,15.39,11s11.47-3.71,15.4-11C103.61,59.56,104.24,36.38,102.82,34.23Z"
            />
            <path
              className="health-cls-3"
              d="M58.09,44.8c.58,8.51,2.62,20.33,7.18,28.81,3.94,7.31,9.11,11,15.39,11C70.8,83.24,62.82,73,58.09,44.8Z"
            />
            <path
              className="health-cls-5"
              d="M91.73,116.11q-.49,0-1,0c-6.63-.35-11-3.85-11.39-9l-.25.09c-8.64,3.27-17.55,6.65-24.34,6.5-14.41-.31-17-9.53-17-27.59a1.34,1.34,0,1,1,2.68,0c0,19.31,3.1,24.66,14.42,24.91,6.22.11,14.93-3.16,23.33-6.33l1.17-.45V83.29a1.35,1.35,0,1,1,2.69,0v19.92c9.08-3.37,16.71-5.72,20.56-2.74,1.84,1.42,2.59,3.89,2.23,7.33C104.24,113.13,97.89,116.11,91.73,116.11Zm-9.72-10v.28c0,4.85,4.58,6.82,8.87,7.05,5.08.27,10.83-1.91,11.25-5.88.26-2.45-.15-4.11-1.2-4.92C98.07,100.38,90.19,103,82,106.07Z"
            />
            <path
              className="health-cls-3"
              d="M54.76,113.67c-14.41-.31-17-9.53-17-27.59a1.34,1.34,0,0,1,1.34-1.34C39.06,108,43.8,112.38,54.76,113.67Z"
            />
            <path
              className="health-cls-6"
              d="M80.66,94.34a2.23,2.23,0,0,1-2.23-2.24V83.56a2.24,2.24,0,1,1,4.47,0V92.1A2.24,2.24,0,0,1,80.66,94.34Z"
            />
            <path
              className="health-cls-3"
              d="M80.66,87.77a14.94,14.94,0,0,0,2.24-.17v-4a2.19,2.19,0,0,0-.44-1.33,10.15,10.15,0,0,1-3.59,0,2.19,2.19,0,0,0-.44,1.33v4A14.91,14.91,0,0,0,80.66,87.77Z"
            />
            <path
              className="health-cls-6"
              d="M93.35,75.71A2.24,2.24,0,0,0,90.2,76c-2.76,3.38-5.88,5-9.54,5s-6.77-1.65-9.53-5a2.24,2.24,0,0,0-3.47,2.84c3.62,4.42,8,6.67,13,6.67s9.39-2.25,13-6.67A2.24,2.24,0,0,0,93.35,75.71Z"
            />
            <path
              className="health-cls-2"
              d="M68,75.71a2.24,2.24,0,0,0-.32,3.15c3.62,4.42,8,6.67,13,6.67a15.27,15.27,0,0,0,5.24-.9C78.93,85.43,73.54,83.8,68,75.71Z"
            />
            <path
              className="health-cls-7"
              d="M50.49,73.74c0,6.31-11.43,16.8-11.43,16.8S27.63,80.05,27.63,73.74a5.93,5.93,0,0,1,11.43-2.3C41.78,65,50.49,67.42,50.49,73.74Z"
            />
            <path
              className="health-cls-8"
              d="M50.49,73.74c0,6.31-11.43,16.8-11.43,16.8S27.63,80.05,27.63,73.74a5.93,5.93,0,0,1,11.43-2.3C41.78,65,50.49,67.42,50.49,73.74Z"
            />
            <path
              className="health-cls-2"
              d="M45.82,83.22a79.38,79.38,0,0,1-6.76,7.32s-7.19-6.6-10.17-12.48a10.08,10.08,0,0,1-1.26-4.32C30.2,79.56,36.37,86.1,45.82,83.22Z"
            />
            <path
              className="health-cls-9"
              d="M45.82,83.22a79.38,79.38,0,0,1-6.76,7.32s-7.19-6.6-10.17-12.48a10.08,10.08,0,0,1-1.26-4.32C30.2,79.56,36.37,86.1,45.82,83.22Z"
            />
            <circle className="health-cls-7" cx="72.1" cy="33.64" r="3.91" />
            <circle className="health-cls-8" cx="72.1" cy="33.64" r="3.91" />
            <path
              className="health-cls-2"
              d="M75,36.29a3.91,3.91,0,0,1-6.12-4.83A5.55,5.55,0,0,0,75,36.29Z"
            />
            <circle className="health-cls-7" cx="89.23" cy="33.64" r="3.91" />
            <circle className="health-cls-8" cx="89.23" cy="33.64" r="3.91" />
            <path
              className="health-cls-2"
              d="M92.1,36.29a3.87,3.87,0,0,1-2.87,1.27,3.92,3.92,0,0,1-3.91-3.92A3.87,3.87,0,0,1,86,31.46,5.55,5.55,0,0,0,92.1,36.29Z"
            />
            <path
              className="health-cls-3"
              d="M82,106.35v-.27l-2.66,1a9.5,9.5,0,0,0,.29,1.72l2.55-.9A6.93,6.93,0,0,1,82,106.35Z"
            />
            <path className="health-cls-3" d="M82.48,105.9l.19-.07h0Z" />
            <path
              className="health-cls-3"
              d="M82.39,103.07l-.38.14v-1.94l-2.69,1v1.93l-.66.25Z"
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
            <style>{`.health-cls-1{fill:#5b6279;}.health-cls-2{fill:#9da1af;}.health-cls-3{fill:#7c8194;}.health-cls-4{fill:#8c91a1;}.health-cls-5{fill:#bdc0c9;}.health-cls-6{fill:#dee0e4;}.health-cls-7{fill:#fff;}.health-cls-8{fill:#eeeff1;}.health-cls-9{fill:#cdcfd6;}`}</style>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="health-cls-1" cx="75" cy="75" r="70" />
          </g>
          <g id="health-gray">
            <path
              className="health-cls-2"
              d="M102.82,34.23C102,33,99,31.79,89.11,32.62a1.34,1.34,0,0,0,.23,2.68c5.12-.43,10.31-.22,11.2.38.73,2.81,0,27.41-8.7,39.66-3.1,4.38-6.86,6.6-11.18,6.6s-8.07-2.22-11.17-6.6c-8.65-12.2-9.42-36.65-8.71-39.63,1.06-.64,6.17-.83,11.21-.41a1.34,1.34,0,1,0,.22-2.68c-9.9-.83-12.92.42-13.7,1.61-1.42,2.15-.79,25.33,6.76,39.38,3.94,7.31,9.11,11,15.39,11s11.47-3.71,15.4-11C103.61,59.56,104.24,36.38,102.82,34.23Z"
            />
            <path
              className="health-cls-3"
              d="M58.09,44.8c.58,8.51,2.62,20.33,7.18,28.81,3.94,7.31,9.11,11,15.39,11C70.8,83.24,62.82,73,58.09,44.8Z"
            />
            <path
              className="health-cls-4"
              d="M91.73,116.11q-.49,0-1,0c-6.63-.35-11-3.85-11.39-9l-.25.09c-8.64,3.27-17.55,6.65-24.34,6.5-14.41-.31-17-9.53-17-27.59a1.34,1.34,0,1,1,2.68,0c0,19.31,3.1,24.66,14.42,24.91,6.22.11,14.93-3.16,23.33-6.33l1.17-.45V83.29a1.35,1.35,0,1,1,2.69,0V103.2c9.08-3.36,16.71-5.71,20.56-2.73,1.84,1.42,2.59,3.89,2.23,7.33C104.24,113.13,97.89,116.11,91.73,116.11Zm-9.72-10v.27c0,4.86,4.58,6.83,8.87,7.06,5.08.27,10.83-1.91,11.25-5.88.26-2.46-.15-4.11-1.2-4.92C98.07,100.38,90.19,103,82,106.07Z"
            />
            <path
              className="health-cls-3"
              d="M54.76,113.67c-14.41-.31-17-9.53-17-27.59a1.34,1.34,0,0,1,1.34-1.34C39.06,108,43.8,112.38,54.76,113.67Z"
            />
            <path
              className="health-cls-5"
              d="M80.66,94.34a2.23,2.23,0,0,1-2.23-2.24V83.55a2.24,2.24,0,1,1,4.47,0V92.1A2.24,2.24,0,0,1,80.66,94.34Z"
            />
            <path
              className="health-cls-2"
              d="M80.66,87.77a14.94,14.94,0,0,0,2.24-.17v-4a2.18,2.18,0,0,0-.44-1.32,10.15,10.15,0,0,1-3.59,0,2.18,2.18,0,0,0-.44,1.32v4A14.91,14.91,0,0,0,80.66,87.77Z"
            />
            <path
              className="health-cls-6"
              d="M93.35,75.71A2.23,2.23,0,0,0,90.2,76c-2.76,3.38-5.88,5-9.54,5s-6.77-1.65-9.53-5a2.24,2.24,0,0,0-3.47,2.84c3.62,4.42,8,6.67,13,6.67s9.39-2.25,13-6.67A2.24,2.24,0,0,0,93.35,75.71Z"
            />
            <path
              className="health-cls-5"
              d="M68,75.71a2.24,2.24,0,0,0-.32,3.15c3.62,4.42,8,6.67,13,6.67a15.27,15.27,0,0,0,5.24-.9C78.93,85.43,73.54,83.8,68,75.71Z"
            />
            <path
              className="health-cls-7"
              d="M50.49,73.74c0,6.31-11.43,16.8-11.43,16.8S27.63,80.05,27.63,73.74a5.93,5.93,0,0,1,11.43-2.3C41.78,65,50.49,67.42,50.49,73.74Z"
            />
            <path
              className="health-cls-6"
              d="M45.82,83.22a79.38,79.38,0,0,1-6.76,7.32s-7.19-6.6-10.17-12.48a10.08,10.08,0,0,1-1.26-4.32C30.2,79.56,36.37,86.1,45.82,83.22Z"
            />
            <circle className="health-cls-8" cx="72.1" cy="33.64" r="3.91" />
            <path
              className="health-cls-9"
              d="M75,36.29a3.91,3.91,0,0,1-6.12-4.83A5.55,5.55,0,0,0,75,36.29Z"
            />
            <circle className="health-cls-8" cx="89.23" cy="33.64" r="3.91" />
            <path
              className="health-cls-9"
              d="M92.1,36.29a3.87,3.87,0,0,1-2.87,1.27,3.92,3.92,0,0,1-3.91-3.92A3.87,3.87,0,0,1,86,31.46,5.55,5.55,0,0,0,92.1,36.29Z"
            />
            <path
              className="health-cls-3"
              d="M82,106.34v-.26l-2.66,1a9.5,9.5,0,0,0,.29,1.72l2.55-.9A7,7,0,0,1,82,106.34Z"
            />
            <path className="health-cls-3" d="M82.48,105.9l.19-.07h0Z" />
            <path
              className="health-cls-3"
              d="M82.39,103.06l-.38.14v-1.93l-2.69,1v1.93l-.66.25Z"
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
            <style>{`.health-cls-1{fill:#10004c;}.health-cls-2{fill:#6f6693;}.health-cls-3{fill:#3f336f;}.health-cls-4{fill:#584d82;}.health-cls-5{fill:#9f99b7;}.health-cls-6{fill:#cfccdb;}.health-cls-7{fill:#fff;}`}</style>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="health-cls-1" cx="75" cy="75" r="70" />
          </g>
          <g id="health-purple">
            <path
              className="health-cls-2"
              d="M102.82,34.23C102,33,99,31.79,89.11,32.62a1.34,1.34,0,0,0,.23,2.68c5.12-.43,10.31-.22,11.2.38.73,2.81,0,27.41-8.7,39.66-3.1,4.38-6.86,6.6-11.18,6.6s-8.07-2.22-11.17-6.6c-8.65-12.2-9.42-36.65-8.71-39.63,1.06-.64,6.17-.83,11.21-.41a1.34,1.34,0,1,0,.22-2.68c-9.9-.83-12.92.42-13.7,1.61-1.42,2.15-.79,25.33,6.76,39.38,3.94,7.31,9.11,11,15.39,11s11.47-3.71,15.4-11C103.61,59.56,104.24,36.38,102.82,34.23Z"
            />
            <path
              className="health-cls-3"
              d="M58.09,44.8c.58,8.51,2.62,20.33,7.18,28.81,3.94,7.31,9.11,11,15.39,11C70.8,83.24,62.82,73,58.09,44.8Z"
            />
            <path
              className="health-cls-4"
              d="M91.73,116.11q-.49,0-1,0c-6.63-.35-11-3.85-11.39-9l-.25.09c-8.64,3.27-17.55,6.65-24.34,6.5-14.41-.31-17-9.53-17-27.59a1.34,1.34,0,1,1,2.68,0c0,19.31,3.1,24.66,14.42,24.91,6.22.11,14.93-3.16,23.33-6.33l1.17-.45V83.29a1.35,1.35,0,1,1,2.69,0v19.92c9.08-3.37,16.71-5.72,20.56-2.74,1.84,1.42,2.59,3.89,2.23,7.33C104.24,113.13,97.89,116.11,91.73,116.11Zm-9.72-10v.28c0,4.85,4.58,6.82,8.87,7.05,5.08.27,10.83-1.91,11.25-5.88.26-2.45-.15-4.11-1.2-4.92C98.07,100.38,90.19,103,82,106.07Z"
            />
            <path
              className="health-cls-3"
              d="M54.76,113.67c-14.41-.31-17-9.53-17-27.59a1.34,1.34,0,0,1,1.34-1.34C39.06,108,43.8,112.38,54.76,113.67Z"
            />
            <path
              className="health-cls-5"
              d="M80.66,94.34a2.23,2.23,0,0,1-2.23-2.24V83.56a2.24,2.24,0,1,1,4.47,0V92.1A2.24,2.24,0,0,1,80.66,94.34Z"
            />
            <path
              className="health-cls-2"
              d="M80.66,87.77a14.94,14.94,0,0,0,2.24-.17v-4a2.19,2.19,0,0,0-.44-1.33,10.15,10.15,0,0,1-3.59,0,2.19,2.19,0,0,0-.44,1.33v4A14.91,14.91,0,0,0,80.66,87.77Z"
            />
            <path
              className="health-cls-6"
              d="M93.35,75.71A2.24,2.24,0,0,0,90.2,76c-2.76,3.38-5.88,5-9.54,5s-6.77-1.65-9.53-5a2.24,2.24,0,0,0-3.47,2.84c3.62,4.42,8,6.67,13,6.67s9.39-2.25,13-6.67A2.24,2.24,0,0,0,93.35,75.71Z"
            />
            <path
              className="health-cls-5"
              d="M68,75.71a2.24,2.24,0,0,0-.32,3.15c3.62,4.42,8,6.67,13,6.67a15.27,15.27,0,0,0,5.24-.9C78.93,85.43,73.54,83.8,68,75.71Z"
            />
            <path
              className="health-cls-7"
              d="M50.49,73.74c0,6.31-11.43,16.8-11.43,16.8S27.63,80.05,27.63,73.74a5.93,5.93,0,0,1,11.43-2.3C41.78,65,50.49,67.42,50.49,73.74Z"
            />
            <path
              className="health-cls-6"
              d="M45.82,83.22a79.38,79.38,0,0,1-6.76,7.32s-7.19-6.6-10.17-12.48a10.08,10.08,0,0,1-1.26-4.32C30.2,79.56,36.37,86.1,45.82,83.22Z"
            />
            <circle className="health-cls-6" cx="72.1" cy="33.64" r="3.91" />
            <path
              className="health-cls-5"
              d="M75,36.29a3.91,3.91,0,0,1-6.12-4.83A5.55,5.55,0,0,0,75,36.29Z"
            />
            <circle className="health-cls-6" cx="89.23" cy="33.64" r="3.91" />
            <path
              className="health-cls-5"
              d="M92.1,36.29a3.87,3.87,0,0,1-2.87,1.27,3.92,3.92,0,0,1-3.91-3.92A3.87,3.87,0,0,1,86,31.46,5.55,5.55,0,0,0,92.1,36.29Z"
            />
            <path
              className="health-cls-3"
              d="M82,106.35v-.27l-2.66,1a9.5,9.5,0,0,0,.29,1.72l2.55-.9A6.93,6.93,0,0,1,82,106.35Z"
            />
            <path className="health-cls-3" d="M82.48,105.9l.19-.07h0Z" />
            <path
              className="health-cls-3"
              d="M82.39,103.07l-.38.14v-1.94l-2.69,1v1.93l-.66.25Z"
            />
          </g>
        </svg>
      );
    }
  }
}

HealthCircleIllustration.propTypes = {
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

HealthCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
};

export default HealthCircleIllustration;
