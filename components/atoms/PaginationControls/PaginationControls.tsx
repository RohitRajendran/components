/** @module PaginationControls */
import classNames from 'classnames';
import React, {FC} from 'react';
import './PaginationControls.scss';
import Button from '../Button/Button';
import CaretIcon from '../icons/CaretIcon/CaretIcon';
import {colors} from '~constants/js/colors';

type PaginationControlsProps = {
  /**Disables/Enables the previous button. */
  previousDisabled: boolean;
  /**Disables/Enables the next button. */
  nextDisabled: boolean;
  /**Function that navigates to the previous page */
  previous: () => void;
  /** Function that navigates to next page.*/
  next: () => void;
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
};

const PaginationControls: FC<PaginationControlsProps> = ({
  previousDisabled,
  nextDisabled,
  previous,
  next,
  className,
  style,
}) => {
  const containerClasses = classNames(
    {
      'uic--pagination-controls': true,
    },
    className,
  );

  return (
    <div className={containerClasses} style={style}>
      <Button
        variant="secondary"
        light
        disabled={previousDisabled}
        className="uic--pagination-controls__pagination-button uic--h-100"
        onClick={previous}
      >
        <CaretIcon
          direction={'left'}
          fill={previousDisabled ? colors['white-30'] : colors.white}
        />
      </Button>
      <Button
        variant="secondary"
        light
        disabled={nextDisabled}
        className="uic--pagination-controls__pagination-button uic--h-100"
        onClick={next}
      >
        <CaretIcon
          direction={'right'}
          fill={nextDisabled ? colors['white-30'] : colors.white}
        />
      </Button>
    </div>
  );
};

export default PaginationControls;
