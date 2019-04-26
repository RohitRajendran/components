/** @module GivingCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a giving illustration. */
class GivingCircleIllustration extends PureComponent {
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
      width,
      height,
      className,
      style,
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
            <style>{`.cls-1{fill:none;}.cls-2{fill:#f17732;}.cls-3{fill:#99052e;}.cls-12,.cls-4{fill:#10004c;}.cls-5,.cls-7{fill:#5fcbeb;}.cls-6,.cls-8{fill:#2870b5;}.cls-12,.cls-7,.cls-8{fill-rule:evenodd;}.cls-9{fill:#feca1e;}.cls-10{fill:url(#_4-dot);}.cls-11{fill:url(#_5-dot);}`}</style>
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
            <circle className="cls-4" cx="75" cy="75" r="70" />
          </g>
          <g id="bequest-color-2">
            <path
              className="cls-5"
              d="M76,5a15.6,15.6,0,0,0,3,3.83c2.46,2.43-2.2,6.43-3.62,12-1,3.8,0,10.27,3.81,10.27,2.25,0,1-2.85,2.44-6.84.73-2,3.91-6,6.33-8.52,1.7-1.74,2-6,3-9A69.88,69.88,0,0,0,76,5Z"
            />
            <path
              className="cls-6"
              d="M79,8.85c2.46,2.43-2.2,6.43-3.62,12-1,3.8,0,10.27,3.81,10.27-1.88-1.82-2.48-5.13-1.65-8.85.45-2,3.8-7,5.45-10,1.51-2.77-2.17-3.31-4.89-7.2Q77,5,76,5A15.6,15.6,0,0,0,79,8.85Z"
            />
            <path
              className="cls-3"
              d="M72.89,57.59a23.26,23.26,0,0,1-9.58-1.5,7.75,7.75,0,0,1-2.15-1.41,4.42,4.42,0,0,1-1.29-2.39,5.37,5.37,0,0,1,.2-2.68,6.85,6.85,0,0,1,.47-1.22,9.38,9.38,0,0,1,.6-1.13,23.48,23.48,0,0,1,3.06-3.91c.55-.61,1.15-1.16,1.72-1.74l1.67-1.67A27.08,27.08,0,0,0,73,32.57a12,12,0,0,0,.68-2l.11-1a6,6,0,0,0,0-.95,4.19,4.19,0,0,0-1.82-2.93,8.53,8.53,0,0,0-3.7-1.32,13.11,13.11,0,0,0-4.19.1,8.71,8.71,0,0,0-6.6,4.41,7.87,7.87,0,0,0-.74,4.18A13.75,13.75,0,0,0,57,35.33c.17.76.42,1.51.63,2.29v0a.17.17,0,0,1-.11.2.16.16,0,0,1-.18-.07c-.42-.69-.88-1.38-1.24-2.13a12.28,12.28,0,0,1-.86-2.36,9.06,9.06,0,0,1,.08-5.23,9.34,9.34,0,0,1,3.17-4.43,12.71,12.71,0,0,1,4.86-2.29,14.51,14.51,0,0,1,5.34-.27,10.59,10.59,0,0,1,5.14,2.11,11.66,11.66,0,0,1,1.07,1,8.18,8.18,0,0,1,.85,1.26,7.11,7.11,0,0,1,.8,2.88,10,10,0,0,1,0,1.45l-.25,1.37a13.82,13.82,0,0,1-1,2.47A28.9,28.9,0,0,1,69,41.42l-1.8,1.64c-.58.53-1.19,1-1.73,1.58a21.54,21.54,0,0,0-3,3.48,6.08,6.08,0,0,0-1.35,4A3.24,3.24,0,0,0,62,53.89a6.5,6.5,0,0,0,1.76,1.32,16.9,16.9,0,0,0,4.42,1.47,32.42,32.42,0,0,0,4.71.59h0a.16.16,0,0,1,0,.32Z"
            />
            <path
              className="cls-7"
              d="M137.88,105.78,116.66,82.14a12.28,12.28,0,0,0-12.48-6.51,17.62,17.62,0,0,0-5.63,1.71q-5.73,2.56-19.79,9.87a.69.69,0,0,0-.37.55l-21.9.18a.54.54,0,0,0-.22,0L43,80.65a2.79,2.79,0,0,0-3.8,1.09L38.56,83a1.39,1.39,0,0,0,.54,1.9l16.76,9.29a.74.74,0,0,0,.36.24l25.43,7a.72.72,0,0,0,.61.22Q105,98.32,109.78,101l12.38,25.77A70.21,70.21,0,0,0,137.88,105.78Z"
            />
            <path
              className="cls-8"
              d="M39.1,84.86l16.76,9.29a.74.74,0,0,0,.36.24l25.43,7a.72.72,0,0,0,.61.22Q105,98.32,109.78,101l12.38,25.77a70.5,70.5,0,0,0,11.35-13.31c-6.86-1.24-14-22-18.72-18.72-6.77,4.7-21.52.9-31.36,3.09C77.84,99,59.3,93.87,56.61,92.15,43.79,84,41,82.08,39.1,84.86Z"
            />
            <path
              className="cls-3"
              d="M92.45,47.11C90.05,43.24,80.57,55.23,75,57.63c6.64-2,12.75-9.72,14.6-8,1.52,1.44-1.11,5.57-14.6,8C89.67,57.38,94.83,50.94,92.45,47.11Z"
            />
            <ellipse
              className="cls-5"
              cx="75.03"
              cy="57.48"
              rx="3.28"
              ry="2.52"
            />
            <rect
              className="cls-9"
              x="56.34"
              y="57.46"
              width="37.37"
              height="30.56"
            />
            <rect
              className="cls-10"
              x="56.34"
              y="57.46"
              width="37.37"
              height="30.56"
            />
            <path
              className="cls-2"
              d="M93.72,88H56.34V63.47C56.34,75.35,73.27,88.14,93.72,88Z"
            />
            <path
              className="cls-11"
              d="M93.72,88H56.34V63.47C56.34,75.35,73.27,88.14,93.72,88Z"
            />
            <rect
              className="cls-9"
              x="54.71"
              y="57.48"
              width="40.63"
              height="12.67"
            />
            <path
              className="cls-2"
              d="M73.27,70.08H54.71V57.48C54.71,67.47,73.27,70.08,73.27,70.08Z"
            />
            <rect
              className="cls-3"
              x="73.27"
              y="57.42"
              width="3.53"
              height="30.73"
            />
            <path
              className="cls-12"
              d="M75.64,84.5c12.78-1.28,10.66-2.07,22.91-7.16,18.88-7.43,21.49,10.59,6.84,15.92-9.83,2.69-11.45-6.43-27.33-2C70.76,93.25,68.68,85.19,75.64,84.5Z"
            />
            <path
              className="cls-7"
              d="M75.65,83.8c12.78-1.27,10.66-2.07,22.91-7.16,18.88-7.43,25,12.75,10.3,18.07C99,97.41,94,86.13,78.07,90.53,70.77,92.55,68.69,84.49,75.65,83.8Z"
            />
            <path
              className="cls-5"
              d="M56.39,7.52c.08,1.73,1,6.45,1.08,7.5.25,3.27,11,9.68,12,13.59.68,2.62.67,4.8,1.72,4.54,2.08-.51,3-3.25,2.77-6.22-.58-6.67-8.77-11.43-8.4-13.32a49.37,49.37,0,0,1,1.5-8.15A70,70,0,0,0,56.39,7.52Z"
            />
            <path
              className="cls-6"
              d="M57.47,15c.25,3.27,11,9.68,12,13.59.68,2.62.67,4.8,1.72,4.54a15.08,15.08,0,0,0-.28-5.28C69.68,22.33,63.39,22.85,57.47,15Z"
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
            <style>{`.cls-1{fill:none;}.cls-2{fill:#f17732;}.cls-3{fill:#99052e;}.cls-11,.cls-4{fill:#10004c;}.cls-5,.cls-7{fill:#5fcbeb;}.cls-11,.cls-5,.cls-6{fill-rule:evenodd;}.cls-6{fill:#2870b5;}.cls-8{fill:#feca1e;}.cls-9{fill:url(#_4-dot);}.cls-10{fill:url(#_5-dot);}`}</style>
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
            <circle className="cls-4" cx="75" cy="75" r="70" />
          </g>
          <g id="bequest-color">
            <path
              className="cls-5"
              d="M137.88,105.78,116.66,82.14a12.28,12.28,0,0,0-12.48-6.51,17.62,17.62,0,0,0-5.63,1.71q-5.73,2.56-19.79,9.87a.69.69,0,0,0-.37.55l-21.9.18a.54.54,0,0,0-.22,0L43,80.65a2.79,2.79,0,0,0-3.8,1.09L38.56,83a1.39,1.39,0,0,0,.54,1.9l16.76,9.29a.74.74,0,0,0,.36.24l25.43,7a.72.72,0,0,0,.61.22Q105,98.32,109.78,101l12.38,25.77A70.21,70.21,0,0,0,137.88,105.78Z"
            />
            <path
              className="cls-6"
              d="M39.1,84.86l16.76,9.29a.74.74,0,0,0,.36.24l25.43,7a.72.72,0,0,0,.61.22Q105,98.32,109.78,101l12.38,25.77a70.5,70.5,0,0,0,11.35-13.31c-6.86-1.24-14-22-18.72-18.72-6.77,4.7-21.52.9-31.36,3.09C77.84,99,59.3,93.87,56.61,92.15,43.79,84,41,82.08,39.1,84.86Z"
            />
            <path
              className="cls-3"
              d="M92.45,47.11C90.05,43.24,80.57,55.23,75,57.63c6.64-2,12.75-9.72,14.6-8,1.52,1.44-1.11,5.57-14.6,8C89.67,57.38,94.83,50.94,92.45,47.11Z"
            />
            <path
              className="cls-3"
              d="M60.43,49.66c1.85-1.75,8,5.94,14.6,8-5.54-2.4-15-14.39-17.42-10.52S60.39,57.38,75,57.63C61.54,55.23,58.9,51.1,60.43,49.66Z"
            />
            <ellipse
              className="cls-7"
              cx="75.03"
              cy="57.48"
              rx="3.28"
              ry="2.52"
            />
            <rect
              className="cls-8"
              x="56.34"
              y="57.46"
              width="37.37"
              height="30.56"
            />
            <rect
              className="cls-9"
              x="56.34"
              y="57.46"
              width="37.37"
              height="30.56"
            />
            <path
              className="cls-2"
              d="M93.72,88H56.34V63.47C56.34,75.35,73.27,88.14,93.72,88Z"
            />
            <path
              className="cls-10"
              d="M93.72,88H56.34V63.47C56.34,75.35,73.27,88.14,93.72,88Z"
            />
            <rect
              className="cls-8"
              x="54.71"
              y="57.48"
              width="40.63"
              height="12.67"
            />
            <path
              className="cls-2"
              d="M73.27,70.08H54.71V57.48C54.71,67.47,73.27,70.08,73.27,70.08Z"
            />
            <rect
              className="cls-3"
              x="73.27"
              y="57.42"
              width="3.53"
              height="30.73"
            />
            <path
              className="cls-11"
              d="M75.64,84.5c12.78-1.28,10.66-2.07,22.91-7.16,18.88-7.43,21.49,10.59,6.84,15.92-9.83,2.69-11.45-6.43-27.33-2C70.76,93.25,68.68,85.19,75.64,84.5Z"
            />
            <path
              className="cls-5"
              d="M75.65,83.8c12.78-1.27,10.66-2.07,22.91-7.16,18.88-7.43,25,12.75,10.3,18.07C99,97.41,94,86.13,78.07,90.53,70.77,92.55,68.69,84.49,75.65,83.8Z"
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
            <style>{`.cls-1,.cls-9{fill:#5b6279;}.cls-2{fill:#9da1af;}.cls-2,.cls-3,.cls-9{fill-rule:evenodd;}.cls-3,.cls-4{fill:#8c91a1;}.cls-5{fill:#bdc0c9;}.cls-6{fill:#cdcfd6;}.cls-7{fill:#eeeff1;}.cls-8{fill:#dee0e4;}`}</style>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="cls-1" cx="75" cy="75" r="70" />
          </g>
          <g id="bequest-gray">
            <path
              className="cls-2"
              d="M137.88,105.78,116.66,82.14a12.28,12.28,0,0,0-12.48-6.51,17.62,17.62,0,0,0-5.63,1.71q-5.73,2.56-19.79,9.87a.69.69,0,0,0-.37.55l-21.9.18a.54.54,0,0,0-.22,0L43,80.65a2.79,2.79,0,0,0-3.8,1.09L38.56,83a1.39,1.39,0,0,0,.54,1.9l16.76,9.29a.74.74,0,0,0,.36.24l25.43,7a.72.72,0,0,0,.61.22Q105,98.32,109.78,101l12.38,25.77A70.21,70.21,0,0,0,137.88,105.78Z"
            />
            <path
              className="cls-3"
              d="M39.1,84.86l16.76,9.29a.74.74,0,0,0,.36.24l25.43,7a.72.72,0,0,0,.61.22Q105,98.32,109.78,101l12.38,25.77a70.5,70.5,0,0,0,11.35-13.31c-6.86-1.24-14-22-18.72-18.72-6.77,4.7-21.52.9-31.36,3.09C77.84,99,59.3,93.87,56.61,92.15,43.79,84,41,82.08,39.1,84.86Z"
            />
            <path
              className="cls-4"
              d="M92.45,47.11C90.05,43.24,80.57,55.23,75,57.63c6.64-2,12.75-9.72,14.6-8,1.52,1.44-1.11,5.57-14.6,8C89.67,57.38,94.83,50.94,92.45,47.11Z"
            />
            <path
              className="cls-4"
              d="M60.43,49.66c1.85-1.75,8,5.94,14.6,8-5.54-2.4-15-14.39-17.42-10.52S60.39,57.38,75,57.63C61.54,55.23,58.9,51.1,60.43,49.66Z"
            />
            <ellipse
              className="cls-5"
              cx="75.03"
              cy="57.48"
              rx="3.28"
              ry="2.52"
            />
            <rect
              className="cls-6"
              x="56.34"
              y="57.46"
              width="37.37"
              height="30.56"
            />
            <path
              className="cls-5"
              d="M93.72,88H56.34V63.47C56.34,75.35,73.27,88.14,93.72,88Z"
            />
            <rect
              className="cls-7"
              x="54.71"
              y="57.48"
              width="40.63"
              height="12.67"
            />
            <path
              className="cls-8"
              d="M73.27,70.08H54.71V57.48C54.71,67.47,73.27,70.08,73.27,70.08Z"
            />
            <rect
              className="cls-4"
              x="73.27"
              y="57.42"
              width="3.53"
              height="30.73"
            />
            <path
              className="cls-9"
              d="M75.64,84.5c12.78-1.28,10.66-2.07,22.91-7.16,18.88-7.43,21.49,10.59,6.84,15.92-9.83,2.69-11.45-6.43-27.33-2C70.76,93.25,68.68,85.19,75.64,84.5Z"
            />
            <path
              className="cls-2"
              d="M75.65,83.8c12.78-1.27,10.66-2.07,22.91-7.16,18.88-7.43,25,12.75,10.3,18.07C99,97.41,94,86.13,78.07,90.53,70.77,92.55,68.69,84.49,75.65,83.8Z"
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
            <style>{`.cls-1,.cls-9{fill:#10004c;}.cls-2{fill:#6f6693;}.cls-2,.cls-3,.cls-9{fill-rule:evenodd;}.cls-3,.cls-4{fill:#584d82;}.cls-5{fill:#9f99b7;}.cls-6{fill:#b7b3c9;}.cls-7{fill:#e7e6ed;}.cls-8{fill:#cfccdb;}`}</style>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="cls-1" cx="75" cy="75" r="70" />
            <circle className="cls-1" cx="75" cy="75" r="70" />
          </g>
          <g id="bequest-purple">
            <path
              className="cls-2"
              d="M137.88,105.78,116.66,82.14a12.28,12.28,0,0,0-12.48-6.51,17.62,17.62,0,0,0-5.63,1.71q-5.73,2.56-19.79,9.87a.69.69,0,0,0-.37.55l-21.9.18a.54.54,0,0,0-.22,0L43,80.65a2.79,2.79,0,0,0-3.8,1.09L38.56,83a1.39,1.39,0,0,0,.54,1.9l16.76,9.29a.74.74,0,0,0,.36.24l25.43,7a.72.72,0,0,0,.61.22Q105,98.32,109.78,101l12.38,25.77A70.21,70.21,0,0,0,137.88,105.78Z"
            />
            <path
              className="cls-3"
              d="M39.1,84.86l16.76,9.29a.74.74,0,0,0,.36.24l25.43,7a.72.72,0,0,0,.61.22Q105,98.32,109.78,101l12.38,25.77a70.5,70.5,0,0,0,11.35-13.31c-6.86-1.24-14-22-18.72-18.72-6.77,4.7-21.52.9-31.36,3.09C77.84,99,59.3,93.87,56.61,92.15,43.79,84,41,82.08,39.1,84.86Z"
            />
            <path
              className="cls-4"
              d="M92.45,47.11C90.05,43.24,80.57,55.23,75,57.63c6.64-2,12.75-9.72,14.6-8,1.52,1.44-1.11,5.57-14.6,8C89.67,57.38,94.83,50.94,92.45,47.11Z"
            />
            <path
              className="cls-4"
              d="M60.43,49.66c1.85-1.75,8,5.94,14.6,8-5.54-2.4-15-14.39-17.42-10.52S60.39,57.38,75,57.63C61.54,55.23,58.9,51.1,60.43,49.66Z"
            />
            <ellipse
              className="cls-5"
              cx="75.03"
              cy="57.48"
              rx="3.28"
              ry="2.52"
            />
            <rect
              className="cls-6"
              x="56.34"
              y="57.46"
              width="37.37"
              height="30.56"
            />
            <path
              className="cls-5"
              d="M93.72,88H56.34V63.47C56.34,75.35,73.27,88.14,93.72,88Z"
            />
            <rect
              className="cls-7"
              x="54.71"
              y="57.48"
              width="40.63"
              height="12.67"
            />
            <path
              className="cls-8"
              d="M73.27,70.08H54.71V57.48C54.71,67.47,73.27,70.08,73.27,70.08Z"
            />
            <rect
              className="cls-4"
              x="73.27"
              y="57.42"
              width="3.53"
              height="30.73"
            />
            <path
              className="cls-9"
              d="M75.64,84.5c12.78-1.28,10.66-2.07,22.91-7.16,18.88-7.43,21.49,10.59,6.84,15.92-9.83,2.69-11.45-6.43-27.33-2C70.76,93.25,68.68,85.19,75.64,84.5Z"
            />
            <path
              className="cls-2"
              d="M75.65,83.8c12.78-1.27,10.66-2.07,22.91-7.16,18.88-7.43,25,12.75,10.3,18.07C99,97.41,94,86.13,78.07,90.53,70.77,92.55,68.69,84.49,75.65,83.8Z"
            />
          </g>
        </svg>
      );
    }
  }
}

GivingCircleIllustration.propTypes = {
  /** The width of the illustration. */
  width: PropTypes.string,
  /** The height of the illustration. */
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

GivingCircleIllustration.defaultProps = {
  height: '140',
  width: '144',
};

export default GivingCircleIllustration;
