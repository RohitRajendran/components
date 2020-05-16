/** @module PaginatedTile */
import classNames from 'classnames';
import React, {FC, useState, ReactElement} from 'react';
import './PaginatedTile.scss';
import Tile, {TileProps} from '~components/atoms/Tile/Tile';
import Button from '~components/atoms/Button/Button';
import CaretIcon from '~components/atoms/icons/CaretIcon/CaretIcon';
import {colors} from '~constants/js/colors';

type PaginationControls = {
  /**Indicates if on first page */
  firstPage: boolean;
  /**Indicates if on last page */
  lastPage: boolean;
  /**Function to invoke when going to previous page */
  previous: () => void;
  /**Function to invoke when going to next page */
  next: () => void;
} | null;
const paginationControls = (
  page: number,
  numberOfItems: number,
  itemsPerPage: number,
  previous: () => void,
  next: () => void,
): PaginationControls => {
  const firstPage = page === 0;
  const lastPage = page + 1 >= Math.ceil(numberOfItems / itemsPerPage);
  return !(firstPage && lastPage)
    ? {firstPage, lastPage, previous, next}
    : null;
};

type PaginatedTileProps<T> = {
  /** Items to be rendered in the ListTemplate property or individual views to be rendered as pages.*/
  items: T[];
  /** Template used to render a list of items.*/
  listTemplate?: {
    /** Number of items to be displayed per page.*/
    itemsPerPage: number;
    /** Template markup.*/
    Template: React.ComponentType<{paginatedItems: T[]}>;
  };
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /**Tile Properties*/
  tileProps?: TileProps;
  /** Determines if the navigation tile should be dark or not. */
  isDark?: boolean;
};

const PaginatedTile = function <T>(
  props: PaginatedTileProps<T>,
): ReactElement | null {
  const fn: FC<PaginatedTileProps<T>> = ({
    items,
    listTemplate,
    className,
    style,
    tileProps,
    isDark,
  }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const containerClasses = classNames(
      {
        'uic--paginated-tile': true,
      },
      className,
    );

    const itemsPerPage = listTemplate?.itemsPerPage || 1;
    const paginationCtrls = paginationControls(
      currentPage,
      items.length,
      itemsPerPage,
      (): void => setCurrentPage(currentPage - 1),
      (): void => setCurrentPage(currentPage + 1),
    );
    return (
      <Tile
        className={containerClasses}
        style={style}
        isDark={isDark}
        {...tileProps}
        footerContent={
          (tileProps?.footerContent || paginationCtrls) && (
            <PageFooter
              footerContent={tileProps?.footerContent}
              paginationCtrls={paginationCtrls}
            />
          )
        }
      >
        {!listTemplate ? (
          items[currentPage]
        ) : (
          <listTemplate.Template
            paginatedItems={items.slice(
              currentPage * itemsPerPage,
              currentPage * itemsPerPage + itemsPerPage,
            )}
          />
        )}
      </Tile>
    );
  };
  return fn({...props});
};

type PageFooterProps = {
  /**Provides pagination controls */
  paginationCtrls?: PaginationControls;
  /**Markup for footer content */
  footerContent?: React.ReactNode;
};

const PageFooter: FC<PageFooterProps> = ({paginationCtrls, footerContent}) => {
  return (
    <React.Fragment>
      {footerContent && <div>{footerContent}</div>}
      {paginationCtrls && (
        <div className="uic--paginated-tile__pagination-controls uic--position-absolute">
          <PaginationButton
            disabled={paginationCtrls.firstPage}
            direction="left"
            onClick={paginationCtrls.previous}
          />
          <PaginationButton
            disabled={paginationCtrls.lastPage}
            direction="right"
            onClick={paginationCtrls.next}
          />
        </div>
      )}
    </React.Fragment>
  );
};

type PaginationButtonProps = {
  /**Determines if the button is disabled or not. */
  disabled: boolean;
  /**Function to invoke on button click. */
  onClick: () => void;
  /**Direction of flow the button is for. */
  direction: 'right' | 'left';
};

const PaginationButton: FC<PaginationButtonProps> = ({
  disabled,
  onClick,
  direction,
}) => {
  return (
    <Button
      variant="secondary"
      light
      disabled={disabled}
      className="uic--paginated-tile__pagination-button uic--h-100"
      onClick={onClick}
    >
      <CaretIcon
        direction={direction}
        fill={disabled ? colors['fuchsia-blue'] : colors.white}
      />
    </Button>
  );
};

export default PaginatedTile;
