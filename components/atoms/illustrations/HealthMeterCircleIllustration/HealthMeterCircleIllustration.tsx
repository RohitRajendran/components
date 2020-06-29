/** @module HealthMeterCircleIllustration */
import React, {FC, memo, useState} from 'react';

type HealthMeterCircleIllustrationProps = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height?: string;
  /** Determines if the illustration should default to the illuminated state. */
  illuminate?: boolean;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Additional inline styles to apply to the container. */
  style?: React.CSSProperties;
  /** Allows you to adjust the id of the SVG, this can be useful when using multiple of the same SVG on the same page. */
  id?: string;
};

/** Renders a health meter illustration. */
const HealthMeterCircleIllustration: FC<HealthMeterCircleIllustrationProps> = ({
  illuminate,
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
        <title id={`${id}-title`}>Health Meter Circle Illustration</title>
        <desc id={`${id}-description`}>
          Scale meter at its limit with a heart
        </desc>
        <pattern
          id={`${id}-a`}
          height="4"
          patternTransform="translate(-38 5.63)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#f17732" r=".35" />
          <circle cx="1" cy="4" fill="#f17732" r=".35" />
          <circle cx="4" cy="2" fill="#f17732" r=".35" />
          <circle cx="2" cy="2" fill="#f17732" r=".35" />
          <circle cy="2" fill="#f17732" r=".35" />
          <circle cx="3" fill="#f17732" r=".35" />
          <circle cx="1" fill="#f17732" r=".35" />
        </pattern>
        <pattern
          id={`${id}-b`}
          height="4"
          patternTransform="translate(-38 5.63)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#99052e" r=".35" />
          <circle cx="1" cy="4" fill="#99052e" r=".35" />
          <circle cx="4" cy="2" fill="#99052e" r=".35" />
          <circle cx="2" cy="2" fill="#99052e" r=".35" />
          <circle cy="2" fill="#99052e" r=".35" />
          <circle cx="3" fill="#99052e" r=".35" />
          <circle cx="1" fill="#99052e" r=".35" />
        </pattern>
        <pattern
          id={`${id}-c`}
          height="4"
          patternTransform="translate(-38 5.63)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#fde5cb" r=".35" />
          <circle cx="1" cy="4" fill="#fde5cb" r=".35" />
          <circle cx="4" cy="2" fill="#fde5cb" r=".35" />
          <circle cx="2" cy="2" fill="#fde5cb" r=".35" />
          <circle cy="2" fill="#fde5cb" r=".35" />
          <circle cx="3" fill="#fde5cb" r=".35" />
          <circle cx="1" fill="#fde5cb" r=".35" />
        </pattern>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m119.6 46.33c-.57.75-4.32 8.22-9.42 2.83a56 56 0 0 0 -96 34.92c-.15 2.18 1.54 5.31 3.73 5.31h104.19c2.19 0 3-2.18 3.73-5.31.66-2.8 3-3.12 4.9-1.22 1.14 1.13 2.06-.31 1.4-1-3.4-3.86-7.24-1.86-8.13 2.14-.55 2.38-1.48 3.91-3.6 3.91h-100.77a3.62 3.62 0 0 1 -3.63-3.91 54.11 54.11 0 0 1 93-33.55c6.56 7.12 11.79-2.69 12.15-3.38a.88.88 0 0 0 -1.55-.74z"
          fill="#5fcbeb"
        />
        <path
          d="m32.78 46.33a55.87 55.87 0 0 0 -18.61 37.75c-.15 2.18 1.54 5.31 3.73 5.31h104.2a3.09 3.09 0 0 0 2.25-1.18c-28.26-1.92-82.88-11.63-91.57-41.88z"
          fill="#2870b5"
        />
        <path
          d="m70 33.77a54.11 54.11 0 0 0 -54 50.23 3.62 3.62 0 0 0 3.6 3.91h100.77a3.62 3.62 0 0 0 3.63-3.91 54.11 54.11 0 0 0 -54-50.23z"
          fill="#feca1e"
        />
        <path
          d="m70 33.77a54.11 54.11 0 0 0 -54 50.23 3.62 3.62 0 0 0 3.6 3.91h100.77a3.62 3.62 0 0 0 3.63-3.91 54.11 54.11 0 0 0 -54-50.23z"
          fill={`url(#${id}-a)`}
        />
        <circle cx="70" cy="85.18" fill="#2870b5" r="7.62" />
        <path
          d="m33.27 48.15a53.94 53.94 0 0 0 -17.27 35.85 3.62 3.62 0 0 0 3.6 3.91h100.77c-44.48-2.73-79.15-16.65-87.1-39.76z"
          fill="#f17732"
        />
        <path
          d="m33.27 48.15a53.94 53.94 0 0 0 -17.27 35.85 3.62 3.62 0 0 0 3.6 3.91h100.77c-44.48-2.73-79.15-16.65-87.1-39.76z"
          fill={`url(#${id}-b)`}
        />
        <path
          d="m115.08 82.75a2.77 2.77 0 0 0 2.75-3.22 48.55 48.55 0 0 0 -95.66 0 2.77 2.77 0 0 0 2.75 3.22z"
          fill="#f8f7f4"
        />
        <path
          d="m115.08 82.75a2.77 2.77 0 0 0 2.75-3.22 48.55 48.55 0 0 0 -95.66 0 2.77 2.77 0 0 0 2.75 3.22z"
          fill={`url(#${id}-c)`}
        />
        <path
          d="m24.92 82.75h59.68c-23.55-5.69-41.26-15.6-48.9-29.23a48.46 48.46 0 0 0 -13.53 26 2.77 2.77 0 0 0 2.75 3.23z"
          fill="#fde5cb"
        />
        <path
          d="m85.13 65.26h2.26v28.14h-2.26z"
          fill="#10004c"
          transform="matrix(.3385737 .94093988 -.94093988 .3385737 131.7 -28.69)"
        />
        <path
          d="m122.23 82.21c-7.76 2.79-25.71-6.61-25.71-6.61s7.84-18.69 15.6-21.48 14.32 6.62 7.88 13c9.06.54 10 12.3 2.23 15.09z"
          fill="#99052e"
        />
        <path
          d="m122.23 82.21c-7.76 2.79-25.71-6.61-25.71-6.61s1-2.4 2.65-5.6c5.45 7.56 19.54 11.73 24 11.82a6.87 6.87 0 0 1 -.94.39z"
          fill="#10004c"
        />
        <circle cx="70" cy="85.18" fill="#10004c" r="5.89" />
        <rect
          fill="#f17732"
          height="6.89"
          rx=".98"
          width="2.29"
          x="68.85"
          y="35.79"
        />
        <rect
          fill="#f17732"
          height="6.89"
          rx=".98"
          transform="matrix(.95105652 -.30901699 .30901699 .95105652 -10.17 19.03)"
          width="2.29"
          x="53.86"
          y="38.17"
        />
        <rect
          fill="#f17732"
          height="6.89"
          rx=".98"
          transform="matrix(.80901699 -.58778525 .58778525 .80901699 -20.59 33.64)"
          width="2.29"
          x="40.32"
          y="45.06"
        />
        <rect
          fill="#99052e"
          height="6.89"
          rx=".98"
          transform="matrix(.58778525 -.80901699 .80901699 .58778525 -35.26 49.29)"
          width="2.29"
          x="29.59"
          y="55.8"
        />
        <rect
          fill="#99052e"
          height="6.89"
          rx=".98"
          transform="matrix(.30901699 -.95105652 .95105652 .30901699 -52.74 72.96)"
          width="2.29"
          x="22.69"
          y="69.33"
        />
        <g fill="#f17732">
          <rect
            height="6.89"
            rx=".98"
            transform="matrix(.1022717 .9947565 -.9947565 .1022717 186.77 -70.2)"
            width="2.29"
            x="131.13"
            y="64.93"
          />
          <rect
            height="6.89"
            rx=".98"
            transform="matrix(.68696069 .72669458 -.72669458 .68696069 78.35 -75.81)"
            width="2.29"
            x="126.03"
            y="49.61"
          />
          <rect
            height="6.89"
            rx=".98"
            transform="matrix(.80901699 .58778525 -.58778525 .80901699 47.33 -48.65)"
            width="2.29"
            x="97.38"
            y="45.06"
          />
          <rect
            height="6.89"
            rx=".98"
            transform="matrix(.95105652 .30901699 -.30901699 .95105652 17.02 -24.23)"
            width="2.29"
            x="83.85"
            y="38.17"
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
        <title id={`${id}-title`}>Health Meter Circle Illustration</title>
        <desc id={`${id}-description`}>Scale meter with a heart</desc>
        <pattern
          id={`${id}-a`}
          height="4"
          patternTransform="translate(-22 21.63)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#f17732" r=".35" />
          <circle cx="1" cy="4" fill="#f17732" r=".35" />
          <circle cx="4" cy="2" fill="#f17732" r=".35" />
          <circle cx="2" cy="2" fill="#f17732" r=".35" />
          <circle cy="2" fill="#f17732" r=".35" />
          <circle cx="3" fill="#f17732" r=".35" />
          <circle cx="1" fill="#f17732" r=".35" />
        </pattern>
        <pattern
          id={`${id}-b`}
          height="4"
          patternTransform="translate(-22 21.63)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#99052e" r=".35" />
          <circle cx="1" cy="4" fill="#99052e" r=".35" />
          <circle cx="4" cy="2" fill="#99052e" r=".35" />
          <circle cx="2" cy="2" fill="#99052e" r=".35" />
          <circle cy="2" fill="#99052e" r=".35" />
          <circle cx="3" fill="#99052e" r=".35" />
          <circle cx="1" fill="#99052e" r=".35" />
        </pattern>
        <pattern
          id={`${id}-c`}
          height="4"
          patternTransform="translate(-22 21.63)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#fde5cb" r=".35" />
          <circle cx="1" cy="4" fill="#fde5cb" r=".35" />
          <circle cx="4" cy="2" fill="#fde5cb" r=".35" />
          <circle cx="2" cy="2" fill="#fde5cb" r=".35" />
          <circle cy="2" fill="#fde5cb" r=".35" />
          <circle cx="3" fill="#fde5cb" r=".35" />
          <circle cx="1" fill="#fde5cb" r=".35" />
        </pattern>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m70 32.15a56 56 0 0 0 -55.83 51.93c-.15 2.18 1.54 5.31 3.73 5.31h104.2c2.19 0 3.88-3.13 3.73-5.31a56 56 0 0 0 -55.83-51.93z"
          fill="#5fcbeb"
        />
        <path
          d="m32.78 46.33a55.87 55.87 0 0 0 -18.61 37.75c-.15 2.18 1.54 5.31 3.73 5.31h104.2a3.09 3.09 0 0 0 2.25-1.18c-28.26-1.92-82.88-11.63-91.57-41.88z"
          fill="#2870b5"
        />
        <path
          d="m70 33.77a54.11 54.11 0 0 0 -54 50.23 3.62 3.62 0 0 0 3.6 3.91h100.77a3.62 3.62 0 0 0 3.63-3.91 54.11 54.11 0 0 0 -54-50.23z"
          fill="#feca1e"
        />
        <path
          d="m70 33.77a54.11 54.11 0 0 0 -54 50.23 3.62 3.62 0 0 0 3.6 3.91h100.77a3.62 3.62 0 0 0 3.63-3.91 54.11 54.11 0 0 0 -54-50.23z"
          fill={`url(#${id}-a)`}
        />
        <circle cx="70" cy="85.18" fill="#2870b5" r="7.62" />
        <path
          d="m33.27 48.15a53.94 53.94 0 0 0 -17.27 35.85 3.62 3.62 0 0 0 3.6 3.91h100.77c-44.48-2.73-79.15-16.65-87.1-39.76z"
          fill="#f17732"
        />
        <path
          d="m33.27 48.15a53.94 53.94 0 0 0 -17.27 35.85 3.62 3.62 0 0 0 3.6 3.91h100.77c-44.48-2.73-79.15-16.65-87.1-39.76z"
          fill={`url(#${id}-b)`}
        />
        <path
          d="m115.08 82.75a2.77 2.77 0 0 0 2.75-3.22 48.55 48.55 0 0 0 -95.66 0 2.77 2.77 0 0 0 2.75 3.22z"
          fill="#f8f7f4"
        />
        <path
          d="m115.08 82.75a2.77 2.77 0 0 0 2.75-3.22 48.55 48.55 0 0 0 -95.66 0 2.77 2.77 0 0 0 2.75 3.22z"
          fill={`url(#${id}-c)`}
        />
        <path
          d="m24.92 82.75h59.68c-23.55-5.69-41.26-15.6-48.9-29.23a48.46 48.46 0 0 0 -13.53 26 2.77 2.77 0 0 0 2.75 3.23z"
          fill="#fde5cb"
        />
        <path
          d="m78.68 60.41h2.26v25.01h-2.26z"
          fill="#10004c"
          transform="matrix(.78097574 .62456136 -.62456136 .78097574 63.03 -33.88)"
        />
        <path
          d="m100.71 61.52c-3.17 4-15.63 4.81-15.63 4.81s-1.91-12.33 1.26-16.33a4.77 4.77 0 0 1 8.34 4.31c4.92-2.64 9.2 3.24 6.03 7.21z"
          fill="#99052e"
        />
        <path
          d="m96.51 64.1a49.2 49.2 0 0 1 -11.43 2.23 54.25 54.25 0 0 1 -.55-9.08c2.25 7.23 9.41 6.91 11.98 6.85z"
          fill="#10004c"
        />
        <circle cx="70" cy="85.18" fill="#10004c" r="5.89" />
        <rect
          fill="#f17732"
          height="6.89"
          rx=".98"
          width="2.29"
          x="68.85"
          y="35.79"
        />
        <rect
          fill="#f17732"
          height="6.89"
          rx=".98"
          transform="matrix(.95105652 -.30901699 .30901699 .95105652 -10.17 19.03)"
          width="2.29"
          x="53.86"
          y="38.17"
        />
        <rect
          fill="#f17732"
          height="6.89"
          rx=".98"
          transform="matrix(.81 -.59 .59 .81 -20.59 33.64)"
          width="2.29"
          x="40.32"
          y="45.06"
        />
        <rect
          fill="#99052e"
          height="6.89"
          rx=".98"
          transform="matrix(.58778525 -.80901699 .80901699 .58778525 -35.26 49.29)"
          width="2.29"
          x="29.59"
          y="55.8"
        />
        <rect
          fill="#99052e"
          height="6.89"
          rx=".98"
          transform="matrix(.30901699 -.95105652 .95105652 .30901699 -52.74 72.96)"
          width="2.29"
          x="22.69"
          y="69.33"
        />
        <g fill="#f17732">
          <rect
            height="6.89"
            rx=".98"
            transform="matrix(.30901699 .95105652 -.95105652 .30901699 149.48 -60.19)"
            width="2.29"
            x="115.02"
            y="69.33"
          />
          <rect
            height="6.89"
            rx=".98"
            transform="matrix(.58778525 .80901699 -.80901699 .58778525 92.97 -63.98)"
            width="2.29"
            x="108.12"
            y="55.8"
          />
          <rect
            height="6.89"
            rx=".98"
            transform="matrix(.80901699 .58778525 -.58778525 .80901699 47.33 -48.65)"
            width="2.29"
            x="97.38"
            y="45.06"
          />
          <rect
            height="6.89"
            rx=".98"
            transform="matrix(.95105652 .30901699 -.30901699 .95105652 17.02 -24.23)"
            width="2.29"
            x="83.85"
            y="38.17"
          />
        </g>
      </svg>
    );
  }
};

HealthMeterCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'health-meter-circle-illustration',
};

export default memo(HealthMeterCircleIllustration);
export {HealthMeterCircleIllustration as PureHealthMeterCircleIllustration};
