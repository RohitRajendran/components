/** @module HomeCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {dsmColors as colors} from '~constants/js/colors';

/** Renders a home illustration. */
class HomeCircleIllustration extends PureComponent {
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
    const {fill, width, height, className, style} = this.props;

    return (
      <svg
        className={className}
        style={
          /**
           * Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style
           * https://www.w3.org/TR/SVG11/types.html#DataTypeLength
           * */
          {
            width,
            height,
            ...style,
          }
        }
        viewBox="0 0 232 232"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <circle id="path-1" cx="116" cy="116" r="116" />
          <path
            d="M54.6006054,136.789809 L54.6006054,87.1847134 L24.5650183,87.1847134 L24.5650183,136.789809 L0.536548507,136.789809 L0.58665554,79.6687898 L68.1166197,0 L135.696691,79.6687898 L135.696691,136.789809 L54.6006054,136.789809 Z M68.1166197,60.1273885 C74.7518984,60.1273885 80.1308546,54.7433988 80.1308546,48.1019108 C80.1308546,41.4604229 74.7518984,36.0764331 68.1166197,36.0764331 C61.481341,36.0764331 56.1023848,41.4604229 56.1023848,48.1019108 C56.1023848,54.7433988 61.481341,60.1273885 68.1166197,60.1273885 Z M77.1272958,94.7006369 L77.1272958,118.751592 L111.668221,118.751592 L111.668221,94.7006369 L77.1272958,94.7006369 Z"
            id="path-3"
          />
          <path
            d="M34.5830236,70.6280996 C15.6686267,69.9715274 0.536548507,54.4169809 0.536548507,35.3248408 C0.536548507,15.8154699 16.3372323,-7.10542736e-15 35.8283635,-7.10542736e-15 C53.6533216,-7.10542736e-15 68.3918103,13.2271125 70.7813549,30.410195 L34.5830236,70.6280996 Z"
            id="path-5"
          />
          <rect
            id="path-7"
            x="0.536548507"
            y="0"
            width="30.0355872"
            height="49.6050955"
          />
          <ellipse
            id="path-9"
            cx="12.5507834"
            cy="12.0254777"
            rx="12.0142349"
            ry="12.0254777"
          />
          <polygon
            id="path-11"
            points="0.536548507 2.13615396e-14 35.0774738 2.13615396e-14 35.0774738 24.0509554 0.536548507 24.0509554"
          />
          <path
            d="M165.732278,108.455199 L165.732278,108.229299 L98.1522069,28.5605096 L30.6222427,108.229299 L30.6221129,108.455199 L0.536548507,108.455199 L98.1522069,0 L195.767865,108.455199 L165.732278,108.455199 Z"
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
            id="Intro-Page---Other-Assets"
            transform="translate(-605.000000, -140.000000)"
          >
            <g id="Image" transform="translate(605.000000, 140.000000)">
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1" />
              </mask>
              <use id="Mask" fill={colors.midnight} xlinkHref="#path-1" />
              <g
                id="Illustration-/-Source-/-Real-Estate-Purple"
                mask="url(#mask-2)"
              >
                <g transform="translate(-136.000000, 40.000000)">
                  <path
                    d="M273.053772,220.216561 C422.762248,220.216561 420.629993,238.88584 420.629993,204.433121 C420.629993,191.065446 409.020534,165.083151 409.020534,165.083151 L229.598965,165.083151 C229.598965,165.083151 29.4282022,169.795283 3.08840015,214.244924 C-23.2514019,258.694566 123.345296,220.216561 273.053772,220.216561 Z"
                    id="ground"
                    fill={fill}
                    opacity="0.1"
                  />
                  <path
                    d="M342.942242,50.0562458 L335.433346,41.7135382 L335.433346,27.0573248 L330.928008,27.0573248 L339.187794,16.5350318 L347.447581,27.0573248 L342.942242,27.0573248 L342.942242,50.0562458 Z"
                    id="Combined-Shape"
                    fill={fill}
                    opacity="0.2"
                  />
                  <g
                    id="house"
                    strokeWidth="1"
                    fill="none"
                    transform="translate(229.772242, 28.560510)"
                  >
                    <mask id="mask-4" fill="white">
                      <use xlinkHref="#path-3" />
                    </mask>
                    <use
                      id="Combined-Shape"
                      fill={fill}
                      opacity="0.400000006"
                      xlinkHref="#path-3"
                    />
                    <rect
                      id="Rectangle-41"
                      fill={fill}
                      opacity="0.100000001"
                      mask="url(#mask-4)"
                      x="-42.0498221"
                      y="-57.1210191"
                      width="110.380783"
                      height="193.910828"
                    />
                  </g>
                  <g
                    id="moon"
                    strokeWidth="1"
                    fill="none"
                    transform="translate(199.736655, 0.000000)"
                  >
                    <mask id="mask-6" fill="white">
                      <use xlinkHref="#path-5" />
                    </mask>
                    <use
                      id="Mask"
                      fill={fill}
                      opacity="0.200000003"
                      xlinkHref="#path-5"
                    />
                    <polygon
                      id="Rectangle-41"
                      fill={fill}
                      opacity="0.100000001"
                      mask="url(#mask-6)"
                      points="-13.5160142 -16.5350318 35.6589517 -16.5350318 35.6589517 81.1719745 -13.5160142 81.1719745"
                    />
                  </g>
                  <g
                    id="door"
                    strokeWidth="1"
                    fill="none"
                    transform="translate(253.800712, 115.745223)"
                  >
                    <mask id="mask-8" fill="white">
                      <use xlinkHref="#path-7" />
                    </mask>
                    <use
                      id="Mask"
                      fill={fill}
                      opacity="0.100000001"
                      xlinkHref="#path-7"
                    />
                    <ellipse
                      id="Oval-7"
                      fill={fill}
                      opacity="0.200000003"
                      mask="url(#mask-8)"
                      cx="23.0632389"
                      cy="27.0573248"
                      rx="3.00355872"
                      ry="1.50318471"
                    />
                    <rect
                      id="Rectangle-41"
                      fill={fill}
                      opacity="0.100000001"
                      mask="url(#mask-8)"
                      x="-0.965230853"
                      y="-6.01273885"
                      width="16.519573"
                      height="55.6178344"
                    />
                  </g>
                  <g
                    id="window_round"
                    strokeWidth="1"
                    fill="none"
                    transform="translate(285.338078, 64.636943)"
                  >
                    <mask id="mask-10" fill="white">
                      <use xlinkHref="#path-9" />
                    </mask>
                    <use
                      id="Mask"
                      fill={fill}
                      opacity="0.100000001"
                      xlinkHref="#path-9"
                    />
                    <rect
                      id="Rectangle-41"
                      fill={fill}
                      opacity="0.100000001"
                      mask="url(#mask-10)"
                      x="-11.2633452"
                      y="-3.75796178"
                      width="24.0284698"
                      height="30.0636943"
                    />
                    <path
                      d="M13.3016731,11.2738854 L24.5650183,11.2738854 L25.3159079,12.0254777 C25.3159079,12.4405707 24.9797232,12.7770701 24.5650183,12.7770701 L13.3016731,12.7770701 L13.3016731,24.0509554 C13.3016731,24.4660484 12.9654883,24.8025478 12.5507834,24.8025478 C12.1360785,24.8025478 11.7998937,24.4660484 11.7998937,24.0509554 L11.7998937,12.7770701 L0.536548507,12.7770701 C0.121843588,12.7770701 -0.214341173,12.4405707 -0.214341173,12.0254777 C-0.214341173,11.6103847 0.121843588,11.2738854 0.536548507,11.2738854 L11.7998937,11.2738854 L11.7998937,3.41837669e-13 L12.5507834,-0.751592357 C12.9654883,-0.751592357 13.3016731,-0.415092997 13.3016731,3.41837669e-13 L13.3016731,11.2738854 Z"
                      id="Combined-Shape"
                      fill={fill}
                      opacity="0.200000003"
                      mask="url(#mask-10)"
                    />
                  </g>
                  <g
                    id="window_rec"
                    strokeWidth="1"
                    fill="none"
                    transform="translate(306.362989, 123.261146)"
                  >
                    <mask id="mask-12" fill="white">
                      <use xlinkHref="#path-11" />
                    </mask>
                    <use
                      id="Mask"
                      fill={fill}
                      opacity="0.100000001"
                      xlinkHref="#path-11"
                    />
                    <rect
                      id="Rectangle-41"
                      fill={fill}
                      opacity="0.100000001"
                      mask="url(#mask-12)"
                      x="-0.919063175"
                      y="-1.50318471"
                      width="18.7260743"
                      height="27.011114"
                    />
                    <path
                      d="M13.3016731,11.2738854 L22.3123492,11.2738854 L22.3123492,0 L23.0632389,-0.751592357 C23.4779438,-0.751592357 23.8141286,-0.415092997 23.8141286,0 L23.8141286,11.2738854 L35.0774738,11.2738854 L35.8283635,12.0254777 C35.8283635,12.4405707 35.4921787,12.7770701 35.0774738,12.7770701 L23.8141286,12.7770701 L23.8141286,24.0509554 C23.8141286,24.4660484 23.4779438,24.8025478 23.0632389,24.8025478 C22.648534,24.8025478 22.3123492,24.4660484 22.3123492,24.0509554 L22.3123492,12.7770701 L13.3016731,12.7770701 L13.3016731,24.0509554 C13.3016731,24.4660484 12.9654883,24.8025478 12.5507834,24.8025478 C12.1360785,24.8025478 11.7998937,24.4660484 11.7998937,24.0509554 L11.7998937,12.7770701 L0.536548507,12.7770701 C0.121843588,12.7770701 -0.214341173,12.4405707 -0.214341173,12.0254777 C-0.214341173,11.6103847 0.121843588,11.2738854 0.536548507,11.2738854 L11.7998937,11.2738854 L11.7998937,0 L12.5507834,-0.751592357 C12.9654883,-0.751592357 13.3016731,-0.415092997 13.3016731,0 L13.3016731,11.2738854 Z"
                      id="Combined-Shape"
                      fill={fill}
                      opacity="0.200000003"
                      mask="url(#mask-12)"
                    />
                  </g>
                  <g
                    id="roof"
                    strokeWidth="1"
                    fill="none"
                    transform="translate(199.736655, 0.000000)"
                  >
                    <mask id="mask-14" fill="white">
                      <use xlinkHref="#path-13" />
                    </mask>
                    <use
                      id="Mask"
                      fill={fill}
                      opacity="0.149999991"
                      xlinkHref="#path-13"
                    />
                    <rect
                      id="Rectangle-41"
                      fill={fill}
                      opacity="0.100000001"
                      mask="url(#mask-14)"
                      x="-12.0142349"
                      y="-28.5605096"
                      width="110.380783"
                      height="193.910828"
                    />
                    <path
                      d="M180.71116,108.455199 L180.750072,108.229299 L98.1522069,13.5286624 L15.6044491,108.229299 L15.6432312,108.455199 L0.536548507,108.455199 L98.1522069,0 L195.767865,108.455199 L180.71116,108.455199 Z"
                      id="Combined-Shape"
                      fill={fill}
                      opacity="0.109999999"
                      mask="url(#mask-14)"
                    />
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

HomeCircleIllustration.propTypes = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width: PropTypes.string,
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height: PropTypes.string,
  /** The color of the illustration. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional inline styles to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

HomeCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  fill: '#ffffff',
};

export default HomeCircleIllustration;
