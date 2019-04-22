/** @module LampCircleIllustration */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {dsmColors as colors} from '~constants/js/colors';

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
    const {fill, width, height, className, style} = this.props;

    return (
      <svg
        height={height}
        width={width}
        className={className}
        style={style}
        onClick={this.handleClick}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
      >
        <defs>
          <circle id="a" cx="50" cy="50" r="50" />
          <path
            id="c"
            d="M10.286 3.387V0h7.428v3.387h-7.428zm7.43 1.694C23.044 8.173 28 16.977 28 23.427c0 7.95-7.53 9.315-14 9.315S0 31.378 0 23.427c0-6.45 4.957-15.254 10.283-18.346h7.434z"
          />
          <path id="e" d="M2.286 0v9.032H0V0z" />
          <path id="g" d="M46.857 0H17.143L0 41.21h64z" />
          <path
            id="i"
            d="M.118 5.08A5.372 5.372 0 0 1 0 3.953C0 1.769 1.28 0 2.857 0c1.578 0 2.857 1.77 2.857 3.952 0 .392-.041.77-.118 1.129H.118z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="b" fill={fill}>
            <use xlinkHref="#a" />
          </mask>
          <use fill={colors.midnight} xlinkHref="#a" />
          <g mask="url(#b)">
            <path
              fill={this.state.illuminated ? '#ffff66' : fill}
              d="M-6 119.5h112L82 61.92H18z"
              opacity={this.state.illuminated ? '.5' : '.1'}
            />
            <g transform="translate(36.286 70.952)">
              <mask id="d" fill={fill}>
                <use xlinkHref="#c" />
              </mask>
              <use fill={fill} opacity=".25" xlinkHref="#c" />
              <ellipse
                cx="13.714"
                cy="22.581"
                fill={fill}
                mask="url(#d)"
                opacity=".2"
                rx="5.714"
                ry="2.258"
              />
              <path
                fill={fill}
                d="M-42.286-91.452h56v140h-56z"
                mask="url(#d)"
                opacity=".1"
              />
            </g>
            <g transform="translate(48.857 61.92)">
              <mask id="f" fill={fill}>
                <use xlinkHref="#e" />
              </mask>
              <use fill={fill} opacity=".1" xlinkHref="#e" />
              <path
                fill={fill}
                d="M-54.857-82.42h56v140h-56z"
                mask="url(#f)"
                opacity=".1"
              />
            </g>
            <g transform="translate(18 20.71)">
              <mask id="h" fill={fill}>
                <use xlinkHref="#g" />
              </mask>
              <path
                fill={fill}
                d="M55.74 21.351c-1.766.635-3.243 1.945-4.185 3.643-1.347-2.43-3.79-4.064-6.606-4.064s-5.258 1.634-6.606 4.064c-1.347-2.43-3.79-4.064-6.606-4.064s-5.258 1.634-6.606 4.064c-1.347-2.43-3.79-4.064-6.606-4.064s-5.259 1.634-6.606 4.064c-.86-1.552-2.167-2.779-3.733-3.463L17.143 0h29.714l8.882 21.351zm6.348 15.262L64 41.21H0l1.807-4.345c1.05.585 2.24.915 3.506.915 2.816 0 5.258-1.634 6.606-4.064 1.347 2.43 3.79 4.064 6.606 4.064s5.259-1.634 6.606-4.064c1.348 2.43 3.79 4.064 6.606 4.064s5.259-1.634 6.606-4.064c1.348 2.43 3.79 4.064 6.606 4.064s5.259-1.634 6.606-4.064c1.348 2.43 3.79 4.064 6.607 4.064a7.2 7.2 0 0 0 3.926-1.167z"
                mask="url(#h)"
                opacity=".4"
                style={{mixBlendMode: 'lighten'}}
              />
              <path
                fill={fill}
                d="M5.313 35.582c3.003 0 5.493-2.761 5.493-6.227s-2.49-6.227-5.493-6.227c-3.004 0-5.494 2.761-5.494 6.227s2.49 6.227 5.494 6.227zM18.525 35.582c3.004 0 5.494-2.761 5.494-6.227s-2.49-6.227-5.494-6.227c-3.004 0-5.494 2.761-5.494 6.227s2.49 6.227 5.494 6.227zM31.737 35.582c3.004 0 5.494-2.761 5.494-6.227s-2.49-6.227-5.494-6.227c-3.003 0-5.494 2.761-5.494 6.227s2.49 6.227 5.494 6.227zM44.95 35.582c3.003 0 5.493-2.761 5.493-6.227s-2.49-6.227-5.494-6.227c-3.003 0-5.493 2.761-5.493 6.227s2.49 6.227 5.493 6.227zM58.162 35.582c3.003 0 5.493-2.761 5.493-6.227s-2.49-6.227-5.493-6.227c-3.004 0-5.494 2.761-5.494 6.227s2.49 6.227 5.494 6.227z"
                mask="url(#h)"
                opacity=".3"
              />
              <path
                fill={fill}
                d="M-24-41.21h56v140h-56z"
                mask="url(#h)"
                opacity=".15"
              />
            </g>
            <g transform="translate(47.143 15.629)">
              <mask id="j" fill={fill}>
                <use xlinkHref="#i" />
              </mask>
              <use fill={fill} opacity=".25" xlinkHref="#i" />
              <path
                fill={fill}
                d="M-53.143-36.129h56v140h-56z"
                mask="url(#j)"
                opacity=".1"
              />
            </g>
            <path
              fill={this.state.illuminated ? '#ffff66' : fill}
              d="M82-20.5H18l17.143 41.21h29.714z"
              opacity={this.state.illuminated ? '.5' : '.1'}
            />
          </g>
        </g>
      </svg>
    );
  }
}

LampCircleIllustration.propTypes = {
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

LampCircleIllustration.defaultProps = {
  height: '265',
  width: '160',
  fill: '#ffffff',
};

export default LampCircleIllustration;
