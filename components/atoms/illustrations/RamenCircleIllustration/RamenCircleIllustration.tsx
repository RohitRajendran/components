/** @module RamenCircleIllustration */

import React, {FC, memo, useState} from 'react';

type RamenCircleIllustrationProps = {
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

/** Renders a ramen illustration. */
const RamenCircleIllustration: FC<RamenCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Ramen Circle Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of an empty bowl of ramen
        </desc>
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
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path d="m14.85 55.23 72.04 42.15.26-.44-71.28-43.41z" fill="#2870b5" />
        <path d="m21.98 46.35 63.79 53.83.32-.38-62.82-54.95z" fill="#2870b5" />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a18 18 0 0 0 18-18v-17.71z"
          fill="#feca1e"
        />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a18 18 0 0 0 18-18v-17.71z"
          fill={`url(#${id}-a)`}
        />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a17.93 17.93 0 0 0 11.23-4c-16.64 7.41-54.23-9.35-54.23-31.71z"
          fill="#f17732"
        />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a17.93 17.93 0 0 0 11.23-4c-16.64 7.41-54.23-9.35-54.23-31.71z"
          fill={`url(#${id}-b)`}
        />
        <path d="m56.41 105.43h27.16v2.68h-27.16z" fill="#99052e" />
        <path d="m39.49 74.79h60.99v4.21h-60.99z" fill="#99052e" />
        <path d="m39.49 81.62h60.99v1.34h-60.99z" fill="#10004c" />
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
        <title id={`${id}-title`}>Ramen Circle Illustration</title>
        <desc id={`${id}-description`}>Illustration of a bowl of ramen</desc>
        <clipPath id={`${id}-a`}>
          <path
            clipRule="evenodd"
            d="m93.13 59.5a36.07 36.07 0 0 0 -4.81 9.66l-1-.43a22.58 22.58 0 0 1 5.81-9.23z"
          />
        </clipPath>
        <pattern
          id={`${id}-b`}
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
          id={`${id}-c`}
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
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <ellipse cx="65.66" cy="69.73" fill="#f8f7f4" rx="13.56" ry="14.68" />
        <ellipse cx="65.66" cy="69.73" fill="#fde5cb" rx="11.09" ry="12" />
        <path
          d="m93.13 59.5a36.07 36.07 0 0 0 -4.81 9.66l-1-.43a22.58 22.58 0 0 1 5.81-9.23z"
          fill="#5fcbeb"
          fillRule="evenodd"
        />
        <g clipPath={`url(#${id}-a)`}>
          <path
            d="m82.1 60.54h16.16v7.11h-16.16z"
            fill="#5fcbeb"
            transform="matrix(.40082878 -.91615298 .91615298 .40082878 -4.68 121.03)"
          />
        </g>
        <g fillRule="evenodd">
          <path
            d="m93.41 60.21c-1.38-2.75 9.59-5.8 16.47 1.33-4.44-1.95-12.71 6.2-16.47-1.33z"
            fill="#5fcbeb"
          />
          <path
            d="m93.41 60.21s9.22-3.61 16.47 1.33c-4.44-1.95-12.71 6.2-16.47-1.33z"
            fill="#2870b5"
          />
          <path
            d="m92.59 59.5c2.38-.69-1.81-8.86-9.8-9 3.58 1.5 3.28 10.89 9.8 9z"
            fill="#5fcbeb"
          />
          <path
            d="m92.59 59.5s-2.91-7.44-9.8-9c3.58 1.5 3.28 10.89 9.8 9z"
            fill="#2870b5"
          />
        </g>
        <ellipse cx="65.66" cy="69.73" fill="#f8f7f4" rx="8.19" ry="8.86" />
        <ellipse cx="65.66" cy="69.73" fill="#fde5cb" rx="5.85" ry="6.33" />
        <ellipse cx="80.49" cy="66.02" fill="#f8f7f4" rx="8.03" ry="8.69" />
        <ellipse cx="80.49" cy="66.76" fill="#fde5cb" rx="5.86" ry="7.09" />
        <ellipse cx="53.05" cy="70" fill="#f8f7f4" rx="13.56" ry="10.64" />
        <ellipse cx="53.05" cy="70" fill="#fde5cb" rx="10.58" ry="8.3" />
        <ellipse cx="53.05" cy="70" fill="#f8f7f4" rx="7.3" ry="5.72" />
        <ellipse cx="53.05" cy="70" fill="#fde5cb" rx="3.8" ry="2.98" />
        <path d="m34.19 28.4 42.22 71.99.44-.25-40.94-72.73z" fill="#2870b5" />
        <path d="m44.75 24.14 29.31 78.14.47-.17-27.92-78.65z" fill="#2870b5" />
        <ellipse cx="79.9" cy="70.46" fill="#f8f7f4" rx="20.59" ry="7.98" />
        <ellipse cx="79.9" cy="71.63" fill="#fde5cb" rx="17.41" ry="6.75" />
        <ellipse cx="79.9" cy="72.47" fill="#f8f7f4" rx="13.37" ry="5.18" />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a18 18 0 0 0 18-18v-17.71z"
          fill="#feca1e"
        />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a18 18 0 0 0 18-18v-17.71z"
          fill={`url(#${id}-b)`}
        />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a17.93 17.93 0 0 0 11.23-4c-16.64 7.41-54.23-9.35-54.23-31.71z"
          fill="#f17732"
        />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a17.93 17.93 0 0 0 11.23-4c-16.64 7.41-54.23-9.35-54.23-31.71z"
          fill={`url(#${id}-c)`}
        />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a17.93 17.93 0 0 0 11.23-4c-16.64 7.41-54.23-9.35-54.23-31.71z"
          fill={`url(#${id}-c)`}
        />
        <path d="m56.41 105.43h27.16v2.68h-27.16z" fill="#99052e" />
        <path d="m39.49 74.79h60.99v4.21h-60.99z" fill="#99052e" />
        <path d="m39.49 81.62h60.99v1.34h-60.99z" fill="#10004c" />
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
        <title id={`${id}-title`}>Ramen Circle Illustration</title>
        <desc id={`${id}-description`}>
          Grey Illustration of a bowl of ramen
        </desc>
        <clipPath id={`${id}-a`}>
          <path
            clipRule="evenodd"
            d="m93.13 59.5a36.07 36.07 0 0 0 -4.81 9.66l-1-.43a22.58 22.58 0 0 1 5.81-9.23z"
          />
        </clipPath>
        <circle cx="70" cy="70" fill="#5b6279" r="70" />
        <ellipse cx="65.66" cy="69.73" fill="#eeeff1" rx="13.56" ry="14.68" />
        <ellipse cx="65.66" cy="69.73" fill="#dee0e4" rx="11.09" ry="12" />
        <path
          d="m93.13 59.5a36.07 36.07 0 0 0 -4.81 9.66l-1-.43a22.58 22.58 0 0 1 5.81-9.23z"
          fill="#adb0bc"
          fillRule="evenodd"
        />
        <g clipPath={`url(#${id}-a)`}>
          <path
            d="m82.1 60.54h16.16v7.11h-16.16z"
            fill="#adb0bc"
            transform="matrix(.40082878 -.91615298 .91615298 .40082878 -4.68 121.03)"
          />
        </g>
        <g fillRule="evenodd">
          <path
            d="m93.41 60.21c-1.38-2.75 9.59-5.8 16.47 1.33-4.44-1.95-12.71 6.2-16.47-1.33z"
            fill="#adb0bc"
          />
          <path
            d="m93.41 60.21s9.22-3.61 16.47 1.33c-4.44-1.95-12.71 6.2-16.47-1.33z"
            fill="#8c91a1"
          />
          <path
            d="m92.59 59.5c2.38-.69-1.81-8.86-9.8-9 3.58 1.5 3.28 10.89 9.8 9z"
            fill="#adb0bc"
          />
          <path
            d="m92.59 59.5s-2.91-7.44-9.8-9c3.58 1.5 3.28 10.89 9.8 9z"
            fill="#8c91a1"
          />
        </g>
        <ellipse cx="65.66" cy="69.73" fill="#cdcfd6" rx="8.19" ry="8.86" />
        <ellipse cx="65.66" cy="69.73" fill="#bdc0c9" rx="5.85" ry="6.33" />
        <ellipse cx="80.49" cy="66.02" fill="#eeeff1" rx="8.03" ry="8.69" />
        <ellipse cx="80.49" cy="66.76" fill="#dee0e4" rx="5.86" ry="7.09" />
        <ellipse cx="53.05" cy="70" fill="#eeeff1" rx="13.56" ry="10.64" />
        <ellipse cx="53.05" cy="70" fill="#dee0e4" rx="10.58" ry="8.3" />
        <ellipse cx="53.05" cy="70" fill="#cdcfd6" rx="7.3" ry="5.72" />
        <ellipse cx="53.05" cy="70" fill="#bdc0c9" rx="3.8" ry="2.98" />
        <path d="m34.19 28.4 42.22 71.99.44-.25-40.94-72.73z" fill="#fff" />
        <path d="m44.75 24.14 29.31 78.14.47-.17-27.92-78.65z" fill="#fff" />
        <ellipse cx="79.9" cy="70.46" fill="#eeeff1" rx="20.59" ry="7.98" />
        <ellipse cx="79.9" cy="71.63" fill="#dee0e4" rx="17.41" ry="6.75" />
        <ellipse cx="79.9" cy="72.47" fill="#cdcfd6" rx="13.37" ry="5.18" />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a18 18 0 0 0 18-18v-17.71z"
          fill="#adb0bc"
        />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a17.93 17.93 0 0 0 11.23-4c-16.64 7.41-54.23-9.35-54.23-31.71z"
          fill="#9da1af"
        />
        <path d="m56.41 105.43h27.16v2.68h-27.16z" fill="#8c91a1" />
        <path d="m39.49 74.79h60.99v4.21h-60.99z" fill="#7c8194" />
        <path d="m39.49 81.62h60.99v1.34h-60.99z" fill="#8c91a1" />
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
        <title id={`${id}-title`}>Ramen Circle Illustration</title>
        <desc id={`${id}-description`}>Purple of a bowl of ramen</desc>
        <clipPath id={`${id}-a`}>
          <path
            clipRule="evenodd"
            d="m93.13 59.5a36.07 36.07 0 0 0 -4.81 9.66l-1-.43a22.58 22.58 0 0 1 5.81-9.23z"
          />
        </clipPath>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <ellipse cx="65.66" cy="69.73" fill="#e7e6ed" rx="13.56" ry="14.68" />
        <ellipse cx="65.66" cy="69.73" fill="#cfccdb" rx="11.09" ry="12" />
        <path
          d="m93.13 59.5a36.07 36.07 0 0 0 -4.81 9.66l-1-.43a22.58 22.58 0 0 1 5.81-9.23z"
          fill="#8780a5"
          fillRule="evenodd"
        />
        <g clipPath={`url(#${id}-a)`}>
          <path
            d="m82.1 60.54h16.16v7.11h-16.16z"
            fill="#8780a5"
            transform="matrix(.40082878 -.91615298 .91615298 .40082878 -4.68 121.03)"
          />
        </g>
        <g fillRule="evenodd">
          <path
            d="m93.41 60.21c-1.38-2.75 9.59-5.8 16.47 1.33-4.44-1.95-12.71 6.2-16.47-1.33z"
            fill="#8780a5"
          />
          <path
            d="m93.41 60.21s9.22-3.61 16.47 1.33c-4.44-1.95-12.71 6.2-16.47-1.33z"
            fill="#584d82"
          />
          <path
            d="m92.59 59.5c2.38-.69-1.81-8.86-9.8-9 3.58 1.5 3.28 10.89 9.8 9z"
            fill="#8780a5"
          />
          <path
            d="m92.59 59.5s-2.91-7.44-9.8-9c3.58 1.5 3.28 10.89 9.8 9z"
            fill="#584d82"
          />
        </g>
        <ellipse cx="65.66" cy="69.73" fill="#b7b3c9" rx="8.19" ry="8.86" />
        <ellipse cx="65.66" cy="69.73" fill="#9f99b7" rx="5.85" ry="6.33" />
        <ellipse cx="80.49" cy="66.02" fill="#e7e6ed" rx="8.03" ry="8.69" />
        <ellipse cx="80.49" cy="66.76" fill="#cfccdb" rx="5.86" ry="7.09" />
        <ellipse cx="53.05" cy="70" fill="#e7e6ed" rx="13.56" ry="10.64" />
        <ellipse cx="53.05" cy="70" fill="#cfccdb" rx="10.58" ry="8.3" />
        <ellipse cx="53.05" cy="70" fill="#b7b3c9" rx="7.3" ry="5.72" />
        <ellipse cx="53.05" cy="70" fill="#9f99b7" rx="3.8" ry="2.98" />
        <path d="m34.19 28.4 42.22 71.99.44-.25-40.94-72.73z" fill="#fff" />
        <path d="m44.75 24.14 29.31 78.14.47-.17-27.92-78.65z" fill="#fff" />
        <ellipse cx="79.9" cy="70.46" fill="#e7e6ed" rx="20.59" ry="7.98" />
        <ellipse cx="79.9" cy="71.63" fill="#cfccdb" rx="17.41" ry="6.75" />
        <ellipse cx="79.9" cy="72.47" fill="#b7b3c9" rx="13.37" ry="5.18" />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a18 18 0 0 0 18-18v-17.71z"
          fill="#8780a5"
        />
        <path
          d="m39.49 69.73v17.71a18 18 0 0 0 18 18h25a17.93 17.93 0 0 0 11.23-4c-16.64 7.41-54.23-9.35-54.23-31.71z"
          fill="#6f6693"
        />
        <path d="m56.41 105.43h27.16v2.68h-27.16z" fill="#584d82" />
        <path d="m39.49 74.79h60.99v4.21h-60.99z" fill="#3f336f" />
        <path d="m39.49 81.62h60.99v1.34h-60.99z" fill="#584d82" />
      </svg>
    );
  }
};

RamenCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'ramen-circle-illustration',
};

export default memo(RamenCircleIllustration);
export {RamenCircleIllustration as PureRamenCircleIllustration};
