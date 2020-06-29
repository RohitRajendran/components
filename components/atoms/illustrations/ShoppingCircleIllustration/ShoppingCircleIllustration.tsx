/** @module ShoppingCircleIllustration */
import React, {FC, useState} from 'react';

type ShoppingCircleIllustrationProps = {
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

/** Renders a shopping illustration. */
const ShoppingCircleIllustration: FC<ShoppingCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Shopping Circle Illustration</title>
        <desc id={`${id}-description`}>Illustration of full shopping bags</desc>
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
          d="m47.67 23.34h24.69v34.75h-24.69z"
          fill="#f8f7f4"
          transform="matrix(.96135785 -.2753018 .2753018 .96135785 -8.89 18.09)"
        />
        <path
          d="m76.66 54.02-23.73 6.8-9.57-33.41 23.74-6.8z"
          fill={`url(#${id}-a)`}
        />
        <path
          d="m59.21 18.58h44.52v33.8h-44.52z"
          fill="#99052e"
          transform="matrix(.94821284 .31763566 -.31763566 .94821284 15.49 -24.04)"
        />
        <path
          d="m102.03 40.83-1.92-2.31-1.92 2.31-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.86-2.24-1.86 2.24-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31v63.49h57.45v-63.48z"
          fill="#feca1e"
        />
        <path
          d="m102.03 40.83-1.92-2.31-1.92 2.31-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.86-2.24-1.86 2.24-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31v63.49h57.45v-63.48z"
          fill={`url(#${id}-b)`}
        />
        <path
          d="m46.5 38.52v63.48h57.44c-30.07 0-57.46-31.74-57.44-63.48z"
          fill="#f17732"
        />
        <path
          d="m46.5 38.52v63.48h57.44c-30.07 0-57.46-31.74-57.44-63.48z"
          fill={`url(#${id}-c)`}
        />
        <path
          d="m92.26 70.58h11.24v19.48h-11.24z"
          fill="#10004c"
          transform="matrix(-.97224756 .23395446 -.23395446 -.97224756 211.83 135.52)"
        />
        <ellipse cx="107.21" cy="80.48" fill="#f17732" rx="7.49" ry="3.87" />
        <ellipse cx="38.68" cy="64.18" fill="#feca1e" rx="13.36" ry="6.9" />
        <path d="m92.05 80.31h22.65v25.84h-22.65z" fill="#5fcbeb" />
        <path
          d="m114.7 106.15h-22.65v-16.15c0 8.09 13.89 16.15 22.65 16.15z"
          fill="#2870b5"
        />
        <path
          d="m45.72 49.24h20.04v42.86h-20.04z"
          fill="#10004c"
          transform="matrix(.97224756 .23395446 -.23395446 .97224756 18.07 -11.08)"
        />
        <path
          d="m35.15 64.18s0-.08 0-.13c0-7 5.08-12.82 11.36-12.82s11.35 5.85 11.35 12.82v.13h1.3v-.13c-.01-7.77-5.68-14.05-12.66-14.05s-12.66 6.28-12.66 14.05v.13z"
          fill="#f8f7f4"
        />
        <path d="m25.33 64.18h42.31v41.96h-42.31z" fill="#fde5cb" />
        <path
          d="m67.64 106.15h-42.31v-42c0 23.43 17.92 42.02 42.31 42z"
          fill="#feca1e"
        />
        <path d="m25.33 71.87h42.31v19.08h-42.31z" fill="#f8f7f4" />
        <path d="m25.33 71.87h42.31v19.08h-42.31z" fill={`url(#${id}-a)`} />
        <path
          d="m26 71.87h-.67v19.13h9.31a41.41 41.41 0 0 1 -8.64-19.13z"
          fill="#fde5cb"
        />
        <path d="m52.04 79.88h12.54v3.06h-12.54z" fill="#feca1e" />
        <path d="m25.33 93.92h42.31v1.66h-42.31z" fill="#f8f7f4" />
        <path
          d="m37.3 93.92h-12v1.66h13.76c-.6-.58-1.19-1.09-1.76-1.66z"
          fill="#fde5cb"
        />
        <path
          d="m98 80.31v-.06c0-3.33 2.43-6 5.42-6s5.43 2.7 5.43 6v.06h.62v-.06c0-3.71-2.71-6.72-6-6.72s-6 3-6 6.72v.06z"
          fill="#f8f7f4"
        />
        <circle cx="103.37" cy="91.14" fill="#f8f7f4" r="4.97" />
        <circle cx="103.37" cy="97.15" fill="#99052e" r="2.54" />
        <path
          d="m63.67 45.06v-7.77c0-7.06 5.14-13 11.49-13s11.5 5.92 11.5 13v7.77h1.34c0-.05 0-7.73 0-7.77 0-7.87-5.74-14.24-12.82-14.24s-12.83 6.37-12.83 14.24v7.77z"
          fill="#f8f7f4"
        />
        <g fill="#10004c">
          <circle cx="62.99" cy="45.06" r="1.6" />
          <circle cx="87.24" cy="45.06" r="1.6" />
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
        <title id={`${id}-title`}>Shopping Circle Illustration</title>
        <desc id={`${id}-description`}>Illustration of shopping bags</desc>
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
        <pattern
          id={`${id}-c`}
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
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m102.03 40.83-1.92-2.31-1.92 2.31-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.86-2.24-1.86 2.24-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31v63.49h57.45v-63.48z"
          fill="#feca1e"
        />
        <path
          d="m102.03 40.83-1.92-2.31-1.92 2.31-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.86-2.24-1.86 2.24-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31v63.49h57.45v-63.48z"
          fill={`url(#${id}-a)`}
        />
        <path
          d="m46.5 38.52v63.48h57.44c-30.07 0-57.46-31.74-57.44-63.48z"
          fill="#f17732"
        />
        <path
          d="m46.5 38.52v63.48h57.44c-30.07 0-57.46-31.74-57.44-63.48z"
          fill={`url(#${id}-b)`}
        />
        <path d="m92.05 80.31h22.65v25.84h-22.65z" fill="#5fcbeb" />
        <path
          d="m114.7 106.15h-22.65v-16.15c0 8.09 13.89 16.15 22.65 16.15z"
          fill="#2870b5"
        />
        <path
          d="m35.15 64.18s0-.08 0-.13c0-7 5.08-12.82 11.36-12.82s11.35 5.85 11.35 12.82v.13h1.3v-.13c-.01-7.77-5.68-14.05-12.66-14.05s-12.66 6.28-12.66 14.05v.13z"
          fill="#fff"
        />
        <path d="m25.33 64.18h42.31v41.96h-42.31z" fill="#2870b5" />
        <path
          d="m67.64 106.15h-42.31v-42c0 23.43 17.92 42.02 42.31 42z"
          fill="#99052e"
        />
        <path d="m25.33 71.87h42.31v19.08h-42.31z" fill="#f8f7f4" />
        <path d="m25.33 71.87h42.31v19.08h-42.31z" fill={`url(#${id}-c)`} />
        <path
          d="m26 71.87h-.67v19.13h9.31a41.41 41.41 0 0 1 -8.64-19.13z"
          fill="#feca1e"
        />
        <path d="m44.28 79.88h20.3v3.06h-20.3z" fill="#f17732" />
        <path d="m25.33 93.92h42.31v1.66h-42.31z" fill="#fde5cb" />
        <path
          d="m37.3 93.92h-12v1.66h13.76c-.6-.58-1.19-1.09-1.76-1.66z"
          fill="#f17732"
        />
        <path d="m64.73 51.99h21.15v6.06h-21.15z" fill="#10004c" />
        <path d="m66.92 54.19h16.57v1.62h-16.57z" fill="#99052e" />
        <path
          d="m98 80.31v-.06c0-3.33 2.43-6 5.42-6s5.43 2.7 5.43 6v.06h.62v-.06c0-3.71-2.71-6.72-6-6.72s-6 3-6 6.72v.06z"
          fill="#f8f7f4"
        />
        <circle cx="103.37" cy="91.14" fill="#f8f7f4" r="4.97" />
        <circle cx="103.37" cy="97.15" fill="#99052e" r="2.54" />
        <path
          d="m63.67 45.06v-7.77c0-7.06 5.14-13 11.49-13s11.5 5.92 11.5 13v7.77h1.34c0-.05 0-7.73 0-7.77 0-7.87-5.74-14.24-12.82-14.24s-12.83 6.37-12.83 14.24v7.77z"
          fill="#f8f7f4"
        />
        <circle cx="62.99" cy="45.06" fill="#10004c" r="1.6" />
        <circle cx="87.24" cy="45.06" fill="#10004c" r="1.6" />
        <path
          d="m102.03 40.83-1.92-2.31-1.92 2.31-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.86-2.24-1.86 2.24-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31v63.49h57.45v-63.48z"
          fill="#feca1e"
        />
        <path
          d="m102.03 40.83-1.92-2.31-1.92 2.31-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.86-2.24-1.86 2.24-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31v63.49h57.45v-63.48z"
          fill={`url(#${id}-a)`}
        />
        <path
          d="m46.5 38.52v63.48h57.44c-30.07 0-57.46-31.74-57.44-63.48z"
          fill="#f17732"
        />
        <path
          d="m46.5 38.52v63.48h57.44c-30.07 0-57.46-31.74-57.44-63.48z"
          fill={`url(#${id}-b)`}
        />
        <path d="m92.05 80.31h22.65v25.84h-22.65z" fill="#5fcbeb" />
        <path
          d="m114.7 106.15h-22.65v-16.15c0 8.09 13.89 16.15 22.65 16.15z"
          fill="#2870b5"
        />
        <path
          d="m35.15 64.18s0-.08 0-.13c0-7 5.08-12.82 11.36-12.82s11.35 5.85 11.35 12.82v.13h1.3v-.13c-.01-7.77-5.68-14.05-12.66-14.05s-12.66 6.28-12.66 14.05v.13z"
          fill="#f8f7f4"
        />
        <path d="m25.33 64.18h42.31v41.96h-42.31z" fill="#fde5cb" />
        <path
          d="m67.64 106.15h-42.31v-42c0 23.43 17.92 42.02 42.31 42z"
          fill="#feca1e"
        />
        <path d="m25.33 71.87h42.31v19.08h-42.31z" fill="#f8f7f4" />
        <path d="m25.33 71.87h42.31v19.08h-42.31z" fill={`url(#${id}-c)`} />
        <path
          d="m26 71.87h-.67v19.13h9.31a41.41 41.41 0 0 1 -8.64-19.13z"
          fill="#fde5cb"
        />
        <path d="m52.04 79.88h12.54v3.06h-12.54z" fill="#feca1e" />
        <path d="m25.33 93.92h42.31v1.66h-42.31z" fill="#f8f7f4" />
        <path
          d="m37.3 93.92h-12v1.66h13.76c-.6-.58-1.19-1.09-1.76-1.66z"
          fill="#fde5cb"
        />
        <path
          d="m98 80.31v-.06c0-3.33 2.43-6 5.42-6s5.43 2.7 5.43 6v.06h.62v-.06c0-3.71-2.71-6.72-6-6.72s-6 3-6 6.72v.06z"
          fill="#f8f7f4"
        />
        <circle cx="103.37" cy="91.14" fill="#f8f7f4" r="4.97" />
        <circle cx="103.37" cy="97.15" fill="#99052e" r="2.54" />
        <path
          d="m63.67 45.06v-7.77c0-7.06 5.14-13 11.49-13s11.5 5.92 11.5 13v7.77h1.34c0-.05 0-7.73 0-7.77 0-7.87-5.74-14.24-12.82-14.24s-12.83 6.37-12.83 14.24v7.77z"
          fill="#f8f7f4"
        />
        <g fill="#10004c">
          <circle cx="62.99" cy="45.06" r="1.6" />
          <circle cx="87.24" cy="45.06" r="1.6" />
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
        <title id={`${id}-title`}>Shopping Circle Illustration</title>
        <desc id={`${id}-description`}>Grey Illustration of shopping bags</desc>
        <circle cx="70" cy="70" fill="#5b6279" r="70" />
        <path
          d="m102.03 40.83-1.92-2.31-1.92 2.31-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.86-2.24-1.86 2.24-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31v63.49h57.45v-63.48z"
          fill="#adb0bc"
        />
        <path
          d="m46.5 38.52v63.48h57.44c-30.07 0-57.46-31.74-57.44-63.48z"
          fill="#9da1af"
        />
        <path d="m92.05 80.31h22.65v25.84h-22.65z" fill="#dee0e4" />
        <path
          d="m114.7 106.15h-22.65v-16.15c0 8.09 13.89 16.15 22.65 16.15z"
          fill="#cdcfd6"
        />
        <path
          d="m35.15 64.18s0-.08 0-.13c0-7 5.08-12.82 11.36-12.82s11.35 5.85 11.35 12.82v.13h1.3v-.13c-.01-7.77-5.68-14.05-12.66-14.05s-12.66 6.28-12.66 14.05v.13z"
          fill="#fff"
        />
        <path d="m25.33 64.18h42.31v41.96h-42.31z" fill="#cdcfd6" />
        <path
          d="m67.64 106.15h-42.31v-42c0 23.43 17.92 42.02 42.31 42z"
          fill="#bdc0c9"
        />
        <path d="m25.33 71.87h42.31v19.08h-42.31z" fill="#eeeff1" />
        <path
          d="m26 71.87h-.67v19.13h9.31a41.46 41.46 0 0 1 -8.64-19.13z"
          fill="#dee0e4"
        />
        <path d="m52.04 79.88h12.54v3.06h-12.54z" fill="#bdc0c9" />
        <path d="m25.33 93.92h42.31v1.66h-42.31z" fill="#eeeff1" />
        <path
          d="m37.3 93.92h-12v1.66h13.76c-.6-.58-1.19-1.09-1.76-1.66z"
          fill="#dee0e4"
        />
        <path
          d="m98 80.31v-.06c0-3.33 2.43-6 5.42-6s5.43 2.7 5.43 6v.06h.62v-.06c0-3.71-2.71-6.72-6-6.72s-6 3-6 6.72v.06z"
          fill="#fff"
        />
        <circle cx="103.37" cy="91.14" fill="#fff" r="4.97" />
        <circle cx="103.37" cy="97.15" fill="#7c8194" r="2.54" />
        <path
          d="m63.67 45.06v-7.77c0-7.06 5.14-13 11.49-13s11.5 5.92 11.5 13v7.77h1.34c0-.05 0-7.73 0-7.77 0-7.87-5.74-14.24-12.82-14.24s-12.83 6.37-12.83 14.24v7.77z"
          fill="#fff"
        />
        <g fill="#7c8194">
          <circle cx="62.99" cy="45.06" r="1.6" />
          <circle cx="87.24" cy="45.06" r="1.6" />
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
        <title id={`${id}-title`}>Shopping Circle Illustration</title>
        <desc id={`${id}-description`}>
          Purple Illustration of shopping bags
        </desc>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m102.03 40.83-1.92-2.31-1.92 2.31-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.86-2.24-1.86 2.24-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31v63.49h57.45v-63.48z"
          fill="#6f6693"
        />
        <path
          d="m46.5 38.52v63.48h57.44c-30.07 0-57.46-31.74-57.44-63.48z"
          fill="#584d82"
        />
        <path d="m92.05 80.31h22.65v25.84h-22.65z" fill="#cfccdb" />
        <path
          d="m114.7 106.15h-22.65v-16.15c0 8.09 13.89 16.15 22.65 16.15z"
          fill="#b7b3c9"
        />
        <path
          d="m35.15 64.18s0-.08 0-.13c0-7 5.08-12.82 11.36-12.82s11.35 5.85 11.35 12.82v.13h1.3v-.13c-.01-7.77-5.68-14.05-12.66-14.05s-12.66 6.28-12.66 14.05v.13z"
          fill="#fff"
        />
        <path d="m25.33 64.18h42.31v41.96h-42.31z" fill="#3f336f" />
        <path
          d="m67.64 106.15h-42.31v-42c0 23.43 17.92 42.02 42.31 42z"
          fill="#281a5e"
        />
        <path d="m25.33 71.87h42.31v19.08h-42.31z" fill="#9f99b7" />
        <path
          d="m26 71.87h-.67v19.13h9.31a41.46 41.46 0 0 1 -8.64-19.13z"
          fill="#8780a5"
        />
        <path d="m44.28 79.88h20.3v3.06h-20.3z" fill="#cfccdb" />
        <path d="m25.33 93.92h42.31v1.66h-42.31z" fill="#e7e6ed" />
        <path
          d="m37.3 93.92h-12v1.66h13.76c-.6-.58-1.19-1.09-1.76-1.66z"
          fill="#b7b3c9"
        />
        <path d="m64.73 51.99h21.15v6.06h-21.15z" fill="#10004c" />
        <path d="m66.92 54.19h16.57v1.62h-16.57z" fill="#fff" />
        <path
          d="m98 80.31v-.06c0-3.33 2.43-6 5.42-6s5.43 2.7 5.43 6v.06h.62v-.06c0-3.71-2.71-6.72-6-6.72s-6 3-6 6.72v.06z"
          fill="#f8f7f4"
        />
        <circle cx="103.37" cy="91.14" fill="#10004c" r="4.97" />
        <circle cx="103.37" cy="97.15" fill="#3f336f" r="2.54" />
        <path
          d="m63.67 45.06v-7.77c0-7.06 5.14-13 11.49-13s11.5 5.92 11.5 13v7.77h1.34c0-.05 0-7.73 0-7.77 0-7.87-5.74-14.24-12.82-14.24s-12.83 6.37-12.83 14.24v7.77z"
          fill="#fff"
        />
        <circle cx="62.99" cy="45.06" fill="#3f336f" r="1.6" />
        <circle cx="87.24" cy="45.06" fill="#3f336f" r="1.6" />
        <path
          d="m102.03 40.83-1.92-2.31-1.92 2.31-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.86-2.24-1.86 2.24-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31v63.49h57.45v-63.48z"
          fill="#6f6693"
        />
        <path
          d="m46.5 38.52v63.48h57.44c-30.07 0-57.46-31.74-57.44-63.48z"
          fill="#584d82"
        />
        <path d="m92.05 80.31h22.65v25.84h-22.65z" fill="#cfccdb" />
        <path
          d="m114.7 106.15h-22.65v-16.15c0 8.09 13.89 16.15 22.65 16.15z"
          fill="#b7b3c9"
        />
        <path
          d="m35.15 64.18s0-.08 0-.13c0-7 5.08-12.82 11.36-12.82s11.35 5.85 11.35 12.82v.13h1.3v-.13c-.01-7.77-5.68-14.05-12.66-14.05s-12.66 6.28-12.66 14.05v.13z"
          fill="#fff"
        />
        <path d="m25.33 64.18h42.31v41.96h-42.31z" fill="#3f336f" />
        <path
          d="m67.64 106.15h-42.31v-42c0 23.43 17.92 42.02 42.31 42z"
          fill="#281a5e"
        />
        <path d="m25.33 71.87h42.31v19.08h-42.31z" fill="#9f99b7" />
        <path
          d="m26 71.87h-.67v19.13h9.31a41.46 41.46 0 0 1 -8.64-19.13z"
          fill="#8780a5"
        />
        <path d="m44.28 79.88h20.3v3.06h-20.3z" fill="#cfccdb" />
        <path d="m25.33 93.92h42.31v1.66h-42.31z" fill="#e7e6ed" />
        <path
          d="m37.3 93.92h-12v1.66h13.76c-.6-.58-1.19-1.09-1.76-1.66z"
          fill="#b7b3c9"
        />
        <path d="m64.73 51.99h21.15v6.06h-21.15z" fill="#10004c" />
        <path d="m66.92 54.19h16.57v1.62h-16.57z" fill="#fff" />
        <path
          d="m98 80.31v-.06c0-3.33 2.43-6 5.42-6s5.43 2.7 5.43 6v.06h.62v-.06c0-3.71-2.71-6.72-6-6.72s-6 3-6 6.72v.06z"
          fill="#f8f7f4"
        />
        <circle cx="103.37" cy="91.14" fill="#10004c" r="4.97" />
        <circle cx="103.37" cy="97.15" fill="#3f336f" r="2.54" />
        <path
          d="m63.67 45.06v-7.77c0-7.06 5.14-13 11.49-13s11.5 5.92 11.5 13v7.77h1.34c0-.05 0-7.73 0-7.77 0-7.87-5.74-14.24-12.82-14.24s-12.83 6.37-12.83 14.24v7.77z"
          fill="#fff"
        />
        <circle cx="62.99" cy="45.06" fill="#3f336f" r="1.6" />
        <circle cx="87.24" cy="45.06" fill="#3f336f" r="1.6" />
        <path
          d="m102.03 40.83-1.92-2.31-1.92 2.31-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.86-2.24-1.86 2.24-1.92-2.31-1.91 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31-1.92 2.31-1.92-2.31v63.49h57.45v-63.48z"
          fill="#8780a5"
        />
        <path
          d="m46.5 38.52v63.48h57.44c-30.07 0-57.46-31.74-57.44-63.48z"
          fill="#6f6693"
        />
        <path d="m92.05 80.31h22.65v25.84h-22.65z" fill="#cfccdb" />
        <path
          d="m114.7 106.15h-22.65v-16.15c0 8.09 13.89 16.15 22.65 16.15z"
          fill="#b7b3c9"
        />
        <path
          d="m35.15 64.18s0-.08 0-.13c0-7 5.08-12.82 11.36-12.82s11.35 5.85 11.35 12.82v.13h1.3v-.13c-.01-7.77-5.68-14.05-12.66-14.05s-12.66 6.28-12.66 14.05v.13z"
          fill="#fff"
        />
        <path d="m25.33 64.18h42.31v41.96h-42.31z" fill="#b7b3c9" />
        <path
          d="m67.64 106.15h-42.31v-42c0 23.43 17.92 42.02 42.31 42z"
          fill="#9f99b7"
        />
        <path d="m25.33 71.87h42.31v19.08h-42.31z" fill="#e7e6ed" />
        <path
          d="m26 71.87h-.67v19.13h9.31a41.46 41.46 0 0 1 -8.64-19.13z"
          fill="#cfccdb"
        />
        <path d="m52.04 79.88h12.54v3.06h-12.54z" fill="#9f99b7" />
        <path d="m25.33 93.92h42.31v1.66h-42.31z" fill="#e7e6ed" />
        <path
          d="m37.3 93.92h-12v1.66h13.76c-.6-.58-1.19-1.09-1.76-1.66z"
          fill="#cfccdb"
        />
        <path
          d="m98 80.31v-.06c0-3.33 2.43-6 5.42-6s5.43 2.7 5.43 6v.06h.62v-.06c0-3.71-2.71-6.72-6-6.72s-6 3-6 6.72v.06z"
          fill="#f8f7f4"
        />
        <circle cx="103.37" cy="91.14" fill="#fff" r="4.97" />
        <circle cx="103.37" cy="97.15" fill="#3f336f" r="2.54" />
        <path
          d="m63.67 45.06v-7.77c0-7.06 5.14-13 11.49-13s11.5 5.92 11.5 13v7.77h1.34c0-.05 0-7.73 0-7.77 0-7.87-5.74-14.24-12.82-14.24s-12.83 6.37-12.83 14.24v7.77z"
          fill="#fff"
        />
        <g fill="#3f336f">
          <circle cx="62.99" cy="45.06" r="1.6" />
          <circle cx="87.24" cy="45.06" r="1.6" />
        </g>
      </svg>
    );
  }
};

ShoppingCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'shopping-circle-illustration',
};

export default ShoppingCircleIllustration;
export {ShoppingCircleIllustration as PureShoppingCircleIllustration};
