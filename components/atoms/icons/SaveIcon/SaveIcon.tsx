/** @module SaveIcon */
import React, {FC, memo} from 'react';

type SaveIconProps = {
  /** Title for the svg. */
  title?: string;
  /** The width of the icon with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the icon with unit sizing (px, rem, etc). */
  height?: string;
  /** The color of the icon. */
  fill?: string;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Additional inline styles to apply to the container. */
  style?: React.CSSProperties;
};

/** Displays the SaveIcon component.*/
const SaveIcon: FC<SaveIconProps> = ({
  title,
  width,
  height,
  fill,
  className,
  style,
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={
      /** Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style */
      {
        width,
        height,
        ...style,
      }
    }
    viewBox="0 0 24 24"
    aria-labelledby="title"
  >
    <title>{title}</title>
    <g
      fill="none"
      fillRule="nonzero"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="M4 4h12l4 4v12H4z" />
      <path d="M8 4h6v5H8zM8 13h8v7H8zM11 4.75v4" />
    </g>
  </svg>
);

SaveIcon.defaultProps = {
  title: 'Save',
  width: '2.4rem',
  height: '2.4rem',
  fill: '#4D00BA',
};

export {SaveIcon as PureSaveIcon};
export default memo(SaveIcon);
