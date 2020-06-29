/** @module HomeCircleIllustration */
import React, {FC, memo, useState} from 'react';

type HomeCircleIllustrationProps = {
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

/** Renders a house illustration. */
const HomeCircleIllustration: FC<HomeCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Home Circle Illustration</title>
        <desc id={`${id}-description`}>
          House illustration with the lights on
        </desc>
        <pattern
          id={`${id}-a`}
          height="4"
          patternTransform="translate(.72 65.71)"
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
          patternTransform="translate(4.72 65.79)"
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
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path d="m32.07 79.21h77.31v23.79h-77.31z" fill="#5fcbeb" />
        <path
          d="m32.07 96.22v-17h77.3v1.37s-63.75 2.04-77.3 15.63z"
          fill="#2870b5"
        />
        <path d="m39.42 86.53h7.06v11.35h-7.06z" fill="#10004c" />
        <path d="m79.37 84.1h23.6v3.78h-23.6z" fill="#2870b5" />
        <path d="m79.37 87.88h23.6v3.78h-23.6z" fill="#10004c" />
        <path d="m79.37 91.66h23.6v3.78h-23.6z" fill="#2870b5" />
        <path d="m79.37 95.44h23.6v3.78h-23.6z" fill="#10004c" />
        <path d="m79.37 99.23h23.6v3.78h-23.6z" fill="#2870b5" />
        <path
          d="m57.46 84.1v18.9l-32.1 20.91a69.79 69.79 0 0 0 21.31 12.09l22.08-33v-18.91z"
          fill="#feca1e"
        />
        <path d="m57.46 84.1h11.29v18.9h-11.29z" fill="#f8f7f4" />
        <path d="m113.6 79.22h-85.76l4.23-7.88h77.3z" fill="#f8f7f4" />
        <path d="m113.6 79.22h-85.76l4.23-7.88h77.3z" fill={`url(#${id}-a)`} />
        <path d="m73.26 61.22h36.12v10.12h-36.12z" fill="#5fcbeb" />
        <path
          d="m73.26 68.41v-7.19h36.11v1.44s-28-.16-36.11 5.75z"
          fill="#2870b5"
        />
        <path d="m113.6 61.22h-85.76l4.23-21.54h77.3z" fill="#f8f7f4" />
        <path d="m113.6 61.22h-85.76l4.23-21.54h77.3z" fill={`url(#${id}-a)`} />
        <path d="m52.66 29.41 24.83 31.79h-49.65z" fill="#feca1e" />
        <path
          d="m29.2 54.28-1.36 6.92h46.77l-16.81-21.52h-13.57z"
          fill="#fde5cb"
        />
        <path d="m52.66 29.41 24.83 31.79h-49.65z" fill="#f8f7f4" />
        <path
          d="m73.22 61.15-20.56-27.51-20.55 27.51h-.04v10.19h41.19v-10.19z"
          fill="#5fcbeb"
        />
        <path
          d="m52.66 33.64 8.6 11.5c-12.54-2.36-29.19 16-29.19 16z"
          fill="#2870b5"
        />
        <path d="m63.1 42.78 14.39 18.42h-28.77z" fill="#f17732" />
        <path d="m63.1 42.78 14.39 18.42h-28.77z" fill="#99052e" />
        <path
          d="m73.22 61.15-10.26-13.73-10.26 13.73h-.04v10.19h20.6v-10.19z"
          fill="#feca1e"
        />
        <path
          d="m73.22 61.15-10.26-13.73-10.26 13.73h-.04v10.19h20.6v-10.19z"
          fill={`url(#${id}-b)`}
        />
        <path d="m63 47.42 5.79 7.74c-5.47-3.17-16 6-16 6z" fill="#f17732" />
        <g fill="#10004c">
          <path d="m59.95 63.21h6.66v5.92h-6.66z" />
          <path d="m40.29 63.21h5.33v5.92h-5.33z" />
          <path d="m79.59 63.43h5.33v5.92h-5.33z" />
          <path d="m88.61 63.43h5.33v5.92h-5.33z" />
          <path d="m97.64 63.43h5.33v5.92h-5.33z" />
        </g>
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
        <title id={`${id}-title`}>Home Circle Illustration</title>
        <desc id={`${id}-description`}>House illustration in color</desc>
        <pattern
          id={`${id}-a`}
          height="4"
          patternTransform="translate(.72)"
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
          patternTransform="translate(4.72 .08)"
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
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path d="m32.07 79.21h77.31v23.79h-77.31z" fill="#5fcbeb" />
        <path
          d="m32.07 96.22v-17h77.3v1.37s-63.75 2.04-77.3 15.63z"
          fill="#2870b5"
        />
        <path d="m79.37 84.1h23.6v3.78h-23.6z" fill="#2870b5" />
        <path d="m79.37 87.88h23.6v3.78h-23.6z" fill="#10004c" />
        <path d="m79.37 91.66h23.6v3.78h-23.6z" fill="#2870b5" />
        <path d="m79.37 95.44h23.6v3.78h-23.6z" fill="#10004c" />
        <path d="m79.37 99.23h23.6v3.78h-23.6z" fill="#2870b5" />
        <path d="m57.46 84.1h11.29v18.9h-11.29z" fill="#2870b5" />
        <path
          d="m57.46 86.27c3.66-.76 7.47-1.42 11.29-2v-.17h-11.29z"
          fill="#10004c"
        />
        <path d="m39.42 86.53h7.06v11.35h-7.06z" fill="#10004c" />
        <path d="m113.6 79.22h-85.76l4.23-7.88h77.3z" fill="#f8f7f4" />
        <path d="m113.6 79.22h-85.76l4.23-7.88h77.3z" fill={`url(#${id}-a)`} />
        <path d="m73.26 61.22h36.12v10.12h-36.12z" fill="#5fcbeb" />
        <path
          d="m73.26 68.41v-7.19h36.11v1.44s-28-.16-36.11 5.75z"
          fill="#2870b5"
        />
        <path d="m113.6 61.22h-85.76l4.23-21.54h77.3z" fill="#f8f7f4" />
        <path d="m113.6 61.22h-85.76l4.23-21.54h77.3z" fill={`url(#${id}-a)`} />
        <path d="m52.66 29.41 24.83 31.79h-49.65z" fill="#feca1e" />
        <path
          d="m29.2 54.28-1.36 6.92h46.77l-16.81-21.52h-13.57z"
          fill="#fde5cb"
        />
        <path d="m52.66 29.41 24.83 31.79h-49.65z" fill="#f8f7f4" />
        <path
          d="m73.22 61.15-20.56-27.51-20.55 27.51h-.04v10.19h41.19v-10.19z"
          fill="#5fcbeb"
        />
        <path
          d="m52.66 33.64 8.6 11.5c-12.54-2.36-29.19 16-29.19 16z"
          fill="#2870b5"
        />
        <path d="m63.1 42.78 14.39 18.42h-28.77z" fill="#f17732" />
        <path d="m63.1 42.78 14.39 18.42h-28.77z" fill="#99052e" />
        <path
          d="m73.22 61.15-10.26-13.73-10.26 13.73h-.04v10.19h20.6v-10.19z"
          fill="#feca1e"
        />
        <path
          d="m73.22 61.15-10.26-13.73-10.26 13.73h-.04v10.19h20.6v-10.19z"
          fill={`url(#${id}-b)`}
        />
        <path d="m63 47.42 5.79 7.74c-5.47-3.17-16 6-16 6z" fill="#f17732" />
        <g fill="#10004c">
          <path d="m59.95 63.21h6.66v5.92h-6.66z" />
          <path d="m40.29 63.21h5.33v5.92h-5.33z" />
          <path d="m79.59 63.43h5.33v5.92h-5.33z" />
          <path d="m88.61 63.43h5.33v5.92h-5.33z" />
          <path d="m97.64 63.43h5.33v5.92h-5.33z" />
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
        <title id={`${id}-title`}>Home Circle Illustration</title>
        <desc id={`${id}-description`}>Grey house illustration</desc>
        <circle cx="70" cy="70" fill="#5b6279" r="70" />
        <path d="m32.07 79.21h77.31v23.79h-77.31z" fill="#cdcfd6" />
        <path
          d="m32.07 96.22v-17h77.3v1.37s-63.75 2.04-77.3 15.63z"
          fill="#9da1af"
        />
        <path d="m79.37 84.1h23.6v3.78h-23.6z" fill="#8c91a1" />
        <path d="m79.37 87.88h23.6v3.78h-23.6z" fill="#5b6279" />
        <path d="m79.37 91.66h23.6v3.78h-23.6z" fill="#8c91a1" />
        <path d="m79.37 95.44h23.6v3.78h-23.6z" fill="#5b6279" />
        <path d="m79.37 99.23h23.6v3.78h-23.6z" fill="#8c91a1" />
        <path d="m57.46 84.1h11.29v18.9h-11.29z" fill="#8c91a1" />
        <path
          d="m57.46 86.27c3.66-.76 7.47-1.42 11.29-2v-.17h-11.29z"
          fill="#5b6279"
        />
        <path d="m39.42 86.53h7.06v11.35h-7.06z" fill="#5b6279" />
        <path d="m113.6 79.22h-85.76l4.23-7.88h77.3z" fill="#fff" />
        <path d="m73.26 61.22h36.12v10.12h-36.12z" fill="#cdcfd6" />
        <path
          d="m73.26 68.41v-7.19h36.11v1.44s-28-.16-36.11 5.75z"
          fill="#9da1af"
        />
        <path d="m113.6 61.22h-85.76l4.23-21.54h77.3z" fill="#fff" />
        <path d="m52.66 29.41 24.83 31.79h-49.65z" fill="#feca1e" />
        <path
          d="m29.2 54.28-1.36 6.92h46.77l-16.81-21.52h-13.57z"
          fill="#eeeff1"
        />
        <path d="m52.66 29.41 24.83 31.79h-49.65z" fill="#fff" />
        <path
          d="m73.22 61.15-20.56-27.51-20.55 27.51h-.04v10.19h41.19v-10.19z"
          fill="#cdcfd6"
        />
        <path
          d="m52.66 33.64 8.6 11.5c-12.54-2.36-29.19 16-29.19 16z"
          fill="#9da1af"
        />
        <path d="m63.1 42.78 14.39 18.42h-28.77z" fill="#f17732" />
        <path d="m63.1 42.78 14.39 18.42h-28.77z" fill="#6b7186" />
        <path
          d="m73.22 61.15-10.26-13.73-10.26 13.73h-.04v10.19h20.6v-10.19z"
          fill="#adb0bc"
        />
        <path d="m63 47.42 5.79 7.74c-5.47-3.17-16 6-16 6z" fill="#8c91a1" />
        <g fill="#5b6279">
          <path d="m59.95 63.21h6.66v5.92h-6.66z" />
          <path d="m40.29 63.21h5.33v5.92h-5.33z" />
          <path d="m79.59 63.43h5.33v5.92h-5.33z" />
          <path d="m88.61 63.43h5.33v5.92h-5.33z" />
          <path d="m97.64 63.43h5.33v5.92h-5.33z" />
        </g>
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
        <title id={`${id}-title`}>Home Circle Illustration</title>
        <desc id={`${id}-description`}>Purple house illustration</desc>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path d="m32.07 79.21h77.31v23.79h-77.31z" fill="#b7b3c9" />
        <path
          d="m32.07 96.22v-17h77.3v1.37s-63.75 2.04-77.3 15.63z"
          fill="#6f6693"
        />
        <path d="m79.37 84.1h23.6v3.78h-23.6z" fill="#584d82" />
        <path d="m79.37 87.88h23.6v3.78h-23.6z" fill="#10004c" />
        <path d="m79.37 91.66h23.6v3.78h-23.6z" fill="#584d82" />
        <path d="m79.37 95.44h23.6v3.78h-23.6z" fill="#10004c" />
        <path d="m79.37 99.23h23.6v3.78h-23.6z" fill="#584d82" />
        <path d="m57.46 84.1h11.29v18.9h-11.29z" fill="#584d82" />
        <path
          d="m57.46 86.27c3.66-.76 7.47-1.42 11.29-2v-.17h-11.29z"
          fill="#10004c"
        />
        <path d="m39.42 86.53h7.06v11.35h-7.06z" fill="#10004c" />
        <path d="m113.6 79.22h-85.76l4.23-7.88h77.3z" fill="#fff" />
        <path d="m73.26 61.22h36.12v10.12h-36.12z" fill="#b7b3c9" />
        <path
          d="m73.26 68.41v-7.19h36.11v1.44s-28-.16-36.11 5.75z"
          fill="#6f6693"
        />
        <path d="m113.6 61.22h-85.76l4.23-21.54h77.3z" fill="#fff" />
        <path d="m52.66 29.41 24.83 31.79h-49.65z" fill="#feca1e" />
        <path
          d="m29.2 54.28-1.36 6.92h46.77l-16.81-21.52h-13.57z"
          fill="#e7e6ed"
        />
        <path d="m52.66 29.41 24.83 31.79h-49.65z" fill="#fff" />
        <path
          d="m73.22 61.15-20.56-27.51-20.55 27.51h-.04v10.19h41.19v-10.19z"
          fill="#b7b3c9"
        />
        <path
          d="m52.66 33.64 8.6 11.5c-12.54-2.36-29.19 16-29.19 16z"
          fill="#6f6693"
        />
        <path d="m63.1 42.78 14.39 18.42h-28.77z" fill="#f17732" />
        <path d="m63.1 42.78 14.39 18.42h-28.77z" fill="#281a5e" />
        <path
          d="m73.22 61.15-10.26-13.73-10.26 13.73h-.04v10.19h20.6v-10.19z"
          fill="#8780a5"
        />
        <path d="m63 47.42 5.79 7.74c-5.47-3.17-16 6-16 6z" fill="#584d82" />
        <g fill="#10004c">
          <path d="m59.95 63.21h6.66v5.92h-6.66z" />
          <path d="m40.29 63.21h5.33v5.92h-5.33z" />
          <path d="m79.59 63.43h5.33v5.92h-5.33z" />
          <path d="m88.61 63.43h5.33v5.92h-5.33z" />
          <path d="m97.64 63.43h5.33v5.92h-5.33z" />
        </g>
      </svg>
    );
  }
};

HomeCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'home-circle-illustration',
};

export default memo(HomeCircleIllustration);
export {HomeCircleIllustration as PureHomeCircleIllustration};
