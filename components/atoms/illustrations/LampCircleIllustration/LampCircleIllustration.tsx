/** @module LampCircleIllustration */
import React, {FC, memo, useState} from 'react';

type LampCircleIllustrationProps = {
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

/** Renders a lamp illustration. */
const LampCircleIllustration: FC<LampCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Lamp Circle Illustration</title>
        <desc id={`${id}-description`}>
          Lamp illustration with the light on
        </desc>
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
        <path
          d="m55.46 27.69h29.7l12.06-22.22a70.19 70.19 0 0 0 -53.92-.19z"
          fill="#f8f7f4"
        />
        <path
          d="m55.46 27.69h29.7l12.06-22.22a70.19 70.19 0 0 0 -53.92-.19z"
          fill={`url(#${id}-a)`}
        />
        <path
          d="m102.9 71.38h-65.18l-19.83 45.34a70 70 0 0 0 104.75-.56z"
          fill="#f8f7f4"
        />
        <path
          d="m102.9 71.38h-65.18l-19.83 45.34a70 70 0 0 0 104.75-.56z"
          fill={`url(#${id}-a)`}
        />
        <path
          d="m72.33 26.08a2.08 2.08 0 1 0 -4.08 0 2.43 2.43 0 0 0 1.52 2.39v3.06h1v-3.06a2.44 2.44 0 0 0 1.56-2.39z"
          fill="#2870b5"
        />
        <path d="m102.88 71.36h-65.18l17.73-43.66h29.71z" fill="#feca1e" />
        <path
          d="m102.88 71.36h-65.18l17.73-43.66h29.71z"
          fill={`url(#${id}-b)`}
        />
        <path d="m69.04 68.69h2.48v11.19h-2.48z" fill="#2870b5" />
        <path
          d="m102.88 71.36h-65.18l12.06-29.7c18.49 31.34 53.12 29.7 53.12 29.7z"
          fill="#f17732"
        />
        <path
          d="m102.88 71.36h-65.18l12.06-29.7c18.49 31.34 53.12 29.7 53.12 29.7z"
          fill={`url(#${id}-c)`}
        />
        <path
          d="m43.36 67.32a5.37 5.37 0 0 0 .34-10.73l-3.83 9.41a5.33 5.33 0 0 0 3.49 1.32z"
          fill="#99052e"
        />
        <circle cx="54.12" cy="61.93" fill="#99052e" r="5.38" />
        <circle cx="64.93" cy="61.93" fill="#f17732" r="5.38" />
        <circle cx="75.69" cy="61.93" fill="#f17732" r="5.38" />
        <path
          d="m70.37 62.5a5.32 5.32 0 0 0 8.1 4 59.69 59.69 0 0 1 -8.1-4z"
          fill="#99052e"
        />
        <circle cx="86.45" cy="61.93" fill="#f17732" r="5.38" />
        <path
          d="m97.22 67.32a5.32 5.32 0 0 0 3.48-1.32l-3.82-9.41a5.37 5.37 0 0 0 .34 10.73z"
          fill="#f17732"
        />
        <path
          d="m64.93 67.32a5.37 5.37 0 0 0 5.33-4.88 59.6 59.6 0 0 1 -7.56-5.39 5.38 5.38 0 0 0 2.23 10.27z"
          fill="#99052e"
        />
        <path d="m66.14 79.12h8.28v4.1h-8.28z" fill="#5fcbeb" />
        <path
          d="m86 105.74c0 9.09-7.06 10.41-15.75 10.41s-15.75-1.32-15.75-10.41 7.05-22.51 15.75-22.51 15.75 13.42 15.75 22.51z"
          fill="#5fcbeb"
        />
        <g fill="#2870b5">
          <path d="m84.8 111.2c-2.39 4.21-8 5-14.51 5-8.7 0-15.75-1.32-15.75-10.41a27.75 27.75 0 0 1 2.69-11.12c9.25 17.25 26.53 17.95 27.57 16.53z" />
          <path d="m78.42 115.43a35.85 35.85 0 0 1 -8.13.72c-8.7 0-15.75-1.32-15.75-10.41 0 0 4.96 11.05 23.88 9.69z" />
          <path d="m66.14 83.23h8.28v1.08h-8.28z" />
        </g>
        <ellipse cx="70.29" cy="106.45" fill="#10004c" rx="4.93" ry="1.97" />
        <path
          d="m67.46 106.45c0 1.09 1.15 2 2.83 2 2.72 0 4.92-.88 4.92-2s-2.2-2-4.92-2c-1.76.04-2.83.92-2.83 2z"
          fill="#f17732"
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
        <title id={`${id}-title`}>Lamp Circle Illustration</title>
        <desc id={`${id}-description`}>Lamp illustration in color</desc>
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
        <path
          d="m72.33 26.08a2.08 2.08 0 1 0 -4.08 0 2.43 2.43 0 0 0 1.52 2.39v3.06h1v-3.06a2.44 2.44 0 0 0 1.56-2.39z"
          fill="#2870b5"
        />
        <path d="m69.04 68.69h2.48v11.19h-2.48z" fill="#2870b5" />
        <path d="m66.14 79.12h8.28v4.1h-8.28z" fill="#5fcbeb" />
        <path
          d="m86 105.74c0 9.09-7.06 10.41-15.75 10.41s-15.75-1.32-15.75-10.41 7.05-22.51 15.75-22.51 15.75 13.42 15.75 22.51z"
          fill="#5fcbeb"
        />
        <path
          d="m84.8 111.2c-2.39 4.21-8 5-14.51 5-8.7 0-15.75-1.32-15.75-10.41a27.75 27.75 0 0 1 2.69-11.12c9.25 17.25 26.53 17.95 27.57 16.53z"
          fill="#2870b5"
        />
        <path d="m66.14 83.23h8.28v1.08h-8.28z" fill="#2870b5" />
        <path d="m102.88 71.36h-65.18l17.73-43.66h29.71z" fill="#feca1e" />
        <path
          d="m102.88 71.36h-65.18l17.73-43.66h29.71z"
          fill={`url(#${id}-a)`}
        />
        <ellipse cx="70.29" cy="106.45" fill="#10004c" rx="4.93" ry="1.97" />
        <path
          d="m67.46 106.45c0 1.09 1.15 2 2.83 2 2.72 0 4.92-.88 4.92-2s-2.2-2-4.92-2c-1.76.04-2.83.92-2.83 2z"
          fill="#f17732"
        />
        <path
          d="m102.88 71.36h-65.18l12.06-29.7c18.49 31.34 53.12 29.7 53.12 29.7z"
          fill="#f17732"
        />
        <path
          d="m102.88 71.36h-65.18l12.06-29.7c18.49 31.34 53.12 29.7 53.12 29.7z"
          fill={`url(#${id}-b)`}
        />
        <path
          d="m43.36 67.32a5.37 5.37 0 0 0 .34-10.73l-3.83 9.41a5.33 5.33 0 0 0 3.49 1.32z"
          fill="#99052e"
        />
        <circle cx="54.12" cy="61.93" fill="#99052e" r="5.38" />
        <circle cx="64.93" cy="61.93" fill="#f17732" r="5.38" />
        <circle cx="75.69" cy="61.93" fill="#f17732" r="5.38" />
        <path
          d="m70.37 62.5a5.32 5.32 0 0 0 8.1 4 59.69 59.69 0 0 1 -8.1-4z"
          fill="#99052e"
        />
        <circle cx="86.45" cy="61.93" fill="#f17732" r="5.38" />
        <path
          d="m97.22 67.32a5.32 5.32 0 0 0 3.48-1.32l-3.82-9.41a5.37 5.37 0 0 0 .34 10.73z"
          fill="#f17732"
        />
        <path
          d="m64.93 67.32a5.37 5.37 0 0 0 5.33-4.88 59.6 59.6 0 0 1 -7.56-5.39 5.38 5.38 0 0 0 2.23 10.27z"
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
        <title id={`${id}-title`}>Lamp Circle Illustration</title>
        <desc id={`${id}-description`}>Grey lamp illustration</desc>
        <circle cx="70" cy="70" fill="#5b6279" r="70" />
        <path
          d="m72.33 26.08a2.08 2.08 0 1 0 -4.08 0 2.43 2.43 0 0 0 1.52 2.39v3.06h1v-3.06a2.44 2.44 0 0 0 1.56-2.39z"
          fill="#9da1af"
        />
        <path d="m69.04 68.69h2.48v11.19h-2.48z" fill="#9da1af" />
        <path
          d="m86 105.74c0 9.09-7.06 10.41-15.75 10.41s-15.75-1.32-15.75-10.41 7.05-22.51 15.75-22.51 15.75 13.42 15.75 22.51z"
          fill="#cdcfd6"
        />
        <path d="m66.14 79.12h8.28v4.1h-8.28z" fill="#cdcfd6" />
        <path d="m66.14 83.23h8.28v1.08h-8.28z" fill="#8c91a1" />
        <path
          d="m78.42 115.43a35.85 35.85 0 0 1 -8.13.72c-8.7 0-15.75-1.32-15.75-10.41 0 0 4.96 11.05 23.88 9.69z"
          fill="#adb0bc"
        />
        <path d="m102.88 71.36h-65.18l17.73-43.66h29.71z" fill="#fff" />
        <ellipse cx="70.29" cy="106.45" fill="#5b6279" rx="4.93" ry="1.97" />
        <path
          d="m67.46 106.45c0 1.09 1.15 2 2.83 2 2.72 0 4.92-.88 4.92-2s-2.2-2-4.92-2c-1.76.04-2.83.92-2.83 2z"
          fill="#fff"
        />
        <path
          d="m102.88 71.36h-65.18l12.06-29.7c18.49 31.34 53.12 29.7 53.12 29.7z"
          fill="#dee0e4"
        />
        <path
          d="m43.36 67.32a5.37 5.37 0 0 0 .34-10.73l-3.83 9.41a5.33 5.33 0 0 0 3.49 1.32z"
          fill="#6b7186"
        />
        <circle cx="54.12" cy="61.93" fill="#6b7186" r="5.38" />
        <circle cx="64.93" cy="61.93" fill="#7c8194" r="5.38" />
        <circle cx="75.69" cy="61.93" fill="#7c8194" r="5.38" />
        <path
          d="m70.37 62.5a5.32 5.32 0 0 0 8.1 4 59.69 59.69 0 0 1 -8.1-4z"
          fill="#6b7186"
        />
        <circle cx="86.45" cy="61.93" fill="#7c8194" r="5.38" />
        <path
          d="m97.22 67.32a5.32 5.32 0 0 0 3.48-1.32l-3.82-9.41a5.37 5.37 0 0 0 .34 10.73z"
          fill="#7c8194"
        />
        <path
          d="m64.93 67.32a5.37 5.37 0 0 0 5.33-4.88 59.6 59.6 0 0 1 -7.56-5.39 5.38 5.38 0 0 0 2.23 10.27z"
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
        <title id={`${id}-title`}>LampCircle Illustration</title>
        <desc id={`${id}-description`}>Purple lamp illustration</desc>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path d="m69.04 68.69h2.48v11.19h-2.48z" fill="#6f6693" />
        <path
          d="m86 105.74c0 9.09-7.06 10.41-15.75 10.41s-15.75-1.32-15.75-10.41 7.05-22.51 15.75-22.51 15.75 13.42 15.75 22.51z"
          fill="#cfccdb"
        />
        <path
          d="m78.42 115.43a35.85 35.85 0 0 1 -8.13.72c-8.7 0-15.75-1.32-15.75-10.41 0 0 4.96 11.05 23.88 9.69z"
          fill="#8780a5"
        />
        <ellipse cx="70.29" cy="106.45" fill="#10004c" rx="4.93" ry="1.97" />
        <path
          d="m102.88 71.36h-65.18l12.06-29.7c18.49 31.34 53.12 29.7 53.12 29.7z"
          fill="#cfccdb"
        />
        <path
          d="m43.36 67.32a5.37 5.37 0 0 0 .34-10.73l-3.83 9.41a5.33 5.33 0 0 0 3.49 1.32z"
          fill="#281a5e"
        />
        <circle cx="54.12" cy="61.93" fill="#281a5e" r="5.38" />
        <circle cx="64.93" cy="61.93" fill="#3f336f" r="5.38" />
        <circle cx="75.69" cy="61.93" fill="#3f336f" r="5.38" />
        <path
          d="m70.37 62.5a5.32 5.32 0 0 0 8.1 4 59.69 59.69 0 0 1 -8.1-4z"
          fill="#281a5e"
        />
        <circle cx="86.45" cy="61.93" fill="#3f336f" r="5.38" />
        <path
          d="m97.22 67.32a5.32 5.32 0 0 0 3.48-1.32l-3.82-9.41a5.37 5.37 0 0 0 .34 10.73z"
          fill="#3f336f"
        />
        <path
          d="m64.93 67.32a5.37 5.37 0 0 0 5.33-4.88 59.6 59.6 0 0 1 -7.56-5.39 5.38 5.38 0 0 0 2.23 10.27z"
          fill="#281a5e"
        />
        <path
          d="m72.33 26.08a2.08 2.08 0 1 0 -4.08 0 2.43 2.43 0 0 0 1.52 2.39v3.06h1v-3.06a2.44 2.44 0 0 0 1.56-2.39z"
          fill="#6f6693"
        />
        <path d="m102.88 71.36h-65.18l17.73-43.66h29.71z" fill="#fff" />
        <path d="m69.04 68.69h2.48v11.19h-2.48z" fill="#6f6693" />
        <path
          d="m86 105.74c0 9.09-7.06 10.41-15.75 10.41s-15.75-1.32-15.75-10.41 7.05-22.51 15.75-22.51 15.75 13.42 15.75 22.51z"
          fill="#b7b3c9"
        />
        <path d="m66.14 79.12h8.28v4.1h-8.28z" fill="#b7b3c9" />
        <path d="m66.14 83.23h8.28v1.08h-8.28z" fill="#8c91a1" />
        <path
          d="m78.42 115.43a35.85 35.85 0 0 1 -8.13.72c-8.7 0-15.75-1.32-15.75-10.41 0 0 4.96 11.05 23.88 9.69z"
          fill="#8780a5"
        />
        <ellipse cx="70.29" cy="106.45" fill="#10004c" rx="4.93" ry="1.97" />
        <path
          d="m67.46 106.45c0 1.09 1.15 2 2.83 2 2.72 0 4.92-.88 4.92-2s-2.2-2-4.92-2c-1.76.04-2.83.92-2.83 2z"
          fill="#fff"
        />
        <path
          d="m102.88 71.36h-65.18l12.06-29.7c18.49 31.34 53.12 29.7 53.12 29.7z"
          fill="#cfccdb"
        />
        <path
          d="m43.36 67.32a5.37 5.37 0 0 0 .34-10.73l-3.83 9.41a5.33 5.33 0 0 0 3.49 1.32z"
          fill="#281a5e"
        />
        <circle cx="54.12" cy="61.93" fill="#281a5e" r="5.38" />
        <circle cx="64.93" cy="61.93" fill="#3f336f" r="5.38" />
        <circle cx="75.69" cy="61.93" fill="#3f336f" r="5.38" />
        <path
          d="m70.37 62.5a5.32 5.32 0 0 0 8.1 4 59.69 59.69 0 0 1 -8.1-4z"
          fill="#281a5e"
        />
        <circle cx="86.45" cy="61.93" fill="#3f336f" r="5.38" />
        <path
          d="m97.22 67.32a5.32 5.32 0 0 0 3.48-1.32l-3.82-9.41a5.37 5.37 0 0 0 .34 10.73z"
          fill="#3f336f"
        />
        <path
          d="m64.93 67.32a5.37 5.37 0 0 0 5.33-4.88 59.6 59.6 0 0 1 -7.56-5.39 5.38 5.38 0 0 0 2.23 10.27z"
          fill="#281a5e"
        />
      </svg>
    );
  }
};

LampCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'lamp-circle-illustration',
};

export default memo(LampCircleIllustration);
