/** @module GivingCircleIllustration */
import React, {FC, memo, useState} from 'react';

type GivingCircleIllustrationProps = {
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

/** Renders a giving illustration. */
const GivingCircleIllustration: FC<GivingCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Giving Circle Illustration</title>
        <desc id={`${id}-description`}>
          Hand holding a gift with the bow undone in color
        </desc>
        <pattern
          id={`${id}-a`}
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
          id={`${id}-b`}
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
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m71 0a15.6 15.6 0 0 0 3 3.83c2.46 2.43-2.2 6.43-3.62 12.05-1 3.8 0 10.27 3.81 10.27 2.25 0 1-2.85 2.44-6.84.73-2 3.91-6 6.33-8.52 1.7-1.74 2-6 3-9a69.88 69.88 0 0 0 -14.96-1.79z"
          fill="#5fcbeb"
        />
        <path
          d="m74 3.85c2.46 2.43-2.2 6.43-3.62 12.05-1 3.8 0 10.27 3.81 10.27-1.88-1.82-2.48-5.13-1.65-8.85.45-2 3.8-7 5.45-10 1.48-2.81-2.2-3.32-4.92-7.24q-1.07-.08-2.07-.08a15.6 15.6 0 0 0 3 3.85z"
          fill="#2870b5"
        />
        <path
          d="m67.89 52.59a23.26 23.26 0 0 1 -9.58-1.5 7.75 7.75 0 0 1 -2.15-1.41 4.42 4.42 0 0 1 -1.29-2.39 5.37 5.37 0 0 1 .2-2.68 6.85 6.85 0 0 1 .47-1.22 9.38 9.38 0 0 1 .6-1.13 23.48 23.48 0 0 1 3.06-3.91c.55-.61 1.15-1.16 1.72-1.74l1.67-1.67a27.08 27.08 0 0 0 5.41-7.37 12 12 0 0 0 .68-2l.11-1a6 6 0 0 0 0-.95 4.19 4.19 0 0 0 -1.82-2.93 8.53 8.53 0 0 0 -3.7-1.32 13.11 13.11 0 0 0 -4.19.1 8.71 8.71 0 0 0 -6.6 4.41 7.87 7.87 0 0 0 -.74 4.18 13.75 13.75 0 0 0 .26 2.27c.17.76.42 1.51.63 2.29a.17.17 0 0 1 -.11.2.16.16 0 0 1 -.18-.07c-.42-.69-.88-1.38-1.24-2.13a12.28 12.28 0 0 1 -.86-2.36 9.06 9.06 0 0 1 .08-5.23 9.34 9.34 0 0 1 3.17-4.43 12.71 12.71 0 0 1 4.86-2.29 14.51 14.51 0 0 1 5.34-.27 10.59 10.59 0 0 1 5.14 2.11 11.66 11.66 0 0 1 1.07 1 8.18 8.18 0 0 1 .85 1.26 7.11 7.11 0 0 1 .8 2.88 10 10 0 0 1 0 1.45l-.25 1.37a13.82 13.82 0 0 1 -1 2.47 28.9 28.9 0 0 1 -6.3 7.84l-1.8 1.64c-.58.53-1.19 1-1.73 1.58a21.54 21.54 0 0 0 -3 3.48 6.08 6.08 0 0 0 -1.35 4 3.24 3.24 0 0 0 .88 1.77 6.5 6.5 0 0 0 1.76 1.32 16.9 16.9 0 0 0 4.42 1.47 32.42 32.42 0 0 0 4.71.59.16.16 0 0 1 0 .32z"
          fill="#99052e"
        />
        <path
          d="m132.88 100.78-21.22-23.64a12.28 12.28 0 0 0 -12.48-6.51 17.62 17.62 0 0 0 -5.63 1.71q-5.73 2.56-19.79 9.87a.69.69 0 0 0 -.37.55l-21.9.18a.54.54 0 0 0 -.22 0l-13.27-7.29a2.79 2.79 0 0 0 -3.8 1.09l-.64 1.26a1.39 1.39 0 0 0 .54 1.9l16.76 9.29a.74.74 0 0 0 .36.24l25.43 7a.72.72 0 0 0 .61.22q22.74-3.33 27.52-.65l12.38 25.77a70.21 70.21 0 0 0 15.72-20.99z"
          fill="#5fcbeb"
          fillRule="evenodd"
        />
        <path
          d="m34.1 79.86 16.76 9.29a.74.74 0 0 0 .36.24l25.43 7a.72.72 0 0 0 .61.22q22.74-3.29 27.52-.61l12.38 25.77a70.5 70.5 0 0 0 11.35-13.31c-6.86-1.24-14-22-18.72-18.72-6.77 4.7-21.52.9-31.36 3.09-5.59 1.17-24.13-3.96-26.82-5.68-12.82-8.15-15.61-10.07-17.51-7.29z"
          fill="#2870b5"
          fillRule="evenodd"
        />
        <path
          d="m87.45 42.11c-2.4-3.87-11.88 8.12-17.45 10.52 6.64-2 12.75-9.72 14.6-8 1.52 1.44-1.11 5.57-14.6 8 14.67-.25 19.83-6.69 17.45-10.52z"
          fill="#99052e"
        />
        <ellipse cx="70.03" cy="52.48" fill="#5fcbeb" rx="3.28" ry="2.52" />
        <path d="m51.34 52.46h37.37v30.56h-37.37z" fill="#feca1e" />
        <path d="m51.34 52.46h37.37v30.56h-37.37z" fill={`url(#${id}-a)`} />
        <path
          d="m88.72 83h-37.38v-24.53c0 11.88 16.93 24.67 37.38 24.53z"
          fill="#f17732"
        />
        <path
          d="m88.72 83h-37.38v-24.53c0 11.88 16.93 24.67 37.38 24.53z"
          fill={`url(#${id}-b)`}
        />
        <path d="m49.71 52.48h40.63v12.67h-40.63z" fill="#feca1e" />
        <path
          d="m68.27 65.08h-18.56v-12.6c0 9.99 18.56 12.6 18.56 12.6z"
          fill="#f17732"
        />
        <path d="m68.27 52.42h3.53v30.73h-3.53z" fill="#99052e" />
        <path
          d="m70.64 79.5c12.78-1.28 10.66-2.07 22.91-7.16 18.88-7.43 21.49 10.59 6.84 15.92-9.83 2.69-11.45-6.43-27.33-2-7.3 1.99-9.38-6.07-2.42-6.76z"
          fill="#10004c"
          fillRule="evenodd"
        />
        <path
          d="m70.65 78.8c12.78-1.27 10.66-2.07 22.91-7.16 18.88-7.43 25 12.75 10.3 18.07-9.86 2.7-14.86-8.58-30.79-4.18-7.3 2.02-9.38-6.04-2.42-6.73z"
          fill="#5fcbeb"
          fillRule="evenodd"
        />
        <path
          d="m51.39 2.52c.08 1.73 1 6.45 1.08 7.5.25 3.27 11 9.68 12 13.59.68 2.62.67 4.8 1.72 4.54 2.08-.51 3-3.25 2.77-6.22-.58-6.67-8.77-11.43-8.4-13.32a49.37 49.37 0 0 1 1.53-8.15 70 70 0 0 0 -10.7 2.06z"
          fill="#5fcbeb"
        />
        <path
          d="m52.47 10c.25 3.27 11 9.68 12 13.59.68 2.62.67 4.8 1.72 4.54a15.08 15.08 0 0 0 -.28-5.28c-1.23-5.52-7.52-5-13.44-12.85z"
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
        <title id={`${id}-title`}>Giving Circle Illustration</title>
        <desc id={`${id}-description`}>Hand holding a gift in color</desc>
        <pattern
          id={`${id}-a`}
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
          id={`${id}-b`}
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
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m132.88 100.78-21.22-23.64a12.28 12.28 0 0 0 -12.48-6.51 17.62 17.62 0 0 0 -5.63 1.71q-5.73 2.56-19.79 9.87a.69.69 0 0 0 -.37.55l-21.9.18a.54.54 0 0 0 -.22 0l-13.27-7.29a2.79 2.79 0 0 0 -3.8 1.09l-.64 1.26a1.39 1.39 0 0 0 .54 1.9l16.76 9.29a.74.74 0 0 0 .36.24l25.43 7a.72.72 0 0 0 .61.22q22.74-3.33 27.52-.65l12.38 25.77a70.21 70.21 0 0 0 15.72-20.99z"
          fill="#5fcbeb"
          fillRule="evenodd"
        />
        <path
          d="m34.1 79.86 16.76 9.29a.74.74 0 0 0 .36.24l25.43 7a.72.72 0 0 0 .61.22q22.74-3.29 27.52-.61l12.38 25.77a70.5 70.5 0 0 0 11.35-13.31c-6.86-1.24-14-22-18.72-18.72-6.77 4.7-21.52.9-31.36 3.09-5.59 1.17-24.13-3.96-26.82-5.68-12.82-8.15-15.61-10.07-17.51-7.29z"
          fill="#2870b5"
          fillRule="evenodd"
        />
        <path
          d="m87.45 42.11c-2.4-3.87-11.88 8.12-17.45 10.52 6.64-2 12.75-9.72 14.6-8 1.52 1.44-1.11 5.57-14.6 8 14.67-.25 19.83-6.69 17.45-10.52z"
          fill="#99052e"
        />
        <path
          d="m55.43 44.66c1.85-1.75 8 5.94 14.6 8-5.54-2.4-15-14.39-17.42-10.52s2.78 10.24 17.39 10.49c-13.46-2.4-16.1-6.53-14.57-7.97z"
          fill="#99052e"
        />
        <ellipse cx="70.03" cy="52.48" fill="#5fcbeb" rx="3.28" ry="2.52" />
        <path d="m51.34 52.46h37.37v30.56h-37.37z" fill="#feca1e" />
        <path d="m51.34 52.46h37.37v30.56h-37.37z" fill={`url(#${id}-a)`} />
        <path
          d="m88.72 83h-37.38v-24.53c0 11.88 16.93 24.67 37.38 24.53z"
          fill="#f17732"
        />
        <path
          d="m88.72 83h-37.38v-24.53c0 11.88 16.93 24.67 37.38 24.53z"
          fill={`url(#${id}-b)`}
        />
        <path d="m49.71 52.48h40.63v12.67h-40.63z" fill="#feca1e" />
        <path
          d="m68.27 65.08h-18.56v-12.6c0 9.99 18.56 12.6 18.56 12.6z"
          fill="#f17732"
        />
        <path d="m68.27 52.42h3.53v30.73h-3.53z" fill="#99052e" />
        <g fillRule="evenodd">
          <path
            d="m70.64 79.5c12.78-1.28 10.66-2.07 22.91-7.16 18.88-7.43 21.49 10.59 6.84 15.92-9.83 2.69-11.45-6.43-27.33-2-7.3 1.99-9.38-6.07-2.42-6.76z"
            fill="#10004c"
          />
          <path
            d="m70.65 78.8c12.78-1.27 10.66-2.07 22.91-7.16 18.88-7.43 25 12.75 10.3 18.07-9.86 2.7-14.86-8.58-30.79-4.18-7.3 2.02-9.38-6.04-2.42-6.73z"
            fill="#5fcbeb"
          />
        </g>
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
        <title id={`${id}-title`}>Giving Circle Illustration</title>
        <desc id={`${id}-description`}>Hand holding a gift in grey</desc>
        <circle cx="70" cy="70" fill="#5b6279" r="70" />
        <path
          d="m132.88 100.78-21.22-23.64a12.28 12.28 0 0 0 -12.48-6.51 17.62 17.62 0 0 0 -5.63 1.71q-5.73 2.56-19.79 9.87a.69.69 0 0 0 -.37.55l-21.9.18a.54.54 0 0 0 -.22 0l-13.27-7.29a2.79 2.79 0 0 0 -3.8 1.09l-.64 1.26a1.39 1.39 0 0 0 .54 1.9l16.76 9.29a.74.74 0 0 0 .36.24l25.43 7a.72.72 0 0 0 .61.22q22.74-3.33 27.52-.65l12.38 25.77a70.21 70.21 0 0 0 15.72-20.99z"
          fill="#9da1af"
          fillRule="evenodd"
        />
        <g fill="#8c91a1">
          <path
            d="m34.1 79.86 16.76 9.29a.74.74 0 0 0 .36.24l25.43 7a.72.72 0 0 0 .61.22q22.74-3.29 27.52-.61l12.38 25.77a70.5 70.5 0 0 0 11.35-13.31c-6.86-1.24-14-22-18.72-18.72-6.77 4.7-21.52.9-31.36 3.09-5.59 1.17-24.13-3.96-26.82-5.68-12.82-8.15-15.61-10.07-17.51-7.29z"
            fillRule="evenodd"
          />
          <path d="m87.45 42.11c-2.4-3.87-11.88 8.12-17.45 10.52 6.64-2 12.75-9.72 14.6-8 1.52 1.44-1.11 5.57-14.6 8 14.67-.25 19.83-6.69 17.45-10.52z" />
          <path d="m55.43 44.66c1.85-1.75 8 5.94 14.6 8-5.54-2.4-15-14.39-17.42-10.52s2.78 10.24 17.39 10.49c-13.46-2.4-16.1-6.53-14.57-7.97z" />
        </g>
        <ellipse cx="70.03" cy="52.48" fill="#bdc0c9" rx="3.28" ry="2.52" />
        <path d="m51.34 52.46h37.37v30.56h-37.37z" fill="#cdcfd6" />
        <path
          d="m88.72 83h-37.38v-24.53c0 11.88 16.93 24.67 37.38 24.53z"
          fill="#bdc0c9"
        />
        <path d="m49.71 52.48h40.63v12.67h-40.63z" fill="#eeeff1" />
        <path
          d="m68.27 65.08h-18.56v-12.6c0 9.99 18.56 12.6 18.56 12.6z"
          fill="#dee0e4"
        />
        <path d="m68.27 52.42h3.53v30.73h-3.53z" fill="#8c91a1" />
        <path
          d="m70.64 79.5c12.78-1.28 10.66-2.07 22.91-7.16 18.88-7.43 21.49 10.59 6.84 15.92-9.83 2.69-11.45-6.43-27.33-2-7.3 1.99-9.38-6.07-2.42-6.76z"
          fill="#5b6279"
          fillRule="evenodd"
        />
        <path
          d="m70.65 78.8c12.78-1.27 10.66-2.07 22.91-7.16 18.88-7.43 25 12.75 10.3 18.07-9.86 2.7-14.86-8.58-30.79-4.18-7.3 2.02-9.38-6.04-2.42-6.73z"
          fill="#9da1af"
          fillRule="evenodd"
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
        <title id={`${id}-title`}>Giving Circle Illustration</title>
        <desc id={`${id}-description`}>Hand holding a gift in purple</desc>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m132.88 100.78-21.22-23.64a12.28 12.28 0 0 0 -12.48-6.51 17.62 17.62 0 0 0 -5.63 1.71q-5.73 2.56-19.79 9.87a.69.69 0 0 0 -.37.55l-21.9.18a.54.54 0 0 0 -.22 0l-13.27-7.29a2.79 2.79 0 0 0 -3.8 1.09l-.64 1.26a1.39 1.39 0 0 0 .54 1.9l16.76 9.29a.74.74 0 0 0 .36.24l25.43 7a.72.72 0 0 0 .61.22q22.74-3.33 27.52-.65l12.38 25.77a70.21 70.21 0 0 0 15.72-20.99z"
          fill="#6f6693"
          fillRule="evenodd"
        />
        <g fill="#584d82">
          <path
            d="m34.1 79.86 16.76 9.29a.74.74 0 0 0 .36.24l25.43 7a.72.72 0 0 0 .61.22q22.74-3.29 27.52-.61l12.38 25.77a70.5 70.5 0 0 0 11.35-13.31c-6.86-1.24-14-22-18.72-18.72-6.77 4.7-21.52.9-31.36 3.09-5.59 1.17-24.13-3.96-26.82-5.68-12.82-8.15-15.61-10.07-17.51-7.29z"
            fillRule="evenodd"
          />
          <path d="m87.45 42.11c-2.4-3.87-11.88 8.12-17.45 10.52 6.64-2 12.75-9.72 14.6-8 1.52 1.44-1.11 5.57-14.6 8 14.67-.25 19.83-6.69 17.45-10.52z" />
          <path d="m55.43 44.66c1.85-1.75 8 5.94 14.6 8-5.54-2.4-15-14.39-17.42-10.52s2.78 10.24 17.39 10.49c-13.46-2.4-16.1-6.53-14.57-7.97z" />
        </g>
        <ellipse cx="70.03" cy="52.48" fill="#9f99b7" rx="3.28" ry="2.52" />
        <path d="m51.34 52.46h37.37v30.56h-37.37z" fill="#b7b3c9" />
        <path
          d="m88.72 83h-37.38v-24.53c0 11.88 16.93 24.67 37.38 24.53z"
          fill="#9f99b7"
        />
        <path d="m49.71 52.48h40.63v12.67h-40.63z" fill="#e7e6ed" />
        <path
          d="m68.27 65.08h-18.56v-12.6c0 9.99 18.56 12.6 18.56 12.6z"
          fill="#cfccdb"
        />
        <path d="m68.27 52.42h3.53v30.73h-3.53z" fill="#584d82" />
        <path
          d="m70.64 79.5c12.78-1.28 10.66-2.07 22.91-7.16 18.88-7.43 21.49 10.59 6.84 15.92-9.83 2.69-11.45-6.43-27.33-2-7.3 1.99-9.38-6.07-2.42-6.76z"
          fill="#10004c"
          fillRule="evenodd"
        />
        <path
          d="m70.65 78.8c12.78-1.27 10.66-2.07 22.91-7.16 18.88-7.43 25 12.75 10.3 18.07-9.86 2.7-14.86-8.58-30.79-4.18-7.3 2.02-9.38-6.04-2.42-6.73z"
          fill="#6f6693"
          fillRule="evenodd"
        />
      </svg>
    );
  }
};

GivingCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'giving-circle-illustration',
};

export default memo(GivingCircleIllustration);
export {GivingCircleIllustration as PureGivingCircleIllustration};
