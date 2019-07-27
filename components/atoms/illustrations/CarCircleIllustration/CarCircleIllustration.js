/** @module CarCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/** Renders a car illustration. */
class CarCircleIllustration extends PureComponent {
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
            <style>{`.car-cls-1{fill:none;}.car-cls-2{fill:#f17732;}.car-cls-3{fill:#99052e;}.car-cls-4{fill:#10004c;}.car-cls-5{fill:#9da1af;}.car-cls-6{fill:#feca1e;}.car-cls-7{fill:url(#_4-dot);}.car-cls-8{fill:url(#_5-dot);}.car-cls-9{fill:#fde5cb;}.car-cls-10{fill:#7c8194;}.car-cls-11{fill:#2870b5;}.car-cls-12{fill:#6b7186;}.car-cls-13{fill:#f8f7f4;}.car-cls-14{fill:#5fcbeb;}`}</style>
            <pattern
              data-name="4-dot"
              width="4"
              height="4"
              patternTransform="translate(0 17.71)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="car-cls-1" width="4" height="4" />
              <circle className="car-cls-2" cx="3" cy="4" r="0.35" />
              <circle className="car-cls-2" cx="1" cy="4" r="0.35" />
              <circle className="car-cls-2" cx="4" cy="2" r="0.35" />
              <circle className="car-cls-2" cx="2" cy="2" r="0.35" />
              <circle className="car-cls-2" cy="2" r="0.35" />
              <circle className="car-cls-2" cx="3" r="0.35" />
              <circle className="car-cls-2" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="5-dot"
              width="4"
              height="4"
              patternTransform="translate(0 17.71)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="car-cls-1" width="4" height="4" />
              <circle className="car-cls-3" cx="3" cy="4" r="0.35" />
              <circle className="car-cls-3" cx="1" cy="4" r="0.35" />
              <circle className="car-cls-3" cx="4" cy="2" r="0.35" />
              <circle className="car-cls-3" cx="2" cy="2" r="0.35" />
              <circle className="car-cls-3" cy="2" r="0.35" />
              <circle className="car-cls-3" cx="3" r="0.35" />
              <circle className="car-cls-3" cx="1" r="0.35" />
            </pattern>
          </defs>

