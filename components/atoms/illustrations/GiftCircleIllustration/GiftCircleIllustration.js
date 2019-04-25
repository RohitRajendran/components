/** @module GiftCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a gift illustration. */
class GiftCircleIllustration extends PureComponent {
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
            <style>{`.cls-1{fill:none;}.cls-2{fill:#fde5cb;}.cls-3{fill:#f17732;}.cls-4{fill:#99052e;}.cls-5{fill:#10004c;}.cls-6{fill:#2870b5;}.cls-7{fill:#5fcbeb;}.cls-8{fill:#f8f7f4;}.cls-9{fill:url(#_2-dot);}.cls-10{fill:#feca1e;}.cls-11{fill:url(#_4-dot);}.cls-12{fill:url(#_5-dot);}`}</style>
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
          <g id="gift-color-2">
            <path
              className="cls-3"
              d="M50.42,57.06c0-1.79-2.39-10.53-8.69-16.51,20.63,0,25.36,12.71,39.48,16.73Z"
            />
            <path
              className="cls-4"
              d="M104.75,57.09l-30.88.29c14.13-4,18.85-16.73,39.48-16.73-6.29,6-8.68,14.72-8.68,16.51"
            />
            <path
              className="cls-6"
              d="M94.78,57.32l-35.51,0c0-1.8,5.65-4,4.12-16.7C81.21,57.38,90,49.42,94.78,57.32"
            />
            <path
              className="cls-7"
              d="M97.27,111.66c-17.64,0-21.12-8.76-21.27-9.17a1.15,1.15,0,0,1,2.15-.81c.06.15,4.09,9.59,25.46,7.33,12.49-1.32,13.35-3.1,13.38-3.17-.19-.6-3-2-5.93-2.56-2.11-.43-3.35-1.55-3.14-2.88.28-1.83,2.93-2.49,7.88-2a20.52,20.52,0,0,1,8.25,2.76c2.09,1.13,3.14,1.69,5.07.6a1.16,1.16,0,0,1,1.57.44,1.15,1.15,0,0,1-.44,1.56c-3,1.72-5,.65-7.29-.58a18.45,18.45,0,0,0-7.41-2.49,14.61,14.61,0,0,0-4.89,0,2,2,0,0,0,.85.25c.33.07,7.92,1.63,7.77,5-.09,1.83-2,3.89-15.42,5.31A63.67,63.67,0,0,1,97.27,111.66Z"
            />
            <path
              className="cls-6"
              d="M97.27,111.66c-17.64,0-21.12-8.76-21.27-9.17-.22-.6,1.85-.78,2.44-1,4.3,14.46,41.52,9,40.78,3.9a2.33,2.33,0,0,1,0,1.31c-.61,1.5-2.94,3.29-15.36,4.6A63.67,63.67,0,0,1,97.27,111.66Z"
            />
            <rect
              className="cls-8"
              x="50.42"
              y="57.09"
              width="54.33"
              height="45.93"
            />
            <rect
              className="cls-9"
              x="50.42"
              y="57.09"
              width="54.33"
              height="45.93"
            />
            <path
              className="cls-2"
              d="M104.75,103H50.42V62.33C50.42,82,95.85,103,104.75,103Z"
            />
            <path
              className="cls-3"
              d="M66,74.66c-1.88-3-9.28,6.35-13.61,8.23,5.18-1.59,10-7.6,11.41-6.23C65,77.79,63,81,52.42,82.89,63.86,82.69,67.89,77.66,66,74.66Z"
            />
            <path
              className="cls-3"
              d="M41,76.66c1.45-1.37,6.23,4.64,11.42,6.23C48.09,81,40.68,71.64,38.8,74.66s2.17,8,13.62,8.23C41.87,81,39.81,77.79,41,76.66Z"
            />
            <rect
              className="cls-10"
              x="37.81"
              y="82.89"
              width="29.21"
              height="23.75"
            />
            <rect
              className="cls-11"
              x="37.81"
              y="82.89"
              width="29.21"
              height="23.75"
            />
            <path
              className="cls-3"
              d="M67,106.64H37.81V87.45C37.81,96.73,62.24,106.64,67,106.64Z"
            />
            <path
              className="cls-12"
              d="M67,106.64H37.81V87.45C37.81,96.73,62.24,106.64,67,106.64Z"
            />
            <ellipse
              className="cls-4"
              cx="52.42"
              cy="82.77"
              rx="2.57"
              ry="1.97"
            />
            <rect
              className="cls-10"
              x="36.54"
              y="82.77"
              width="31.76"
              height="9.9"
            />
            <rect
              className="cls-10"
              x="36.54"
              y="82.77"
              width="31.76"
              height="9.9"
            />
            <path
              className="cls-3"
              d="M51,92.67H36.54v-9.9C36.54,90.58,51,92.67,51,92.67Z"
            />
            <rect
              className="cls-3"
              x="51.04"
              y="82.77"
              width="2.76"
              height="23.87"
            />
            <path
              className="cls-4"
              d="M51,100.75v5.89H53.8v-4.5C52.88,101.7,52,101.24,51,100.75Z"
            />
            <path
              className="cls-6"
              d="M110.66,100.77a15.24,15.24,0,0,1,4.89,0,18.45,18.45,0,0,1,7.41,2.49c2.28,1.23,4.25,2.3,7.29.58a1.15,1.15,0,0,0,.44-1.56c-.26.79-2.39,1.64-4,1.46-2-.23-4.91-3.47-11.3-4S110.49,100.67,110.66,100.77Z"
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
            <style>{`.cls-1{fill:none;}.cls-2{fill:#fde5cb;}.cls-3{fill:#f17732;}.cls-4{fill:#99052e;}.cls-5{fill:#10004c;}.cls-6{fill:#5fcbeb;}.cls-7{fill:#f8f7f4;}.cls-8{fill:url(#_2-dot);}.cls-9{fill:#2870b5;}.cls-10{fill:#feca1e;}.cls-11{fill:url(#_4-dot);}.cls-12{fill:url(#_5-dot);}`}</style>
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
          <g id="gift-color">
            <path
              className="cls-6"
              d="M100.34,39.88C97.2,34.83,84.82,50.5,77.58,53.63,86.26,51,94.24,40.93,96.66,43.22c2,1.88-1.45,7.28-19.08,10.41C96.72,53.3,103.46,44.89,100.34,39.88Z"
            />
            <path
              className="cls-6"
              d="M58.51,43.22c2.42-2.29,10.4,7.76,19.07,10.41C70.35,50.5,58,34.83,54.82,39.88S58.45,53.3,77.58,53.63C60,50.5,56.52,45.1,58.51,43.22Z"
            />
            <rect
              className="cls-7"
              x="50.42"
              y="53.55"
              width="54.33"
              height="49.47"
            />
            <rect
              className="cls-8"
              x="50.42"
              y="53.55"
              width="54.33"
              height="49.47"
            />
            <path
              className="cls-2"
              d="M104.75,103H50.42V62.33C50.42,82,95.85,103,104.75,103Z"
            />
            <ellipse
              className="cls-9"
              cx="77.58"
              cy="53.55"
              rx="4.27"
              ry="2.59"
            />
            <rect
              className="cls-7"
              x="48.41"
              y="53.55"
              width="58.35"
              height="14.78"
            />
            <path
              className="cls-2"
              d="M76.21,68.33H48.41V53.55C48.41,65.27,76.21,68.33,76.21,68.33Z"
            />
            <path
              className="cls-3"
              d="M66,74.66c-1.88-3-9.28,6.35-13.61,8.23,5.18-1.59,10-7.6,11.41-6.23C65,77.79,63,81,52.42,82.89,63.86,82.69,67.89,77.66,66,74.66Z"
            />
            <path
              className="cls-3"
              d="M41,76.66c1.45-1.37,6.23,4.64,11.42,6.23C48.09,81,40.68,71.64,38.8,74.66s2.17,8,13.62,8.23C41.87,81,39.81,77.79,41,76.66Z"
            />
            <rect
              className="cls-10"
              x="37.81"
              y="82.89"
              width="29.21"
              height="23.75"
            />
            <rect
              className="cls-11"
              x="37.81"
              y="82.89"
              width="29.21"
              height="23.75"
            />
            <path
              className="cls-3"
              d="M67,106.64H37.81V87.45C37.81,96.73,62.24,106.64,67,106.64Z"
            />
            <path
              className="cls-12"
              d="M67,106.64H37.81V87.45C37.81,96.73,62.24,106.64,67,106.64Z"
            />
            <ellipse
              className="cls-4"
              cx="52.42"
              cy="82.77"
              rx="2.57"
              ry="1.97"
            />
            <rect
              className="cls-10"
              x="36.54"
              y="82.77"
              width="31.76"
              height="9.9"
            />
            <rect
              className="cls-10"
              x="36.54"
              y="82.77"
              width="31.76"
              height="9.9"
            />
            <path
              className="cls-3"
              d="M51,92.67H36.54v-9.9C36.54,90.58,51,92.67,51,92.67Z"
            />
            <rect
              className="cls-6"
              x="76.21"
              y="53.55"
              width="2.76"
              height="49.47"
            />
            <path
              className="cls-9"
              d="M76.21,103H79V92.83c-.92-.51-1.84-1-2.75-1.59Z"
            />
            <rect
              className="cls-3"
              x="51.04"
              y="82.77"
              width="2.76"
              height="23.87"
            />
            <path
              className="cls-4"
              d="M51,100.75v5.89H53.8v-4.5C52.88,101.7,52,101.24,51,100.75Z"
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
            <style>{`.cls-1{fill:#5b6279;}.cls-2{fill:#bdc0c9;}.cls-3{fill:#8c91a1;}.cls-4{fill:#dee0e4;}.cls-5{fill:#cdcfd6;}.cls-6{fill:#fff;}.cls-7{fill:#eeeff1;}.cls-8{fill:#6b7186;}.cls-9{fill:#9da1af;}.cls-10{fill:#adb0bc;}`}</style>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="cls-1" cx="75" cy="75" r="70" />
          </g>
          <g id="gift-gray">
            <path
              className="cls-2"
              d="M100.34,39.88C97.2,34.83,84.82,50.5,77.58,53.63,86.26,51,94.24,40.93,96.66,43.22c2,1.88-1.45,7.28-19.08,10.41C96.72,53.3,103.46,44.89,100.34,39.88Z"
            />
            <path
              className="cls-2"
              d="M58.51,43.22c2.42-2.29,10.4,7.76,19.07,10.41C70.35,50.5,58,34.83,54.82,39.88S58.45,53.3,77.58,53.63C60,50.5,56.52,45.1,58.51,43.22Z"
            />
            <ellipse
              className="cls-3"
              cx="77.58"
              cy="53.55"
              rx="4.27"
              ry="2.59"
            />
            <rect
              className="cls-4"
              x="50.42"
              y="53.55"
              width="54.33"
              height="49.47"
            />
            <path
              className="cls-5"
              d="M104.75,103H50.42V62.33C50.42,82,95.85,103,104.75,103Z"
            />
            <rect
              className="cls-6"
              x="48.41"
              y="53.55"
              width="58.35"
              height="14.78"
            />
            <path
              className="cls-7"
              d="M76.21,68.33H48.41V53.55C48.41,65.27,76.21,68.33,76.21,68.33Z"
            />
            <path
              className="cls-3"
              d="M66,74.66c-1.88-3-9.28,6.35-13.61,8.23,5.18-1.59,10-7.6,11.41-6.23C65,77.79,63,81,52.42,82.89,63.86,82.69,67.89,77.66,66,74.66Z"
            />
            <path
              className="cls-3"
              d="M41,76.66c1.45-1.37,6.23,4.64,11.42,6.23C48.09,81,40.68,71.64,38.8,74.66s2.17,8,13.62,8.23C41.87,81,39.81,77.79,41,76.66Z"
            />
            <ellipse
              className="cls-8"
              cx="52.42"
              cy="82.77"
              rx="2.57"
              ry="1.97"
            />
            <rect
              className="cls-9"
              x="37.81"
              y="82.75"
              width="29.21"
              height="23.89"
            />
            <path
              className="cls-3"
              d="M67,106.64H37.81V87.45C37.81,96.73,62.24,106.64,67,106.64Z"
            />
            <rect
              className="cls-2"
              x="36.54"
              y="82.77"
              width="31.76"
              height="9.9"
            />
            <path
              className="cls-10"
              d="M51,92.62H36.54V82.77C36.54,90.58,51,92.62,51,92.62Z"
            />
            <rect
              className="cls-2"
              x="76.21"
              y="53.43"
              width="2.76"
              height="49.59"
            />
            <path
              className="cls-3"
              d="M76.21,103H79V92.83c-.92-.51-1.84-1-2.75-1.59Z"
            />
            <rect
              className="cls-3"
              x="51.04"
              y="82.62"
              width="2.76"
              height="24.02"
            />
            <path
              className="cls-8"
              d="M51,100.75v5.89H53.8v-4.5C52.88,101.7,52,101.24,51,100.75Z"
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
            <style>{`.cls-1{fill:#10004c;}.cls-2{fill:#9f99b7;}.cls-3{fill:#584d82;}.cls-4{fill:#cfccdb;}.cls-5{fill:#b7b3c9;}.cls-6{fill:#fff;}.cls-7{fill:#e7e6ed;}.cls-8{fill:#281a5e;}.cls-9{fill:#6f6693;}.cls-10{fill:#8780a5;}`}</style>
          </defs>
          <title>circle</title>
          <g id="Backgrounds">
            <circle className="cls-1" cx="75" cy="75" r="70" />
          </g>
          <g id="gift-purple">
            <path
              className="cls-2"
              d="M100.34,39.88C97.2,34.83,84.82,50.5,77.58,53.63,86.26,51,94.24,40.93,96.66,43.22c2,1.88-1.45,7.28-19.08,10.41C96.72,53.3,103.46,44.89,100.34,39.88Z"
            />
            <path
              className="cls-2"
              d="M58.51,43.22c2.42-2.29,10.4,7.76,19.07,10.41C70.35,50.5,58,34.83,54.82,39.88S58.45,53.3,77.58,53.63C60,50.5,56.52,45.1,58.51,43.22Z"
            />
            <ellipse
              className="cls-3"
              cx="77.58"
              cy="53.55"
              rx="4.27"
              ry="2.59"
            />
            <rect
              className="cls-4"
              x="50.42"
              y="53.55"
              width="54.33"
              height="49.47"
            />
            <path
              className="cls-5"
              d="M104.75,103H50.42V62.33C50.42,82,95.85,103,104.75,103Z"
            />
            <rect
              className="cls-6"
              x="48.41"
              y="53.55"
              width="58.35"
              height="14.78"
            />
            <path
              className="cls-7"
              d="M76.21,68.33H48.41V53.55C48.41,65.27,76.21,68.33,76.21,68.33Z"
            />
            <path
              className="cls-3"
              d="M66,74.66c-1.88-3-9.28,6.35-13.61,8.23,5.18-1.59,10-7.6,11.41-6.23C65,77.79,63,81,52.42,82.89,63.86,82.69,67.89,77.66,66,74.66Z"
            />
            <path
              className="cls-3"
              d="M41,76.66c1.45-1.37,6.23,4.64,11.42,6.23C48.09,81,40.68,71.64,38.8,74.66s2.17,8,13.62,8.23C41.87,81,39.81,77.79,41,76.66Z"
            />
            <ellipse
              className="cls-8"
              cx="52.42"
              cy="82.77"
              rx="2.57"
              ry="1.97"
            />
            <rect
              className="cls-9"
              x="37.81"
              y="82.75"
              width="29.21"
              height="23.89"
            />
            <path
              className="cls-3"
              d="M67,106.64H37.81V87.45C37.81,96.73,62.24,106.64,67,106.64Z"
            />
            <rect
              className="cls-2"
              x="36.54"
              y="82.77"
              width="31.76"
              height="9.9"
            />
            <path
              className="cls-10"
              d="M51,92.62H36.54V82.77C36.54,90.58,51,92.62,51,92.62Z"
            />
            <rect
              className="cls-2"
              x="76.21"
              y="53.43"
              width="2.76"
              height="49.59"
            />
            <path
              className="cls-3"
              d="M76.21,103H79V92.83c-.92-.51-1.84-1-2.75-1.59Z"
            />
            <rect
              className="cls-3"
              x="51.04"
              y="82.62"
              width="2.76"
              height="24.02"
            />
            <path
              className="cls-8"
              d="M51,100.75v5.89H53.8v-4.5C52.88,101.7,52,101.24,51,100.75Z"
            />
          </g>
        </svg>
      );
    }
  }
}

GiftCircleIllustration.propTypes = {
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

GiftCircleIllustration.defaultProps = {
  height: '140',
  width: '144',
};

export default GiftCircleIllustration;
