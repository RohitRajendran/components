/** @module SaveIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

type SaveIconProps = IconProps & {
  /** Title for the svg. */
  title?: string;
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
