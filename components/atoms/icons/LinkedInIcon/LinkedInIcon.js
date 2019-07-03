/** @module LinkedInIcon */
import PropTypes from 'prop-types';
import React from 'react';

/** Displays the LinkedInIcon component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the LinkedInIcon component.
 */
const LinkedInIcon = ({width, height, fill, className, style}) => (
  <svg
    className={className}
    style={{
      width,
      height,
      ...style,
    }}
    viewBox="0 0 18 15"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-204.000000, -37.000000)" fill={fill}>
        <g>
          <g transform="translate(138.000000, 35.000000)">
            <g id="linked-in" transform="translate(66.000000, 2.000000)">
              <path
                d="M0.0448632747,14.757641 L3.20772414,14.757641 L3.20772414,4.34174359 L0.0448632747,4.34174359 L0.0448632747,14.757641 Z M0.0448632747,2.9094359 L3.20772414,2.9094359 L3.20772414,0.346871795 L0.0448632747,0.346871795 L0.0448632747,2.9094359 Z"
                id="Fill-4"
              ></path>
              <path d="M17.3934916,14.757641 L14.2081991,14.757641 L14.2081991,9.43764103 C14.2081991,8.32687179 14.1409042,7.59610256 13.9950985,7.26482051 C13.8717245,6.91405128 13.658624,6.67046154 13.344581,6.46584615 C13.0417539,6.29046154 12.6492003,6.22225641 12.234215,6.22225641 C11.6846399,6.22225641 11.1911439,6.34892308 10.7537269,6.60225641 C10.3275258,6.84584615 10.0246987,7.20635897 9.86767726,7.6545641 C9.7106558,8.06379487 9.62092925,8.87251282 9.62092925,10.0514872 L9.62092925,14.757641 L6.43563675,14.757641 L6.43563675,4.34174359 L9.39661288,4.34174359 L9.39661288,5.87148718 C10.439684,4.69251282 11.7631506,4.07866667 13.3557969,4.07866667 C14.0511776,4.07866667 14.7016951,4.21507692 15.262486,4.41969231 C15.8457086,4.65353846 16.2831255,4.91661538 16.5859526,5.25764103 C16.8775639,5.62789744 17.1018803,5.99815385 17.2028227,6.41712821 C17.3149809,6.84584615 17.3934916,7.45969231 17.3934916,8.29764103 L17.3934916,14.757641 Z"></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

LinkedInIcon.propTypes = {
  /** The width of the with unit sizing (px, rem, etc). */
  width: PropTypes.string,
  /** The height of the icon with unit sizing (px, rem, etc). */
  height: PropTypes.string,
  /** The color of the icon. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional inline styles to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

LinkedInIcon.defaultProps = {
  width: '1.8rem',
  height: '1.5rem',
  fill: '#fff',
};

export default LinkedInIcon;
