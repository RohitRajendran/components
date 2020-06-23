/** @module PencilCircleIllustration */
import React, {FC, memo, useState} from 'react';

type PencilCircleIllustrationProps = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height?: string;
  /** Allows you to adjust the id of the SVG, this can be useful when using multiple of the same SVG on the same page. */
  id?: string;
  /** Determines if the color variant should be shown or not. */
  color?: boolean;
  /** Determines if the illustration should default to the illuminated state. */
  illuminate?: boolean;
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
};

const PencilCircleIllustration: FC<PencilCircleIllustrationProps> = ({
  className,
  style,
  color,
  illuminate,
  width,
  height,
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
        data-testid="illuminated"
      >
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
        <circle cx="69.78" cy="70" fill="#10004c" r="70" />
        <path
          d="m66.27 57.15h-7.61v81.92a70.27 70.27 0 0 0 7.61.83z"
          fill="#f17732"
        />
        <path
          d="m66.27 139.9c1.23.06 2.48.1 3.73.1s2.59 0 3.88-.11v-82.74h-7.61z"
          fill="#feca1e"
        />
        <path
          d="m73.88 57.15v82.74a67.85 67.85 0 0 0 7.61-.85v-81.89z"
          fill="#f17732"
        />
        <path
          d="m73.88 57.15h7.61l-11.42-35.32 5.49 16.97h-5.49-5.48l5.48-16.97-11.41 35.32h7.61z"
          fill="#fde5cb"
        />
        <path d="m70.07 38.8v-16.97l-5.48 16.97z" fill="#99052e" />
        <path d="m75.56 38.8-5.49-16.97v16.97z" fill="#f17732" />
        <path
          d="m66.27 140c1.24.06 2.49.1 3.75.1s2.57 0 3.85-.11v-82.84h-7.6z"
          fill={`url(#${id}-a)`}
        />
        <path d="m75.51 38.73-5.48-16.95v16.95z" fill={`url(#${id}-b)`} />
        <path
          d="m41.48 84.88h-6.48v45.73a68 68 0 0 0 6.48 3.31z"
          fill="#2870b5"
        />
        <path
          d="m41.48 133.92q3.15 1.41 6.47 2.52v-51.56h-6.47z"
          fill="#5fcbeb"
        />
        <path d="m48 84.88v51.56q3.18 1 6.48 1.8v-53.36z" fill="#2870b5" />
        <path
          d="m47.95 84.88h6.48l-5.05-15.61h-4.66-4.67l-5.05 15.61h6.48z"
          fill="#fde5cb"
        />
        <path d="m44.72 54.85v-.02l-4.67 14.44h4.67z" fill="#99052e" />
        <path d="m49.38 69.27-4.66-14.44v.02z" fill="#f17732" />
        <path d="m44.72 69.27h4.66l-4.66-14.42z" fill="#f17732" />
        <path d="m44.72 69.27h4.66l-4.66-14.42z" fill={`url(#${id}-b)`} />
        <path d="m92.05 84.88h-6.48v53.36q3.3-.75 6.48-1.8z" fill="#2870b5" />
        <path d="m92.05 136.44q3.32-1.11 6.47-2.52v-49h-6.47z" fill="#5fcbeb" />
        <path
          d="m98.52 84.88v49a68 68 0 0 0 6.48-3.31v-45.69z"
          fill="#2870b5"
        />
        <path
          d="m98.52 84.88h6.48l-9.72-30.05 4.67 14.44h-.04-4.63-.03-4.63l-5.05 15.61h6.48z"
          fill="#fde5cb"
        />
        <path d="m95.28 54.83-.02.06.02.07z" fill="#99052e" />
        <path d="m95.25 54.94-4.63 14.33h4.63z" fill="#99052e" />
        <path d="m99.91 69.27h.04l-4.67-14.44v.13z" fill="#f17732" />
        <path d="m95.25 54.85v.09l.01-.05z" fill="#10004c" />
        <path d="m95.25 54.85v.09l.01-.05z" fill={`url(#${id}-b)`} />
        <path d="m95.28 69.27v-14.31l-.02-.07-.01.05v14.33z" fill="#99052e" />
        <path
          d="m95.28 69.27v-14.31l-.02-.07-.01.05v14.33z"
          fill={`url(#${id}-b)`}
        />
        <path d="m95.28 69.27h4.63l-4.63-14.31z" fill="#f17732" />
        <path d="m95.28 69.27h4.63l-4.63-14.31z" fill={`url(#${id}-b)`} />
      </svg>
    );
  } else if (color) {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        data-testid="color"
      >
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
        <circle cx="69.78" cy="70" fill="#10004c" r="70" />
        <path
          d="m73.89 57.09h7.6l-11.4-35.26 5.47 16.94h-5.47-5.48l-5.92 18.32h7.6z"
          fill="#fde5cb"
        />
        <path d="m64.61 38.77 5.48-16.94z" fill="#99052e" />
        <path d="m70.09 21.83-5.48 16.94h5.48z" fill="#99052e" />
        <path d="m75.56 38.77-5.47-16.94v16.94z" fill="#f17732" />
        <path
          d="m66.29 57.09h-7.6v82a70.09 70.09 0 0 0 7.6.83z"
          fill="#f17732"
        />
        <path
          d="m66.29 139.9c1.24.06 2.49.1 3.75.1s2.57 0 3.85-.11v-82.8h-7.6z"
          fill="#feca1e"
        />
        <path
          d="m73.89 57.09v82.8a70.65 70.65 0 0 0 7.6-.84v-82z"
          fill="#f17732"
        />
        <path
          d="m66.2 139.93c1.24.06 2.49.1 3.75.1s2.57 0 3.85-.11v-82.8h-7.6z"
          fill={`url(#${id}-a)`}
        />
        <path d="m75.56 38.73-5.47-16.95v16.95z" fill={`url(#${id}-b)`} />
        <path
          d="m48 62.26h6.47l-5.05-15.63.01.05h-4.66-4.66l4.66-14.42-9.7 30h6.47z"
          fill="#fde5cb"
        />
        <path d="m44.77 46.68v-.05-14.37l-4.66 14.42z" fill="#99052e" />
        <path d="m44.77 46.68h4.66l-.01-.05h-4.65z" fill="#f17732" />
        <path
          d="m41.54 62.26h-6.47v68.39a69 69 0 0 0 6.47 3.3z"
          fill="#2870b5"
        />
        <path
          d="m41.54 134a69 69 0 0 0 6.46 2.5v-74.24h-6.46z"
          fill="#5fcbeb"
        />
        <path
          d="m48 62.26v74.19c2.12.7 4.27 1.3 6.47 1.8v-76z"
          fill="#2870b5"
        />
        <path d="m49.43 46.63-4.66-14.42v.05l4.65 14.37z" fill="#10004c" />
        <path
          d="m49.43 46.63-4.66-14.42v.05l4.65 14.37z"
          fill={`url(#${id}-b)`}
        />
        <path d="m49.42 46.63-4.65-14.37z" fill="#fde5cb" />
        <path d="m49.42 46.63-4.65-14.37z" fill={`url(#${id}-b)`} />
        <path d="m49.42 46.63-4.65-14.37v14.37z" fill="#f17732" />
        <path d="m49.42 46.63-4.65-14.37v14.37z" fill={`url(#${id}-b)`} />
        <path
          d="m98.54 62.31v71.61a71.39 71.39 0 0 0 6.46-3.31v-68.3z"
          fill="#2870b5"
        />
        <path d="m92.07 62.31h-6.47v75.92q3.3-.75 6.47-1.8z" fill="#2870b5" />
        <path
          d="m92.07 136.43a69.25 69.25 0 0 0 6.47-2.51v-71.61h-6.47z"
          fill="#5fcbeb"
        />
        <path
          d="m98.54 62.31h6.46l-5.03-15.59h-4.67-4.66l-5.04 15.59h6.47z"
          fill="#fde5cb"
        />
        <path d="m95.3 46.68v-14.38l-4.66 14.42h4.66z" fill="#99052e" />
        <path d="m95.3 46.72h4.67l-.02-.04h-4.65z" fill="#f17732" />
        <path d="m99.97 46.68-4.67-14.42v.04l4.65 14.38z" fill="#10004c" />
        <path
          d="m99.97 46.68-4.67-14.42v.04l4.65 14.38z"
          fill={`url(#${id}-b)`}
        />
        <path d="m99.95 46.68-4.65-14.38v14.38z" fill="#f17732" />
        <path d="m99.95 46.68-4.65-14.38v14.38z" fill={`url(#${id}-b)`} />
      </svg>
    );
  } else {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 232 232"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <circle id={`${id}-a`} cx="116" cy="116" r="116" />
          <mask id={`${id}-b`} fill="#fff">
            <use fill="#fff" fillRule="evenodd" xlinkHref={`#${id}-a`} />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd" transform="matrix(-1 0 0 -1 232 232)">
          <use fill="#10004c" xlinkHref={`#${id}-a`} />
          <g fill="#fff">
            <g mask={`url(#${id}-b)`}>
              <path d="m111-53h10v195.853h-10z" opacity=".5" />
              <path d="m121-53h10v195.853h-10z" opacity=".4" />
              <path d="m101-53h10v195.853h-10z" opacity=".6" />
              <path d="m116 193 15-50.147h-30" opacity=".3" />
              <path d="m116 193v-25.074h-7.5" opacity=".6" />
              <path d="m116 193 7.5-25.074h-7.5" opacity=".4" />
            </g>
            <g mask={`url(#${id}-b)`} opacity=".7">
              <path d="m141.273-64h7.273v166.551h-7.273z" opacity=".5" />
              <path d="m148.545-64h7.273v166.551h-7.273z" opacity=".4" />
              <path d="m134-64h7.273v166.551h-7.273z" opacity=".6" />
              <path d="m144.909 138.795 10.909-36.244h-21.818" opacity=".3" />
              <path d="m144.909 138.795v-18.122h-5.455" opacity=".6" />
              <path d="m144.909 138.795 5.454-18.122h-5.454" opacity=".4" />
            </g>
            <g mask={`url(#${id}-b)`} opacity=".7">
              <path d="m83.273-64h7.273v166.551h-7.273z" opacity=".5" />
              <path d="m90.545-64h7.273v166.551h-7.273z" opacity=".4" />
              <path d="m76-64h7.273v166.551h-7.273z" opacity=".6" />
              <path d="m86.909 138.795 10.909-36.244h-21.818" opacity=".3" />
              <path d="m86.909 138.795v-18.122h-5.455" opacity=".6" />
              <path d="m86.909 138.795 5.454-18.122h-5.453" opacity=".4" />
            </g>
          </g>
        </g>
      </svg>
    );
  }
};

PencilCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'pencil-circle-illustration',
};

export default memo(PencilCircleIllustration);
export {PencilCircleIllustration as PurePencilCircleIllustration};
