/** @module FolderCircleIllustration */
import React, {FC, memo, useState} from 'react';

export type FolderCircleIllustrationProps = {
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

/** Renders a folder circle illustration. */
const FolderCircleIllustration: FC<FolderCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Folder Circle Illustration</title>
        <desc id={`${id}-description`}>
          Open folder circle illustration in color
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
          patternTransform="translate(-24 37.22)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#feca1e" r=".35" />
          <circle cx="1" cy="4" fill="#feca1e" r=".35" />
          <circle cx="4" cy="2" fill="#feca1e" r=".35" />
          <circle cx="2" cy="2" fill="#feca1e" r=".35" />
          <circle cy="2" fill="#feca1e" r=".35" />
          <circle cx="3" fill="#feca1e" r=".35" />
          <circle cx="1" fill="#feca1e" r=".35" />
        </pattern>
        <clipPath id={`${id}-c`}>
          <path
            clipRule="evenodd"
            d="m69 87.07a.44.44 0 0 1 .45.51l-1 4.75a.69.69 0 0 1 -.66.48h-25c-.31 0-.52-.22-.46-.48l.92-4.76a.71.71 0 0 1 .66-.5c.47 0 8.19-.19 10-7a5.39 5.39 0 0 0 3.59 1.59 8.13 8.13 0 0 0 4.33-1.66c-1.01 7.09 7.17 7.07 7.17 7.07z"
          />
        </clipPath>
        <clipPath id={`${id}-d`}>
          <path
            clipRule="evenodd"
            d="m61.89 59.57c5.74 0 9.59 4 8.6 8.84a13.39 13.39 0 0 1 -1.72 4 1 1 0 0 1 .63.15c.68.45.35 1.69-.73 2.78s-2.31 1.54-3 1.26c-2.57 2.81-5.67 5-8.15 5s-4.74-2.27-6.18-5.14a2.21 2.21 0 0 1 -2.72-1.18c-.65-1.09-.49-2.34.37-2.78a1.47 1.47 0 0 1 1-.13 10.86 10.86 0 0 1 -.12-4.07c.86-4.79 6.29-8.74 12.02-8.73z"
          />
        </clipPath>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#10004C" cx="70" cy="70" r="70" />
        </g>
        <path
          d="m105 46.2h-3.29l-1.15-3.2a2 2 0 0 0 -1.87-1.31h-10.69a2 2 0 0 0 -1.88 1.31l-1.18 3.2h-50.94a5 5 0 0 0 -5 5v43.11a5 5 0 0 0 5 5h71a5 5 0 0 0 5-5v-43.11a5 5 0 0 0 -5-5z"
          fill="#feca1e"
        />
        <path
          d="m105 46.2h-3.29l-1.15-3.2a2 2 0 0 0 -1.87-1.31h-10.69a2 2 0 0 0 -1.88 1.31l-1.18 3.2h-50.94a5 5 0 0 0 -5 5v43.11a5 5 0 0 0 5 5h71a5 5 0 0 0 5-5v-43.11a5 5 0 0 0 -5-5z"
          fill={`url(#${id}-a)`}
        />
        <path
          d="m114.85 53.43-72.06-.13c-2.8 0-5.44 1.92-5.89 4.3l-7.1 37.13c-.46 2.37 1.41 4.27 4.2 4.27h71c2.76 0 5.42-1.92 5.93-4.29l8-37c.57-2.35-1.28-4.27-4.08-4.28z"
          fill="#fff"
        />
        <path
          d="m43.48 56.08a26.15 26.15 0 0 1 .71-2.77h-1.4c-2.8 0-5.44 1.92-5.89 4.3l-7.1 37.12c-.46 2.37 1.41 4.27 4.2 4.27h71a5.69 5.69 0 0 0 .83-.07c-39.11-1.21-66.78-19.93-62.35-42.85z"
          fill="#fde5cb"
        />
        <path
          d="m43.48 56.08a26.15 26.15 0 0 1 .71-2.77h-1.4c-2.8 0-5.44 1.92-5.89 4.3l-7.1 37.12c-.46 2.37 1.41 4.27 4.2 4.27h71a5.69 5.69 0 0 0 .83-.07c-39.11-1.21-66.78-19.93-62.35-42.85z"
          fill={`url(#${id}-b)`}
        />
        <g fill="#10004c">
          <path d="m103.23 71.38-23.61-.03.45-2.21 23.63.03z" />
          <path d="m108.1 77.33-29.71-.02.46-2.21 29.72.03z" />
          <path d="m106.82 83.29-29.65-.02.46-2.21 29.66.02z" />
        </g>
        <path
          d="m69 87.07a.44.44 0 0 1 .45.51l-1 4.75a.69.69 0 0 1 -.66.48h-25c-.31 0-.52-.22-.46-.48l.92-4.76a.71.71 0 0 1 .66-.5c.47 0 8.19-.19 10-7a5.39 5.39 0 0 0 3.59 1.59 8.13 8.13 0 0 0 4.33-1.66c-1.01 7.09 7.17 7.07 7.17 7.07z"
          fill="#5fcbeb"
          fillRule="evenodd"
        />
        <g clipPath={`url(#${id}-c)`}>
          <path d="m42.38 77.62 31.83.03-3.58 17.54h-31.66z" fill="#5fcbeb" />
        </g>
        <path
          d="m61.89 59.57c5.74 0 9.59 4 8.6 8.84a13.39 13.39 0 0 1 -1.72 4 1 1 0 0 1 .63.15c.68.45.35 1.69-.73 2.78s-2.31 1.54-3 1.26c-2.57 2.81-5.67 5-8.15 5s-4.74-2.27-6.18-5.14a2.21 2.21 0 0 1 -2.72-1.18c-.65-1.09-.49-2.34.37-2.78a1.47 1.47 0 0 1 1-.13 10.86 10.86 0 0 1 -.12-4.07c.86-4.79 6.29-8.74 12.02-8.73z"
          fill="#5fcbeb"
          fillRule="evenodd"
        />
        <g clipPath={`url(#${id}-d)`}>
          <path
            d="m48.62 57.16 27.24.05-5.46 26.86-27.02-.01z"
            fill="#5fcbeb"
          />
        </g>
        <path
          d="m56.21 84.11c-1-.79-2-1.6-2.9-2.43a8.2 8.2 0 0 1 -1.7 2.42 12.12 12.12 0 0 1 -7.71 3 .7.7 0 0 0 -.65.51l-.93 4.75a.42.42 0 0 0 .46.48h25a.69.69 0 0 0 .66-.48l.22-1.08a60.05 60.05 0 0 1 -12.45-7.17z"
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
        <title id={`${id}-title`}>Folder Circle Illustration</title>
        <desc id={`${id}-description`}>Colored folder circle illustration</desc>
        <pattern
          id={`${id}-a`}
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
        <pattern
          id={`${id}-b`}
          height="4"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 4 4"
          width="4"
        >
          <path d="m0 0h4v4h-4z" fill="none" />
          <circle cx="3" cy="4" fill="#feca1e" r=".35" />
          <circle cx="1" cy="4" fill="#feca1e" r=".35" />
          <circle cx="4" cy="2" fill="#feca1e" r=".35" />
          <circle cx="2" cy="2" fill="#feca1e" r=".35" />
          <circle cy="2" fill="#feca1e" r=".35" />
          <circle cx="3" fill="#feca1e" r=".35" />
          <circle cx="1" fill="#feca1e" r=".35" />
        </pattern>
        <clipPath id={`${id}-c`}>
          <path
            clipRule="evenodd"
            d="m67 84.92a.61.61 0 0 1 .56.59v5.49a.56.56 0 0 1 -.56.56h-25a.56.56 0 0 1 -.56-.56v-5.49a.6.6 0 0 1 .55-.59c.47 0 8.12-.22 8.57-8.1a6.1 6.1 0 0 0 3.89 1.84 6.18 6.18 0 0 0 4-1.93c.47 8.27 8.55 8.19 8.55 8.19z"
          />
        </clipPath>
        <clipPath id={`${id}-d`}>
          <path
            clipRule="evenodd"
            d="m54.53 53a10.26 10.26 0 0 1 10.26 10.23 15.41 15.41 0 0 1 -.89 4.7 1.05 1.05 0 0 1 .65.18c.77.51.69 2-.17 3.23s-2 1.79-2.76 1.46c-2 3.28-4.63 5.86-7.09 5.86s-5.16-2.63-7.16-6c-.76.51-2.07-.1-2.93-1.37s-.93-2.72-.17-3.23a1.21 1.21 0 0 1 .92-.15 15.41 15.41 0 0 1 -.91-4.73 10.27 10.27 0 0 1 10.25-10.18z"
          />
        </clipPath>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#10004C" cx="70" cy="70" r="70" />
        </g>
        <path
          d="m105.53 45.72h-3.29l-1.18-3.24a2 2 0 0 0 -1.88-1.31h-10.69a2 2 0 0 0 -1.87 1.31l-1.19 3.24h-51a5 5 0 0 0 -5 5v43.11a5 5 0 0 0 5 5h71.06a5 5 0 0 0 5-5v-43.11a5 5 0 0 0 -4.96-5z"
          fill="#fff"
        />
        <path
          d="m105.53 45.72h-3.29l-1.18-3.24a2 2 0 0 0 -1.88-1.31h-10.69a2 2 0 0 0 -1.87 1.31l-1.19 3.24h-51a5 5 0 0 0 -5 5v43.11a5 5 0 0 0 5 5h71.06a5 5 0 0 0 5-5v-43.11a5 5 0 0 0 -4.96-5z"
          fill={`url(#${id}-a)`}
        />
        <path
          d="m35.67 48.94c0-1.09.07-2.16.17-3.22h-1.37a5 5 0 0 0 -5 5v43.11a5 5 0 0 0 5 5h71.06a5.56 5.56 0 0 0 .82-.08c-39.35-1.45-70.68-23.19-70.68-49.81z"
          fill="#fde5cb"
        />
        <path
          d="m35.67 48.94c0-1.09.07-2.16.17-3.22h-1.37a5 5 0 0 0 -5 5v43.11a5 5 0 0 0 5 5h71.06a5.56 5.56 0 0 0 .82-.08c-39.35-1.45-70.68-23.19-70.68-49.81z"
          fill={`url(#${id}-b)`}
        />
        <g fill="#10004c">
          <path d="m74.43 64.06h23.42v2.57h-23.42z" />
          <path d="m74.43 70.99h29.51v2.57h-29.51z" />
          <path d="m74.43 77.92h29.51v2.57h-29.51z" />
        </g>
        <path
          d="m67 84.92a.61.61 0 0 1 .56.59v5.49a.56.56 0 0 1 -.56.56h-25a.56.56 0 0 1 -.56-.56v-5.49a.6.6 0 0 1 .55-.59c.47 0 8.12-.22 8.57-8.1a6.1 6.1 0 0 0 3.89 1.84 6.18 6.18 0 0 0 4-1.93c.47 8.27 8.55 8.19 8.55 8.19z"
          fill="#5fcbeb"
          fillRule="evenodd"
        />
        <g clipPath={`url(#${id}-c)`}>
          <path d="m38.72 73.96h31.63v20.41h-31.63z" fill="#5fcbeb" />
        </g>
        <path
          d="m54.53 53a10.26 10.26 0 0 1 10.26 10.23 15.41 15.41 0 0 1 -.89 4.7 1.05 1.05 0 0 1 .65.18c.77.51.69 2-.17 3.23s-2 1.79-2.76 1.46c-2 3.28-4.63 5.86-7.09 5.86s-5.16-2.63-7.16-6c-.76.51-2.07-.1-2.93-1.37s-.93-2.72-.17-3.23a1.21 1.21 0 0 1 .92-.15 15.41 15.41 0 0 1 -.91-4.73 10.27 10.27 0 0 1 10.25-10.18z"
          fill="#5fcbeb"
          fillRule="evenodd"
        />
        <g clipPath={`url(#${id}-d)`}>
          <path d="m40.95 50.19h26.9v31.25h-26.9z" fill="#5fcbeb" />
        </g>
        <path
          d="m53.74 81.48c-1.18-.91-2.29-1.85-3.37-2.82a8 8 0 0 1 -1.21 2.82c-2.37 3.36-6.74 3.52-7.09 3.52a.59.59 0 0 0 -.55.59v5.52a.56.56 0 0 0 .56.56h24.92a.56.56 0 0 0 .56-.56v-1.28a72.77 72.77 0 0 1 -13.82-8.35z"
          fill="#2870b5"
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
        <title id={`${id}-title`}>Folder Circle Illustration</title>
        <desc id={`${id}-description`}>Draft folder illustration</desc>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#5B6279" cx="70" cy="70" r="70" />
        </g>
        <clipPath id={`${id}-a`}>
          <path
            clipRule="evenodd"
            d="m67 84.92a.61.61 0 0 1 .56.59v5.49a.56.56 0 0 1 -.56.56h-25a.56.56 0 0 1 -.56-.56v-5.49a.6.6 0 0 1 .55-.59c.47 0 8.12-.22 8.57-8.1a6.1 6.1 0 0 0 3.89 1.84 6.18 6.18 0 0 0 4-1.93c.47 8.27 8.55 8.19 8.55 8.19z"
          />
        </clipPath>
        <clipPath id={`${id}-b`}>
          <path
            clipRule="evenodd"
            d="m54.53 53a10.26 10.26 0 0 1 10.26 10.23 15.41 15.41 0 0 1 -.89 4.7 1.05 1.05 0 0 1 .65.18c.77.51.69 2-.17 3.23s-2 1.79-2.76 1.46c-2 3.28-4.63 5.86-7.09 5.86s-5.16-2.63-7.16-6c-.76.51-2.07-.1-2.93-1.37s-.93-2.72-.17-3.23a1.21 1.21 0 0 1 .92-.15 15.41 15.41 0 0 1 -.91-4.73 10.27 10.27 0 0 1 10.25-10.18z"
          />
        </clipPath>
        <path
          d="m105.53 45.72h-3.29l-1.18-3.24a2 2 0 0 0 -1.88-1.31h-10.69a2 2 0 0 0 -1.87 1.31l-1.19 3.24h-51a5 5 0 0 0 -5 5v43.11a5 5 0 0 0 5 5h71.06a5 5 0 0 0 5-5v-43.11a5 5 0 0 0 -4.96-5z"
          fill="#fff"
        />
        <g fill="#5b6279">
          <path d="m74.43 64.06h23.42v2.57h-23.42z" />
          <path d="m74.43 70.99h29.51v2.57h-29.51z" />
          <path d="m74.43 77.92h29.51v2.57h-29.51z" />
        </g>
        <path
          d="m35.67 48.94c0-1.09.07-2.16.17-3.22h-1.37a5 5 0 0 0 -5 5v43.11a5 5 0 0 0 5 5h71.06a5.56 5.56 0 0 0 .82-.08c-39.35-1.45-70.68-23.19-70.68-49.81z"
          fill="#eeeff1"
        />
        <path
          d="m67 84.92a.61.61 0 0 1 .56.59v5.49a.56.56 0 0 1 -.56.56h-25a.56.56 0 0 1 -.56-.56v-5.49a.6.6 0 0 1 .55-.59c.47 0 8.12-.22 8.57-8.1a6.1 6.1 0 0 0 3.89 1.84 6.18 6.18 0 0 0 4-1.93c.47 8.27 8.55 8.19 8.55 8.19z"
          fill="#8c91a1"
          fillRule="evenodd"
        />
        <g clipPath={`url(#${id}-a)`}>
          <path d="m38.72 73.96h31.63v20.41h-31.63z" fill="#8c91a1" />
        </g>
        <path
          d="m54.53 53a10.26 10.26 0 0 1 10.26 10.23 15.41 15.41 0 0 1 -.89 4.7 1.05 1.05 0 0 1 .65.18c.77.51.69 2-.17 3.23s-2 1.79-2.76 1.46c-2 3.28-4.63 5.86-7.09 5.86s-5.16-2.63-7.16-6c-.76.51-2.07-.1-2.93-1.37s-.93-2.72-.17-3.23a1.21 1.21 0 0 1 .92-.15 15.41 15.41 0 0 1 -.91-4.73 10.27 10.27 0 0 1 10.25-10.18z"
          fill="#adb0bc"
          fillRule="evenodd"
        />
        <g clipPath={`url(#${id}-b)`}>
          <path d="m40.95 50.19h26.9v31.25h-26.9z" fill="#adb0bc" />
        </g>
        <path
          d="m53.74 81.48c-1.18-.91-2.29-1.85-3.37-2.82a8 8 0 0 1 -1.21 2.82c-2.37 3.36-6.74 3.52-7.09 3.52a.59.59 0 0 0 -.55.59v5.52a.56.56 0 0 0 .56.56h24.92a.56.56 0 0 0 .56-.56v-1.28a72.77 72.77 0 0 1 -13.82-8.35z"
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
        <title id={`${id}-title`}>Folder Circle Illustration</title>
        <desc id={`${id}-description`}>Purple folder illustration</desc>
        <g id={`${id}-Circle-BG`}>
          <circle fill="#10004C" cx="70" cy="70" r="70" />
        </g>
        <clipPath id={`${id}-a`}>
          <path
            clipRule="evenodd"
            d="m67 84.92a.61.61 0 0 1 .56.59v5.49a.56.56 0 0 1 -.56.56h-25a.56.56 0 0 1 -.56-.56v-5.49a.6.6 0 0 1 .55-.59c.47 0 8.12-.22 8.57-8.1a6.1 6.1 0 0 0 3.89 1.84 6.18 6.18 0 0 0 4-1.93c.47 8.27 8.55 8.19 8.55 8.19z"
          />
        </clipPath>
        <clipPath id={`${id}-b`}>
          <path
            clipRule="evenodd"
            d="m54.53 53a10.26 10.26 0 0 1 10.26 10.23 15.41 15.41 0 0 1 -.89 4.7 1.05 1.05 0 0 1 .65.18c.77.51.69 2-.17 3.23s-2 1.79-2.76 1.46c-2 3.28-4.63 5.86-7.09 5.86s-5.16-2.63-7.16-6c-.76.51-2.07-.1-2.93-1.37s-.93-2.72-.17-3.23a1.21 1.21 0 0 1 .92-.15 15.41 15.41 0 0 1 -.91-4.73 10.27 10.27 0 0 1 10.25-10.18z"
          />
        </clipPath>
        <path
          d="m105.53 45.72h-3.29l-1.18-3.24a2 2 0 0 0 -1.88-1.31h-10.69a2 2 0 0 0 -1.87 1.31l-1.19 3.24h-51a5 5 0 0 0 -5 5v43.11a5 5 0 0 0 5 5h71.06a5 5 0 0 0 5-5v-43.11a5 5 0 0 0 -4.96-5z"
          fill="#fff"
        />
        <g fill="#10004c">
          <path d="m74.43 64.06h23.42v2.57h-23.42z" />
          <path d="m74.43 70.99h29.51v2.57h-29.51z" />
          <path d="m74.43 77.92h29.51v2.57h-29.51z" />
        </g>
        <path
          d="m35.67 48.94c0-1.09.07-2.16.17-3.22h-1.37a5 5 0 0 0 -5 5v43.11a5 5 0 0 0 5 5h71.06a5.56 5.56 0 0 0 .82-.08c-39.35-1.45-70.68-23.19-70.68-49.81z"
          fill="#e7e6ed"
        />
        <path
          d="m67 84.92a.61.61 0 0 1 .56.59v5.49a.56.56 0 0 1 -.56.56h-25a.56.56 0 0 1 -.56-.56v-5.49a.6.6 0 0 1 .55-.59c.47 0 8.12-.22 8.57-8.1a6.1 6.1 0 0 0 3.89 1.84 6.18 6.18 0 0 0 4-1.93c.47 8.27 8.55 8.19 8.55 8.19z"
          fill="#584d82"
          fillRule="evenodd"
        />
        <g clipPath={`url(#${id}-a)`}>
          <path d="m38.72 73.96h31.63v20.41h-31.63z" fill="#584d82" />
        </g>
        <path
          d="m54.53 53a10.26 10.26 0 0 1 10.26 10.23 15.41 15.41 0 0 1 -.89 4.7 1.05 1.05 0 0 1 .65.18c.77.51.69 2-.17 3.23s-2 1.79-2.76 1.46c-2 3.28-4.63 5.86-7.09 5.86s-5.16-2.63-7.16-6c-.76.51-2.07-.1-2.93-1.37s-.93-2.72-.17-3.23a1.21 1.21 0 0 1 .92-.15 15.41 15.41 0 0 1 -.91-4.73 10.27 10.27 0 0 1 10.25-10.18z"
          fill="#adb0bc"
          fillRule="evenodd"
        />
        <g clipPath={`url(#${id}-b)`}>
          <path d="m40.95 50.19h26.9v31.25h-26.9z" fill="#8780a5" />
        </g>
        <path
          d="m53.74 81.48c-1.18-.91-2.29-1.85-3.37-2.82a8 8 0 0 1 -1.21 2.82c-2.37 3.36-6.74 3.52-7.09 3.52a.59.59 0 0 0 -.55.59v5.52a.56.56 0 0 0 .56.56h24.92a.56.56 0 0 0 .56-.56v-1.28a72.77 72.77 0 0 1 -13.82-8.35z"
          fill="#281a5e"
        />
      </svg>
    );
  }
};

FolderCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'folder-circle-illustration',
};

export default memo(FolderCircleIllustration);
export {FolderCircleIllustration as PureFolderCircleIllustration};