          <g>
            <circle className="car-cls-4" cx="70" cy="70" r="70" />
          </g>
          <g>
            <path
              className="car-cls-3"
              d="M31.28,85.46h9.59A6.18,6.18,0,0,1,47,91.64v3a4.26,4.26,0,0,1-4.26,4.26H29.36A4.26,4.26,0,0,1,25.1,94.6v-3a6.18,6.18,0,0,1,6.18-6.18Z"
            />
            <path
              className="car-cls-3"
              d="M98.87,85.32h9.59a6.18,6.18,0,0,1,6.18,6.18v3a4.26,4.26,0,0,1-4.26,4.26H97a4.26,4.26,0,0,1-4.26-4.26v-3A6.18,6.18,0,0,1,98.87,85.32Z"
            />
            <path
              className="car-cls-5"
              d="M82.56,36.82H57.29c-7.06,0-17.45,12.07-17.45,19.13S50.23,75.08,57.29,75.08H82.56c7.06,0,17.6-12.07,17.6-19.13S89.62,36.82,82.56,36.82Z"
            />
            <path
              className="car-cls-6"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.46,66.23,39.77,56l60.46-.07C106.15,66.16,117,64.41,117,74.76V88.13A6.11,6.11,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-7"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.46,66.23,39.77,56l60.46-.07C106.15,66.16,117,64.41,117,74.76V88.13A6.11,6.11,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-2"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.74,65.9,39.77,56,42.82,84.65,112.2,87,117,88.13A6.09,6.09,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-8"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.74,65.9,39.77,56,42.82,84.65,112.2,87,117,88.13A6.09,6.09,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-9"
              d="M48.89,62.72H91.11c1.74,0,4.93,1,4.54,3.16,2.35-2.61,4.51-6.27,4.51-9.93,0-7.06-10.54-19.13-17.6-19.13H57.29c-7.06,0-17.45,12-17.45,19.06,0,3.73,2.16,7.39,4.49,10C44,64,47.14,62.72,48.89,62.72Z"
            />
            <path
              className="car-cls-10"
              d="M42,56c0-7.06,8.23-19.13,15.29-19.13H82.56C89.62,36.82,98,48.89,98,56Z"
            />
            <path
              className="car-cls-11"
              d="M42,56c0-7.06,8.23-19.13,15.29-19.13H82.56C89.62,36.82,98,48.89,98,56Z"
            />
            <rect
              className="car-cls-6"
              x="29.67"
              y="48.05"
              width="10.17"
              height="6.05"
              rx="3.03"
            />
            <rect
              className="car-cls-6"
              x="100.16"
              y="48.05"
              width="9.76"
              height="6.05"
              rx="3.03"
            />
            <ellipse
              className="car-cls-12"
              cx="70"
              cy="81.52"
              rx="26.04"
              ry="7.7"
            />
            <ellipse
              className="car-cls-4"
              cx="70"
              cy="81.52"
              rx="26.04"
              ry="7.7"
            />
            <path
              className="car-cls-3"
              d="M41.58,94.19,28,91.65c-1.77-.33-3-2.42-2.74-4.64l.1-.86,13.63,2.53c1.77.33,3,2.42,2.74,4.64Z"
            />
            <path
              className="car-cls-6"
              d="M31.74,128.6c3.32-18.33,9.46-52.4,9.34-52.72-.48-1.35-3.32-3.18-13.8-5.42-1.07-.23-2,.17-2.05,1.19L.92,58.69A70,70,0,0,0,31.74,128.6Z"
            />
            <path
              className="car-cls-3"
              d="M98.14,94.19l13.62-2.54c1.78-.33,3-2.42,2.75-4.64l-.11-.86-13.62,2.53C99,89,97.77,91.1,98,93.32Z"
            />
            <path
              className="car-cls-6"
              d="M139.76,75.51v-11c-.15-2-.38-4-.7-5.91L114.54,71.65c-.09-1-1-1.42-2.06-1.19C102,72.7,99.16,74.53,98.68,75.88c-.11.33,6.06,34.55,9.37,52.86A69.89,69.89,0,0,0,139.76,75.51Z"
            />
            <path
              className="car-cls-13"
              d="M38.36,77.3l-8.47-.22s-.38.79-1,.87a3.43,3.43,0,0,1-3.8-3.44l.13-2.86c.09-1,1-1.42,2.05-1.19,10.48,2.24,13.32,4.07,13.8,5.42C41.4,76.78,40.37,77.3,38.36,77.3Z"
            />
            <path
              className="car-cls-13"
              d="M101.46,77.3l8.47-.22s.38.79,1,.87a3.43,3.43,0,0,0,3.8-3.44l-.13-2.86c-.09-1-1-1.42-2-1.19-10.48,2.24-13.32,4.07-13.8,5.42C98.42,76.78,99.45,77.3,101.46,77.3Z"
            />
            <path
              className="car-cls-3"
              d="M92.23,94.69,70,95.27l-22.23-.58c-2.19,0-3-3.19-3-3.19L70,92.65,95.2,91.5S94.42,94.69,92.23,94.69Z"
            />
            <path
              className="car-cls-14"
              d="M93.41,78.14C89.19,75.58,80.29,73.81,70,73.81s-19.19,1.77-23.41,4.33H65.51L70,84.65l4.49-6.51Z"
            />
            <path
              className="car-cls-11"
              d="M92.06,77.42C87.45,75.26,79.3,73.81,70,73.81s-17.45,1.45-22.06,3.61H66l4,6,4-6Z"
            />
            <path
              className="car-cls-4"
              d="M64.26,54.3c0-5.65-3.28-10.22-7.33-10.22S49.6,48.65,49.6,54.3A12.82,12.82,0,0,0,49.71,56H64.16A14.92,14.92,0,0,0,64.26,54.3Z"
            />
            <path
              className="car-cls-4"
              d="M90.36,54.3c0-5.65-3.29-10.22-7.34-10.22s-7.33,4.57-7.33,10.22A14.91,14.91,0,0,0,75.8,56H90.25A14.91,14.91,0,0,0,90.36,54.3Z"
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
            <style>{`.car-cls-1{fill:none;}.car-cls-2{fill:#f17732;}.car-cls-3{fill:#99052e;}.car-cls-4{fill:#10004c;}.car-cls-5{fill:#9da1af;}.car-cls-6{fill:#feca1e;}.car-cls-7{fill:url(#_4-dot);}.car-cls-8{fill:url(#_5-dot);}.car-cls-9{fill:#fde5cb;}.car-cls-10{fill:#7c8194;}.car-cls-11{fill:#2870b5;}.car-cls-12{fill:#6b7186;}.car-cls-13{fill:#5fcbeb;}`}</style>
            <pattern
              data-name="4-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="car-cls-1" width="4" height="4" />
              <circle className="car-cls-2" cx="3" cy="4" r="0.35" />
              <circle className="car-cls-2" cx="1" cy="4" r="0.35" />
              <circle className="car-cls-2" cx="4" cy="2" r="0.35" />
              <circle className="car-cls-2" cx="2" cy="2" r="0.35" />
              <circle className="car-cls-2" cy="2" r="0.35" />
              <circle className="car-cls-2" cx="3" r="0.35" />
              <circle className="car-cls-2" cx="1" r="0.35" />
            </pattern>
            <pattern
              data-name="5-dot"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 4 4"
            >
              <rect className="car-cls-1" width="4" height="4" />
              <circle className="car-cls-3" cx="3" cy="4" r="0.35" />
              <circle className="car-cls-3" cx="1" cy="4" r="0.35" />
              <circle className="car-cls-3" cx="4" cy="2" r="0.35" />
              <circle className="car-cls-3" cx="2" cy="2" r="0.35" />
              <circle className="car-cls-3" cy="2" r="0.35" />
              <circle className="car-cls-3" cx="3" r="0.35" />
              <circle className="car-cls-3" cx="1" r="0.35" />
            </pattern>
          </defs>

