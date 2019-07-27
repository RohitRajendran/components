/** @module GingerBreadCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a ginger bread illustration. */
class GingerBreadCircleIllustration extends PureComponent {
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
          {...elementProps}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 140 140"
        >
          <defs>
            <style>{`.ginger-bread-circle-1{fill:none;}.ginger-bread-circle-2{fill:#fde5cb;}.ginger-bread-circle-3{fill:#f17732;}.ginger-bread-circle-4{fill:#99052e;}.ginger-bread-circle-5{fill:#10004c;}.ginger-bread-circle-6{fill:#feca1e;}.ginger-bread-circle-7{fill:url(#_4-dot);}.ginger-bread-circle-8{fill:#f8f7f4;}.ginger-bread-circle-9{fill:url(#_5-dot);}.ginger-bread-circle-10{fill:#5fcbeb;}.ginger-bread-circle-11{fill:#2870b5;}.ginger-bread-circle-12{fill:url(#_2-dot);}`}</style>
            <pattern
              data-name="4-dot"
              width="4"
              height="4"
              patternTransform="translate(-35 7.85)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="ginger-bread-circle-1" width="4" height="4" />
              <circle
                className="ginger-bread-circle-3"
                cx="3"
                cy="4"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-3"
                cx="1"
                cy="4"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-3"
                cx="4"
                cy="2"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-3"
                cx="2"
                cy="2"
                r="0.35"
              />
              <circle className="ginger-bread-circle-3" cy="2" r="0.35" />
              <circle className="ginger-bread-circle-3" cx="3" r="0.35" />
              <circle className="ginger-bread-circle-3" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="5-dot"
              width="4"
              height="4"
              patternTransform="translate(-40 3.85)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="ginger-bread-circle-1" width="4" height="4" />
              <circle
                className="ginger-bread-circle-4"
                cx="3"
                cy="4"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-4"
                cx="1"
                cy="4"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-4"
                cx="4"
                cy="2"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-4"
                cx="2"
                cy="2"
                r="0.35"
              />
              <circle className="ginger-bread-circle-4" cy="2" r="0.35" />
              <circle className="ginger-bread-circle-4" cx="3" r="0.35" />
              <circle className="ginger-bread-circle-4" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="2-dot"
              width="4"
              height="4"
              patternTransform="translate(-35.58 6.03)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="ginger-bread-circle-1" width="4" height="4" />
              <circle
                className="ginger-bread-circle-2"
                cx="3"
                cy="4"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-2"
                cx="1"
                cy="4"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-2"
                cx="4"
                cy="2"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-2"
                cx="2"
                cy="2"
                r="0.35"
              />
              <circle className="ginger-bread-circle-2" cy="2" r="0.35" />
              <circle className="ginger-bread-circle-2" cx="3" r="0.35" />
              <circle className="ginger-bread-circle-2" cx="1" r="0.35" />
            </pattern>
          </defs>

