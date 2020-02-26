/** @module CreditCardCircleIllustration */
import React, {FC, memo, useState} from 'react';

type CreditCardCircleIllustrationProps = {
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

const CreditCardCircleIllustration: FC<CreditCardCircleIllustrationProps> = ({
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
        id={`${id}-illuminated`}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="illuminated"
      >
        <title id={`${id}-title`}>Credit Card Circle Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of multiple credit cards.
        </desc>
        <pattern
          id={`${id}-a`}
          height="4"
          overflow="visible"
          patternUnits="userSpaceOnUse"
          viewBox=".35 -4.35 4 4"
          width="4"
          x="-1925.71"
          y="-1372.22"
        >
          <path d="m.35-4.35h4v4h-4z" fill="none" />
          <circle cx="3.35" cy="-.35" fill="#f17732" r=".35" />
          <circle cx="1.35" cy="-.35" fill="#f17732" r=".35" />
          <circle cx="4.35" cy="-2.35" fill="#f17732" r=".35" />
          <circle cx="2.35" cy="-2.35" fill="#f17732" r=".35" />
          <circle cx=".35" cy="-2.35" fill="#f17732" r=".35" />
          <circle cx="3.35" cy="-4.35" fill="#f17732" r=".35" />
          <circle cx="1.35" cy="-4.35" fill="#f17732" r=".35" />
        </pattern>
        <pattern
          id={`${id}-b`}
          height="4"
          overflow="visible"
          patternUnits="userSpaceOnUse"
          viewBox=".35 -4.35 4 4"
          width="4"
          x="-1925.71"
          y="-1372.22"
        >
          <path d="m.35-4.35h4v4h-4z" fill="none" />
          <circle cx="3.35" cy="-.35" fill="#99052e" r=".35" />
          <circle cx="1.35" cy="-.35" fill="#99052e" r=".35" />
          <circle cx="4.35" cy="-2.35" fill="#99052e" r=".35" />
          <circle cx="2.35" cy="-2.35" fill="#99052e" r=".35" />
          <circle cx=".35" cy="-2.35" fill="#99052e" r=".35" />
          <circle cx="3.35" cy="-4.35" fill="#99052e" r=".35" />
          <circle cx="1.35" cy="-4.35" fill="#99052e" r=".35" />
        </pattern>
        <pattern
          id={`${id}-c`}
          height="4"
          overflow="visible"
          patternUnits="userSpaceOnUse"
          viewBox=".35 -4.35 4 4"
          width="4"
          x="-1925.71"
          y="-1372.22"
        >
          <path d="m.35-4.35h4v4h-4z" fill="none" />
          <circle cx="3.35" cy="-.35" fill="#10004c" r=".35" />
          <circle cx="1.35" cy="-.35" fill="#10004c" r=".35" />
          <circle cx="4.35" cy="-2.35" fill="#10004c" r=".35" />
          <circle cx="2.35" cy="-2.35" fill="#10004c" r=".35" />
          <circle cx=".35" cy="-2.35" fill="#10004c" r=".35" />
          <circle cx="3.35" cy="-4.35" fill="#10004c" r=".35" />
          <circle cx="1.35" cy="-4.35" fill="#10004c" r=".35" />
        </pattern>
        <pattern
          id={`${id}-d`}
          patternTransform="matrix(.9222 -.3867 .3867 .9222 1614.4722 -2771.4128)"
          xlinkHref={`#${id}-b`}
        />
        <pattern
          id={`${id}-e`}
          patternTransform="matrix(.9222 -.3867 .3867 .9222 1614.4722 -2771.4128)"
          xlinkHref={`#${id}-c`}
        />
        <pattern
          id={`${id}-f`}
          patternTransform="translate(0 1.2191)"
          xlinkHref={`#${id}-a`}
        />
        <pattern
          id={`${id}-g`}
          patternTransform="translate(0 1.2191)"
          xlinkHref={`#${id}-b`}
        />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m104.3 81.74-67.42 28.27c-3.46 1.45-7.44-.18-8.89-3.64l-16.54-39.42c-1.45-3.46.18-7.44 3.64-8.89l67.42-28.27c3.46-1.45 7.44.18 8.89 3.64l16.53 39.43c1.45 3.45-.17 7.43-3.63 8.88z"
          fill="#2870b5"
        />
        <path
          d="m103.7 80.18-67.51 28.31c-2.61 1.09-5.61-.13-6.7-2.74l-16.54-39.44c-1.09-2.61.13-5.61 2.74-6.7l67.51-28.3c2.61-1.09 5.61.13 6.7 2.74l16.54 39.44c1.09 2.6-.14 5.6-2.74 6.69z"
          fill="#f17732"
        />
        <path
          d="m103.7 80.18-67.51 28.31c-2.61 1.09-5.61-.13-6.7-2.74l-16.54-39.44c-1.09-2.61.13-5.61 2.74-6.7l67.51-28.3c2.61-1.09 5.61.13 6.7 2.74l16.54 39.44c1.09 2.6-.14 5.6-2.74 6.69z"
          fill={`url(#${id}-d)`}
        />
        <path
          d="m100.54 81.51-64.21 26.92c-2.69 1.13-5.75-.07-6.84-2.68l-16.54-39.44c-1.09-2.61.2-5.63 2.89-6.76l3.99-1.67c23.72 52.97 66.49 29.59 80.71 23.63z"
          fill="#99052e"
        />
        <path
          d="m100.54 81.51-64.21 26.92c-2.69 1.13-5.75-.07-6.84-2.68l-16.54-39.44c-1.09-2.61.2-5.63 2.89-6.76l3.99-1.67c23.72 52.97 66.49 29.59 80.71 23.63z"
          fill={`url(#${id}-e)`}
        />
        <path
          d="m41.21 83.2-8.49 3.56c-1.26.53-2.7-.06-3.23-1.32l-2.05-4.89c-.53-1.26.06-2.7 1.32-3.23l8.49-3.56c1.26-.53 2.7.06 3.23 1.32l2.05 4.89c.53 1.26-.06 2.7-1.32 3.23z"
          fill="#f8f7f4"
        />
        <path
          d="m55.05 74.07h42.79v3.63h-42.79z"
          fill="#2870b5"
          transform="matrix(.9222 -.3867 .3867 .9222 -23.3982 35.4656)"
        />
        <path
          d="m75.37 75.98h24.09v3.77h-24.09z"
          fill="#10004c"
          transform="matrix(.9222 -.3867 .3867 .9222 -23.311 39.8621)"
        />
        <path
          d="m69.25 41.03h16.77v8.12h-16.77z"
          fill="#10004c"
          transform="matrix(.9222 -.3867 .3867 .9222 -11.395 33.5307)"
        />
        <path
          d="m106.95 97.85h-73.9c-3.53 0-6.39-2.86-6.39-6.39v-43.55c0-3.53 2.86-6.39 6.39-6.39h73.9c3.53 0 6.39 2.86 6.39 6.39v43.55c0 3.53-2.86 6.39-6.39 6.39z"
          fill="#5fcbeb"
        />
        <path
          d="m106.6 96.18h-73.2c-2.83 0-5.12-2.29-5.12-5.12v-42.76c0-2.83 2.29-5.12 5.12-5.12h73.21c2.83 0 5.12 2.29 5.12 5.12v42.77c-.01 2.82-2.3 5.11-5.13 5.11z"
          fill="#feca1e"
        />
        <path
          d="m106.6 96.18h-73.2c-2.83 0-5.12-2.29-5.12-5.12v-42.76c0-2.83 2.29-5.12 5.12-5.12h73.21c2.83 0 5.12 2.29 5.12 5.12v42.77c-.01 2.82-2.3 5.11-5.13 5.11z"
          fill={`url(#${id}-f)`}
        />
        <path
          d="m103.18 96.18h-69.63c-2.91 0-5.28-2.29-5.28-5.12v-42.76c0-2.83 2.36-5.12 5.28-5.12h4.33c1.39 58.02 49.88 53 65.3 53z"
          fill="#f17732"
        />
        <path
          d="m103.18 96.18h-69.63c-2.91 0-5.28-2.29-5.28-5.12v-42.76c0-2.83 2.36-5.12 5.28-5.12h4.33c1.39 58.02 49.88 53 65.3 53z"
          fill={`url(#${id}-g)`}
        />
        <path
          d="m47.82 74.8h-9.21c-1.36 0-2.47-1.1-2.47-2.47v-5.3c0-1.36 1.1-2.47 2.47-2.47h9.21c1.36 0 2.47 1.1 2.47 2.47v5.3c-.01 1.37-1.11 2.47-2.47 2.47z"
          fill="#f8f7f4"
        />
        <path d="m61.74 79.86h42.79v3.63h-42.79z" fill="#2870b5" />
        <path d="m80.44 85.86h24.09v3.77h-24.09z" fill="#10004c" />
        <path d="m87.76 49.68h16.77v8.12h-16.77z" fill="#99052e" />
      </svg>
    );
  } else if (color) {
    return (
      <svg
        {...elementProps}
        id={`${id}-color`}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="color"
      >
        <title id={`${id}-title`}>Credit Card Circle Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of colored credit cards.
        </desc>
        <pattern
          id={`${id}-a`}
          height="4"
          overflow="visible"
          patternUnits="userSpaceOnUse"
          viewBox=".35 -4.35 4 4"
          width="4"
          x="-1925.71"
          y="-1195"
        >
          <path d="m.35-4.35h4v4h-4z" fill="none" />
          <circle cx="3.35" cy="-.35" fill="#f17732" r=".35" />
          <circle cx="1.35" cy="-.35" fill="#f17732" r=".35" />
          <circle cx="4.35" cy="-2.35" fill="#f17732" r=".35" />
          <circle cx="2.35" cy="-2.35" fill="#f17732" r=".35" />
          <circle cx=".35" cy="-2.35" fill="#f17732" r=".35" />
          <circle cx="3.35" cy="-4.35" fill="#f17732" r=".35" />
          <circle cx="1.35" cy="-4.35" fill="#f17732" r=".35" />
        </pattern>
        <pattern
          id={`${id}-b`}
          height="4"
          overflow="visible"
          patternUnits="userSpaceOnUse"
          viewBox=".35 -4.35 4 4"
          width="4"
          x="-1925.71"
          y="-1195"
        >
          <path d="m.35-4.35h4v4h-4z" fill="none" />
          <circle cx="3.35" cy="-.35" fill="#99052e" r=".35" />
          <circle cx="1.35" cy="-.35" fill="#99052e" r=".35" />
          <circle cx="4.35" cy="-2.35" fill="#99052e" r=".35" />
          <circle cx="2.35" cy="-2.35" fill="#99052e" r=".35" />
          <circle cx=".35" cy="-2.35" fill="#99052e" r=".35" />
          <circle cx="3.35" cy="-4.35" fill="#99052e" r=".35" />
          <circle cx="1.35" cy="-4.35" fill="#99052e" r=".35" />
        </pattern>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m106.95 97.85h-73.9c-3.53 0-6.39-2.86-6.39-6.39v-43.55c0-3.53 2.86-6.39 6.39-6.39h73.9c3.53 0 6.39 2.86 6.39 6.39v43.55c0 3.53-2.86 6.39-6.39 6.39z"
          fill="#5fcbeb"
        />
        <path
          d="m106.6 96.18h-73.2c-2.83 0-5.12-2.29-5.12-5.12v-42.76c0-2.83 2.29-5.12 5.12-5.12h73.21c2.83 0 5.12 2.29 5.12 5.12v42.77c-.01 2.82-2.3 5.11-5.13 5.11z"
          fill="#feca1e"
        />
        <path
          d="m106.6 96.18h-73.2c-2.83 0-5.12-2.29-5.12-5.12v-42.76c0-2.83 2.29-5.12 5.12-5.12h73.21c2.83 0 5.12 2.29 5.12 5.12v42.77c-.01 2.82-2.3 5.11-5.13 5.11z"
          fill={`url(#${id}-a)`}
        />
        <path
          d="m103.18 96.18h-69.63c-2.91 0-5.28-2.29-5.28-5.12v-42.76c0-2.83 2.36-5.12 5.28-5.12h4.33c1.39 58.02 49.88 53 65.3 53z"
          fill="#f17732"
        />
        <path
          d="m103.18 96.18h-69.63c-2.91 0-5.28-2.29-5.28-5.12v-42.76c0-2.83 2.36-5.12 5.28-5.12h4.33c1.39 58.02 49.88 53 65.3 53z"
          fill={`url(#${id}-b)`}
        />
        <path
          d="m47.82 74.8h-9.21c-1.36 0-2.47-1.1-2.47-2.47v-5.3c0-1.36 1.1-2.47 2.47-2.47h9.21c1.36 0 2.47 1.1 2.47 2.47v5.3c-.01 1.37-1.11 2.47-2.47 2.47z"
          fill="#f8f7f4"
        />
        <path d="m61.74 79.86h42.79v3.63h-42.79z" fill="#2870b5" />
        <path d="m80.44 85.86h24.09v3.77h-24.09z" fill="#10004c" />
        <path d="m87.76 49.68h16.77v8.12h-16.77z" fill="#99052e" />
      </svg>
    );
  } else if (draft) {
    return (
      <svg
        {...elementProps}
        id={`${id}-draft`}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="draft"
      >
        <title id={`${id}-title`}>Credit Card Circle Illustration</title>
        <desc id={`${id}-description`}>Illustration of grey credit cards.</desc>
        <circle cx="70" cy="70" fill="#5b6279" r="70" />
        <path
          d="m106.95 97.85h-73.9c-3.53 0-6.39-2.86-6.39-6.39v-43.55c0-3.53 2.86-6.39 6.39-6.39h73.9c3.53 0 6.39 2.86 6.39 6.39v43.55c0 3.53-2.86 6.39-6.39 6.39z"
          fill="#eeeff1"
        />
        <path
          d="m106.6 96.18h-73.2c-2.83 0-5.12-2.29-5.12-5.12v-42.76c0-2.83 2.29-5.12 5.12-5.12h73.21c2.83 0 5.12 2.29 5.12 5.12v42.77c-.01 2.82-2.3 5.11-5.13 5.11z"
          fill="#cdcfd6"
        />
        <path
          d="m103.18 96.18h-69.63c-2.91 0-5.28-2.29-5.28-5.12v-42.76c0-2.83 2.36-5.12 5.28-5.12h4.33c1.39 58.02 49.88 53 65.3 53z"
          fill="#bdc0c9"
        />
        <path
          d="m47.82 74.8h-9.21c-1.36 0-2.47-1.1-2.47-2.47v-5.3c0-1.36 1.1-2.47 2.47-2.47h9.21c1.36 0 2.47 1.1 2.47 2.47v5.3c-.01 1.37-1.11 2.47-2.47 2.47z"
          fill="#fff"
        />
        <path d="m61.74 79.86h42.79v3.63h-42.79z" fill="#adb0bc" />
        <path d="m80.44 85.86h24.09v3.77h-24.09z" fill="#8c91a1" />
        <path d="m87.76 49.68h16.77v8.12h-16.77z" fill="#adb0bc" />
      </svg>
    );
  } else {
    return (
      <svg
        {...elementProps}
        id={`${id}-purple`}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="default"
      >
        <title id={`${id}-title`}>Credit Card Circle Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of purple credit cards.
        </desc>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m106.95 97.85h-73.9c-3.53 0-6.39-2.86-6.39-6.39v-43.55c0-3.53 2.86-6.39 6.39-6.39h73.9c3.53 0 6.39 2.86 6.39 6.39v43.55c0 3.53-2.86 6.39-6.39 6.39z"
          fill="#e7e6ed"
        />
        <path
          d="m106.6 96.18h-73.2c-2.83 0-5.12-2.29-5.12-5.12v-42.76c0-2.83 2.29-5.12 5.12-5.12h73.21c2.83 0 5.12 2.29 5.12 5.12v42.77c-.01 2.82-2.3 5.11-5.13 5.11z"
          fill="#b7b3c9"
        />
        <path
          d="m103.18 96.18h-69.63c-2.91 0-5.28-2.29-5.28-5.12v-42.76c0-2.83 2.36-5.12 5.28-5.12h4.33c1.39 58.02 49.88 53 65.3 53z"
          fill="#9f99b7"
        />
        <path
          d="m47.82 74.8h-9.21c-1.36 0-2.47-1.1-2.47-2.47v-5.3c0-1.36 1.1-2.47 2.47-2.47h9.21c1.36 0 2.47 1.1 2.47 2.47v5.3c-.01 1.37-1.11 2.47-2.47 2.47z"
          fill="#fff"
        />
        <path d="m61.74 79.86h42.79v3.63h-42.79z" fill="#8780a5" />
        <path d="m80.44 85.86h24.09v3.77h-24.09z" fill="#584d82" />
        <path d="m87.76 49.68h16.77v8.12h-16.77z" fill="#8780a5" />
      </svg>
    );
  }
};

CreditCardCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'credit-card-circle-illustration',
};

export default memo(CreditCardCircleIllustration);