          <g>
            <circle className="car-cls-4" cx="70" cy="70" r="70" />
          </g>
          <g>
            <path
              className="car-cls-3"
              d="M31.28,85.46h9.59A6.18,6.18,0,0,1,47,91.64v3a4.26,4.26,0,0,1-4.26,4.26H29.36A4.26,4.26,0,0,1,25.1,94.6v-3a6.18,6.18,0,0,1,6.18-6.18Z"
            />
            <path
              className="car-cls-3"
              d="M98.87,85.32h9.59a6.18,6.18,0,0,1,6.18,6.18v3a4.26,4.26,0,0,1-4.26,4.26H97a4.26,4.26,0,0,1-4.26-4.26v-3A6.18,6.18,0,0,1,98.87,85.32Z"
            />
            <path
              className="car-cls-5"
              d="M82.56,36.82H57.29c-7.06,0-17.45,12.07-17.45,19.13S50.23,75.08,57.29,75.08H82.56c7.06,0,17.6-12.07,17.6-19.13S89.62,36.82,82.56,36.82Z"
            />
            <path
              className="car-cls-6"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.46,66.23,39.77,56l60.46-.07C106.15,66.16,117,64.41,117,74.76V88.13A6.11,6.11,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-7"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.46,66.23,39.77,56l60.46-.07C106.15,66.16,117,64.41,117,74.76V88.13A6.11,6.11,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-2"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.74,65.9,39.77,56,42.82,84.65,112.2,87,117,88.13A6.09,6.09,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-8"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.74,65.9,39.77,56,42.82,84.65,112.2,87,117,88.13A6.09,6.09,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-9"
              d="M48.89,62.72H91.11c1.74,0,4.93,1,4.54,3.16,2.35-2.61,4.51-6.27,4.51-9.93,0-7.06-10.54-19.13-17.6-19.13H57.29c-7.06,0-17.45,12-17.45,19.06,0,3.73,2.16,7.39,4.49,10C44,64,47.14,62.72,48.89,62.72Z"
            />
            <path
              className="car-cls-10"
              d="M42,56c0-7.06,8.23-19.13,15.29-19.13H82.56C89.62,36.82,98,48.89,98,56Z"
            />
            <path
              className="car-cls-11"
              d="M42,56c0-7.06,8.23-19.13,15.29-19.13H82.56C89.62,36.82,98,48.89,98,56Z"
            />
            <rect
              className="car-cls-6"
              x="29.67"
              y="48.05"
              width="10.17"
              height="6.05"
              rx="3.03"
            />
            <rect
              className="car-cls-6"
              x="100.16"
              y="48.05"
              width="9.76"
              height="6.05"
              rx="3.03"
            />
            <ellipse
              className="car-cls-12"
              cx="70"
              cy="81.52"
              rx="26.04"
              ry="7.7"
            />
            <ellipse
              className="car-cls-4"
              cx="70"
              cy="81.52"
              rx="26.04"
              ry="7.7"
            />
            <path
              className="car-cls-4"
              d="M38.36,77.3l-8.47-.22s-.38.79-1,.87a3.43,3.43,0,0,1-3.8-3.44l.13-2.86c.09-1,1-1.42,2.05-1.19,10.48,2.24,13.32,4.07,13.8,5.42C41.4,76.78,40.37,77.3,38.36,77.3Z"
            />
            <path
              className="car-cls-4"
              d="M101.46,77.3l8.47-.22s.38.79,1,.87a3.43,3.43,0,0,0,3.8-3.44l-.13-2.86c-.09-1-1-1.42-2-1.19-10.48,2.24-13.32,4.07-13.8,5.42C98.42,76.78,99.45,77.3,101.46,77.3Z"
            />
            <path
              className="car-cls-3"
              d="M92.23,94.69,70,95.27l-22.23-.58c-2.19,0-3-3.19-3-3.19L70,92.65,95.2,91.5S94.42,94.69,92.23,94.69Z"
            />
            <path
              className="car-cls-3"
              d="M41.58,94.19,28,91.65c-1.77-.33-3-2.42-2.74-4.64l.1-.86,13.63,2.53c1.77.33,3,2.42,2.74,4.64Z"
            />
            <path
              className="car-cls-3"
              d="M98.14,94.19l13.62-2.54c1.78-.33,3-2.42,2.75-4.64l-.11-.86-13.62,2.53C99,89,97.77,91.1,98,93.32Z"
            />
            <path
              className="car-cls-13"
              d="M93.41,78.14C89.19,75.58,80.29,73.81,70,73.81s-19.19,1.77-23.41,4.33H65.51L70,84.65l4.49-6.51Z"
            />
            <path
              className="car-cls-11"
              d="M92.06,77.42C87.45,75.26,79.3,73.81,70,73.81s-17.45,1.45-22.06,3.61H66l4,6,4-6Z"
            />
            <path
              className="car-cls-4"
              d="M64.26,54.3c0-5.65-3.28-10.22-7.33-10.22S49.6,48.65,49.6,54.3A12.82,12.82,0,0,0,49.71,56H64.16A14.92,14.92,0,0,0,64.26,54.3Z"
            />
            <path
              className="car-cls-4"
              d="M90.36,54.3c0-5.65-3.29-10.22-7.34-10.22s-7.33,4.57-7.33,10.22A14.91,14.91,0,0,0,75.8,56H90.25A14.91,14.91,0,0,0,90.36,54.3Z"
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
            <style>{`.car-cls-1{fill:#5b6279;}.car-cls-2{fill:#7c8194;}.car-cls-3{fill:#9da1af;}.car-cls-4{fill:#cdcfd6;}.car-cls-5{fill:#bdc0c9;}.car-cls-6{fill:#eeeff1;}.car-cls-7{fill:#8c91a1;}.car-cls-8{fill:#6b7186;}.car-cls-9{fill:#adb0bc;}`}</style>
          </defs>