          <g>
            <circle className="ginger-bread-circle-5" cx="70" cy="70" r="70" />
            <circle className="ginger-bread-circle-5" cx="70" cy="70" r="70" />
          </g>
          <g>
            <path
              className="ginger-bread-circle-6"
              d="M73.7,58.66l-13.29,0A13.29,13.29,0,1,0,43.08,65l-10.2,8.48A9.15,9.15,0,1,0,44.59,87.52l.65-.54-2.11,11.9a9.15,9.15,0,1,0,18,3.19l1.71-9.66,7.52,6.32a9.18,9.18,0,0,0,12.89-1.12h0a9.19,9.19,0,0,0-1.12-12.9L72.92,77h.83a9.15,9.15,0,1,0,0-18.3Z"
            />
            <path
              className="ginger-bread-circle-6"
              d="M73.47,60.68l-17.11,0a11.15,11.15,0,1,0-9.27,3.17L34.29,74.54a7.4,7.4,0,0,0-1,10.4h0a7.39,7.39,0,0,0,10.38,1l4.53-3.76-3,16.71A7.11,7.11,0,0,0,51,107.06h0a7.11,7.11,0,0,0,8.21-5.74l2.29-12.93,9.68,8.19A7.19,7.19,0,0,0,81.35,96h0a7.23,7.23,0,0,0-1.16-10.11L68.27,75.83a7.73,7.73,0,0,0-1.07-.76l6.31,0a7.2,7.2,0,0,0,7.17-7.21h0A7.21,7.21,0,0,0,73.47,60.68Z"
            />
            <path
              className="ginger-bread-circle-7"
              d="M73.47,60.68l-17.11,0a11.15,11.15,0,1,0-9.27,3.17L34.29,74.54a7.4,7.4,0,0,0-1,10.4h0a7.39,7.39,0,0,0,10.38,1l4.53-3.76-3,16.71A7.11,7.11,0,0,0,51,107.06h0a7.11,7.11,0,0,0,8.21-5.74l2.29-12.93,9.68,8.19A7.19,7.19,0,0,0,81.35,96h0a7.23,7.23,0,0,0-1.16-10.11L68.27,75.83a7.73,7.73,0,0,0-1.07-.76l6.31,0a7.2,7.2,0,0,0,7.17-7.21h0A7.21,7.21,0,0,0,73.47,60.68Z"
            />
            <path
              className="ginger-bread-circle-3"
              d="M39.2,68.2l-6.32,5.25a11.73,11.73,0,0,0-.88.84A9.15,9.15,0,0,0,44.59,87.52l.65-.54-2.11,11.9a9.15,9.15,0,1,0,18,3.19l1.71-9.66,7.52,6.32a9.18,9.18,0,0,0,12.89-1.12h0a9.21,9.21,0,0,0,.86-10.56C53.77,92.19,39.2,68.2,39.2,68.2Z"
            />
            <path
              className="ginger-bread-circle-8"
              d="M54.89,107.38a7.76,7.76,0,0,1-10.27-8.65l2.64-14.89-3.1,2.58A8.06,8.06,0,0,1,33.85,74l11.7-9.73a11.83,11.83,0,1,1,12.31-4.24l15.61,0a7.87,7.87,0,0,1,0,15.73H69.23l11.4,9.66a7.9,7.9,0,0,1,1.24,11.07,7.37,7.37,0,0,1-5.08,2.59,8.34,8.34,0,0,1-6-2L62,89.67,59.9,101.44A7.75,7.75,0,0,1,54.89,107.38ZM48,81.5a.64.64,0,0,1,.57,0,.67.67,0,0,1,.33.7L46,99a6.4,6.4,0,1,0,12.6,2.23l2.29-12.93a.69.69,0,0,1,.44-.52h0a.68.68,0,0,1,.67.12l9.68,8.19a6.9,6.9,0,0,0,5,1.64,5.94,5.94,0,0,0,4.15-2.11,6.53,6.53,0,0,0-1.08-9.15L67.83,76.35a6.83,6.83,0,0,0-1-.7.67.67,0,0,1-.31-.76.68.68,0,0,1,.65-.5l6.32,0a6.51,6.51,0,0,0,0-13h0l-17.12,0a.68.68,0,0,1-.48-1.16,10.47,10.47,0,1,0-8.7,3,.7.7,0,0,1,.57.49.68.68,0,0,1-.22.71L34.72,75.07a6.7,6.7,0,1,0,8.57,10.3l4.52-3.76A.61.61,0,0,1,48,81.5Z"
            />
            <circle
              className="ginger-bread-circle-8"
              cx="43.51"
              cy="51.58"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-8"
              cx="56.19"
              cy="73.94"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-8"
              cx="53.9"
              cy="67.64"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-8"
              cx="58.48"
              cy="80.24"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-8"
              cx="51.56"
              cy="48.65"
              r="1.62"
            />
            <path
              className="ginger-bread-circle-8"
              d="M50.63,58.87a5.74,5.74,0,0,1-6.81-2.34A.67.67,0,0,1,44,55.6a.66.66,0,0,1,.93.21,4.37,4.37,0,0,0,8-3,.68.68,0,0,1,1.35-.2A5.73,5.73,0,0,1,50.63,58.87Z"
            />
            <path
              className="ginger-bread-circle-3"
              d="M107.26,61.56,97,53.14A13.29,13.29,0,1,0,79.62,47L66.36,47a9.15,9.15,0,1,0,.08,18.3h.85l-9.2,7.85A9.15,9.15,0,1,0,70,87.09l7.47-6.37,1.78,9.65A9.17,9.17,0,0,0,89.88,97.7h0A9.18,9.18,0,0,0,97.22,87L95,75.19l.64.53a9.15,9.15,0,0,0,11.59-14.16Z"
            />
            <path
              className="ginger-bread-circle-9"
              d="M105.8,63,92.56,52.13a11.15,11.15,0,1,0-9.16-3.45l-16.66.08a7.39,7.39,0,0,0-7.34,7.41h0a7.4,7.4,0,0,0,7.41,7.34l5.88,0-12.91,11a7.1,7.1,0,0,0-.79,10h0a7.1,7.1,0,0,0,10,.79l10-8.52,2.26,12.48a7.21,7.21,0,0,0,8.18,6h0a7.23,7.23,0,0,0,5.54-8.54L92.16,71.36a7.68,7.68,0,0,0-.35-1.27l4.89,4a7.21,7.21,0,0,0,10.11-1h0A7.21,7.21,0,0,0,105.8,63Z"
            />
            <path
              className="ginger-bread-circle-4"
              d="M74.57,47l-8.21,0a8.15,8.15,0,0,0-1.22.09,9.15,9.15,0,0,0,1.3,18.21h.85l-9.2,7.85A9.15,9.15,0,1,0,70,87.09l7.47-6.37,1.78,9.65A9.17,9.17,0,0,0,89.88,97.7h0a9.19,9.19,0,0,0,7.38-7.59C70.56,74.76,74.57,47,74.57,47Z"
            />
            <path
              className="ginger-bread-circle-8"
              d="M61.77,87.2A7.77,7.77,0,0,1,59.34,74l11.5-9.81-4,0a8.05,8.05,0,0,1-5.75-13.73,8,8,0,0,1,5.68-2.39L82,48a11.83,11.83,0,1,1,12.19,4.55l12.08,9.89h0a7.85,7.85,0,0,1-4.2,13.9,7.78,7.78,0,0,1-5.76-1.73L93,71.9l2.66,14.7a7.9,7.9,0,0,1-6.08,9.34A7.45,7.45,0,0,1,84,94.71a8.39,8.39,0,0,1-3.41-5.35L78.5,78,69.41,85.8A7.76,7.76,0,0,1,61.77,87.2ZM72.92,62.85a.69.69,0,0,1,.41.41.67.67,0,0,1-.2.75L60.22,75a6.42,6.42,0,0,0-.72,9,6.41,6.41,0,0,0,9,.72l10-8.53a.7.7,0,0,1,.67-.12h0a.67.67,0,0,1,.44.52l2.26,12.48a7,7,0,0,0,2.84,4.47,6.05,6.05,0,0,0,4.55,1,6.54,6.54,0,0,0,5-7.75L91.49,71.48a6.73,6.73,0,0,0-.32-1.16.68.68,0,0,1,1.07-.76l4.89,4a6.51,6.51,0,0,0,8.24-10.07L92.13,52.66a.68.68,0,0,1,.37-1.21,10.46,10.46,0,1,0-8.61-3.23A.66.66,0,0,1,84,49a.67.67,0,0,1-.62.41l-16.65.08a6.71,6.71,0,0,0-6.67,6.73,6.71,6.71,0,0,0,6.73,6.67l5.88,0A.85.85,0,0,1,72.92,62.85Z"
            />
            <path
              className="ginger-bread-circle-1"
              d="M94.38,88.32a7.28,7.28,0,0,0-.11-1.47L91.49,71.48a6.73,6.73,0,0,0-.32-1.16.68.68,0,0,1,1.07-.76l4.89,4a6.51,6.51,0,0,0,8.24-10.07L92.13,52.66a.68.68,0,0,1,.37-1.21,10.46,10.46,0,1,0-8.61-3.23A.66.66,0,0,1,84,49a.67.67,0,0,1-.62.41l-9,0C74.13,56.15,75.21,75.58,94.38,88.32Z"
            />
            <circle
              className="ginger-bread-circle-8"
              cx="88.47"
              cy="36.9"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-8"
              cx="84.03"
              cy="62.22"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-10"
              cx="86.27"
              cy="55.9"
              r="1.62"
            />
            <path
              className="ginger-bread-circle-11"
              d="M87.05,57.32a1.6,1.6,0,0,1-1.32.11,1.62,1.62,0,0,1-1-2.07,1.73,1.73,0,0,1,.33-.56A2.64,2.64,0,0,0,87.05,57.32Z"
            />
            <path
              className="ginger-bread-circle-6"
              d="M84.8,63.64a1.62,1.62,0,0,1-2.31-2,1.62,1.62,0,0,1,.33-.55A2.65,2.65,0,0,0,84.8,63.64Z"
            />
            <circle
              className="ginger-bread-circle-10"
              cx="81.79"
              cy="68.53"
              r="1.62"
            />
            <path
              className="ginger-bread-circle-11"
              d="M82.57,70a1.63,1.63,0,0,1-1.32.1,1.62,1.62,0,0,1-1-2.07,1.68,1.68,0,0,1,.33-.55A2.65,2.65,0,0,0,82.57,70Z"
            />
            <circle
              className="ginger-bread-circle-8"
              cx="96.54"
              cy="39.76"
              r="1.62"
            />
            <path
              className="ginger-bread-circle-8"
              d="M89.32,47.06a5.75,5.75,0,0,1-3.76-6.14.68.68,0,1,1,1.34.18A4.37,4.37,0,0,0,95,43.9a.68.68,0,0,1,1.17.7A5.76,5.76,0,0,1,89.32,47.06Z"
            />
            <path
              className="ginger-bread-circle-6"
              d="M89.32,47.06a5.75,5.75,0,0,1-3.76-6.14c.23,4.51,6.43,8.51,10.59,3.68A5.76,5.76,0,0,1,89.32,47.06Z"
            />
            <path
              className="ginger-bread-circle-10"
              d="M87.29,50.93l-5.46.93a.91.91,0,0,1-1-1.22l1.93-5.2a.91.91,0,0,1,1.56-.26l3.53,4.27A.91.91,0,0,1,87.29,50.93Z"
            />
            <path
              className="ginger-bread-circle-11"
              d="M85.4,51.25l-3.57.61a.91.91,0,0,1-1-1.22L82.18,47S82.24,51,85.4,51.25Z"
            />
            <path
              className="ginger-bread-circle-10"
              d="M88.29,51.3l3.53,4.27a.91.91,0,0,0,1.56-.26l1.93-5.19a.91.91,0,0,0-1-1.22l-5.46.92A.91.91,0,0,0,88.29,51.3Z"
            />
            <path
              className="ginger-bread-circle-11"
              d="M88.29,51.3l3.53,4.27a.91.91,0,0,0,1.56-.26L94,53.78c-1.3,1.29-4-1.94-4.5-4C88.66,49.43,87.84,50.76,88.29,51.3Z"
            />
            <circle
              className="ginger-bread-circle-8"
              cx="88.14"
              cy="50.4"
              r="2.34"
            />
            <rect
              className="ginger-bread-circle-8"
              x="80.46"
              y="23.51"
              width="21.05"
              height="9.14"
              rx="1.48"
              transform="translate(-2.03 7.7) rotate(-4.79)"
            />
            <path
              className="ginger-bread-circle-12"
              d="M100.38,31.87l-18,1.51A1.46,1.46,0,0,1,80.76,32l-.52-6.17a1.48,1.48,0,0,1,1.35-1.59l18-1.51a1.48,1.48,0,0,1,1.59,1.34l.52,6.17A1.48,1.48,0,0,1,100.38,31.87Z"
            />
            <path
              className="ginger-bread-circle-6"
              d="M100.38,31.87l-18,1.51A1.46,1.46,0,0,1,80.76,32l-.52-6.17a1.46,1.46,0,0,1,.34-1.07c6.57,4,21,3.59,21,3.59l.16,1.89A1.48,1.48,0,0,1,100.38,31.87Z"
            />
            <rect
              className="ginger-bread-circle-10"
              x="77.03"
              y="30.06"
              width="28.51"
              height="3.31"
              rx="0.99"
              transform="translate(-2.33 7.74) rotate(-4.79)"
            />
            <path
              className="ginger-bread-circle-11"
              d="M99,32.73,78.2,34.48a1,1,0,0,1-1.06-.91L77,32.24a1,1,0,0,1,.24-.72C80.76,34.26,99.36,32.7,99,32.73Z"
            />
            <rect
              className="ginger-bread-circle-2"
              x="80.57"
              y="28.73"
              width="21.05"
              height="1.34"
              transform="translate(-2.14 7.72) rotate(-4.79)"
            />
            <path
              className="ginger-bread-circle-6"
              d="M89.25,52.47a2.34,2.34,0,0,1-3.33-2.84,2.22,2.22,0,0,1,.48-.8A3.81,3.81,0,0,0,89.25,52.47Z"
            />
            <path
              className="ginger-bread-circle-6"
              d="M89.24,38.32a1.62,1.62,0,0,1-2.3-2,1.47,1.47,0,0,1,.33-.55A2.64,2.64,0,0,0,89.24,38.32Z"
            />
            <path
              className="ginger-bread-circle-6"
              d="M97.32,41.19a1.63,1.63,0,0,1-2.31-2,1.84,1.84,0,0,1,.33-.56A2.66,2.66,0,0,0,97.32,41.19Z"
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
            <style>{`.ginger-bread-circle-1{fill:none;}.ginger-bread-circle-2{fill:#f17732;}.ginger-bread-circle-3{fill:#99052e;}.ginger-bread-circle-4{fill:#10004c;}.ginger-bread-circle-5{fill:#feca1e;}.ginger-bread-circle-6{fill:url(#_4-dot);}.ginger-bread-circle-7{fill:#f8f7f4;}.ginger-bread-circle-8{fill:url(#_5-dot);}`}</style>
            <pattern
              data-name="4-dot"
              width="4"
              height="4"
              patternTransform="translate(-35 6.63)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="ginger-bread-circle-1" width="4" height="4" />
              <circle
                className="ginger-bread-circle-2"
                cx="3"
                cy="4"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-2"
                cx="1"
                cy="4"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-2"
                cx="4"
                cy="2"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-2"
                cx="2"
                cy="2"
                r="0.35"
              />
              <circle className="ginger-bread-circle-2" cy="2" r="0.35" />
              <circle className="ginger-bread-circle-2" cx="3" r="0.35" />
              <circle className="ginger-bread-circle-2" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="5-dot"
              width="4"
              height="4"
              patternTransform="translate(-40 2.63)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="ginger-bread-circle-1" width="4" height="4" />
              <circle
                className="ginger-bread-circle-3"
                cx="3"
                cy="4"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-3"
                cx="1"
                cy="4"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-3"
                cx="4"
                cy="2"
                r="0.35"
              />
              <circle
                className="ginger-bread-circle-3"
                cx="2"
                cy="2"
                r="0.35"
              />
              <circle className="ginger-bread-circle-3" cy="2" r="0.35" />
              <circle className="ginger-bread-circle-3" cx="3" r="0.35" />
              <circle className="ginger-bread-circle-3" cx="1" r="0.35" />
            </pattern>
          </defs>

