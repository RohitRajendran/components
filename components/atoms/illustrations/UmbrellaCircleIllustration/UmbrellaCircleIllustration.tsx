/** @module UmbrellaCircleIllustration */
import React, {FC, memo, useState} from 'react';

type UmbrellaCircleIllustrationProps = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height?: string;
  /** Determines if the illustration should default to the illuminated state. */
  illuminate?: boolean;
  /** Determines if the color variant should be shown or not. */
  color?: boolean;
  /** Determines if the draft variant should be shown or not. */
  draft?: boolean;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Additional inline styles to apply to the container. */
  style?: React.CSSProperties;
  /** Allows you to adjust the id of the SVG, this can be useful when using multiple of the same SVG on the same page. */
  id?: string;
};

/** Renders an umbrella illustration. */
const UmbrellaCircleIllustration: FC<UmbrellaCircleIllustrationProps> = ({
  illuminate,
  color,
  draft,
  width,
  height,
  className,
  style,
  id,
}) => {
  const [illuminated, setIlluminated] = useState(false);

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
    onClick: (): void => setIlluminated(!illuminated),
  };

  if (illuminate || illuminated) {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="illuminated"
      >
        <title id={`${id}-title`}>Umbrella Circle Illustration</title>
        <desc id={`${id}-description`}>
          Umbrella illustration with rain hitting it
        </desc>
        <pattern
          x="-2607.22"
          y="-1372.22"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          id={`${id}-_x34_-dot`}
          viewBox="0.35 -4.35 4 4"
          overflow="visible"
        >
          <g>
            <rect x="0.35" y="-4.35" fill="none" width="4" height="4" />
            <circle fill="#F17732" cx="3.35" cy="-0.35" r="0.35" />
            <circle fill="#F17732" cx="1.35" cy="-0.35" r="0.35" />
            <circle fill="#F17732" cx="4.35" cy="-2.35" r="0.35" />
            <circle fill="#F17732" cx="2.35" cy="-2.35" r="0.35" />
            <circle fill="#F17732" cx="0.35" cy="-2.35" r="0.35" />
            <circle fill="#F17732" cx="3.35" cy="-4.35" r="0.35" />
            <circle fill="#F17732" cx="1.35" cy="-4.35" r="0.35" />
          </g>
        </pattern>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#10004C" cx="70" cy="70" r="70" />
        </g>
        <g>
          <defs>
            <circle id={`${id}-SVGID_655_`} cx="70" cy="70" r="70" />
          </defs>
          <clipPath id={`${id}-SVGID_2_`}>
            <use overflow="visible" />
          </clipPath>
          <g clipPath={`#url(${id}-SVGID_2_)`}>
            <g>
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="42.18"
                y1="58.01"
                x2="43.73"
                y2="52.21"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="2.1174,5.2934"
                x1="45.37"
                y1="46.07"
                x2="46.61"
                y2="41.47"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="12.7043,6.3521,2.1174,5.2934"
                x1="47.29"
                y1="38.92"
                x2="60.31"
                y2="-9.66"
              />
            </g>
          </g>
          <g clipPath={`#url(${id}-SVGID_2_)`}>
            <g>
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="33.1"
                y1="61.79"
                x2="34.66"
                y2="55.99"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="1.7886,4.4714"
                x1="36.05"
                y1="50.81"
                x2="37.09"
                y2="46.92"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="10.7314,5.3657,1.7886,4.4714"
                x1="37.67"
                y1="44.76"
                x2="54.45"
                y2="-17.87"
              />
            </g>
          </g>
          <g clipPath={`#url(${id}-SVGID_2_)`}>
            <g>
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="48.14"
                y1="65.82"
                x2="49.7"
                y2="60.02"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="1.7886,4.4714"
                x1="51.09"
                y1="54.84"
                x2="52.13"
                y2="50.95"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="10.7314,5.3657,1.7886,4.4714"
                x1="52.71"
                y1="48.79"
                x2="69.49"
                y2="-13.84"
              />
            </g>
          </g>
          <g clipPath={`#url(${id}-SVGID_2_)`}>
            <g>
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="56.33"
                y1="65.34"
                x2="57.89"
                y2="59.54"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="2.3344,5.8361"
                x1="59.7"
                y1="52.78"
                x2="61.06"
                y2="47.7"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                stroke-linecap="round"
                strokeMiterlimit="10"
                strokeDasharray="14.0066,7.0033,2.3344,5.8361"
                x1="61.81"
                y1="44.89"
                x2="76.16"
                y2="-8.67"
              />
            </g>
          </g>
          <g clipPath={`#url(${id}-SVGID_2_)`}>
            <g>
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="64.39"
                y1="65.37"
                x2="65.94"
                y2="59.57"
              />
              <line
                fill="none="
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="2.3512,5.8779"
                x1="67.76"
                y1="52.76"
                x2="69.13"
                y2="47.65"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="14.107,7.0535,2.3512,5.8779"
                x1="69.89"
                y1="44.81"
                x2="84.35"
                y2="-9.13"
              />
            </g>
          </g>
          <g clipPath={`#url(${id}-SVGID_2_)`}>
            <g>
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="80.84"
                y1="64.14"
                x2="82.39"
                y2="58.35"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="2.1783,5.4458"
                x1="84.08"
                y1="52.03"
                x2="85.35"
                y2="47.3"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="13.07,6.535,2.1783,5.4458"
                x1="86.05"
                y1="44.67"
                x2="99.44"
                y2="-5.3"
              />
            </g>
          </g>
          <g clipPath={`#url(${id}-SVGID_2_)`}>
            <g>
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="72.4"
                y1="65.53"
                x2="73.96"
                y2="59.73"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="2.2082,5.5204"
                x1="75.67"
                y1="53.33"
                x2="76.96"
                y2="48.53"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="13.249,6.6245,2.2082,5.5204"
                x1="77.67"
                y1="45.87"
                x2="91.25"
                y2="-4.79"
              />
            </g>
          </g>
          <g clipPath={`#url(${id}-SVGID_2_)`}>
            <g>
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="87.3"
                y1="70.1"
                x2="88.85"
                y2="64.3"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="2.1174,5.2934"
                x1="90.5"
                y1="58.17"
                x2="91.73"
                y2="53.56"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="12.7043,6.3521,2.1174,5.2934"
                x1="92.42"
                y1="51.01"
                x2="105.43"
                y2="2.43"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="106.12"
                y1="-0.12"
                x2="107.67"
                y2="-5.92"
              />
            </g>
          </g>
          <g clipPath={`#url(${id}-SVGID_2_)`}>
            <g>
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="96.33"
                y1="66.48"
                x2="97.88"
                y2="60.69"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="2.1228,5.307"
                x1="99.53"
                y1="54.53"
                x2="100.77"
                y2="49.92"
              />
              <line
                fill="none"
                stroke="#F8F7F4"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeDasharray="12.7367,6.3683,2.1228,5.307"
                x1="101.45"
                y1="47.36"
                x2="114.5"
                y2="-1.34"
              />
            </g>
          </g>
        </g>
        <path
          fill="#F8F7F4"
          d="M70,97.21L70,97.21c-0.68,0-1.24-0.56-1.24-1.24V30.84c0-0.68,0.56-1.24,1.24-1.24l0,0
		c0.68,0,1.24,0.56,1.24,1.24v65.14C71.24,96.66,70.68,97.21,70,97.21z"
        />
        <path
          fill="#FECA1E"
          d="M69.99,33.61c-24.37,0-44.15,14.47-49.89,36.28c3.66-0.6,7.48-0.93,11.4-0.93c7.68,0,14.95,1.23,21.47,3.41
		c5.17-2.18,10.93-3.41,17.02-3.41c6.02,0,11.73,1.2,16.85,3.34c6.47-2.14,13.67-3.34,21.27-3.34c4.06,0,8,0.35,11.78,0.99
		C114.18,48.11,94.38,33.61,69.99,33.61z"
        />
        <pattern
          id={`${id}-SVGID_4_`}
          patternTransform="matrix(1 0 0 1 0 1.2191)"
        ></pattern>
        <path
          fill={`url(#${id}-SVGID_4_)`}
          d="M69.99,33.61c-24.37,0-44.15,14.47-49.89,36.28c3.66-0.6,7.48-0.93,11.4-0.93
		c7.68,0,14.95,1.23,21.47,3.41c5.17-2.18,10.93-3.41,17.02-3.41c6.02,0,11.73,1.2,16.85,3.34c6.47-2.14,13.67-3.34,21.27-3.34
		c4.06,0,8,0.35,11.78,0.99C114.18,48.11,94.38,33.61,69.99,33.61z"
        />
        <path
          fill="#F17732"
          d="M70,68.96c6.04,0,11.77,1.21,16.92,3.37C85.29,49.16,78.47,33.61,70,33.61S54.71,49.16,53.08,72.33
		C58.23,70.17,63.95,68.96,70,68.96z"
        />
        <path
          fill="#2870B5"
          d="M68.26,91.52v8.11h-0.01c0,2.79-2.16,5.06-4.83,5.06c-2.66,0-4.81-2.25-4.83-5.02
		c0-0.02,0.01-0.03,0.01-0.05V98.7c0-0.97-0.8-1.77-1.77-1.77c-0.97,0-1.77,0.8-1.77,1.77v0.91c0,0.01,0,0.01,0,0.02h0
		c0,4.83,3.74,8.75,8.36,8.75c4.62,0,8.36-3.92,8.36-8.75v-8.11H68.26z"
        />
        <path
          fill="#5FCBEB"
          d="M68.26,99.63L68.26,99.63c-0.01,2.79-2.17,5.06-4.84,5.06c-2.66,0-4.81-2.25-4.83-5.02
		c0-0.02,0.01-0.03,0.01-0.05V98.7c0-0.43-0.16-0.81-0.41-1.12c-0.74,0.03-1.34,0.64-1.34,1.39v0.72c0,0.01,0,0.01,0,0.02h0
		c0,3.8,2.94,6.88,6.58,6.88c3.63,0,6.58-3.08,6.58-6.88v-8.18h-1.74V99.63z"
        />
        <line
          fill="none"
          stroke="#F8F7F4"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="32.93"
          y1="42.53"
          x2="34.68"
          y2="43.96"
        />
        <circle fill="#F8F7F4" cx="31.43" cy="41.29" r="0.56" />
        <circle fill="#F8F7F4" cx="32.76" cy="45.43" r="0.56" />
        <line
          fill="none"
          stroke="#F8F7F4"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="107.37"
          y1="43.3"
          x2="105.83"
          y2="44.96"
        />
        <circle fill="#F8F7F4" cx="108.69" cy="41.88" r="0.56" />
        <circle fill="#F8F7F4" cx="107.93" cy="46.16" r="0.56" />
      </svg>
    );
  } else if (color) {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="color"
      >
        <title id={`${id}-title`}>Umbrella Circle Illustration</title>
        <desc id={`${id}-description`}>Colored umbrella illustration</desc>
        <pattern
          x="-2607.22"
          y="-1195"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          id={`${id}-_x34_-dot`}
          viewBox="0.35 -4.35 4 4"
          overflow="visible"
        >
          <g>
            <rect x="0.35" y="-4.35" fill="none" width="4" height="4" />
            <circle fill="#F17732" cx="3.35" cy="-0.35" r="0.35" />
            <circle fill="#F17732" cx="1.35" cy="-0.35" r="0.35" />
            <circle fill="#F17732" cx="4.35" cy="-2.35" r="0.35" />
            <circle fill="#F17732" cx="2.35" cy="-2.35" r="0.35" />
            <circle fill="#F17732" cx="0.35" cy="-2.35" r="0.35" />
            <circle fill="#F17732" cx="3.35" cy="-4.35" r="0.35" />
            <circle fill="#F17732" cx="1.35" cy="-4.35" r="0.35" />
          </g>
        </pattern>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#10004C" cx="70" cy="70" r="70" />
        </g>
        <path
          fill="#F8F7F4"
          d="M70,97.21L70,97.21c-0.68,0-1.24-0.56-1.24-1.24V30.84c0-0.68,0.56-1.24,1.24-1.24l0,0
		c0.68,0,1.24,0.56,1.24,1.24v65.14C71.24,96.66,70.68,97.21,70,97.21z"
        />
        <path
          fill="#FECA1E"
          d="M69.99,33.61c-24.37,0-44.15,14.47-49.89,36.28c3.66-0.6,7.48-0.93,11.4-0.93c7.68,0,14.95,1.23,21.47,3.41
		c5.17-2.18,10.93-3.41,17.02-3.41c6.02,0,11.73,1.2,16.85,3.34c6.47-2.14,13.67-3.34,21.27-3.34c4.06,0,8,0.35,11.78,0.99
		C114.18,48.11,94.38,33.61,69.99,33.61z"
        />
        <path
          fill={`url(${id}-#_x34_-dot)`}
          d="M69.99,33.61c-24.37,0-44.15,14.47-49.89,36.28c3.66-0.6,7.48-0.93,11.4-0.93c7.68,0,14.95,1.23,21.47,3.41
		c5.17-2.18,10.93-3.41,17.02-3.41c6.02,0,11.73,1.2,16.85,3.34c6.47-2.14,13.67-3.34,21.27-3.34c4.06,0,8,0.35,11.78,0.99
		C114.18,48.11,94.38,33.61,69.99,33.61z"
        />
        <path
          fill="#F17732"
          d="M70,68.96c6.04,0,11.77,1.21,16.92,3.37C85.29,49.16,78.47,33.61,70,33.61S54.71,49.16,53.08,72.33
		C58.23,70.17,63.95,68.96,70,68.96z"
        />
        <path
          fill="#2870B5"
          d="M68.26,91.52v8.11h-0.01c0,2.79-2.16,5.06-4.83,5.06c-2.66,0-4.81-2.25-4.83-5.02
		c0-0.02,0.01-0.03,0.01-0.05V98.7c0-0.97-0.8-1.77-1.77-1.77c-0.97,0-1.77,0.8-1.77,1.77v0.91c0,0.01,0,0.01,0,0.02h0
		c0,4.83,3.74,8.75,8.36,8.75c4.62,0,8.36-3.92,8.36-8.75v-8.11H68.26z"
        />
        <path
          fill="#5FCBEB"
          d="M68.26,99.63L68.26,99.63c-0.01,2.79-2.17,5.06-4.84,5.06c-2.66,0-4.81-2.25-4.83-5.02
		c0-0.02,0.01-0.03,0.01-0.05V98.7c0-0.43-0.16-0.81-0.41-1.12c-0.74,0.03-1.34,0.64-1.34,1.39v0.72c0,0.01,0,0.01,0,0.02h0
		c0,3.8,2.94,6.88,6.58,6.88c3.63,0,6.58-3.08,6.58-6.88v-8.18h-1.74V99.63z"
        />
      </svg>
    );
  } else if (draft) {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="draft"
      >
        <title id={`${id}-title`}>Insurance Circle Illustration</title>
        <desc id={`${id}-description`}>Draft insurance illustration</desc>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#5B6279" cx="70" cy="70" r="70" />
        </g>
        <path
          fill="#FFFFFF"
          d="M70,97.21L70,97.21c-0.68,0-1.24-0.56-1.24-1.24V30.84c0-0.68,0.56-1.24,1.24-1.24l0,0
		c0.68,0,1.24,0.56,1.24,1.24v65.14C71.24,96.66,70.68,97.21,70,97.21z"
        />
        <path
          fill="#DEE0E4"
          d="M69.99,33.61c-24.37,0-44.15,14.47-49.89,36.28c3.66-0.6,7.48-0.93,11.4-0.93c7.68,0,14.95,1.23,21.47,3.41
		c5.17-2.18,10.93-3.41,17.02-3.41c6.02,0,11.73,1.2,16.85,3.34c6.47-2.14,13.67-3.34,21.27-3.34c4.06,0,8,0.35,11.78,0.99
		C114.18,48.11,94.38,33.61,69.99,33.61z"
        />
        <path
          fill="#8C91A1"
          d="M70,68.96c6.04,0,11.77,1.21,16.92,3.37C85.29,49.16,78.47,33.61,70,33.61S54.71,49.16,53.08,72.33
		C58.23,70.17,63.95,68.96,70,68.96z"
        />
        <path
          fill="#9DA1AF"
          d="M68.26,91.52v8.11h-0.01c0,2.79-2.16,5.06-4.83,5.06c-2.66,0-4.81-2.25-4.83-5.02
		c0-0.02,0.01-0.03,0.01-0.05V98.7c0-0.97-0.8-1.77-1.77-1.77c-0.97,0-1.77,0.8-1.77,1.77v0.91c0,0.01,0,0.01,0,0.02h0
		c0,4.83,3.74,8.75,8.36,8.75c4.62,0,8.36-3.92,8.36-8.75v-8.11H68.26z"
        />
        <path
          fill="#BDC0C9"
          d="M68.26,99.63L68.26,99.63c-0.01,2.79-2.17,5.06-4.84,5.06c-2.66,0-4.81-2.25-4.83-5.02
		c0-0.02,0.01-0.03,0.01-0.05V98.7c0-0.43-0.16-0.81-0.41-1.12c-0.74,0.03-1.34,0.64-1.34,1.39v0.72c0,0.01,0,0.01,0,0.02h0
		c0,3.8,2.94,6.88,6.58,6.88c3.63,0,6.58-3.08,6.58-6.88v-8.18h-1.74V99.63z"
        />
      </svg>
    );
  } else {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="default"
      >
        <title id={`${id}-title`}>Insurance Circle Illustration</title>
        <desc id={`${id}-description`}>Purple insurance illustration</desc>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#10004C" cx="70" cy="70" r="70" />
        </g>
        <path
          fill="#FFFFFF"
          d="M70,97.21L70,97.21c-0.68,0-1.24-0.56-1.24-1.24V30.84c0-0.68,0.56-1.24,1.24-1.24l0,0
		c0.68,0,1.24,0.56,1.24,1.24v65.14C71.24,96.66,70.68,97.21,70,97.21z"
        />
        <path
          fill="#CFCCDB"
          d="M69.99,33.61c-24.37,0-44.15,14.47-49.89,36.28c3.66-0.6,7.48-0.93,11.4-0.93c7.68,0,14.95,1.23,21.47,3.41
		c5.17-2.18,10.93-3.41,17.02-3.41c6.02,0,11.73,1.2,16.85,3.34c6.47-2.14,13.67-3.34,21.27-3.34c4.06,0,8,0.35,11.78,0.99
		C114.18,48.11,94.38,33.61,69.99,33.61z"
        />
        <path
          fill="#584D82"
          d="M70,68.96c6.04,0,11.77,1.21,16.92,3.37C85.29,49.16,78.47,33.61,70,33.61S54.71,49.16,53.08,72.33
		C58.23,70.17,63.95,68.96,70,68.96z"
        />
        <path
          fill="#6F6693"
          d="M68.26,91.52v8.11h-0.01c0,2.79-2.16,5.06-4.83,5.06c-2.66,0-4.81-2.25-4.83-5.02
		c0-0.02,0.01-0.03,0.01-0.05V98.7c0-0.97-0.8-1.77-1.77-1.77c-0.97,0-1.77,0.8-1.77,1.77v0.91c0,0.01,0,0.01,0,0.02h0
		c0,4.83,3.74,8.75,8.36,8.75c4.62,0,8.36-3.92,8.36-8.75v-8.11H68.26z"
        />
        <path
          fill="#9F99B7"
          d="M68.26,99.63L68.26,99.63c-0.01,2.79-2.17,5.06-4.84,5.06c-2.66,0-4.81-2.25-4.83-5.02
		c0-0.02,0.01-0.03,0.01-0.05V98.7c0-0.43-0.16-0.81-0.41-1.12c-0.74,0.03-1.34,0.64-1.34,1.39v0.72c0,0.01,0,0.01,0,0.02h0
		c0,3.8,2.94,6.88,6.58,6.88c3.63,0,6.58-3.08,6.58-6.88v-8.18h-1.74V99.63z"
        />
      </svg>
    );
  }
};

UmbrellaCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'umbrella-circle-illustration',
};

export default memo(UmbrellaCircleIllustration);
export {UmbrellaCircleIllustration as PureUmbrellaCircleIllustration};
