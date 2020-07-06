/** @module AddIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

type AddIconProps = IconProps & {
  /** Title for the svg. */
  title?: string;
};

/** Displays the AddIcon component.*/
const AddIcon: FC<AddIconProps> = ({
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
    viewBox="0 0 12 12"
    aria-labelledby="title"
  >
    <title>{title}</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill={fill}>
        <polygon points="5.04044011 5.2830808 5.04044011 -0.0502525317 6.37377345 -0.0502525317 6.37377345 5.2830808 11.7071068 5.2830808 11.7071068 6.61641413 6.37377345 6.61641413 6.37377345 11.9497475 5.04044011 11.9497475 5.04044011 6.61641413 -0.292893219 6.61641413 -0.292893219 5.2830808 5.04044011 5.2830808"></polygon>
      </g>
    </g>
  </svg>
);

AddIcon.defaultProps = {
  title: 'Add',
  width: '2.4rem',
  height: '2.4rem',
  fill: '#4D00BA',
};

export {AddIcon as PureAddIcon};
export default memo(AddIcon);
