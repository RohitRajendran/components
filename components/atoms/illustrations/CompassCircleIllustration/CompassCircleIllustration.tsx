/** @module CompassCircleIllustration */
import React, {FC, memo} from 'react';

type CompassCircleIllustrationProps = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height?: string;
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** Determines if the illustration should be animated or not. */
  isAnimated?: boolean;
  /** Determines the animation duration in seconds. */
  animationDuration?: number;
  /** Allows you to adjust the id of the SVG, this can be useful when using multiple of the same SVG on the same page. */
  id?: string;
};

/** Renders a compass illustration. */
const CompassCircleIllustration: FC<CompassCircleIllustrationProps> = ({
  style,
  width,
  height,
  isAnimated,
  animationDuration,
  id,
}) => {
  const elementProps = {
    //className,
    style: {
      /**
       * Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style
       * https://www.w3.org/TR/SVG11/types.html#DataTypeLength
       * */
      width,
      height,
      ...style,
    },
  };

  return (
    <svg
      {...elementProps}
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={`${id}-title ${id}-description}`}
      data-testid={isAnimated ? 'animated' : 'default'}
    >
      <title id={`${id}-title`}>Compass Circle Illustration</title>
      <desc id={`${id}-description`}>Compass circle illustration</desc>
      <pattern
        id={`${id}-a`}
        height="4"
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
      <clipPath id={`${id}-d`}>
        <circle cx="70" cy="69.8" r="44.34" />
      </clipPath>
      <circle cx="70" cy="70" fill="#10004c" r="70" />
      <circle cx="70" cy="19.71" fill="#5fcbeb" r="5.9" />
      <circle cx="70" cy="19.71" fill="#10004c" r="3.26" />
      <circle cx="70" cy="69.8" fill="#5fcbeb" r="46.22" />
      <path
        d="m108.9 94.78a46.23 46.23 0 1 1 -68.36-60.6c3.89 41.51 35.36 59.65 68.36 60.6z"
        fill="#2870b5"
      />
      <circle cx="70" cy="69.8" fill="#feca1e" r="44.34" />
      <path
        d="m40.8 36.44a44.34 44.34 0 1 0 65.91 58.24c-31.58-1.68-61.21-19.24-65.91-58.24z"
        fill="#f17732"
      />
      <circle cx="70" cy="69.8" fill={`url(#${id}-a)`} r="44.34" />
      <path
        d="m40.8 36.44a44.34 44.34 0 1 0 65.91 58.24c-31.58-1.68-61.21-19.24-65.91-58.24z"
        fill={`url(#${id}-b)`}
      />
      <circle cx="70" cy="69.8" fill="#f8f7f4" r="37.88" />
      <circle cx="70" cy="69.8" fill={`url(#${id}-c)`} r="37.88" />
      <circle cx="69.98" cy="69.8" fill={`url(#${id}-c)`} r="37.88" />
      <path
        d="m42.11 44.16a37.88 37.88 0 1 0 57.05 49.84c-26.49-3.63-50.23-19.12-57.05-49.84z"
        fill="#fde5cb"
      />
      <path d="m70 37.7 4.19 32.3h-8.38z" fill="#feca1e" />
      <path d="m70 101.92 4.19-31.92h-8.38z" fill="#feca1e" />
      <path d="m37.89 69.81 32.3-4.18v8.37z" fill="#feca1e" />
      <path d="m102.11 69.81-31.92-4.18v8.37z" fill="#feca1e" />
      <path d="m56.23 56.04 15.65 12.06-3.59 3.59z" fill="#feca1e" />
      <path d="m83.77 83.58-11.89-15.48-3.59 3.59z" fill="#feca1e" />
      <path d="m56.23 83.58 12.06-15.64 3.59 3.59z" fill="#feca1e" />
      <path
        d="m55.9 72.15c-1.18-1.35-2.29-2.76-3.36-4.24l-14.65 1.9z"
        fill="#f17732"
      />
      <path
        d="m72.19 85.24c-1.63-.91-3.22-1.88-4.76-2.93l2.57 19.61z"
        fill="#f17732"
      />
      <path
        d="m62.6 78.68c-.53-.44-1.05-.88-1.56-1.34l-4.81 6.24z"
        fill="#f17732"
      />
      <path d="m83.77 56.04-15.48 11.9 3.59 3.59z" fill="#feca1e" />
      <circle cx="69.98" cy="69.8" fill="#10004c" r="5.89" />
      <path
        d="m70 36a1 1 0 0 1 -1-1v-5.79a1 1 0 0 1 2 0v5.79a1 1 0 0 1 -1 1z"
        fill="#f17732"
      />
      <path
        d="m59.55 37.62a1 1 0 0 1 -1.26-.62l-1.78-5.47a1 1 0 1 1 1.9-.62l1.78 5.47a1 1 0 0 1 -.64 1.24z"
        fill="#f17732"
      />
      <path
        d="m50.11 42.43a1 1 0 0 1 -1.39-.22l-3.39-4.66a1 1 0 0 1 1.67-1.18l3.34 4.63a1 1 0 0 1 -.23 1.43z"
        fill="#f17732"
      />
      <g fill="#99052e">
        <path d="m42.63 49.91a1 1 0 0 1 -1.4.22l-4.65-3.38a1 1 0 0 1 1.17-1.62l4.66 3.38a1 1 0 0 1 .22 1.4z" />
        <path d="m37.82 59.34a1 1 0 0 1 -1.26.64l-5.47-1.77a1 1 0 0 1 .62-1.91l5.47 1.78a1 1 0 0 1 .64 1.26z" />
        <path d="m36.17 69.8a1 1 0 0 1 -1 1h-5.76a1 1 0 1 1 0-2h5.76a1 1 0 0 1 1 1z" />
        <path d="m37.82 80.25a1 1 0 0 1 -.64 1.26l-5.47 1.78a1 1 0 0 1 -.62-1.9l5.47-1.78a1 1 0 0 1 1.26.64z" />
        <path d="m42.63 89.68a1 1 0 0 1 -.22 1.4l-4.66 3.38a1 1 0 0 1 -1.39-.22 1 1 0 0 1 .22-1.4l4.65-3.38a1 1 0 0 1 1.4.22z" />
        <path d="m50.11 97.17a1 1 0 0 1 .23 1.39l-3.34 4.66a1 1 0 0 1 -1.39.22 1 1 0 0 1 -.23-1.39l3.39-4.66a1 1 0 0 1 1.34-.22z" />
        <path d="m59.55 102a1 1 0 0 1 .64 1.26l-1.78 5.48a1 1 0 1 1 -1.9-.62l1.78-5.48a1 1 0 0 1 1.26-.64z" />
        <path d="m70 103.63a1 1 0 0 1 1 1v5.75a1 1 0 0 1 -2 0v-5.75a1 1 0 0 1 1-1z" />
        <path d="m80.45 102a1 1 0 0 1 1.26.64l1.78 5.48a1 1 0 0 1 -1.9.62l-1.78-5.48a1 1 0 0 1 .64-1.26z" />
        <path d="m89.89 97.17a1 1 0 0 1 1.39.22l3.39 4.66a1 1 0 0 1 -.23 1.39 1 1 0 0 1 -1.39-.22l-3.39-4.66a1 1 0 0 1 .23-1.39z" />
      </g>
      <path
        d="m97.37 89.68a1 1 0 0 1 1.4-.22l4.65 3.38a1 1 0 0 1 .22 1.4 1 1 0 0 1 -1.39.22l-4.66-3.38a1 1 0 0 1 -.22-1.4z"
        fill="#f17732"
      />
      <path
        d="m102.18 80.25a1 1 0 0 1 1.26-.64l5.47 1.78a1 1 0 1 1 -.62 1.9l-5.47-1.78a1 1 0 0 1 -.64-1.26z"
        fill="#f17732"
      />
      <path
        d="m103.83 69.8a1 1 0 0 1 1-1h5.76a1 1 0 0 1 0 2h-5.76a1 1 0 0 1 -1-1z"
        fill="#f17732"
      />
      <path
        d="m102.18 59.34a1 1 0 0 1 .64-1.26l5.47-1.78a1 1 0 0 1 .62 1.91l-5.47 1.79a1 1 0 0 1 -1.26-.66z"
        fill="#f17732"
      />
      <path
        d="m97.37 49.91a1 1 0 0 1 .22-1.4l4.66-3.38a1 1 0 0 1 1.17 1.62l-4.65 3.38a1 1 0 0 1 -1.4-.22z"
        fill="#f17732"
      />
      <path
        d="m89.89 42.43a1 1 0 0 1 -.23-1.4l3.39-4.66a1 1 0 0 1 1.62 1.18l-3.39 4.66a1 1 0 0 1 -1.39.22z"
        fill="#f17732"
      />
      <path
        d="m80.45 37.62a1 1 0 0 1 -.64-1.26l1.78-5.47a1 1 0 1 1 1.9.62l-1.78 5.49a1 1 0 0 1 -1.26.62z"
        fill="#f17732"
      />
      <g clipPath={`url(#${id}-d)`}>
        {isAnimated && (
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 69.98 69.98"
            to="360 69.98 69.98"
            dur={`${animationDuration}s`}
            repeatCount="indefinite"
          />
        )}
        <path
          d="m83.47 48.26c1.21-7 4.38-13.15 3.88-13.4s-3.35 6.06-8.35 11.19a14 14 0 0 0 -4 9.6l-11.76 26.16 1.27.63 13.69-25.17a14.43 14.43 0 0 0 5.27-9.01z"
          fill="#10004c"
        />
      </g>
    </svg>
  );
};

CompassCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  isAnimated: false,
  animationDuration: 10,
  id: 'compass-circle-illustration',
};

export default memo(CompassCircleIllustration);
