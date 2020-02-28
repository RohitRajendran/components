/** @module PlantCircleIllustration */
import React, {FC, memo, useState} from 'react';

type PlantCircleIllustrationProps = {
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

/** Renders a plant illustration. */
const PlantCircleIllustration: FC<PlantCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Plant Circle Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of a flower blooming from money.
        </desc>
        <pattern
          id={`${id}-a`}
          height="4"
          patternTransform="translate(1 1.22)"
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
          id={`${id}-b`}
          height="4"
          patternTransform="translate(1 1.22)"
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
          patternTransform="translate(1)"
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
          d="m70.49 37.22s-4.49 8.78-2.07 22.39l2.58-.27c-3.74-9.65-.51-22.12-.51-22.12z"
          fill="#2870b5"
        />
        <path
          d="m71.18 35.83c0-5.23 11.82-14.46 33.29-4.22-8.8.21-14.22 9.89-24 10.45-6.47.37-9.29-2.85-9.29-6.23z"
          fill="#2870b5"
        />
        <path
          d="m71.18 35.83c0-5.23 11.82-14.46 33.29-4.22-19.78-3.61-29.47-.2-33.29 4.22z"
          fill="#5fcbeb"
        />
        <path
          d="m92.4 53.66s-2.4 4.68-1.1 11.92l1.37-.14c-1.99-5.14-.27-11.78-.27-11.78z"
          fill="#2870b5"
        />
        <path
          d="m92.79 52.07c.5-2.74 7.58-6.44 17.83 1-4.63-.73-8.39 3.82-13.57 3.17-3.42-.45-4.58-2.4-4.26-4.17z"
          fill="#2870b5"
        />
        <path
          d="m92.79 52.07c.5-2.74 7.58-6.44 17.83 1-10.01-3.79-15.42-2.95-17.83-1z"
          fill="#5fcbeb"
        />
        <path
          d="m92.25 51.56c.6-1.61-2-5.79-9.75-5.08 2.68 1.07 3.25 4.66 6.19 5.94 1.95.85 3.18.18 3.56-.86z"
          fill="#2870b5"
        />
        <path
          d="m92.25 51.56c.6-1.61-2-5.79-9.75-5.08 6.5 1.15 9.09 3.29 9.75 5.08z"
          fill="#5fcbeb"
        />
        <path
          d="m46.09 53.9s3.16 6.22 1.47 15.84l-1.83-.19c2.65-6.83.36-15.65.36-15.65z"
          fill="#2870b5"
        />
        <path
          d="m45.58 51.77c-.67-3.64-10.08-8.55-23.71 1.32 6.15-1 11.15 5.07 18 4.2 4.59-.57 6.13-3.17 5.71-5.52z"
          fill="#2870b5"
        />
        <path
          d="m45.58 51.77c-.67-3.64-10.08-8.55-23.71 1.32 13.3-5.03 20.5-3.91 23.71-1.32z"
          fill="#5fcbeb"
        />
        <path
          d="m46.29 51.1c-.79-2.14 2.65-7.69 13-6.75-3.57 1.41-4.32 6.19-8.23 7.9-2.63 1.12-4.26.23-4.77-1.15z"
          fill="#2870b5"
        />
        <path
          d="m46.29 51.1c-.79-2.14 2.65-7.69 13-6.75-8.66 1.52-12.12 4.37-13 6.75z"
          fill="#5fcbeb"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="63.23"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="66.85"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="70.48"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="74.11"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="77.73"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="81.36"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="84.99"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="88.61"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="92.24"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="95.87"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="99.49"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="103.12"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="106.75"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="63.23"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="66.85"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="70.48"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="74.11"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="77.73"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="81.36"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="84.99"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="88.61"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="92.24"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="95.87"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="99.49"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="103.12"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="106.75"
        />
        <path
          d="m103.05 74.1h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.61a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.27 25.67 3.59 25.67 3.59z"
          fill="#99052e"
        />
        <path
          d="m103.05 70.48h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 66.85h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m103.05 77.73h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 81.36h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.27 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 85h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.28 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m103.05 88.61h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 92.24h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 95.87h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 99.49h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 103.12h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.62a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.29 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m103.05 106.74h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m103.05 110.38h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <g fill="#f17732">
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="66.75" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="70.38" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="74.01" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="77.63" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="81.26" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="84.89" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="88.51" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="92.14" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="95.77" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="99.39" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="103.02" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="66.75" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="70.38" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="74.01" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="77.63" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="81.26" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="84.89" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="88.51" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="92.14" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="95.77" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="99.39" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="103.02" />
        </g>
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="66.75"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="70.38"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="74.01"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="77.63"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="81.26"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="84.89"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="88.51"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="92.14"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="95.77"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="99.39"
        />
        <rect
          fill="url(#a)"
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="103.02"
        />
        <path
          d="m65.54 70.38h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m65.54 74h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m65.54 77.63h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m65.54 81.26h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m65.54 84.88h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m65.54 88.51h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m65.54 92.14h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.64a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.32 25.67 3.64 25.67 3.64z"
          fill="#99052e"
        />
        <path
          d="m65.54 95.76h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m65.54 99.39h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m65.54 103h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.32 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m65.54 106.65h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="56.98"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="60.61"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="64.24"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="67.87"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="71.5"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="75.12"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="78.75"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="82.38"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="86"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="89.63"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="93.26"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="96.88"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="100.51"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="104.14"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="107.76"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="111.39"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="56.98"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="60.61"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="64.24"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="67.87"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="71.5"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="75.12"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="78.75"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="82.38"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="86"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="89.63"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="93.26"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="96.88"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="100.51"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="104.14"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="107.76"
        />
        <rect
          fill="url(#b)"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="111.39"
        />
        <path
          d="m82.37 60.61h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.48h1.72c2.6 3.29 25.65 3.61 25.65 3.61z"
          fill="#f17732"
        />
        <path
          d="m82.37 64.24h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 67.86h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#f17732"
        />
        <path
          d="m82.37 71.5h-27.37a1.5 1.5 0 0 1 -1.52-1.5v-.63a1.5 1.5 0 0 1 1.52-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 75.12h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.62a1.5 1.5 0 0 1 1.49-1.51h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 78.74h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#f17732"
        />
        <path
          d="m82.37 82.37h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 86h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.49 1.49 0 0 1 1.49-1.49h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#f17732"
        />
        <path
          d="m82.37 89.62h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#f17732"
        />
        <path
          d="m82.37 93.25h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 96.88h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 100.51h-27.37a1.5 1.5 0 0 1 -1.52-1.51v-.63a1.5 1.5 0 0 1 1.52-1.49h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 104.13h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 107.76h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 111.38h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#f17732"
        />
        <path
          d="m82.37 115h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.32 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m68.57 7.31s2.19-.77 2.17.47-2.78 3.36-2.9 6.27 6.09 10.51 2.37 14.89a5.75 5.75 0 0 1 -9.33-1.5c-1.73-3.51 2.12-15.79 7.69-20.13z"
          fill="#feca1e"
        />
        <path
          d="m68.57 7.31a5 5 0 0 1 1.09-.23c-5 8.17-6.15 11.36-4.65 23.53a5.76 5.76 0 0 1 -4.13-3.17c-1.73-3.51 2.12-15.79 7.69-20.13z"
          fill="#f8f7f4"
        />
        <path
          d="m84.55 20.41c.51 1.86 2.12 3.24 3.41 4.37 1.44 1.27-4.4 1.56-6.86 3.11s-5.9 7-11.62 6.46a5.76 5.76 0 0 1 -4-8.54c1.86-3.42 18.36-7.98 19.07-5.4z"
          fill="#fde5cb"
        />
        <path
          d="m84.55 20.41a5.23 5.23 0 0 0 .56 1.31c-2.61 2.37-13.93.56-20.1 8.9a5.76 5.76 0 0 1 .42-4.81c1.91-3.42 18.41-7.98 19.12-5.4z"
          fill="#f8f7f4"
        />
        <path
          d="m84.55 20.41a5.23 5.23 0 0 0 .56 1.31c-2.61 2.37-13.93.56-20.1 8.9a5.76 5.76 0 0 1 .42-4.81c1.91-3.42 18.41-7.98 19.12-5.4z"
          fill="url(#c)"
        />
        <path
          d="m43.66 18.86s-1.72 3.43-.72 4.17c9.44.28 8.42 10.13 17 10.19 3.46 0 6.41-4.4 4.43-8.35-1.77-3.5-13.92-7.8-20.71-6.01z"
          fill="#fde5cb"
        />
        <path
          d="m43.66 18.86-.66 1.71c18 .76 21.22 10 21.22 10a5.91 5.91 0 0 0 .18-5.67c-1.8-3.53-13.95-7.83-20.74-6.04z"
          fill="#f8f7f4"
        />
        <path
          d="m43.66 18.86-.66 1.71c18 .76 21.22 10 21.22 10a5.91 5.91 0 0 0 .18-5.67c-1.8-3.53-13.95-7.83-20.74-6.04z"
          fill="url(#c)"
        />
        <path
          d="m41.75 38.62s.07 2.38 1.25 2.12 3.42-2.21 6.27-2.82 10.35 3 14-1.4a5.75 5.75 0 0 0 -3.08-8.93c-3.68-1.11-15.11 4.83-18.44 11.03z"
          fill="#fde5cb"
        />
        <path
          d="m41.75 38.62s.07 2.38 1.25 2.12 3.42-2.21 6.27-2.82 10.35 3 14-1.4a5.75 5.75 0 0 0 -3.08-8.93c-3.68-1.11-15.11 4.83-18.44 11.03z"
          fill="#feca1e"
        />
        <path
          d="m41.75 38.62a23 23 0 0 1 22.73-5.4c2.25.65-1.42-4.81-4.21-5.63-3.76-1.11-15.19 4.83-18.52 11.03z"
          fill="#f8f7f4"
        />
        <path
          d="m56.86 24.78a17.74 17.74 0 0 1 7.58 7.22l-1 .7c-1.63-4.54-6.58-7.92-6.58-7.92z"
          fill="#10004c"
        />
        <path
          d="m62.57 21.14a17.81 17.81 0 0 0 2.74 10.09l1.08-.53c-3.2-3.6-3.82-9.56-3.82-9.56z"
          fill="#2870b5"
        />
        <path
          d="m65.41 22.81a11 11 0 0 0 1.59 7.53l-1 .7a14.89 14.89 0 0 1 -.59-8.23z"
          fill="#10004c"
        />
        <path
          d="m61.22 24.61a11 11 0 0 0 1.63 7.54l-1 .69a14.84 14.84 0 0 1 -.63-8.23z"
          fill="#2870b5"
        />
        <path
          d="m68.72 24.59a11 11 0 0 0 -1.46 7.57l-1.18.26a14.85 14.85 0 0 1 2.64-7.83z"
          fill="#2870b5"
        />
        <path
          d="m61.29 24.7a34 34 0 0 0 4.79 6.17l-.81.89a69.32 69.32 0 0 1 -3.98-7.06z"
          fill="#10004c"
        />
        <path
          d="m53.36 27.28s9-.79 12.3 4.7l-1 .7c-1.66-4.52-11.3-5.4-11.3-5.4z"
          fill="#2870b5"
        />
        <path
          d="m83.47 45.35s-.38 2.28-1.47 1.65-.4-1.83-2.9-3.33-13.33-1.91-15.4-7.28a5.75 5.75 0 0 1 5.8-7.46c3.91.17 12.82 9.48 13.97 16.42z"
          fill="#fde5cb"
        />
        <path
          d="m83.47 45.35s-.38 2.28-1.47 1.65-.4-1.83-2.9-3.33-13.33-1.91-15.4-7.28a5.75 5.75 0 0 1 5.8-7.46c3.91.17 12.82 9.48 13.97 16.42z"
          fill="#feca1e"
        />
        <path
          d="m83.47 45.35s-12.07-15.84-18.28-14.8a5.75 5.75 0 0 1 4.31-1.62c3.91.17 12.82 9.48 13.97 16.42z"
          fill="#f8f7f4"
        />
        <path
          d="m83.47 45.35s-12.07-15.84-18.28-14.8a5.75 5.75 0 0 1 4.31-1.62c3.91.17 12.82 9.48 13.97 16.42z"
          fill="#f8f7f4"
        />
        <path
          d="m59.24 53.93c3.43 1.6 3.29-.49 6.85.18 1.51.29-1.75-1.69-1-4.5s7.8-10 3.87-15.33c-2-2.79-6-4.25-9.35-1.35-4.01 3.5-3.79 19.4-.37 21z"
          fill="#fde5cb"
        />
        <path
          d="m59.24 53.93a4.2 4.2 0 0 0 3.38.44c-7.63-4.76 8.56-18.54 2.15-22.9a5.84 5.84 0 0 0 -5.16 1.46c-4.01 3.5-3.79 19.4-.37 21z"
          fill="#f8f7f4"
        />
        <path
          d="m59.24 53.93a4.2 4.2 0 0 0 3.38.44c-7.63-4.76 8.56-18.54 2.15-22.9a5.84 5.84 0 0 0 -5.16 1.46c-4.01 3.5-3.79 19.4-.37 21z"
          fill="url(#c)"
        />
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
        <title id={`${id}-title`}>Plant Circle Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of a plant coming out of money.
        </desc>
        <pattern
          id={`${id}-a`}
          height="4"
          patternTransform="translate(1)"
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
          id={`${id}-b`}
          height="4"
          patternTransform="translate(1)"
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
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m70.49 37.22s-4.49 8.78-2.07 22.39l2.58-.27c-3.74-9.65-.51-22.12-.51-22.12z"
          fill="#2870b5"
        />
        <path
          d="m71.18 35.83c0-5.23 11.82-14.46 33.29-4.22-8.8.21-14.22 9.89-24 10.45-6.47.37-9.29-2.85-9.29-6.23z"
          fill="#2870b5"
        />
        <path
          d="m71.18 35.83c0-5.23 11.82-14.46 33.29-4.22-19.78-3.61-29.47-.2-33.29 4.22z"
          fill="#5fcbeb"
        />
        <path
          d="m92.4 53.66s-2.4 4.68-1.1 11.92l1.37-.14c-1.99-5.14-.27-11.78-.27-11.78z"
          fill="#2870b5"
        />
        <path
          d="m92.79 52.07c.5-2.74 7.58-6.44 17.83 1-4.63-.73-8.39 3.82-13.57 3.17-3.42-.45-4.58-2.4-4.26-4.17z"
          fill="#2870b5"
        />
        <path
          d="m92.79 52.07c.5-2.74 7.58-6.44 17.83 1-10.01-3.79-15.42-2.95-17.83-1z"
          fill="#5fcbeb"
        />
        <path
          d="m92.25 51.56c.6-1.61-2-5.79-9.75-5.08 2.68 1.07 3.25 4.66 6.19 5.94 1.95.85 3.18.18 3.56-.86z"
          fill="#2870b5"
        />
        <path
          d="m92.25 51.56c.6-1.61-2-5.79-9.75-5.08 6.5 1.15 9.09 3.29 9.75 5.08z"
          fill="#5fcbeb"
        />
        <path
          d="m46.09 53.9s3.16 6.22 1.47 15.84l-1.83-.19c2.65-6.83.36-15.65.36-15.65z"
          fill="#2870b5"
        />
        <path
          d="m45.58 51.77c-.67-3.64-10.08-8.55-23.71 1.32 6.15-1 11.15 5.07 18 4.2 4.59-.57 6.13-3.17 5.71-5.52z"
          fill="#2870b5"
        />
        <path
          d="m45.58 51.77c-.67-3.64-10.08-8.55-23.71 1.32 13.3-5.03 20.5-3.91 23.71-1.32z"
          fill="#5fcbeb"
        />
        <path
          d="m46.29 51.1c-.79-2.14 2.65-7.69 13-6.75-3.57 1.41-4.32 6.19-8.23 7.9-2.63 1.12-4.26.23-4.77-1.15z"
          fill="#2870b5"
        />
        <path
          d="m46.29 51.1c-.79-2.14 2.65-7.69 13-6.75-8.66 1.52-12.12 4.37-13 6.75z"
          fill="#5fcbeb"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="63.23"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="66.85"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="70.48"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="74.11"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="77.73"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="81.36"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="84.99"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="88.61"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="92.24"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="95.87"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="99.49"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="103.12"
        />
        <rect
          fill="#f17732"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="106.75"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="63.23"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="66.85"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="70.48"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="74.11"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="77.73"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="81.36"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="84.99"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="88.61"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="92.24"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="95.87"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="99.49"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="103.12"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="106.75"
        />
        <path
          d="m103.05 74.1h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.61a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.27 25.67 3.59 25.67 3.59z"
          fill="#99052e"
        />
        <path
          d="m103.05 70.48h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 66.85h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m103.05 77.73h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 81.36h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.27 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 85h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.28 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m103.05 88.61h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 92.24h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 95.87h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 99.49h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m103.05 103.12h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.62a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.29 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m103.05 106.74h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m103.05 110.38h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <g fill="#f17732">
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="66.75" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="70.38" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="74.01" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="77.63" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="81.26" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="84.89" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="88.51" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="92.14" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="95.77" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="99.39" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="103.02" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="66.75" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="70.38" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="74.01" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="77.63" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="81.26" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="84.89" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="88.51" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="92.14" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="95.77" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="99.39" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="103.02" />
        </g>
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="66.75"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="70.38"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="74.01"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="77.63"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="81.26"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="84.89"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="88.51"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="92.14"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="95.77"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="99.39"
        />
        <rect
          fill={`url(#${id}-a)`}
          height="3.63"
          rx="1.5"
          width="29.5"
          x="36.65"
          y="103.02"
        />
        <path
          d="m65.54 70.38h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m65.54 74h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m65.54 77.63h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m65.54 81.26h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m65.54 84.88h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m65.54 88.51h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m65.54 92.14h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.64a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.32 25.67 3.64 25.67 3.64z"
          fill="#99052e"
        />
        <path
          d="m65.54 95.76h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#99052e"
        />
        <path
          d="m65.54 99.39h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m65.54 103h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.32 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <path
          d="m65.54 106.65h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#99052e"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="56.98"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="60.61"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="64.24"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="67.87"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="71.5"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="75.12"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="78.75"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="82.38"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="86"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="89.63"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="93.26"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="96.88"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="100.51"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="104.14"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="107.76"
        />
        <rect
          fill="#feca1e"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="111.39"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="56.98"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="60.61"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="64.24"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="67.87"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="71.5"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="75.12"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="78.75"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="82.38"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="86"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="89.63"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="93.26"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="96.88"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="100.51"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="104.14"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="107.76"
        />
        <rect
          fill={`url(#${id}-b)`}
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="111.39"
        />
        <path
          d="m82.37 60.61h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.48h1.72c2.6 3.29 25.65 3.61 25.65 3.61z"
          fill="#f17732"
        />
        <path
          d="m82.37 64.24h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 67.86h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#f17732"
        />
        <path
          d="m82.37 71.5h-27.37a1.5 1.5 0 0 1 -1.52-1.5v-.63a1.5 1.5 0 0 1 1.52-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 75.12h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.62a1.5 1.5 0 0 1 1.49-1.51h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 78.74h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#f17732"
        />
        <path
          d="m82.37 82.37h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 86h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.49 1.49 0 0 1 1.49-1.49h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#f17732"
        />
        <path
          d="m82.37 89.62h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#f17732"
        />
        <path
          d="m82.37 93.25h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 96.88h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 100.51h-27.37a1.5 1.5 0 0 1 -1.52-1.51v-.63a1.5 1.5 0 0 1 1.52-1.49h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 104.13h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 107.76h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m82.37 111.38h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#f17732"
        />
        <path
          d="m82.37 115h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.32 25.65 3.63 25.65 3.63z"
          fill="#f17732"
        />
        <path
          d="m68.49 31.06c-3.06-4.68-9.34-3.25-13.49-6.34 3.25 4.15 2.3 9.56 7.1 12.72a4.61 4.61 0 0 0 6.39-6.38z"
          fill="#fde5cb"
        />
        <path
          d="m60.55 37.27s3.74 3.22 7 .58c2.36-1.93-7-.58-7-.58z"
          fill="#5fcbeb"
        />
        <path
          d="m68.33 29.34s3.33 3.64.79 7c-1.85 2.39-.79-7-.79-7z"
          fill="#5fcbeb"
        />
        <path
          d="m68.84 34.87c-1.31-2-4-1.4-5.8-2.73 1.4 1.79 1 4.11 3.05 5.47a2 2 0 0 0 2.75-2.74z"
          fill="#2870b5"
        />
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
        <title id={`${id}-title`}>Plant Circle Illustration</title>
        <desc id={`${id}-description`}>
          Grey Illustration of a plant coming out of money.
        </desc>
        <circle cx="70" cy="70" fill="#5b6279" r="70" />
        <path
          d="m70.49 37.22s-4.49 8.78-2.07 22.39l2.58-.27c-3.74-9.65-.51-22.12-.51-22.12z"
          fill="#adb0bc"
        />
        <path
          d="m71.18 35.83c0-5.23 11.82-14.46 33.29-4.22-8.8.21-14.22 9.89-24 10.45-6.47.37-9.29-2.85-9.29-6.23z"
          fill="#adb0bc"
        />
        <path
          d="m71.18 35.83c0-5.23 11.82-14.46 33.29-4.22-19.78-3.61-29.47-.2-33.29 4.22z"
          fill="#cdcfd6"
        />
        <path
          d="m92.4 53.66s-2.4 4.68-1.1 11.92l1.37-.14c-1.99-5.14-.27-11.78-.27-11.78z"
          fill="#adb0bc"
        />
        <path
          d="m92.79 52.07c.5-2.74 7.58-6.44 17.83 1-4.63-.73-8.39 3.82-13.57 3.17-3.42-.45-4.58-2.4-4.26-4.17z"
          fill="#adb0bc"
        />
        <path
          d="m92.79 52.07c.5-2.74 7.58-6.44 17.83 1-10.01-3.79-15.42-2.95-17.83-1z"
          fill="#cdcfd6"
        />
        <path
          d="m92.25 51.56c.6-1.61-2-5.79-9.75-5.08 2.68 1.07 3.25 4.66 6.19 5.94 1.95.85 3.18.18 3.56-.86z"
          fill="#adb0bc"
        />
        <path
          d="m92.25 51.56c.6-1.61-2-5.79-9.75-5.08 6.5 1.15 9.09 3.29 9.75 5.08z"
          fill="#cdcfd6"
        />
        <path
          d="m46.09 53.9s3.16 6.22 1.47 15.84l-1.83-.19c2.65-6.83.36-15.65.36-15.65z"
          fill="#adb0bc"
        />
        <path
          d="m45.58 51.77c-.67-3.64-10.08-8.55-23.71 1.32 6.15-1 11.15 5.07 18 4.2 4.59-.57 6.13-3.17 5.71-5.52z"
          fill="#adb0bc"
        />
        <path
          d="m45.58 51.77c-.67-3.64-10.08-8.55-23.71 1.32 13.3-5.03 20.5-3.91 23.71-1.32z"
          fill="#cdcfd6"
        />
        <path
          d="m46.29 51.1c-.79-2.14 2.65-7.69 13-6.75-3.57 1.41-4.32 6.19-8.23 7.9-2.63 1.12-4.26.23-4.77-1.15z"
          fill="#adb0bc"
        />
        <path
          d="m46.29 51.1c-.79-2.14 2.65-7.69 13-6.75-8.66 1.52-12.12 4.37-13 6.75z"
          fill="#cdcfd6"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="63.23"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="66.85"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="70.48"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="74.11"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="77.73"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="81.36"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="84.99"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="88.61"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="92.24"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="95.87"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="99.49"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="103.12"
        />
        <rect
          fill="#adb0bc"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="106.75"
        />
        <g fill="#9da1af">
          <path d="m103.05 74.1h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.61a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.27 25.67 3.59 25.67 3.59z" />
          <path d="m103.05 70.48h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 66.85h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z" />
          <path d="m103.05 77.73h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 81.36h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.27 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 85h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.28 25.67 3.62 25.67 3.62z" />
          <path d="m103.05 88.61h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 92.24h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 95.87h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 99.49h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 103.12h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.62a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.29 25.67 3.62 25.67 3.62z" />
          <path d="m103.05 106.74h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.62 25.67 3.62z" />
          <path d="m103.05 110.38h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="66.75" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="70.38" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="74.01" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="77.63" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="81.26" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="84.89" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="88.51" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="92.14" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="95.77" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="99.39" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="103.02" />
        </g>
        <path
          d="m65.54 70.38h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#8c91a1"
        />
        <path
          d="m65.54 74h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#8c91a1"
        />
        <path
          d="m65.54 77.63h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#8c91a1"
        />
        <path
          d="m65.54 81.26h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#8c91a1"
        />
        <path
          d="m65.54 84.88h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#8c91a1"
        />
        <path
          d="m65.54 88.51h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#8c91a1"
        />
        <path
          d="m65.54 92.14h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.64a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.32 25.67 3.64 25.67 3.64z"
          fill="#8c91a1"
        />
        <path
          d="m65.54 95.76h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#8c91a1"
        />
        <path
          d="m65.54 99.39h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#8c91a1"
        />
        <path
          d="m65.54 103h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.32 25.67 3.63 25.67 3.63z"
          fill="#8c91a1"
        />
        <path
          d="m65.54 106.65h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#8c91a1"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="56.98"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="60.61"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="64.24"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="67.87"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="71.5"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="75.12"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="78.75"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="82.38"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="86"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="89.63"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="93.26"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="96.88"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="100.51"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="104.14"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="107.76"
        />
        <rect
          fill="#cdcfd6"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="111.39"
        />
        <path
          d="m82.37 60.61h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.48h1.72c2.6 3.29 25.65 3.61 25.65 3.61z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 64.24h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 67.86h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 71.5h-27.37a1.5 1.5 0 0 1 -1.52-1.5v-.63a1.5 1.5 0 0 1 1.52-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 75.12h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.62a1.5 1.5 0 0 1 1.49-1.51h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 78.74h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 82.37h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 86h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.49 1.49 0 0 1 1.49-1.49h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 89.62h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 93.25h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 96.88h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 100.51h-27.37a1.5 1.5 0 0 1 -1.52-1.51v-.63a1.5 1.5 0 0 1 1.52-1.49h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 104.13h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 107.76h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 111.38h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#bdc0c9"
        />
        <path
          d="m82.37 115h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.32 25.65 3.63 25.65 3.63z"
          fill="#bdc0c9"
        />
        <path
          d="m68.49 31.06c-3.06-4.68-9.34-3.25-13.49-6.34 3.25 4.15 2.3 9.56 7.1 12.72a4.61 4.61 0 0 0 6.39-6.38z"
          fill="#fff"
        />
        <path
          d="m60.55 37.27s3.74 3.22 7 .58c2.36-1.93-7-.58-7-.58z"
          fill="#cdcfd6"
        />
        <path
          d="m68.33 29.34s3.33 3.64.79 7c-1.85 2.39-.79-7-.79-7z"
          fill="#cdcfd6"
        />
        <path
          d="m68.84 34.87c-1.31-2-4-1.4-5.8-2.73 1.4 1.79 1 4.11 3.05 5.47a2 2 0 0 0 2.75-2.74z"
          fill="#adb0bc"
        />
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
        <title id={`${id}-title`}>Plant Circle Illustration</title>
        <desc id={`${id}-description`}>
          Purple Illustration of a plant coming out of money.
        </desc>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m70.49 37.22s-4.49 8.78-2.07 22.39l2.58-.27c-3.74-9.65-.51-22.12-.51-22.12z"
          fill="#8780a5"
        />
        <path
          d="m71.18 35.83c0-5.23 11.82-14.46 33.29-4.22-8.8.21-14.22 9.89-24 10.45-6.47.37-9.29-2.85-9.29-6.23z"
          fill="#8780a5"
        />
        <path
          d="m71.18 35.83c0-5.23 11.82-14.46 33.29-4.22-19.78-3.61-29.47-.2-33.29 4.22z"
          fill="#b7b3c9"
        />
        <path
          d="m92.4 53.66s-2.4 4.68-1.1 11.92l1.37-.14c-1.99-5.14-.27-11.78-.27-11.78z"
          fill="#8780a5"
        />
        <path
          d="m92.79 52.07c.5-2.74 7.58-6.44 17.83 1-4.63-.73-8.39 3.82-13.57 3.17-3.42-.45-4.58-2.4-4.26-4.17z"
          fill="#8780a5"
        />
        <path
          d="m92.79 52.07c.5-2.74 7.58-6.44 17.83 1-10.01-3.79-15.42-2.95-17.83-1z"
          fill="#b7b3c9"
        />
        <path
          d="m92.25 51.56c.6-1.61-2-5.79-9.75-5.08 2.68 1.07 3.25 4.66 6.19 5.94 1.95.85 3.18.18 3.56-.86z"
          fill="#8780a5"
        />
        <path
          d="m92.25 51.56c.6-1.61-2-5.79-9.75-5.08 6.5 1.15 9.09 3.29 9.75 5.08z"
          fill="#b7b3c9"
        />
        <path
          d="m46.09 53.9s3.16 6.22 1.47 15.84l-1.83-.19c2.65-6.83.36-15.65.36-15.65z"
          fill="#8780a5"
        />
        <path
          d="m45.58 51.77c-.67-3.64-10.08-8.55-23.71 1.32 6.15-1 11.15 5.07 18 4.2 4.59-.57 6.13-3.17 5.71-5.52z"
          fill="#8780a5"
        />
        <path
          d="m45.58 51.77c-.67-3.64-10.08-8.55-23.71 1.32 13.3-5.03 20.5-3.91 23.71-1.32z"
          fill="#b7b3c9"
        />
        <path
          d="m46.29 51.1c-.79-2.14 2.65-7.69 13-6.75-3.57 1.41-4.32 6.19-8.23 7.9-2.63 1.12-4.26.23-4.77-1.15z"
          fill="#8780a5"
        />
        <path
          d="m46.29 51.1c-.79-2.14 2.65-7.69 13-6.75-8.66 1.52-12.12 4.37-13 6.75z"
          fill="#b7b3c9"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="63.23"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="66.85"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="70.48"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="74.11"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="77.73"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="81.36"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="84.99"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="88.61"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="92.24"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="95.87"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="99.49"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="103.12"
        />
        <rect
          fill="#8780a5"
          height="3.63"
          rx="1.5"
          width="29.79"
          x="74.16"
          y="106.75"
        />
        <g fill="#6f6693">
          <path d="m103.05 74.1h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.61a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.27 25.67 3.59 25.67 3.59z" />
          <path d="m103.05 70.48h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 66.85h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z" />
          <path d="m103.05 77.73h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 81.36h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.27 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 85h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.28 25.67 3.62 25.67 3.62z" />
          <path d="m103.05 88.61h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 92.24h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 95.87h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 99.49h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z" />
          <path d="m103.05 103.12h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.62a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.29 25.67 3.62 25.67 3.62z" />
          <path d="m103.05 106.74h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.62 25.67 3.62z" />
          <path d="m103.05 110.38h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="66.75" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="70.38" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="74.01" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="77.63" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="81.26" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="84.89" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="88.51" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="92.14" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="95.77" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="99.39" />
          <rect height="3.63" rx="1.5" width="29.5" x="36.65" y="103.02" />
        </g>
        <path
          d="m65.54 70.38h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#584d82"
        />
        <path
          d="m65.54 74h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#584d82"
        />
        <path
          d="m65.54 77.63h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#584d82"
        />
        <path
          d="m65.54 81.26h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#584d82"
        />
        <path
          d="m65.54 84.88h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#584d82"
        />
        <path
          d="m65.54 88.51h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#584d82"
        />
        <path
          d="m65.54 92.14h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.64a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.32 25.67 3.64 25.67 3.64z"
          fill="#584d82"
        />
        <path
          d="m65.54 95.76h-27.39a1.5 1.5 0 0 1 -1.5-1.49v-.64a1.5 1.5 0 0 1 1.5-1.49h1.72c2.62 3.3 25.67 3.62 25.67 3.62z"
          fill="#584d82"
        />
        <path
          d="m65.54 99.39h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.31 25.67 3.63 25.67 3.63z"
          fill="#584d82"
        />
        <path
          d="m65.54 103h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.32 25.67 3.63 25.67 3.63z"
          fill="#584d82"
        />
        <path
          d="m65.54 106.65h-27.39a1.5 1.5 0 0 1 -1.5-1.5v-.63a1.5 1.5 0 0 1 1.5-1.5h1.72c2.62 3.3 25.67 3.63 25.67 3.63z"
          fill="#584d82"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="56.98"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="60.61"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="64.24"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="67.87"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="71.5"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="75.12"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="78.75"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="82.38"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="86"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="89.63"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="93.26"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="96.88"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="100.51"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="104.14"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="107.76"
        />
        <rect
          fill="#b7b3c9"
          height="3.63"
          rx="1.5"
          width="32.95"
          x="53.48"
          y="111.39"
        />
        <path
          d="m82.37 60.61h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.48h1.72c2.6 3.29 25.65 3.61 25.65 3.61z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 64.24h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 67.86h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 71.5h-27.37a1.5 1.5 0 0 1 -1.52-1.5v-.63a1.5 1.5 0 0 1 1.52-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 75.12h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.62a1.5 1.5 0 0 1 1.49-1.51h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 78.74h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 82.37h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 86h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.49 1.49 0 0 1 1.49-1.49h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 89.62h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 93.25h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 96.88h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 100.51h-27.37a1.5 1.5 0 0 1 -1.52-1.51v-.63a1.5 1.5 0 0 1 1.52-1.49h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 104.13h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.31 25.65 3.63 25.65 3.63z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 107.76h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.63 25.65 3.63z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 111.38h-27.37a1.49 1.49 0 0 1 -1.49-1.49v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.3 25.65 3.62 25.65 3.62z"
          fill="#9f99b7"
        />
        <path
          d="m82.37 115h-27.37a1.5 1.5 0 0 1 -1.49-1.5v-.63a1.5 1.5 0 0 1 1.49-1.5h1.72c2.6 3.32 25.65 3.63 25.65 3.63z"
          fill="#9f99b7"
        />
        <path
          d="m68.49 31.06c-3.06-4.68-9.34-3.25-13.49-6.34 3.25 4.15 2.3 9.56 7.1 12.72a4.61 4.61 0 0 0 6.39-6.38z"
          fill="#fff"
        />
        <path
          d="m60.55 37.27s3.74 3.22 7 .58c2.36-1.93-7-.58-7-.58z"
          fill="#b7b3c9"
        />
        <path
          d="m68.33 29.34s3.33 3.64.79 7c-1.85 2.39-.79-7-.79-7z"
          fill="#b7b3c9"
        />
        <path
          d="m68.84 34.87c-1.31-2-4-1.4-5.8-2.73 1.4 1.79 1 4.11 3.05 5.47a2 2 0 0 0 2.75-2.74z"
          fill="#8780a5"
        />
      </svg>
    );
  }
};

PlantCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'plant-circle-illustration',
};

export default memo(PlantCircleIllustration);
export {PlantCircleIllustration as PurePlantCircleIllustration};
