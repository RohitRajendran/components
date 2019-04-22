/** @module ShoppingCircleIllustration */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {dsmColors as colors} from '~constants/js/colors';

/** Renders a shopping illustration. */
class ShoppingCircleIllustration extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      illuminated: false,
    };
  }

  /** Click handler which toggles the illustration easter egg.
   * @returns {undefined}
   */
  handleClick() {
    this.setState({illuminated: !this.state.illuminated});
  }

  /** @inheritdoc */
  render() {
    const {fill, width, height, className, style} = this.props;

    return (
      <svg
        width={width}
        height={height}
        className={className}
        style={style}
        viewBox="0 0 232 232"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <circle id="path-1" cx="116" cy="116" r="116" />
          <path
            d="M0,0 L38.3211679,0 L38.3211679,43.7142857 L0,43.7142857 L0,0 Z M19.1605839,24.4285714 C23.3934233,24.4285714 26.8248175,20.9747681 26.8248175,16.7142857 C26.8248175,12.4538034 23.3934233,9 19.1605839,9 C14.9277446,9 11.4963504,12.4538034 11.4963504,16.7142857 C11.4963504,20.9747681 14.9277446,24.4285714 19.1605839,24.4285714 Z"
            id="path-3"
          />
          <path
            d="M0.0155035412,11.4957983 C0.00521279992,11.295511 0,11.0937824 0,10.8907563 C0,4.87595768 4.57519234,0 10.2189781,0 C15.8627639,0 20.4379562,4.87595768 20.4379562,10.8907563 C20.4379562,11.0937824 20.4327434,11.295511 20.4224527,11.4957983 L19.2183989,11.4957983 C19.229892,11.2957015 19.2357235,11.0939601 19.2357235,10.8907563 C19.2357235,5.54426864 15.1987891,1.21008403 10.2189781,1.21008403 C5.23916713,1.21008403 1.20223272,5.54426864 1.20223272,10.8907563 C1.20223272,11.0939601 1.20806419,11.2957015 1.21955726,11.4957983 L0.0155035412,11.4957983 L0.0155035412,11.4957983 Z"
            id="path-5"
          />
          <path
            d="M64.7201946,0 L67.9136253,3.85714286 L71.107056,0 L71.1922141,0 L74.4282238,3.85714286 L77.6642336,0 L80.9002433,3.85714286 L84.136253,0 L93.8442822,0 L90.6082725,0 L93.8442822,3.85714286 L97.080292,0 L81.0705596,0 L84.136253,0 L87.3722628,3.85714286 L90.6082725,0 L97.080292,0 L97.080292,59.1428571 C91.4365062,59.1428571 86.8613139,64.0188148 86.8613139,70.0336134 C86.8613139,70.2366396 86.8665267,70.4383682 86.8768174,70.6386555 L88.0808711,70.6386555 C88.0693781,70.4385587 88.0635466,70.2368172 88.0635466,70.0336134 C88.0635466,64.6871258 92.100481,60.3529412 97.080292,60.3529412 L97.080292,70.7142857 L77.919708,70.7142857 L77.919708,106.714286 L35.7664234,106.714286 L35.7664234,43.7142857 L0,43.7142857 L0,21.8571429 C10.5820983,21.8571429 19.1605839,31.0672851 19.1605839,42.4285714 C19.1605839,42.8603794 19.1481921,43.28908 19.1237693,43.7142857 L21.6823834,43.7142857 C21.7042513,43.2886752 21.7153285,42.860002 21.7153285,42.4285714 C21.7153285,29.6471244 11.9930447,19.2857143 0,19.2857143 L0,0 L6.47201946,0 L3.23600973,3.85714286 L0,0 L6.47201946,0 L9.7080292,3.85714286 L12.9440389,0 L16.1800487,3.85714286 L19.4160584,0 L22.6520681,3.85714286 L25.8880779,0 L29.0815085,3.85714286 L32.2749392,0 L32.3600973,0 L35.553528,3.85714286 L38.7469586,0 L38.8321168,0 L42.0681265,3.85714286 L45.3041363,0 L48.540146,3.85714286 L51.7761557,0 L55.0121655,3.85714286 L58.2481752,0 L61.4841849,3.85714286 L64.7201946,0 Z M30.6569343,19.2857143 L30.6569343,29.5714286 L66.4233577,29.5714286 L66.4233577,19.2857143 L30.6569343,19.2857143 Z"
            id="path-7"
          />
          <rect
            id="path-9"
            x="0"
            y="0"
            width="28.1021898"
            height="2.57142857"
          />
          <path
            d="M0,23.1428571 C0,10.3614101 9.72228372,0 21.7153285,0 C33.7083732,0 43.4306569,10.3614101 43.4306569,23.1428571 C43.4306569,23.5742877 43.4195797,36.8601038 43.3977119,37.2857143 L40.8390978,37.2857143 C40.8635205,36.8605086 40.8759124,23.5746651 40.8759124,23.1428571 C40.8759124,11.7815709 32.2974268,2.57142857 21.7153285,2.57142857 C11.1332302,2.57142857 2.55474453,11.7815709 2.55474453,23.1428571 C2.55474453,23.5746651 2.5671364,36.8605086 2.59155917,37.2857143 L0.032945025,37.2857143 C0.0110771998,36.8601038 0,23.5742877 0,23.1428571 Z"
            id="path-11"
          />
          <path
            d="M71.5328467,45 L71.5328467,50.1428571 L0,50.1428571 L0,45 L71.5328467,45 Z M71.5328467,12.8571429 L0,12.8571429 L0,0 L71.5328467,0 L71.5328467,12.8571429 Z M71.5328467,52.7142857 L71.5328467,70.7142857 L0,70.7142857 L0,52.7142857 L71.5328467,52.7142857 Z"
            id="path-13"
          />
          <polygon
            id="path-15"
            points="0 0 71.5328467 0 71.5328467 2.57142857 0 2.57142857"
          />
          <polygon
            id="path-17"
            points="0 0 71.5328467 0 71.5328467 32.1428571 0 32.1428571"
          />
          <path
            d="M0.032945025,24.4285714 C0.0110771998,24.0029609 0,23.5742877 0,23.1428571 C0,10.3614101 9.72228372,0 21.7153285,0 C33.7083732,0 43.4306569,10.3614101 43.4306569,23.1428571 C43.4306569,23.5742877 43.4195797,24.0029609 43.3977119,24.4285714 L40.8390978,24.4285714 C40.8635205,24.0033658 40.8759124,23.5746651 40.8759124,23.1428571 C40.8759124,11.7815709 32.2974268,2.57142857 21.7153285,2.57142857 C11.1332302,2.57142857 2.55474453,11.7815709 2.55474453,23.1428571 C2.55474453,23.5746651 2.5671364,24.0033658 2.59155917,24.4285714 L0.032945025,24.4285714 L0.032945025,24.4285714 Z"
            id="path-19"
          />
        </defs>
        <g
          id="First-Plan-Info-Collection"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Intro-Page---Experience"
            transform="translate(-604.000000, -140.000000)"
          >
            <g id="Image" transform="translate(604.000000, 140.000000)">
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1" />
              </mask>
              <use id="Mask" fill={colors.midnight} xlinkHref="#path-1" />
              <g
                id="Illustration-/-Source-/-Experience-Purple"
                mask="url(#mask-2)"
              >
                <g transform="translate(25.000000, 11.000000)">
                  <g id="bag-3" transform="translate(127.737226, 106.714286)">
                    <g
                      id="Rectangle"
                      transform="translate(0.000000, 11.571429)"
                    >
                      <mask id="mask-4" fill="white">
                        <use xlinkHref="#path-3" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.300000012"
                        xlinkHref="#path-3"
                      />
                      <rect
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-4)"
                        x="-6.38686131"
                        y="-20.5714286"
                        width="25.5474453"
                        height="65.5714286"
                      />
                    </g>
                    <ellipse
                      id="Oval"
                      fill={fill}
                      opacity="0.100000001"
                      cx="19.1605839"
                      cy="28.2857143"
                      rx="7.66423358"
                      ry="7.71428571"
                    />
                    <g id="Rectangle" transform="translate(8.941606, 0.000000)">
                      <mask id="mask-6" fill="white">
                        <use xlinkHref="#path-5" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.400000006"
                        xlinkHref="#path-5"
                      />
                      <rect
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-6)"
                        x="-15.3284672"
                        y="-9"
                        width="25.5474453"
                        height="65.5714286"
                      />
                    </g>
                  </g>
                  <g id="bag-2" transform="translate(49.817518, 23.142857)">
                    <g
                      id="Rectangle-2"
                      transform="translate(0.000000, 24.428571)"
                    >
                      <mask id="mask-8" fill="white">
                        <use xlinkHref="#path-7" />
                      </mask>
                      <use
                        id="Combined-Shape"
                        fill={fill}
                        opacity="0.200000003"
                        xlinkHref="#path-7"
                      />
                      <polygon
                        fill={fill}
                        opacity="0.07"
                        mask="url(#mask-8)"
                        points="-7.66423358 -32.1428571 48.540146 -32.1428571 48.540146 126 -7.66423358 126"
                      />
                    </g>
                    <g
                      id="Rectangle-2"
                      transform="translate(34.489051, 47.571429)"
                    >
                      <mask id="mask-10" fill="white">
                        <use xlinkHref="#path-9" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.200000003"
                        xlinkHref="#path-9"
                      />
                      <polygon
                        fill={fill}
                        opacity="0.07"
                        mask="url(#mask-10)"
                        points="-42.1532847 -55.2857143 14.0510949 -55.2857143 14.0510949 102.857143 -42.1532847 102.857143"
                      />
                    </g>
                    <g
                      id="Rectangle-2"
                      transform="translate(26.824818, 0.000000)"
                    >
                      <mask id="mask-12" fill="white">
                        <use xlinkHref="#path-11" />
                      </mask>
                      <use id="Mask" fill="#6F6693" xlinkHref="#path-11" />
                      <polygon
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-12)"
                        points="-34.4890511 -7.71428571 21.7153285 -7.71428571 21.7153285 99 -34.4890511 99"
                      />
                    </g>
                  </g>
                  <g id="bag-1" transform="translate(14.051095, 66.857143)">
                    <g
                      id="Rectangle-42-Copy"
                      transform="translate(0.000000, 24.428571)"
                    >
                      <mask id="mask-14" fill="white">
                        <use xlinkHref="#path-13" />
                      </mask>
                      <use
                        id="Combined-Shape"
                        fill={fill}
                        opacity="0.349999994"
                        xlinkHref="#path-13"
                      />
                      <polygon
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-14)"
                        points="-16.6058394 -30.8571429 35.7664234 -30.8571429 35.7664234 75.8571429 -16.6058394 75.8571429"
                      />
                    </g>
                    <g
                      id="Rectangle-42-Copy"
                      transform="translate(0.000000, 74.571429)"
                    >
                      <mask id="mask-16" fill="white">
                        <use xlinkHref="#path-15" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.100000001"
                        xlinkHref="#path-15"
                      />
                      <polygon
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-16)"
                        points="-16.6058394 -81 35.7664234 -81 35.7664234 25.7142857 -16.6058394 25.7142857"
                      />
                    </g>
                    <g
                      id="Rectangle-42-Copy"
                      transform="translate(0.000000, 37.285714)"
                    >
                      <mask id="mask-18" fill="white">
                        <use xlinkHref="#path-17" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.100000001"
                        xlinkHref="#path-17"
                      />
                      <polygon
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-18)"
                        points="-16.6058394 -43.7142857 35.7664234 -43.7142857 35.7664234 63 -16.6058394 63"
                      />
                    </g>
                    <g
                      id="Rectangle-42-Copy"
                      transform="translate(14.051095, 0.000000)"
                    >
                      <mask id="mask-20" fill="white">
                        <use xlinkHref="#path-19" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.400000006"
                        xlinkHref="#path-19"
                      />
                      <polygon
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-20)"
                        points="-30.6569343 -6.42857143 21.7153285 -6.42857143 21.7153285 100.285714 -30.6569343 100.285714"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

ShoppingCircleIllustration.propTypes = {
  /** The width of the illustration. */
  width: PropTypes.string,
  /** The height of the illustration. */
  height: PropTypes.string,
  /** The color of the illustration. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional inline styles to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

ShoppingCircleIllustration.defaultProps = {
  height: '140',
  width: '144',
  fill: '#ffffff',
};

export default ShoppingCircleIllustration;
