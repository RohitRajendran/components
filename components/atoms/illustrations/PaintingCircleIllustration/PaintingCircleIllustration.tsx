/** @module PaintingCircleIllustration */
import React, {FC, memo, useState} from 'react';

type PaintingCircleIllustrationProps = {
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

/** Renders a painting illustration. */
const PaintingCircleIllustration: FC<PaintingCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Painting Circle Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of an upside down painting in color
        </desc>
        <pattern
          id={`${id}-a`}
          height="4"
          patternTransform="translate(1.02 3.87)"
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
          patternTransform="matrix(0 -1 1 0 .78 -.23)"
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
        <path d="m29.58 36.99h80.85v66.01h-80.85z" fill="#5fcbeb" />
        <path
          d="m110.42 103h-80.84v-66c24.42 66 80.84 66 80.84 66z"
          fill="#2870b5"
        />
        <path d="m35.49 42.78h69.01v54.44h-69.01z" fill="#10004c" />
        <path d="m35.57 42.78h25.07v9.2h-25.07z" fill="#f8f7f4" />
        <path d="m87.42 66.82h10.38v12.54h-10.38z" fill="#f8f7f4" />
        <path d="m87.42 42.78h17.08v22.5h-17.08z" fill="#99052e" />
        <path d="m74.15 42.78h11.76v36.58h-11.76z" fill="#f8f7f4" />
        <path d="m87.42 81.03h17.08v16.16h-17.08z" fill="#f8f7f4" />
        <path d="m99.38 66.82h5.13v12.54h-5.13z" fill="#feca1e" />
        <path d="m99.38 66.82h5.13v12.54h-5.13z" fill={`url(#${id}-a)`} />
        <path
          d="m55.52 80.11h5.14v29.03h-5.14z"
          fill="#fde5cb"
          transform="matrix(0 -1 1 0 -36.53 152.71)"
        />
        <path
          d="m77.46 88.74h5.14v11.76h-5.14z"
          fill="#f8f7f4"
          transform="matrix(0 -1 1 0 -14.59 174.65)"
        />
        <path
          d="m74.15 92.16v5h10.55a87.57 87.57 0 0 1 -10.55-5z"
          fill="#fde5cb"
        />
        <path
          d="m36.21 91.4h5.14v6.43h-5.14z"
          fill="#99052e"
          transform="matrix(0 -1 1 0 -55.84 133.4)"
        />
        <path d="m62.13 42.78h10.47v9.2h-10.47z" fill="#f8f7f4" />
        <path d="m35.49 53.44h37.04v37.04h-37.04z" fill="#feca1e" />
        <path d="m72.59 53.38v37.1h-37.1v-37.1z" fill={`url(#${id}-b)`} />
        <path
          d="m35.49 90.48h35.8c-11.93-7.3-24.48-18.84-34.35-37.1h-1.45z"
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
        <title id={`${id}-title`}>Painting Circle Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of a painting in color
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
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path d="m29.58 36.99h80.85v66.01h-80.85z" fill="#5fcbeb" />
        <path
          d="m110.42 103h-80.84v-66c24.42 66 80.84 66 80.84 66z"
          fill="#2870b5"
        />
        <path d="m35.49 42.78h69.01v54.44h-69.01z" fill="#10004c" />
        <path d="m35.49 70.4h23.65v26.82h-23.65z" fill="#f8f7f4" />
        <path
          d="m59.14 81.57a95.37 95.37 0 0 1 -10.82-11.17h-12.83v26.82h23.65z"
          fill="#fde5cb"
        />
        <path d="m60.82 42.78h37.04v37.04h-37.04z" fill="#99052e" />
        <path d="m48.76 56.16h10.38v12.54h-10.38z" fill="#f8f7f4" />
        <path d="m48.76 42.78h10.38v11.84h-10.38z" fill="#f8f7f4" />
        <path d="m35.49 42.78h11.76v25.92h-11.76z" fill="#feca1e" />
        <path d="m79.34 81.52h25.17v15.7h-25.17z" fill="#f8f7f4" />
        <path d="m79.34 94.85v2.37h5.43q-2.65-1.05-5.43-2.37z" fill="#fde5cb" />
        <path d="m60.82 81.52h4.53v15.7h-4.53z" fill="#feca1e" />
        <path d="m60.82 81.52h4.53v15.7h-4.53z" fill={`url(#${id}-a)`} />
        <path
          d="m65.35 86.51c-1.51-1.1-3-2.26-4.53-3.51v14.22h4.53z"
          fill="#f17732"
        />
        <path d="m99.37 50.79h5.14v29.03h-5.14z" fill="#f8f7f4" />
        <path d="m99.37 42.78h5.14v6.43h-5.14z" fill="#feca1e" />
        <path d="m35.49 42.78h11.76v25.92h-11.76z" fill={`url(#${id}-a)`} />
        <path d="m99.37 42.78h5.14v6.43h-5.14z" fill={`url(#${id}-a)`} />
        <path d="m66.98 91.02h10.47v6.2h-10.47z" fill="#f8f7f4" />
        <path
          d="m77.45 93.92q-2.6-1.32-5.27-2.9h-5.18v6.2h10.45z"
          fill="#fde5cb"
        />
        <path
          d="m35.49 50.6v18.1h11.51a108.76 108.76 0 0 1 -11.51-18.1z"
          fill="#f17732"
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
        <title id={`${id}-title`}>Painting Circle Illustration</title>
        <desc id={`${id}-description`}>Grey illustration of a painting</desc>
        <circle cx="70" cy="70" fill="#5b6279" r="70" />
        <path d="m29.58 36.99h80.85v66.01h-80.85z" fill="#bdc0c9" />
        <path
          d="m110.42 103h-80.84v-66c24.42 66 80.84 66 80.84 66z"
          fill="#9da1af"
        />
        <path d="m35.49 42.78h69.01v54.44h-69.01z" fill="#5b6279" />
        <path d="m35.49 70.4h23.65v26.82h-23.65z" fill="#fff" />
        <path
          d="m59.14 81.57a95.37 95.37 0 0 1 -10.82-11.17h-12.83v26.82h23.65z"
          fill="#dee0e4"
        />
        <path d="m60.82 42.78h37.04v37.04h-37.04z" fill="#adb0bc" />
        <path d="m48.76 56.16h10.38v12.54h-10.38z" fill="#fff" />
        <path d="m48.76 42.78h10.38v11.84h-10.38z" fill="#fff" />
        <path d="m35.49 42.78h11.76v25.92h-11.76z" fill="#dee0e4" />
        <path
          d="m35.49 50.6v18.1h11.51a108.76 108.76 0 0 1 -11.51-18.1z"
          fill="#bdc0c9"
        />
        <path d="m79.34 81.52h25.17v15.7h-25.17z" fill="#fff" />
        <path d="m79.34 94.85v2.37h5.43q-2.65-1.05-5.43-2.37z" fill="#dee0e4" />
        <path d="m60.82 81.52h4.53v15.7h-4.53z" fill="#cdcfd6" />
        <path
          d="m65.35 86.51c-1.51-1.1-3-2.26-4.53-3.51v14.22h4.53z"
          fill="#adb0bc"
        />
        <path d="m99.37 50.79h5.14v29.03h-5.14z" fill="#fff" />
        <path d="m99.37 42.78h5.14v6.43h-5.14z" fill="#cdcfd6" />
        <path d="m66.98 91.02h10.47v6.2h-10.47z" fill="#fff" />
        <path
          d="m77.45 93.92q-2.6-1.32-5.27-2.9h-5.18v6.2h10.45z"
          fill="#dee0e4"
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
        <title id={`${id}-title`}>Painting Circle Illustration</title>
        <desc id={`${id}-description`}>Purple illustration of a painting</desc>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path d="m29.58 36.99h80.85v66.01h-80.85z" fill="#9f99b7" />
        <path
          d="m110.42 103h-80.84v-66c24.42 66 80.84 66 80.84 66z"
          fill="#6f6693"
        />
        <path d="m35.49 42.78h69.01v54.44h-69.01z" fill="#10004c" />
        <path d="m35.49 70.4h23.65v26.82h-23.65z" fill="#fff" />
        <path
          d="m59.14 81.57a95.37 95.37 0 0 1 -10.82-11.17h-12.83v26.82h23.65z"
          fill="#cfccdb"
        />
        <path d="m60.82 42.78h37.04v37.04h-37.04z" fill="#8780a5" />
        <path d="m48.76 56.16h10.38v12.54h-10.38z" fill="#fff" />
        <path d="m48.76 42.78h10.38v11.84h-10.38z" fill="#fff" />
        <path d="m35.49 42.78h11.76v25.92h-11.76z" fill="#cfccdb" />
        <path
          d="m35.49 50.6v18.1h11.51a108.76 108.76 0 0 1 -11.51-18.1z"
          fill="#9f99b7"
        />
        <path d="m79.34 81.52h25.17v15.7h-25.17z" fill="#fff" />
        <path d="m79.34 94.85v2.37h5.43q-2.65-1.05-5.43-2.37z" fill="#cfccdb" />
        <path d="m60.82 81.52h4.53v15.7h-4.53z" fill="#b7b3c9" />
        <path
          d="m65.35 86.51c-1.51-1.1-3-2.26-4.53-3.51v14.22h4.53z"
          fill="#8780a5"
        />
        <path d="m99.37 50.79h5.14v29.03h-5.14z" fill="#fff" />
        <path d="m99.37 42.78h5.14v6.43h-5.14z" fill="#b7b3c9" />
        <path d="m66.98 91.02h10.47v6.2h-10.47z" fill="#fff" />
        <path
          d="m77.45 93.92q-2.6-1.32-5.27-2.9h-5.18v6.2h10.45z"
          fill="#cfccdb"
        />
      </svg>
    );
  }
};

PaintingCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'painting-circle-illustration',
};

export default memo(PaintingCircleIllustration);
export {PaintingCircleIllustration as PurePaintingCircleIllustration};