          <g>
            <circle className="car-cls-1" cx="70" cy="70" r="70" />
          </g>
          <g>
            <path
              className="car-cls-2"
              d="M31.28,85.46h9.59A6.18,6.18,0,0,1,47,91.64v3a4.26,4.26,0,0,1-4.26,4.26H29.36A4.26,4.26,0,0,1,25.1,94.6v-3A6.18,6.18,0,0,1,31.28,85.46Z"
            />
            <path
              className="car-cls-2"
              d="M98.87,85.32h9.59a6.18,6.18,0,0,1,6.18,6.18v3a4.26,4.26,0,0,1-4.26,4.26H97a4.26,4.26,0,0,1-4.26-4.26v-3a6.18,6.18,0,0,1,6.18-6.18Z"
            />
            <path
              className="car-cls-3"
              d="M82.56,36.82H57.29c-7.06,0-17.45,12.07-17.45,19.13S50.23,75.08,57.29,75.08H82.56c7.06,0,17.6-12.07,17.6-19.13S89.62,36.82,82.56,36.82Z"
            />
            <path
              className="car-cls-4"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.46,66.23,39.77,56l60.46-.07C106.15,66.16,117,64.41,117,74.76V88.13A6.11,6.11,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-5"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.74,65.9,39.77,56,42.82,84.65,112.2,87,117,88.13A6.09,6.09,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-6"
              d="M48.89,62.72H91.11c1.74,0,4.93,1,4.54,3.16,2.35-2.61,4.51-6.27,4.51-9.93,0-7.06-10.54-19.13-17.6-19.13H57.29c-7.06,0-17.45,12-17.45,19.06,0,3.73,2.16,7.39,4.49,10C44,64,47.14,62.72,48.89,62.72Z"
            />
            <path
              className="car-cls-2"
              d="M42,56c0-7.06,8.23-19.13,15.29-19.13H82.56C89.62,36.82,98,48.89,98,56Z"
            />
            <path
              className="car-cls-7"
              d="M42,56c0-7.06,8.23-19.13,15.29-19.13H82.56C89.62,36.82,98,48.89,98,56Z"
            />
            <rect
              className="car-cls-4"
              x="29.67"
              y="48.05"
              width="10.17"
              height="6.05"
              rx="3.03"
            />
            <rect
              className="car-cls-4"
              x="100.16"
              y="48.05"
              width="9.76"
              height="6.05"
              rx="3.03"
            />
            <ellipse
              className="car-cls-8"
              cx="70"
              cy="81.52"
              rx="26.04"
              ry="7.7"
            />
            <ellipse
              className="car-cls-1"
              cx="70"
              cy="81.52"
              rx="26.04"
              ry="7.7"
            />
            <path
              className="car-cls-8"
              d="M38.36,77.3l-8.47-.22s-.38.79-1,.87a3.43,3.43,0,0,1-3.8-3.44l.13-2.86c.09-1,1-1.42,2.05-1.19,10.48,2.24,13.32,4.07,13.8,5.42C41.4,76.78,40.37,77.3,38.36,77.3Z"
            />
            <path
              className="car-cls-8"
              d="M101.46,77.3l8.47-.22s.38.79,1,.87a3.43,3.43,0,0,0,3.8-3.44l-.13-2.86c-.09-1-1-1.42-2-1.19-10.48,2.24-13.32,4.07-13.8,5.42C98.42,76.78,99.45,77.3,101.46,77.3Z"
            />
            <path
              className="car-cls-7"
              d="M92.23,94.69,70,95.27l-22.23-.58c-2.19,0-3-3.19-3-3.19L70,92.65,95.2,91.5S94.42,94.69,92.23,94.69Z"
            />
            <path
              className="car-cls-7"
              d="M41.58,94.19,28,91.65c-1.77-.33-3-2.42-2.74-4.64l.1-.86,13.63,2.53c1.77.33,3,2.42,2.74,4.64Z"
            />
            <path
              className="car-cls-7"
              d="M98.14,94.19l13.62-2.54c1.78-.33,3-2.42,2.75-4.64l-.11-.86-13.62,2.53C99,89,97.77,91.1,98,93.32Z"
            />
            <path
              className="car-cls-9"
              d="M93.41,78.14C89.19,75.58,80.29,73.81,70,73.81s-19.19,1.77-23.41,4.33H65.51L70,84.65l4.49-6.51Z"
            />
            <path
              className="car-cls-7"
              d="M92.06,77.42C87.45,75.26,79.3,73.81,70,73.81s-17.45,1.45-22.06,3.61H66l4,6,4-6Z"
            />
            <path
              className="car-cls-1"
              d="M64.26,54.3c0-5.65-3.28-10.22-7.33-10.22S49.6,48.65,49.6,54.3A12.82,12.82,0,0,0,49.71,56H64.16A14.92,14.92,0,0,0,64.26,54.3Z"
            />
            <path
              className="car-cls-1"
              d="M90.36,54.3c0-5.65-3.29-10.22-7.34-10.22s-7.33,4.57-7.33,10.22A14.91,14.91,0,0,0,75.8,56H90.25A14.91,14.91,0,0,0,90.36,54.3Z"
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
            <style>{`.car-cls-1{fill:#10004c;}.car-cls-2{fill:#3f336f;}.car-cls-3{fill:#9da1af;}.car-cls-4{fill:#b7b3c9;}.car-cls-5{fill:#9f99b7;}.car-cls-6{fill:#e7e6ed;}.car-cls-7{fill:#7c8194;}.car-cls-8{fill:#584d82;}.car-cls-9{fill:#6b7186;}.car-cls-10{fill:#281a5e;}.car-cls-11{fill:#adb0bc;}`}</style>
          </defs>

