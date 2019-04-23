/** @module GivingCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {dsmColors as colors} from '~constants/js/colors';

/** Renders a giving illustration. */
class GivingCircleIllustration extends PureComponent {
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
          <polygon
            id="path-3"
            points="66.7793464 1.16607015 66.7793464 38.480315 0.126535948 38.480315 0.126535948 1.16607015"
          />
          <polygon
            id="path-5"
            points="0 0.7773801 69.7529412 0.7773801 69.7529412 22.5440229 0 22.5440229"
          />
          <polygon
            id="path-7"
            points="0.45869281 0.7773801 6.65895425 0.7773801 6.65895425 59.8582677 0.45869281 59.8582677"
          />
          <path
            d="M27.7588235,17.8797423 C12.777468,17.8797423 -2.9073123,10.4898233 0.632679739,2.3321403 C4.17267178,-5.82554274 25.0789159,17.1023622 27.7588235,17.1023622 C30.4387311,17.1023622 51.7838274,-6.29221373 54.8849673,2.3321403 C57.9861072,10.9564943 42.7401791,17.8797423 27.7588235,17.8797423 Z M27.7588235,17.6955324 C35.3403335,17.5316757 50.4760684,12.2655613 50.4760684,6.89601788 C50.4760684,-0.892382757 30.1562947,17.8593891 27.7588235,17.8593891 C25.3613523,17.8593891 5.04157871,-0.697364609 5.04157871,6.89601788 C5.04157871,11.2976812 20.1773136,17.8593891 27.7588235,17.6955324 Z"
            id="path-9"
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
            id="Intro-Page---Bequest"
            transform="translate(-604.000000, -140.000000)"
          >
            <g id="Image" transform="translate(604.000000, 140.000000)">
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1" />
              </mask>
              <use id="Mask" fill={colors.midnight} xlinkHref="#path-1" />
              <g
                id="Illustration-/-Source-/-Inheritance-Purple"
                mask="url(#mask-2)"
              >
                <g transform="translate(33.000000, 64.000000)">
                  <path
                    d="M82.9812994,74.3553464 C83.0221839,73.8886782 83.292112,73.4593542 83.7214953,73.2264875 C102.635969,62.9686338 115.95277,56.0272808 123.671898,52.4024283 C128.337111,50.2116745 132.140922,48.9880353 135.08333,48.7315108 C136.293989,48.5504953 137.533112,48.4566929 138.794118,48.4566929 C148.27253,48.4566929 156.514581,53.7563883 160.725234,61.5574698 L241.718937,148.847636 L187.475181,180.201967 L147.371194,100.162931 C140.771982,96.6963935 122.102225,97.447127 91.3619223,102.415132 L91.361927,102.415162 C90.8842506,102.49236 90.4198086,102.32154 90.1056394,101.992771 L38.0821544,88.6550965 C37.7791426,88.5774109 37.5199479,88.4055903 37.3325397,88.1757108 L2.88512775,69.8382427 C1.49679228,69.0991869 0.969746109,67.3732773 1.70793717,65.9833156 L3.04455033,63.4665674 C4.52093245,60.686644 7.96871317,59.631317 10.7453841,61.1094284 L37.9422498,75.587197 C38.0849439,75.5344733 38.2385001,75.5039415 38.3988054,75.4998263 L82.9812994,74.3553464 L82.9812994,74.3553464 Z"
                    id="Combined-Shape"
                    fill="#6F6693"
                  />
                  <g
                    id="Gift"
                    strokeWidth="1"
                    fill="none"
                    transform="translate(48.400000, 0.000000)"
                  >
                    <g
                      id="Rectangle"
                      transform="translate(1.423529, 38.480315)"
                    >
                      <mask id="mask-4" fill="white">
                        <use xlinkHref="#path-3" />
                      </mask>
                      <use id="Mask" fill="#3F336F" xlinkHref="#path-3" />
                      <polygon
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-4)"
                        points="-11.3882353 -45.6062992 33.4529412 -45.6062992 33.4529412 45.6062992 -11.3882353 45.6062992"
                      />
                    </g>
                    <g
                      id="Rectangle"
                      transform="translate(0.000000, 17.102362)"
                    >
                      <mask id="mask-6" fill="white">
                        <use xlinkHref="#path-5" />
                      </mask>
                      <use id="Mask" fill="#6F6693" xlinkHref="#path-5" />
                      <polygon
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-6)"
                        points="-9.96470588 -24.2283465 34.8764706 -24.2283465 34.8764706 66.984252 -9.96470588 66.984252"
                      />
                    </g>
                    <g
                      id="Rectangle"
                      transform="translate(31.317647, 17.102362)"
                    >
                      <mask id="mask-8" fill="white">
                        <use xlinkHref="#path-7" />
                      </mask>
                      <use id="Mask" fill="#8780A5" xlinkHref="#path-7" />
                      <polygon
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-8)"
                        points="-41.2823529 -24.2283465 3.55882353 -24.2283465 3.55882353 66.984252 -41.2823529 66.984252"
                      />
                    </g>
                    <g id="Rectangle" transform="translate(7.117647, 0.000000)">
                      <mask id="mask-10" fill="white">
                        <use xlinkHref="#path-9" />
                      </mask>
                      <use
                        id="Mask"
                        fill={fill}
                        opacity="0.5"
                        xlinkHref="#path-9"
                      />
                      <polygon
                        fill={fill}
                        opacity="0.100000001"
                        mask="url(#mask-10)"
                        points="-17.0823529 -7.12598425 27.7588235 -7.12598425 27.7588235 84.0866142 -17.0823529 84.0866142"
                      />
                    </g>
                  </g>
                  <path
                    d="M78.8740517,60.3450748 C104.919385,62.7721725 101.003866,60.351961 127.470281,54.9274284 C168.114289,47.4125394 166.298742,84.4912557 134.93713,89.4501285 C114.234139,91.0216103 114.558111,72.1330517 81.0960159,74.7646895 C65.7195407,75.9739776 64.7016401,59.0243842 78.8740517,60.3450748 Z"
                    id="Rectangle-2"
                    fill="#3F336F"
                    transform="translate(113.559204, 71.734528) rotate(-12.000000) translate(-113.559204, -71.734528) "
                  />
                  <path
                    d="M79.4355194,58.5027233 C105.480852,60.929821 101.565333,58.5096095 128.031749,53.0850769 C168.675756,45.5701879 172.933374,88.3109049 141.571762,93.2697777 C120.868771,94.8412595 115.119579,70.2907002 81.6574836,72.922338 C66.2810084,74.1316261 65.2631078,57.1820327 79.4355194,58.5027233 Z"
                    id="Rectangle-2"
                    fill="#6F6693"
                    transform="translate(115.824418, 72.771758) rotate(-12.000000) translate(-115.824418, -72.771758) "
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

GivingCircleIllustration.propTypes = {
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

GivingCircleIllustration.defaultProps = {
  height: '140',
  width: '144',
  fill: '#ffffff',
};

export default GivingCircleIllustration;
