/** @module DocumentCircleIllustration */
import React, {FC, memo, useState} from 'react';

type DocumentCircleIllustrationProps = {
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

/** Renders an document illustration. */
const DocumentCircleIllustration: FC<DocumentCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Document Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of documents beside a shield
        </desc>
        <pattern
          x="-2414.66"
          y="-1015"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          id={`${id}-_x32_-dot`}
          viewBox="0.35 -4.35 4 4"
          overflow="visible"
        >
          <g>
            <rect x="0.35" y="-4.35" fill="none" width="4" height="4" />
            <circle fill="#FDE5CB" cx="3.35" cy="-0.35" r="0.35" />
            <circle fill="#FDE5CB" cx="1.35" cy="-0.35" r="0.35" />
            <circle fill="#FDE5CB" cx="4.35" cy="-2.35" r="0.35" />
            <circle fill="#FDE5CB" cx="2.35" cy="-2.35" r="0.35" />
            <circle fill="#FDE5CB" cx="0.35" cy="-2.35" r="0.35" />
            <circle fill="#FDE5CB" cx="3.35" cy="-4.35" r="0.35" />
            <circle fill="#FDE5CB" cx="1.35" cy="-4.35" r="0.35" />
          </g>
        </pattern>
        <pattern
          x="-2414.66"
          y="-1015"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          id={`${id}-_x33_-dot`}
          viewBox="0.35 -4.35 4 4"
          overflow="visible"
        >
          <g>
            <rect x="0.35" y="-4.35" fill="none" width="4" height="4" />
            <circle fill="#FECA1E" cx="3.35" cy="-0.35" r="0.35" />
            <circle fill="#FECA1E" cx="1.35" cy="-0.35" r="0.35" />
            <circle fill="#FECA1E" cx="4.35" cy="-2.35" r="0.35" />
            <circle fill="#FECA1E" cx="2.35" cy="-2.35" r="0.35" />
            <circle fill="#FECA1E" cx="0.35" cy="-2.35" r="0.35" />
            <circle fill="#FECA1E" cx="3.35" cy="-4.35" r="0.35" />
            <circle fill="#FECA1E" cx="1.35" cy="-4.35" r="0.35" />
          </g>
        </pattern>
        <pattern
          x="-2414.66"
          y="-1015"
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
        <pattern
          x="-2414.66"
          y="-1015"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          id={`${id}-_x35_-dot`}
          viewBox="0.35 -4.35 4 4"
          overflow="visible"
        >
          <g>
            <rect x="0.35" y="-4.35" fill="none" width="4" height="4" />
            <circle fill="#99052E" cx="3.35" cy="-0.35" r="0.35" />
            <circle fill="#99052E" cx="1.35" cy="-0.35" r="0.35" />
            <circle fill="#99052E" cx="4.35" cy="-2.35" r="0.35" />
            <circle fill="#99052E" cx="2.35" cy="-2.35" r="0.35" />
            <circle fill="#99052E" cx="0.35" cy="-2.35" r="0.35" />
            <circle fill="#99052E" cx="3.35" cy="-4.35" r="0.35" />
            <circle fill="#99052E" cx="1.35" cy="-4.35" r="0.35" />
          </g>
        </pattern>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#10004C" cx="70" cy="70" r="70" />
        </g>
        <rect
          x="41.13"
          y="32.15"
          transform="matrix(0.9627 0.2707 -0.2707 0.9627 21.4089 -16.4186)"
          fill="#FECA1E"
          width="58.19"
          height="74.5"
        />
        <pattern
          id={`${id}-SVGID_2_`}
          patternTransform="matrix(0.9627 0.2707 -0.2707 0.9627 -1769.0764 1304.155)"
        ></pattern>
        <polygon
          fill={`url(#${id}-SVGID_2_)`}
          points="88.15,113.14 32.13,97.38 52.3,25.66 108.32,41.42 	"
        />
        <rect x="41.13" y="32.15" fill="#F8F7F4" width="58.19" height="74.5" />
        <pattern
          id={`${id}-SVGID_4_`}
          patternTransform="matrix(1 0 0 1 -0.0705 0.2379)"
        ></pattern>
        <rect
          x="41.13"
          y="32.15"
          fill={`url(#${id}-SVGID_4_)`}
          width="58.19"
          height="74.5"
        />
        <path
          fill="#FDE5CB"
          d="M41.13,106.65c0,0,0-26.96,0-44.65c7.63,38,58.19,44.65,58.19,44.65"
        />
        <pattern
          id={`${id}-SVGID_6_`}
          patternTransform="matrix(1 0 0 1 -0.0705 0.2379)"
        ></pattern>
        <path
          fill={`url(#${id}-SVGID_6_)`}
          d="M41.13,106.65c0,0,0-26.96,0-44.65c7.63,38,58.19,44.65,58.19,44.65"
        />
        <rect x="74.78" y="72.31" fill="#10004C" width="18.51" height="2.57" />
        <rect x="74.78" y="80.79" fill="#10004C" width="18.51" height="2.57" />
        <rect x="74.78" y="89.26" fill="#10004C" width="18.51" height="2.57" />
        <rect x="74.78" y="97.74" fill="#10004C" width="18.51" height="2.57" />
        <rect x="47.15" y="38.41" fill="#10004C" width="37.88" height="2.57" />
        <rect x="47.15" y="46.89" fill="#10004C" width="46.15" height="2.57" />
        <rect x="47.15" y="55.36" fill="#10004C" width="43.83" height="2.57" />
        <rect x="47.15" y="63.84" fill="#10004C" width="40.02" height="2.57" />
        <path
          fill="#FECA1E"
          d="M72.97,83.94V69.15l-22.5-8l-22.4,8v15.89c0,0.08,0.02,0.15,0.02,0.22c-0.01,0.3-0.02,0.59-0.02,0.89
		c0,21.6,22.45,29.5,22.45,29.5s22.35-8,22.45-29.5C72.97,85.4,73.03,84.67,72.97,83.94z"
        />
        <path
          fill={`url(#${id}-_x34_-dot)`}
          d="M72.97,83.94V69.15l-22.5-8l-22.4,8v15.89c0,0.08,0.02,0.15,0.02,0.22c-0.01,0.3-0.02,0.59-0.02,0.89
		c0,21.6,22.45,29.5,22.45,29.5s22.35-8,22.45-29.5C72.97,85.4,73.03,84.67,72.97,83.94z"
        />
        <path
          fill="#F17732"
          d="M33.25,67.3l-5.18,1.85v15.89c0,0.08,0.02,0.15,0.02,0.22c-0.01,0.3-0.02,0.59-0.02,0.89
		c0,21.6,22.45,29.5,22.45,29.5s11.77-4.21,18.27-14.75C44.74,96.1,33.25,67.3,33.25,67.3z"
        />
        <path
          fill={`url(#${id}-_x35_-dot)`}
          d="M33.25,67.3l-5.18,1.85v15.89c0,0.08,0.02,0.15,0.02,0.22c-0.01,0.3-0.02,0.59-0.02,0.89
		c0,21.6,22.45,29.5,22.45,29.5s11.77-4.21,18.27-14.75C44.74,96.1,33.25,67.3,33.25,67.3z"
        />
        <path
          fill="#5FCBEB"
          d="M68.83,84.75V72.67l-18.31-6.54l-18.31,6.54v12.99c0,0.06,0.01,0.12,0.02,0.18
		c-0.01,0.24-0.02,0.48-0.02,0.73c0,17.65,18.35,24.11,18.35,24.11s18.19-6.54,18.27-24.11C68.83,85.95,68.88,85.35,68.83,84.75z"
        />
        <path
          fill="#2870B5"
          d="M35.26,71.58l-3.05,1.09v12.99c0,0.06,0.01,0.12,0.02,0.18c-0.01,0.24-0.02,0.48-0.02,0.73
		c0,17.65,18.35,24.11,18.35,24.11s8.69-3.13,14.09-10.87C48.85,94.58,39.18,79.14,35.26,71.58z"
        />
        <polygon
          fill="#F8F7F4"
          points="62.58,84.9 53.63,84.9 53.63,75.95 47.43,75.95 47.43,84.9 38.48,84.9 38.48,91.1 47.43,91.1
		47.43,100.05 53.63,100.05 53.63,91.1 62.58,91.1"
        />
        <polygon
          fill={`url(#${id}-_x32_-dot)`}
          points="62.58,84.9 53.63,84.9 53.63,75.95 47.43,75.95 47.43,84.9 38.48,84.9 38.48,91.1 47.43,91.1
		47.43,100.05 53.63,100.05 53.63,91.1 62.58,91.1"
        />
        <path
          fill="#FDE5CB"
          d="M53.63,100.05v-6.03c-3.7-2.72-6.89-5.91-9.57-9.12h-5.58v6.2h8.95v8.95H53.63z"
        />
      </svg>
    );
  } else if (draft) {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="draft"
      >
        <title id={`${id}-title`}>Document Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of a document in grayscale
        </desc>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#5B6279" cx="70" cy="70" r="70" />
        </g>
        <rect x="41.13" y="32.15" fill="#FFFFFF" width="58.19" height="74.5" />
        <path
          fill="#DEE0E4"
          d="M41.13,106.65c0,0,0-26.96,0-44.65c7.63,38,58.19,44.65,58.19,44.65"
        />
        <rect x="47.15" y="72.31" fill="#CDCFD6" width="23.64" height="27.89" />
        <path
          fill="#ADB0BC"
          d="M70.79,97.45c-8.8-4.48-17.71-11-23.64-20.39v23.14h23.64V97.45z"
        />
        <rect x="74.78" y="72.31" fill="#5B6279" width="18.51" height="2.57" />
        <rect x="74.78" y="80.79" fill="#5B6279" width="18.51" height="2.57" />
        <rect x="74.78" y="89.26" fill="#5B6279" width="18.51" height="2.57" />
        <rect x="74.78" y="97.74" fill="#5B6279" width="18.51" height="2.57" />
        <rect x="47.15" y="38.41" fill="#5B6279" width="37.88" height="2.57" />
        <rect x="47.15" y="46.89" fill="#5B6279" width="46.15" height="2.57" />
        <rect x="47.15" y="55.36" fill="#5B6279" width="43.83" height="2.57" />
        <rect x="47.15" y="63.84" fill="#5B6279" width="40.02" height="2.57" />
        <rect x="59.83" y="89.35" fill="#8C91A1" width="7.61" height="7.61" />
        <path
          fill="#6B7186"
          d="M67.43,95.64c-2.59-1.48-5.15-3.14-7.61-5.01v6.33h7.61V95.64z"
        />
        <circle fill="#8C91A1" cx="54.02" cy="85.7" r="4.14" />
        <path
          fill="#6B7186"
          d="M49.88,85.7c0,2.29,1.85,4.14,4.14,4.14c1.23,0,2.33-0.55,3.09-1.4c-2.07-1.77-4.03-3.7-5.84-5.81
		C50.42,83.39,49.88,84.48,49.88,85.7z"
        />
        <polygon fill="#6B7186" points="63.63,74.66 59.56,82.02 67.7,82.02" />
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
        <title id={`${id}-title`}>Document Illustration</title>
        <desc id={`${id}-description`}>Illustration of a document</desc>
        <pattern
          x="-2414.66"
          y="-834.76"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          id={`${id}-_x32_-dot`}
          viewBox="0.35 -4.35 4 4"
          overflow="visible"
        >
          <g>
            <rect x="0.35" y="-4.35" fill="none" width="4" height="4" />
            <circle fill="#FDE5CB" cx="3.35" cy="-0.35" r="0.35" />
            <circle fill="#FDE5CB" cx="1.35" cy="-0.35" r="0.35" />
            <circle fill="#FDE5CB" cx="4.35" cy="-2.35" r="0.35" />
            <circle fill="#FDE5CB" cx="2.35" cy="-2.35" r="0.35" />
            <circle fill="#FDE5CB" cx="0.35" cy="-2.35" r="0.35" />
            <circle fill="#FDE5CB" cx="3.35" cy="-4.35" r="0.35" />
            <circle fill="#FDE5CB" cx="1.35" cy="-4.35" r="0.35" />
          </g>
        </pattern>
        <pattern
          x="-2414.66"
          y="-834.76"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          id={`${id}-_x33_-dot`}
          viewBox="0.35 -4.35 4 4"
          overflow="visible"
        >
          <g>
            <rect x="0.35" y="-4.35" fill="none" width="4" height="4" />
            <circle fill="#FECA1E" cx="3.35" cy="-0.35" r="0.35" />
            <circle fill="#FECA1E" cx="1.35" cy="-0.35" r="0.35" />
            <circle fill="#FECA1E" cx="4.35" cy="-2.35" r="0.35" />
            <circle fill="#FECA1E" cx="2.35" cy="-2.35" r="0.35" />
            <circle fill="#FECA1E" cx="0.35" cy="-2.35" r="0.35" />
            <circle fill="#FECA1E" cx="3.35" cy="-4.35" r="0.35" />
            <circle fill="#FECA1E" cx="1.35" cy="-4.35" r="0.35" />
          </g>
        </pattern>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#10004C" cx="70" cy="70" r="70" />
        </g>
        <g id={`${id}-Source_Colors`}>
          <rect
            x="41.13"
            y="32.15"
            fill="#F8F7F4"
            width="58.19"
            height="74.5"
          />
          <pattern
            id={`${id}-SVGID_2_`}
            patternTransform="matrix(1 0 0 1 -0.0705 0)"
          ></pattern>
          <rect
            x="41.13"
            y="32.15"
            fill={`url(#${id}-SVGID_2_)`}
            width="58.19"
            height="74.5"
          />
          <path
            fill="#FDE5CB"
            d="M41.13,106.65c0,0,0-26.96,0-44.65c7.63,38,58.19,44.65,58.19,44.65"
          />
          <pattern
            id={`${id}-SVGID_4_`}
            patternTransform="matrix(1 0 0 1 -0.0705 0)"
          ></pattern>
          <path
            fill={`url(${id}-#SVGID_4_)`}
            d="M41.13,106.65c0,0,0-26.96,0-44.65c7.63,38,58.19,44.65,58.19,44.65"
          />
          <rect
            x="47.15"
            y="72.31"
            fill="#5FCBEB"
            width="23.64"
            height="27.89"
          />
          <path
            fill="#2870B5"
            d="M70.79,97.45c-8.8-4.48-17.71-11-23.64-20.39v23.14h23.64V97.45z"
          />
          <rect
            x="74.78"
            y="72.31"
            fill="#10004C"
            width="18.51"
            height="2.57"
          />
          <rect
            x="74.78"
            y="80.79"
            fill="#10004C"
            width="18.51"
            height="2.57"
          />
          <rect
            x="74.78"
            y="89.26"
            fill="#10004C"
            width="18.51"
            height="2.57"
          />
          <rect
            x="74.78"
            y="97.74"
            fill="#10004C"
            width="18.51"
            height="2.57"
          />
          <rect
            x="47.15"
            y="38.41"
            fill="#10004C"
            width="37.88"
            height="2.57"
          />
          <rect
            x="47.15"
            y="46.89"
            fill="#10004C"
            width="46.15"
            height="2.57"
          />
          <rect
            x="47.15"
            y="55.36"
            fill="#10004C"
            width="43.83"
            height="2.57"
          />
          <rect
            x="47.15"
            y="63.84"
            fill="#10004C"
            width="40.02"
            height="2.57"
          />
          <rect x="59.83" y="89.35" fill="#2870B5" width="7.61" height="7.61" />
          <path
            fill="#10004C"
            d="M67.43,95.64c-2.59-1.48-5.15-3.14-7.61-5.01v6.33h7.61V95.64z"
          />
          <circle fill="#FECA1E" cx="54.02" cy="85.7" r="4.14" />
          <path
            fill="#F17732"
            d="M49.88,85.7c0,2.29,1.85,4.14,4.14,4.14c1.23,0,2.33-0.55,3.09-1.4c-2.07-1.77-4.03-3.7-5.84-5.81
		C50.42,83.39,49.88,84.48,49.88,85.7z"
          />
          <polygon
            fill="#99052E"
            points="63.63,74.66 59.56,82.02 67.7,82.02 	"
          />
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="default"
      >
        <title id={`${id}-title`}>Document Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of a document in purple
        </desc>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#10004C" cx="70" cy="70" r="70" />
        </g>
        <g id={`${id}-Source_Colors`}>
          <rect
            x="41.13"
            y="32.15"
            fill="#FFFFFF"
            width="58.19"
            height="74.5"
          />
          <path
            fill="#CFCCDB"
            d="M41.13,106.65c0,0,0-26.96,0-44.65c7.63,38,58.19,44.65,58.19,44.65"
          />
          <rect
            x="47.15"
            y="72.31"
            fill="#B7B3C9"
            width="23.64"
            height="27.89"
          />
          <path
            fill="#8780A5"
            d="M70.79,97.45c-8.8-4.48-17.71-11-23.64-20.39v23.14h23.64V97.45z"
          />
          <rect
            x="74.78"
            y="72.31"
            fill="#10004C"
            width="18.51"
            height="2.57"
          />
          <rect
            x="74.78"
            y="80.79"
            fill="#10004C"
            width="18.51"
            height="2.57"
          />
          <rect
            x="74.78"
            y="89.26"
            fill="#10004C"
            width="18.51"
            height="2.57"
          />
          <rect
            x="74.78"
            y="97.74"
            fill="#10004C"
            width="18.51"
            height="2.57"
          />
          <rect
            x="47.15"
            y="38.41"
            fill="#10004C"
            width="37.88"
            height="2.57"
          />
          <rect
            x="47.15"
            y="46.89"
            fill="#10004C"
            width="46.15"
            height="2.57"
          />
          <rect
            x="47.15"
            y="55.36"
            fill="#10004C"
            width="43.83"
            height="2.57"
          />
          <rect
            x="47.15"
            y="63.84"
            fill="#10004C"
            width="40.02"
            height="2.57"
          />
          <rect x="59.83" y="89.35" fill="#584D82" width="7.61" height="7.61" />
          <path
            fill="#281A5E"
            d="M67.43,95.64c-2.59-1.48-5.15-3.14-7.61-5.01v6.33h7.61V95.64z"
          />
          <circle fill="#584D82" cx="54.02" cy="85.7" r="4.14" />
          <path
            fill="#281A5E"
            d="M49.88,85.7c0,2.29,1.85,4.14,4.14,4.14c1.23,0,2.33-0.55,3.09-1.4c-2.07-1.77-4.03-3.7-5.84-5.81
		C50.42,83.39,49.88,84.48,49.88,85.7z"
          />
          <polygon
            fill="#281A5E"
            points="63.63,74.66 59.56,82.02 67.7,82.02 	"
          />
        </g>
      </svg>
    );
  }
};

DocumentCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'document-circle-illustration',
};

export default memo(DocumentCircleIllustration);
export {DocumentCircleIllustration as PureDocumentCircleIllustration};
