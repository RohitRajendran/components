/** @module ArrowLineIcon */
import classNames from 'classnames';
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';
import './ArrowLineIcon.scss';

type ArrowLineIconProps = Omit<IconProps, 'width'> & {
  /** Changes the direction of the arrow. */
  direction?: 'up' | 'right' | 'down' | 'left';
};

/** Displays the ArrowLineIcon component.*/
const ArrowLineIcon: FC<ArrowLineIconProps> = ({
  height,
  fill,
  className,
  direction,
  style,
}) => {
  const containerClasses = classNames(
    {
      'uic--arrow-line-icon': true,
      'uic--position-relative': true,
      'uic--rotate-right': direction === 'right',
      'uic--rotate-down': direction === 'down',
      'uic--rotate-left': direction === 'left',
      'uic--rotate-up': direction === 'up',
    },
    className,
  );

  return (
    <div className={containerClasses} style={{height, ...style}}>
      <div
        className="uic--arrow-line-icon__line uic--position-absolute"
        style={{backgroundColor: fill}}
      />
      <svg
        className="uic--arrow-line-icon__arrowhead uic--position-absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 10"
      >
        <path
          fill={fill}
          fillRule="nonzero"
          d="M9.159.301l.841.49L5 10 0 .792l.841-.49 3.676 6.77h.966z"
        />
      </svg>
    </div>
  );
};

ArrowLineIcon.defaultProps = {
  height: '44.5rem',
  fill: '#5B6279',
};

export {ArrowLineIcon as PureArrowLineIcon};
export default memo(ArrowLineIcon);
