/** @module GiftCircleIllustration */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {dsmColors as colors} from '~constants/js/colors';

/** Renders a gift illustration. */
class GiftCircleIllustration extends Component {
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
            d="M26.7671468,36 C26.73904,35.4259294 26.6218765,34.8408147 26.408179,34.2467532 C25.2358704,30.987831 21.1747622,32.7968555 16.6728474,36 L0,36 L0,0 L115.625,0 L115.625,36 L26.7671468,36 Z"
            id="path-3"
          />
          <path
            d="M46.25,29.5714286 C21.4163628,29.5714286 -4.58329671,17.3491908 1.28472222,3.85714286 C7.15274116,-9.63490513 41.8076882,28.2857143 46.25,28.2857143 C50.6923118,28.2857143 86.0747161,-10.4067355 91.2152778,3.85714286 C96.3558395,18.1210212 71.0836372,29.5714286 46.25,29.5714286 Z M46.25,29.2667625 C58.8173853,28.9957587 83.9069273,20.286096 83.9069273,11.4053713 C83.9069273,-1.47591797 50.2241351,29.5377662 46.25,29.5377662 C42.2758649,29.5377662 8.59307273,-1.15337612 8.59307273,11.4053713 C8.59307273,18.6853125 33.6826147,29.5377662 46.25,29.2667625 Z"
            id="path-5"
          />
          <path
            d="M-4.55468996e-14,12.2680484 C12.2771394,12.0895675 24.531875,6.82536357 24.1977023,1.11022302e-16 L110.486111,0 L110.486111,61.7142857 L29.4344136,61.7142857 L29.4344136,31.9090909 L30.8333333,31.9090909 L30.8333333,12.2727273 L0,12.2727273 L0,12.2680484 Z M0,11.3365299 L0,0 L14.1034029,0 C8.52893415,3.9662743 2.27859956,10.0700805 3.33066907e-16,11.3365299 Z"
            id="path-7"
          />
          <polygon
            id="path-9"
            points="60.2677469 1.05194805 60.2677469 34.7142857 0.114197531 34.7142857 0.114197531 1.05194805"
          />
          <polygon
            id="path-11"
            points="0 0.701298701 62.9513889 0.701298701 62.9513889 20.3376623 0 20.3376623"
          />
          <path
            d="M25.0520833,16.1298701 C11.5315475,16.1298701 -2.62382265,9.46319501 0.570987654,2.1038961 C3.76579796,-5.2554028 22.6334913,15.4285714 25.0520833,15.4285714 C27.4706753,15.4285714 46.7344288,-5.67640118 49.533179,2.1038961 C52.3319293,9.88419338 38.5726191,16.1298701 25.0520833,16.1298701 Z M25.0520833,15.9636886 C31.8943264,15.8158684 45.5541882,11.0651433 45.5541882,6.22111163 C45.5541882,-0.805046165 27.2157791,16.1115089 25.0520833,16.1115089 C22.8883876,16.1115089 4.54997849,-0.629114245 4.54997849,6.22111163 C4.54997849,10.1919886 18.2098402,16.1115089 25.0520833,15.9636886 Z"
            id="path-13"
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
            id="Intro-Page---Gift"
            transform="translate(-604.000000, -140.000000)"
          >
            <g id="Image" transform="translate(604.000000, 140.000000)">
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1" />
              </mask>
              <use id="Mask" fill={colors.midnight} xlinkHref="#path-1" />
              <g id="Illustration-/-Source-/-Gift-Purple" mask="url(#mask-2)">
                <g transform="translate(22.000000, 18.000000)" id="Gift">
                  <g transform="translate(48.819444, 27.000000)">
                    <g
                      id="Rectangle"
                      transform="translate(0.000000, 29.571429)"
                    >
                      <mask id="mask-4" fill="white">
                        <use xlinkHref="#path-3" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.349999994"
                        xlinkHref="#path-3"
                      />
                      <rect
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-4)"
                        x="-3.85416667"
                        y="-41.1428571"
                        width="61.6666667"
                        height="142.714286"
                      />
                    </g>
                    <rect
                      id="Rectangle-40"
                      fill={fill}
                      opacity="0.3"
                      x="52.6736111"
                      y="29.5714286"
                      width="10.2777778"
                      height="97.7142857"
                    />
                    <g
                      id="Rectangle"
                      transform="translate(11.562500, 0.000000)"
                    >
                      <mask id="mask-6" fill="white">
                        <use xlinkHref="#path-5" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.3"
                        xlinkHref="#path-5"
                      />
                      <rect
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-6)"
                        x="-15.4166667"
                        y="-11.5714286"
                        width="61.6666667"
                        height="142.714286"
                      />
                    </g>
                    <g
                      id="Rectangle"
                      transform="translate(2.569444, 65.571429)"
                    >
                      <mask id="mask-8" fill="white">
                        <use xlinkHref="#path-7" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.25"
                        xlinkHref="#path-7"
                      />
                      <rect
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-8)"
                        x="-6.42361111"
                        y="-77.1428571"
                        width="61.6666667"
                        height="142.714286"
                      />
                    </g>
                  </g>
                  <g transform="translate(19.270833, 88.714286)">
                    <g
                      id="Rectangle"
                      transform="translate(1.284722, 34.714286)"
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
                        opacity="0.100000001"
                        mask="url(#mask-10)"
                        points="-10.2777778 -41.1428571 30.1909722 -41.1428571 30.1909722 41.1428571 -10.2777778 41.1428571"
                      />
                    </g>
                    <g
                      id="Rectangle"
                      transform="translate(0.000000, 15.428571)"
                    >
                      <mask id="mask-12" fill="white">
                        <use xlinkHref="#path-11" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.5"
                        xlinkHref="#path-11"
                      />
                      <polygon
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-12)"
                        points="-8.99305556 -21.8571429 31.4756944 -21.8571429 31.4756944 60.4285714 -8.99305556 60.4285714"
                      />
                    </g>
                    <polygon
                      id="Rectangle-40"
                      fill={fill}
                      opacity="0.3"
                      points="28.6778549 16.1298701 34.273534 16.1298701 34.273534 69.4285714 28.6778549 69.4285714"
                    />
                    <g id="Rectangle" transform="translate(6.423611, 0.000000)">
                      <mask id="mask-14" fill="white">
                        <use xlinkHref="#path-13" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.5"
                        xlinkHref="#path-13"
                      />
                      <polygon
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-14)"
                        points="-15.4166667 -6.42857143 25.0520833 -6.42857143 25.0520833 75.8571429 -15.4166667 75.8571429"
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

GiftCircleIllustration.propTypes = {
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

GiftCircleIllustration.defaultProps = {
  height: '140',
  width: '144',
  fill: '#ffffff',
};

export default GiftCircleIllustration;