          <g>
            <circle className="car-cls-1" cx="70" cy="70" r="70" />
          </g>
          <g>
            <path
              className="car-cls-2"
              d="M31.28,85.46h9.59A6.18,6.18,0,0,1,47,91.64v3a4.26,4.26,0,0,1-4.26,4.26H29.36A4.26,4.26,0,0,1,25.1,94.6v-3a6.18,6.18,0,0,1,6.18-6.18Z"
            />
            <path
              className="car-cls-2"
              d="M98.87,85.32h9.59a6.18,6.18,0,0,1,6.18,6.18v3a4.26,4.26,0,0,1-4.26,4.26H97a4.26,4.26,0,0,1-4.26-4.26v-3a6.18,6.18,0,0,1,6.18-6.18Z"
            />
            <path
              className="car-cls-3"
              d="M82.56,36.82H57.29c-7.06,0-17.45,12.07-17.45,19.13S50.23,75.08,57.29,75.08H82.56c7.06,0,17.6-12.07,17.6-19.13S89.62,36.82,82.56,36.82Z"
            />
            <path
              className="car-cls-4"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.46,66.23,39.77,56l60.46-.07C106.15,66.16,117,64.41,117,74.76V88.13A6.11,6.11,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-5"
              d="M110.93,94.22,93.3,97l-23.15.58-23-.58-18-2.73A6.11,6.11,0,0,1,23,88.13V74.76C23,64.41,33.74,65.9,39.77,56,42.82,84.65,112.2,87,117,88.13A6.09,6.09,0,0,1,110.93,94.22Z"
            />
            <path
              className="car-cls-6"
              d="M48.89,62.72H91.11c1.74,0,4.93,1,4.54,3.16,2.35-2.61,4.51-6.27,4.51-9.93,0-7.06-10.54-19.13-17.6-19.13H57.29c-7.06,0-17.45,12-17.45,19.06,0,3.73,2.16,7.39,4.49,10C44,64,47.14,62.72,48.89,62.72Z"
            />
            <path
              className="car-cls-7"
              d="M42,56c0-7.06,8.23-19.13,15.29-19.13H82.56C89.62,36.82,98,48.89,98,56Z"
            />
            <path
              className="car-cls-8"
              d="M42,56c0-7.06,8.23-19.13,15.29-19.13H82.56C89.62,36.82,98,48.89,98,56Z"
            />
            <rect
              className="car-cls-4"
              x="29.67"
              y="48.05"
              width="10.17"
              height="6.05"
              rx="3.03"
            />
            <rect
              className="car-cls-4"
              x="100.16"
              y="48.05"
              width="9.76"
              height="6.05"
              rx="3.03"
            />
            <ellipse
              className="car-cls-9"
              cx="70"
              cy="81.52"
              rx="26.04"
              ry="7.7"
            />
            <ellipse
              className="car-cls-1"
              cx="70"
              cy="81.52"
              rx="26.04"
              ry="7.7"
            />
            <path
              className="car-cls-10"
              d="M38.36,77.3l-8.47-.22s-.38.79-1,.87a3.43,3.43,0,0,1-3.8-3.44l.13-2.86c.09-1,1-1.42,2.05-1.19,10.48,2.24,13.32,4.07,13.8,5.42C41.4,76.78,40.37,77.3,38.36,77.3Z"
            />
            <path
              className="car-cls-10"
              d="M101.46,77.3l8.47-.22s.38.79,1,.87a3.43,3.43,0,0,0,3.8-3.44l-.13-2.86c-.09-1-1-1.42-2-1.19-10.48,2.24-13.32,4.07-13.8,5.42C98.42,76.78,99.45,77.3,101.46,77.3Z"
            />
            <path
              className="car-cls-8"
              d="M92.23,94.69,70,95.27l-22.23-.58c-2.19,0-3-3.19-3-3.19L70,92.65,95.2,91.5S94.42,94.69,92.23,94.69Z"
            />
            <path
              className="car-cls-8"
              d="M41.58,94.19,28,91.65c-1.77-.33-3-2.42-2.74-4.64l.1-.86,13.63,2.53c1.77.33,3,2.42,2.74,4.64Z"
            />
            <path
              className="car-cls-8"
              d="M98.14,94.19l13.62-2.54c1.78-.33,3-2.42,2.75-4.64l-.11-.86-13.62,2.53C99,89,97.77,91.1,98,93.32Z"
            />
            <path
              className="car-cls-11"
              d="M93.41,78.14C89.19,75.58,80.29,73.81,70,73.81s-19.19,1.77-23.41,4.33H65.51L70,84.65l4.49-6.51Z"
            />
            <path
              className="car-cls-8"
              d="M92.06,77.42C87.45,75.26,79.3,73.81,70,73.81s-17.45,1.45-22.06,3.61H66l4,6,4-6Z"
            />
            <path
              className="car-cls-1"
              d="M64.26,54.3c0-5.65-3.28-10.22-7.33-10.22S49.6,48.65,49.6,54.3A12.82,12.82,0,0,0,49.71,56H64.16A14.92,14.92,0,0,0,64.26,54.3Z"
            />
            <path
              className="car-cls-1"
              d="M90.36,54.3c0-5.65-3.29-10.22-7.34-10.22s-7.33,4.57-7.33,10.22A14.91,14.91,0,0,0,75.8,56H90.25A14.91,14.91,0,0,0,90.36,54.3Z"
            />
          </g>
        </svg>
      );
    }
  }
}

CarCircleIllustration.propTypes = {
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

CarCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
};

export default CarCircleIllustration;
