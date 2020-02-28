/** @module GiftCircleIllustration */
import React, {FC, memo, useState} from 'react';

type GiftCircleIllustrationProps = {
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

/** Renders a gift illustration. */
const GiftCircleIllustration: FC<GiftCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Gift Circle Illustration</title>
        <desc id={`${id}-description`}>Opened gift illustration in color</desc>
        <pattern
          id={`${id}-a`}
          height="4"
          patternTransform="translate(36 4)"
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
        <pattern
          id={`${id}-b`}
          height="4"
          patternTransform="translate(36 4)"
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
          patternTransform="translate(36 4)"
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
        <path
          d="m45.42 52.06c0-1.79-2.39-10.53-8.69-16.51 20.63 0 25.36 12.71 39.48 16.73z"
          fill="#f17732"
        />
        <path
          d="m99.75 52.09-30.88.29c14.13-4 18.85-16.73 39.48-16.73-6.29 6-8.68 14.72-8.68 16.51"
          fill="#99052e"
        />
        <path
          d="m89.78 52.32h-35.51c0-1.8 5.65-4 4.12-16.7 17.82 16.76 26.61 8.8 31.39 16.7"
          fill="#2870b5"
        />
        <path
          d="m92.27 106.66c-17.64 0-21.12-8.76-21.27-9.17a1.15 1.15 0 0 1 2.15-.81c.06.15 4.09 9.59 25.46 7.33 12.49-1.32 13.35-3.1 13.38-3.17-.19-.6-3-2-5.93-2.56-2.11-.43-3.35-1.55-3.14-2.88.28-1.83 2.93-2.49 7.88-2a20.52 20.52 0 0 1 8.25 2.76c2.09 1.13 3.14 1.69 5.07.6a1.16 1.16 0 0 1 1.57.44 1.15 1.15 0 0 1 -.44 1.56c-3 1.72-5 .65-7.29-.58a18.45 18.45 0 0 0 -7.41-2.49 14.61 14.61 0 0 0 -4.89 0 2 2 0 0 0 .85.25c.33.07 7.92 1.63 7.77 5-.09 1.83-2 3.89-15.42 5.31a63.67 63.67 0 0 1 -6.59.41z"
          fill="#5fcbeb"
        />
        <path
          d="m92.27 106.66c-17.64 0-21.12-8.76-21.27-9.17-.22-.6 1.85-.78 2.44-1 4.3 14.46 41.52 9 40.78 3.9a2.33 2.33 0 0 1 0 1.31c-.61 1.5-2.94 3.29-15.36 4.6a63.67 63.67 0 0 1 -6.59.36z"
          fill="#2870b5"
        />
        <path d="m45.42 52.09h54.33v45.93h-54.33z" fill="#f8f7f4" />
        <path d="m45.42 52.09h54.33v45.93h-54.33z" fill={`url(#${id}-a)`} />
        <path
          d="m99.75 98h-54.33v-40.67c0 19.67 45.43 40.67 54.33 40.67z"
          fill="#fde5cb"
        />
        <path
          d="m61 69.66c-1.88-3-9.28 6.35-13.61 8.23 5.18-1.59 10-7.6 11.41-6.23 1.2 1.13-.8 4.34-11.38 6.23 11.44-.2 15.47-5.23 13.58-8.23z"
          fill="#f17732"
        />
        <path
          d="m36 71.66c1.45-1.37 6.23 4.64 11.42 6.23-4.33-1.89-11.74-11.25-13.62-8.23s2.17 8 13.62 8.23c-10.55-1.89-12.61-5.1-11.42-6.23z"
          fill="#f17732"
        />
        <path d="m32.81 77.89h29.21v23.75h-29.21z" fill="#feca1e" />
        <path d="m32.81 77.89h29.21v23.75h-29.21z" fill={`url(#${id}-b)`} />
        <path
          d="m62 101.64h-29.19v-19.19c0 9.28 24.43 19.19 29.19 19.19z"
          fill="#f17732"
        />
        <path
          d="m62 101.64h-29.19v-19.19c0 9.28 24.43 19.19 29.19 19.19z"
          fill={`url(#${id}-c)`}
        />
        <ellipse cx="47.42" cy="77.77" fill="#99052e" rx="2.57" ry="1.97" />
        <path d="m31.54 77.77h31.76v9.9h-31.76z" fill="#feca1e" />
        <path d="m31.54 77.77h31.76v9.9h-31.76z" fill="#feca1e" />
        <path
          d="m46 87.67h-14.46v-9.9c0 7.81 14.46 9.9 14.46 9.9z"
          fill="#f17732"
        />
        <path d="m46.04 77.77h2.76v23.87h-2.76z" fill="#f17732" />
        <path
          d="m46 95.75v5.89h2.8v-4.5c-.92-.44-1.8-.9-2.8-1.39z"
          fill="#99052e"
        />
        <path
          d="m105.66 95.77a15.24 15.24 0 0 1 4.89 0 18.45 18.45 0 0 1 7.45 2.44c2.28 1.23 4.25 2.3 7.29.58a1.15 1.15 0 0 0 .44-1.56c-.26.79-2.39 1.64-4 1.46-2-.23-4.91-3.47-11.3-4s-4.94.98-4.77 1.08z"
          fill="#2870b5"
        />
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
        <title id={`${id}-title`}>Gift Circle Illustration</title>
        <desc id={`${id}-description`}>Gift illustration in color</desc>
        <pattern
          id={`${id}-a`}
          height="4"
          patternTransform="translate(36 4)"
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
        <pattern
          id={`${id}-b`}
          height="4"
          patternTransform="translate(36 4)"
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
          patternTransform="translate(36 4)"
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
        <path
          d="m95.34 34.88c-3.14-5.05-15.52 10.62-22.76 13.75 8.68-2.63 16.66-12.7 19.08-10.41 2 1.88-1.45 7.28-19.08 10.41 19.14-.33 25.88-8.74 22.76-13.75z"
          fill="#5fcbeb"
        />
        <path
          d="m53.51 38.22c2.42-2.29 10.4 7.76 19.07 10.41-7.23-3.13-19.58-18.8-22.76-13.75s3.63 13.42 22.76 13.75c-17.58-3.13-21.06-8.53-19.07-10.41z"
          fill="#5fcbeb"
        />
        <path d="m45.42 48.55h54.33v49.47h-54.33z" fill="#f8f7f4" />
        <path d="m45.42 48.55h54.33v49.47h-54.33z" fill={`url(#${id}-a)`} />
        <path
          d="m99.75 98h-54.33v-40.67c0 19.67 45.43 40.67 54.33 40.67z"
          fill="#fde5cb"
        />
        <ellipse cx="72.58" cy="48.55" fill="#2870b5" rx="4.27" ry="2.59" />
        <path d="m43.41 48.55h58.35v14.78h-58.35z" fill="#f8f7f4" />
        <path
          d="m71.21 63.33h-27.8v-14.78c0 11.72 27.8 14.78 27.8 14.78z"
          fill="#fde5cb"
        />
        <path
          d="m61 69.66c-1.88-3-9.28 6.35-13.61 8.23 5.18-1.59 10-7.6 11.41-6.23 1.2 1.13-.8 4.34-11.38 6.23 11.44-.2 15.47-5.23 13.58-8.23z"
          fill="#f17732"
        />
        <path
          d="m36 71.66c1.45-1.37 6.23 4.64 11.42 6.23-4.33-1.89-11.74-11.25-13.62-8.23s2.17 8 13.62 8.23c-10.55-1.89-12.61-5.1-11.42-6.23z"
          fill="#f17732"
        />
        <path d="m32.81 77.89h29.21v23.75h-29.21z" fill="#feca1e" />
        <path d="m32.81 77.89h29.21v23.75h-29.21z" fill={`url(#${id}-b)`} />
        <path
          d="m62 101.64h-29.19v-19.19c0 9.28 24.43 19.19 29.19 19.19z"
          fill="#f17732"
        />
        <path
          d="m62 101.64h-29.19v-19.19c0 9.28 24.43 19.19 29.19 19.19z"
          fill={`url(#${id}-c)`}
        />
        <ellipse cx="47.42" cy="77.77" fill="#99052e" rx="2.57" ry="1.97" />
        <path d="m31.54 77.77h31.76v9.9h-31.76z" fill="#feca1e" />
        <path d="m31.54 77.77h31.76v9.9h-31.76z" fill="#feca1e" />
        <path
          d="m46 87.67h-14.46v-9.9c0 7.81 14.46 9.9 14.46 9.9z"
          fill="#f17732"
        />
        <path d="m71.21 48.55h2.76v49.47h-2.76z" fill="#5fcbeb" />
        <path
          d="m71.21 98h2.79v-10.17c-.92-.51-1.84-1-2.75-1.59z"
          fill="#2870b5"
        />
        <path d="m46.04 77.77h2.76v23.87h-2.76z" fill="#f17732" />
        <path
          d="m46 95.75v5.89h2.8v-4.5c-.92-.44-1.8-.9-2.8-1.39z"
          fill="#99052e"
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
        <title id={`${id}-title`}>Gift Circle Illustration</title>
        <desc id={`${id}-description`}>Grey gift illustration</desc>
        <circle cx="70" cy="70" fill="#5b6279" r="70" />
        <path
          d="m95.34 34.88c-3.14-5.05-15.52 10.62-22.76 13.75 8.68-2.63 16.66-12.7 19.08-10.41 2 1.88-1.45 7.28-19.08 10.41 19.14-.33 25.88-8.74 22.76-13.75z"
          fill="#bdc0c9"
        />
        <path
          d="m53.51 38.22c2.42-2.29 10.4 7.76 19.07 10.41-7.23-3.13-19.58-18.8-22.76-13.75s3.63 13.42 22.76 13.75c-17.58-3.13-21.06-8.53-19.07-10.41z"
          fill="#bdc0c9"
        />
        <ellipse cx="72.58" cy="48.55" fill="#8c91a1" rx="4.27" ry="2.59" />
        <path d="m45.42 48.55h54.33v49.47h-54.33z" fill="#dee0e4" />
        <path
          d="m99.75 98h-54.33v-40.67c0 19.67 45.43 40.67 54.33 40.67z"
          fill="#cdcfd6"
        />
        <path d="m43.41 48.55h58.35v14.78h-58.35z" fill="#fff" />
        <path
          d="m71.21 63.33h-27.8v-14.78c0 11.72 27.8 14.78 27.8 14.78z"
          fill="#eeeff1"
        />
        <path
          d="m61 69.66c-1.88-3-9.28 6.35-13.61 8.23 5.18-1.59 10-7.6 11.41-6.23 1.2 1.13-.8 4.34-11.38 6.23 11.44-.2 15.47-5.23 13.58-8.23z"
          fill="#8c91a1"
        />
        <path
          d="m36 71.66c1.45-1.37 6.23 4.64 11.42 6.23-4.33-1.89-11.74-11.25-13.62-8.23s2.17 8 13.62 8.23c-10.55-1.89-12.61-5.1-11.42-6.23z"
          fill="#8c91a1"
        />
        <ellipse cx="47.42" cy="77.77" fill="#6b7186" rx="2.57" ry="1.97" />
        <path d="m32.81 77.75h29.21v23.89h-29.21z" fill="#9da1af" />
        <path
          d="m62 101.64h-29.19v-19.19c0 9.28 24.43 19.19 29.19 19.19z"
          fill="#8c91a1"
        />
        <path d="m31.54 77.77h31.76v9.9h-31.76z" fill="#bdc0c9" />
        <path
          d="m46 87.62h-14.46v-9.85c0 7.81 14.46 9.85 14.46 9.85z"
          fill="#adb0bc"
        />
        <path d="m71.21 48.43h2.76v49.59h-2.76z" fill="#bdc0c9" />
        <path
          d="m71.21 98h2.79v-10.17c-.92-.51-1.84-1-2.75-1.59z"
          fill="#8c91a1"
        />
        <path d="m46.04 77.62h2.76v24.02h-2.76z" fill="#8c91a1" />
        <path
          d="m46 95.75v5.89h2.8v-4.5c-.92-.44-1.8-.9-2.8-1.39z"
          fill="#6b7186"
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
        <title id={`${id}-title`}>Gift Circle Illustration</title>
        <desc id={`${id}-description`}>Purple gift illustration</desc>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m95.34 34.88c-3.14-5.05-15.52 10.62-22.76 13.75 8.68-2.63 16.66-12.7 19.08-10.41 2 1.88-1.45 7.28-19.08 10.41 19.14-.33 25.88-8.74 22.76-13.75z"
          fill="#9f99b7"
        />
        <path
          d="m53.51 38.22c2.42-2.29 10.4 7.76 19.07 10.41-7.23-3.13-19.58-18.8-22.76-13.75s3.63 13.42 22.76 13.75c-17.58-3.13-21.06-8.53-19.07-10.41z"
          fill="#9f99b7"
        />
        <ellipse cx="72.58" cy="48.55" fill="#584d82" rx="4.27" ry="2.59" />
        <path d="m45.42 48.55h54.33v49.47h-54.33z" fill="#cfccdb" />
        <path
          d="m99.75 98h-54.33v-40.67c0 19.67 45.43 40.67 54.33 40.67z"
          fill="#b7b3c9"
        />
        <path d="m43.41 48.55h58.35v14.78h-58.35z" fill="#fff" />
        <path
          d="m71.21 63.33h-27.8v-14.78c0 11.72 27.8 14.78 27.8 14.78z"
          fill="#e7e6ed"
        />
        <path
          d="m61 69.66c-1.88-3-9.28 6.35-13.61 8.23 5.18-1.59 10-7.6 11.41-6.23 1.2 1.13-.8 4.34-11.38 6.23 11.44-.2 15.47-5.23 13.58-8.23z"
          fill="#584d82"
        />
        <path
          d="m36 71.66c1.45-1.37 6.23 4.64 11.42 6.23-4.33-1.89-11.74-11.25-13.62-8.23s2.17 8 13.62 8.23c-10.55-1.89-12.61-5.1-11.42-6.23z"
          fill="#584d82"
        />
        <ellipse cx="47.42" cy="77.77" fill="#281a5e" rx="2.57" ry="1.97" />
        <path d="m32.81 77.75h29.21v23.89h-29.21z" fill="#6f6693" />
        <path
          d="m62 101.64h-29.19v-19.19c0 9.28 24.43 19.19 29.19 19.19z"
          fill="#584d82"
        />
        <path d="m31.54 77.77h31.76v9.9h-31.76z" fill="#9f99b7" />
        <path
          d="m46 87.62h-14.46v-9.85c0 7.81 14.46 9.85 14.46 9.85z"
          fill="#8780a5"
        />
        <path d="m71.21 48.43h2.76v49.59h-2.76z" fill="#9f99b7" />
        <path
          d="m71.21 98h2.79v-10.17c-.92-.51-1.84-1-2.75-1.59z"
          fill="#584d82"
        />
        <path d="m46.04 77.62h2.76v24.02h-2.76z" fill="#584d82" />
        <path
          d="m46 95.75v5.89h2.8v-4.5c-.92-.44-1.8-.9-2.8-1.39z"
          fill="#281a5e"
        />
      </svg>
    );
  }
};

GiftCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'gift-circle-illustration',
};

export default memo(GiftCircleIllustration);
export {GiftCircleIllustration as PureGiftCircleIllustration};
