/** @module AdminIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

/** Displays the AdminIcon component.*/
const AdminIcon: FC<IconProps> = ({width, height, fill, className, style}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={
      /**
       * Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style
       * https://www.w3.org/TR/SVG11/types.html#DataTypeLength
       * */
      {
        width,
        height,
        ...style,
      }
    }
    viewBox="0 0 18 18"
    transform="rotate(0)"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M9 0c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 3c-1.657 0-3 .902-3 3.111 0 1.427.56 3.05 1.403 4.02l.162.175-.307.92c-1.73.456-3.191 1.577-4.098 3.074C4.57 15.953 6.663 17 9 17c2.337 0 4.43-1.047 5.84-2.701-.856-1.413-2.207-2.491-3.812-2.992l-.285-.082-.308-.92C11.368 9.366 12 7.628 12 6.112 12 3.902 10.657 3 9 3z"
    />
  </svg>
);

AdminIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  fill: '#5B6279',
};

export {AdminIcon as PureAdminIcon};
export default memo(AdminIcon);
