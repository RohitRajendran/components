/** @module PencilCircleIllustration */
import React, {FC, memo} from 'react';

type PencilCircleIllustrationProps = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height?: string;
  /** Allows you to adjust the id of the SVG, this can be useful when using multiple of the same SVG on the same page. */
  id?: string;
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
};

const PencilCircleIllustration: FC<PencilCircleIllustrationProps> = ({
  className,
  style,
  width,
  height,
  id,
}) => {
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
  };

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
};

PencilCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'pencil-circle-illustration',
};

export default memo(PencilCircleIllustration);
export {PencilCircleIllustration as PurePencilCircleIllustration};
