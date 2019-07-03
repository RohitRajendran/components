/** @module TwitterIcon */
import PropTypes from 'prop-types';
import React from 'react';

/** Displays the TwitterIcon component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the TwitterIcon component.
 */
const TwitterIcon = ({width, height, fill, className, style}) => (
  <svg
    className={className}
    style={{
      width,
      height,
      ...style,
    }}
    viewBox="0 0 21 15"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-166.000000, -38.000000)" fill={fill}>
        <g>
          <g transform="translate(138.000000, 35.000000)">
            <g id="twitter" transform="translate(28.000000, 3.000000)">
              <path d="M0.78077131,12.8191333 C2.27770924,12.9124667 3.72737545,12.7191333 5.09825545,12.1924667 C5.70490924,11.9791333 6.27216993,11.6924667 6.82367338,11.3258 C6.16974786,11.2991333 5.58672993,11.1791333 5.05098372,10.9391333 C4.11342786,10.5324667 3.45950234,9.9058 3.06557131,9.0858 C2.97102786,8.8858 2.97102786,8.8858 3.23890097,8.9058 C3.87706924,8.95913333 4.3576651,8.9458 4.74371752,8.81246667 C4.38917959,8.71913333 4.05827752,8.6458 3.75888993,8.5058 C2.38013131,7.85246667 1.63954097,6.85913333 1.52136166,5.51913333 C1.50560441,5.35913333 1.56075476,5.3458 1.72620579,5.41913333 C2.21468028,5.63913333 2.74254786,5.73913333 3.35708028,5.77246667 C3.08132855,5.5858 2.85284855,5.4258 2.64800441,5.23913333 C1.50560441,4.21246667 1.22985269,2.53913333 2.00195752,1.27913333 C2.09650097,1.1058 2.14377269,1.1058 2.29346648,1.25913333 C4.20797131,3.1258 6.603072,4.2658 9.48664717,4.65246667 C9.801792,4.69246667 10.1169368,4.7058 10.424203,4.7458 C10.6211686,4.77913333 10.6448044,4.69246667 10.6211686,4.55913333 C10.3139023,3.09913333 11.1254003,1.63913333 12.6696099,0.9058 C14.2374554,0.139133333 16.2701396,0.3658 17.5543548,1.41913333 C17.6961699,1.53246667 17.8222279,1.55913333 18.0034361,1.51246667 C18.7676623,1.35246667 19.5003741,1.11913333 20.1858141,0.7858 C20.2330858,0.7658 20.2882361,0.7458 20.3591437,0.7058 C20.0518775,1.5258 19.4688596,2.13246667 18.6100899,2.63246667 C19.4215879,2.5658 20.1306637,2.3658 20.831861,2.13246667 C20.8554968,2.2258 20.7845892,2.27913333 20.7373175,2.33246667 C20.2567217,2.89913333 19.6815823,3.39246667 19.0276568,3.81246667 C18.8937203,3.89246667 18.8622058,3.97246667 18.8700844,4.09913333 C18.9094775,6.67246667 17.9404072,8.95913333 15.9943879,10.9391333 C14.1901837,12.7591333 11.8738692,13.8458 9.10059476,14.2191333 C6.16974786,14.6058 3.404352,14.1724667 0.875314759,12.8658 C0.835921655,12.8391333 0.812285793,12.8324667 0.78077131,12.8191333"></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

TwitterIcon.propTypes = {
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

TwitterIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  fill: '#fff',
};

export default TwitterIcon;