          <g>
            <circle className="ginger-bread-circle-4" cx="70" cy="70" r="70" />
            <circle className="ginger-bread-circle-4" cx="70" cy="70" r="70" />
          </g>
          <g>
            <path
              className="ginger-bread-circle-5"
              d="M73.7,58.66l-13.29,0A13.29,13.29,0,1,0,43.08,65l-10.2,8.48A9.15,9.15,0,1,0,44.59,87.52l.65-.54-2.11,11.9a9.15,9.15,0,1,0,18,3.19l1.71-9.66,7.52,6.32a9.18,9.18,0,0,0,12.89-1.12h0a9.19,9.19,0,0,0-1.12-12.9L72.92,77h.83a9.15,9.15,0,1,0,0-18.3Z"
            />
            <path
              className="ginger-bread-circle-5"
              d="M73.47,60.68l-17.11,0a11.15,11.15,0,1,0-9.27,3.17L34.29,74.54a7.4,7.4,0,0,0-1,10.4h0a7.39,7.39,0,0,0,10.38,1l4.53-3.76-3,16.71A7.11,7.11,0,0,0,51,107.06h0a7.11,7.11,0,0,0,8.21-5.74l2.29-12.93,9.68,8.19A7.19,7.19,0,0,0,81.35,96h0a7.23,7.23,0,0,0-1.16-10.11L68.27,75.83a7.73,7.73,0,0,0-1.07-.76l6.31,0a7.2,7.2,0,0,0,7.17-7.21h0A7.21,7.21,0,0,0,73.47,60.68Z"
            />
            <path
              className="ginger-bread-circle-6"
              d="M73.47,60.68l-17.11,0a11.15,11.15,0,1,0-9.27,3.17L34.29,74.54a7.4,7.4,0,0,0-1,10.4h0a7.39,7.39,0,0,0,10.38,1l4.53-3.76-3,16.71A7.11,7.11,0,0,0,51,107.06h0a7.11,7.11,0,0,0,8.21-5.74l2.29-12.93,9.68,8.19A7.19,7.19,0,0,0,81.35,96h0a7.23,7.23,0,0,0-1.16-10.11L68.27,75.83a7.73,7.73,0,0,0-1.07-.76l6.31,0a7.2,7.2,0,0,0,7.17-7.21h0A7.21,7.21,0,0,0,73.47,60.68Z"
            />
            <path
              className="ginger-bread-circle-2"
              d="M39.2,68.2l-6.32,5.25a11.73,11.73,0,0,0-.88.84A9.15,9.15,0,0,0,44.59,87.52l.65-.54-2.11,11.9a9.15,9.15,0,1,0,18,3.19l1.71-9.66,7.52,6.32a9.18,9.18,0,0,0,12.89-1.12h0a9.21,9.21,0,0,0,.86-10.56C53.77,92.19,39.2,68.2,39.2,68.2Z"
            />
            <path
              className="ginger-bread-circle-7"
              d="M54.89,107.38a7.76,7.76,0,0,1-10.27-8.65l2.64-14.89-3.1,2.58A8.06,8.06,0,0,1,33.85,74l11.7-9.73a11.83,11.83,0,1,1,12.31-4.24l15.61,0a7.87,7.87,0,0,1,0,15.73H69.23l11.4,9.66a7.9,7.9,0,0,1,1.24,11.07,7.37,7.37,0,0,1-5.08,2.59,8.34,8.34,0,0,1-6-2L62,89.67,59.9,101.44A7.75,7.75,0,0,1,54.89,107.38ZM48,81.5a.64.64,0,0,1,.57,0,.67.67,0,0,1,.33.7L46,99a6.4,6.4,0,1,0,12.6,2.23l2.29-12.93a.69.69,0,0,1,.44-.52h0a.68.68,0,0,1,.67.12l9.68,8.19a6.9,6.9,0,0,0,5,1.64,5.94,5.94,0,0,0,4.15-2.11,6.53,6.53,0,0,0-1.08-9.15L67.83,76.35a6.83,6.83,0,0,0-1-.7.67.67,0,0,1-.31-.76.68.68,0,0,1,.65-.5l6.32,0a6.51,6.51,0,0,0,0-13h0l-17.12,0a.68.68,0,0,1-.48-1.16,10.47,10.47,0,1,0-8.7,3,.7.7,0,0,1,.57.49.68.68,0,0,1-.22.71L34.72,75.07a6.7,6.7,0,1,0,8.57,10.3l4.52-3.76A.61.61,0,0,1,48,81.5Z"
            />
            <circle
              className="ginger-bread-circle-7"
              cx="43.51"
              cy="51.58"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-7"
              cx="56.19"
              cy="73.94"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-7"
              cx="53.9"
              cy="67.64"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-7"
              cx="58.48"
              cy="80.24"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-7"
              cx="51.56"
              cy="48.65"
              r="1.62"
            />
            <path
              className="ginger-bread-circle-7"
              d="M50.63,58.87a5.74,5.74,0,0,1-6.81-2.34A.67.67,0,0,1,44,55.6a.66.66,0,0,1,.93.21,4.37,4.37,0,0,0,8-3,.68.68,0,0,1,1.35-.2A5.73,5.73,0,0,1,50.63,58.87Z"
            />
            <path
              className="ginger-bread-circle-2"
              d="M107.26,61.56,97,53.14A13.29,13.29,0,1,0,79.62,47L66.36,47a9.15,9.15,0,1,0,.08,18.3h.85l-9.2,7.85A9.15,9.15,0,1,0,70,87.09l7.47-6.37,1.78,9.65A9.17,9.17,0,0,0,89.88,97.7h0A9.18,9.18,0,0,0,97.22,87L95,75.19l.64.53a9.15,9.15,0,0,0,11.59-14.16Z"
            />
            <path
              className="ginger-bread-circle-8"
              d="M105.8,63,92.56,52.13a11.15,11.15,0,1,0-9.16-3.45l-16.66.08a7.39,7.39,0,0,0-7.34,7.41h0a7.4,7.4,0,0,0,7.41,7.34l5.88,0-12.91,11a7.1,7.1,0,0,0-.79,10h0a7.1,7.1,0,0,0,10,.79l10-8.52,2.26,12.48a7.21,7.21,0,0,0,8.18,6h0a7.23,7.23,0,0,0,5.54-8.54L92.16,71.36a7.68,7.68,0,0,0-.35-1.27l4.89,4a7.21,7.21,0,0,0,10.11-1h0A7.21,7.21,0,0,0,105.8,63Z"
            />
            <path
              className="ginger-bread-circle-3"
              d="M74.57,47l-8.21,0a8.15,8.15,0,0,0-1.22.09,9.15,9.15,0,0,0,1.3,18.21h.85l-9.2,7.85A9.15,9.15,0,1,0,70,87.09l7.47-6.37,1.78,9.65A9.17,9.17,0,0,0,89.88,97.7h0a9.19,9.19,0,0,0,7.38-7.59C70.56,74.76,74.57,47,74.57,47Z"
            />
            <path
              className="ginger-bread-circle-7"
              d="M61.77,87.2A7.77,7.77,0,0,1,59.34,74l11.5-9.81-4,0a8.05,8.05,0,0,1-5.75-13.73,8,8,0,0,1,5.68-2.39L82,48a11.83,11.83,0,1,1,12.19,4.55l12.08,9.89h0a7.85,7.85,0,0,1-4.2,13.9,7.78,7.78,0,0,1-5.76-1.73L93,71.9l2.66,14.7a7.9,7.9,0,0,1-6.08,9.34A7.45,7.45,0,0,1,84,94.71a8.39,8.39,0,0,1-3.41-5.35L78.5,78,69.41,85.8A7.76,7.76,0,0,1,61.77,87.2ZM72.92,62.85a.69.69,0,0,1,.41.41.67.67,0,0,1-.2.75L60.22,75a6.42,6.42,0,0,0-.72,9,6.41,6.41,0,0,0,9,.72l10-8.53a.7.7,0,0,1,.67-.12h0a.67.67,0,0,1,.44.52l2.26,12.48a7,7,0,0,0,2.84,4.47,6.05,6.05,0,0,0,4.55,1,6.54,6.54,0,0,0,5-7.75L91.49,71.48a6.73,6.73,0,0,0-.32-1.16.68.68,0,0,1,1.07-.76l4.89,4a6.51,6.51,0,0,0,8.24-10.07L92.13,52.66a.68.68,0,0,1,.37-1.21,10.46,10.46,0,1,0-8.61-3.23A.66.66,0,0,1,84,49a.67.67,0,0,1-.62.41l-16.65.08a6.71,6.71,0,0,0-6.67,6.73,6.71,6.71,0,0,0,6.73,6.67l5.88,0A.85.85,0,0,1,72.92,62.85Z"
            />
            <path
              className="ginger-bread-circle-1"
              d="M94.38,88.32a7.28,7.28,0,0,0-.11-1.47L91.49,71.48a6.73,6.73,0,0,0-.32-1.16.68.68,0,0,1,1.07-.76l4.89,4a6.51,6.51,0,0,0,8.24-10.07L92.13,52.66a.68.68,0,0,1,.37-1.21,10.46,10.46,0,1,0-8.61-3.23A.66.66,0,0,1,84,49a.67.67,0,0,1-.62.41l-9,0C74.13,56.15,75.21,75.58,94.38,88.32Z"
            />
            <circle
              className="ginger-bread-circle-7"
              cx="88.47"
              cy="36.9"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-7"
              cx="84.03"
              cy="62.22"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-7"
              cx="86.27"
              cy="55.9"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-7"
              cx="81.79"
              cy="68.53"
              r="1.62"
            />
            <circle
              className="ginger-bread-circle-7"
              cx="96.54"
              cy="39.76"
              r="1.62"
            />
            <path
              className="ginger-bread-circle-7"
              d="M89.32,47.06a5.75,5.75,0,0,1-3.76-6.14.68.68,0,1,1,1.34.18A4.37,4.37,0,0,0,95,43.9a.68.68,0,0,1,1.17.7A5.76,5.76,0,0,1,89.32,47.06Z"
            />
          </g>
        </svg>
      );
    }
  }
}

GingerBreadCircleIllustration.propTypes = {
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

GingerBreadCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
};

export default GingerBreadCircleIllustration;
