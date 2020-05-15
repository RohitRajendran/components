/** @module PaginatedTile */
import classNames from 'classnames';
import React, {FC, useState, ReactElement} from 'react';
import './PaginatedTile.scss';
import Tile, {TileProps} from '~components/atoms/Tile/Tile';
import Button from '~components/atoms/Button/Button';
import CaretIcon from '~components/atoms/icons/CaretIcon/CaretIcon';
import {colors} from '~constants/js/colors';

type Pagination = {firstPage: boolean; lastPage: boolean} | null;
const hasPagination = (
  page: number,
  numberOfItems: number,
  itemsPerPage: number,
): Pagination => {
  const firstPage = page === 0;
  const lastPage = page + 1 >= Math.ceil(numberOfItems / itemsPerPage);
  return !(firstPage && lastPage) ? {firstPage, lastPage} : null;
};

type PaginatedTileProps<T> = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /**Tile Properties*/
  tileProps?: TileProps;
  /** Items to be rendered in the ListTemplate property or individual views to be rendered as pages.*/
  items: T[];
  /** Template used to render a list of items.*/
  ListTemplate?: React.ComponentType<{paginatedItems: T[]}>;
  /** Number of items to be displayed per page. This is used in conjuction with the ListTemplate property. */
  itemsPerPage: number;
  /** Determines if the navigation tile should be dark or not. */
  isDark?: boolean;
};
const PaginatedTile = function <T>(
  props: PaginatedTileProps<T>,
): ReactElement | null {
  const fn: FC<PaginatedTileProps<T>> = ({
    className,
    style,
    items,
    ListTemplate,
    tileProps,
    itemsPerPage,
    isDark,
  }) => {
    const [page, setPage] = useState(0);

    const containerClasses = classNames(
      {
        'uic--paginated-tile': true,
      },
      className,
    );

    const pagination = hasPagination(page, items.length, itemsPerPage);
    return (
      <div className={containerClasses} style={style}>
        <Tile
          isDark={isDark}
          {...tileProps}
          footerContent={
            (tileProps?.footerContent || pagination) && (
              <PageFooter
                footerContent={tileProps?.footerContent}
                pagination={pagination}
                previous={(): void => setPage(page - 1)}
                next={(): void => setPage(page + 1)}
              />
            )
          }
        >
          {!ListTemplate ? (
            items[page]
          ) : (
            <ListTemplate
              paginatedItems={items.slice(
                page * itemsPerPage,
                page * itemsPerPage + itemsPerPage,
              )}
            />
          )}
        </Tile>
      </div>
    );
  };
  return fn({...props});
};

PaginatedTile.defaultProps = {
  className: 'uic--default-placeholder',
  itemsPerPage: 1,
};

type PageFooterProps = {
  footerContent?: React.ReactNode;
  pagination: Pagination;
  previous: () => void;
  next: () => void;
};
const PageFooter: FC<PageFooterProps> = ({
  footerContent,
  pagination,
  previous,
  next,
}) => {
  return (
    <div
      className={classNames(
        {'uic--paginated-tile__pagination-only': !footerContent},
        {
          'uic--paginated-tile__footer-content-only': !pagination,
        },
        'uic--d-flex uic--paginated-tile__pagination-footer',
      )}
    >
      {footerContent && <div>{footerContent}</div>}
      {pagination && (
        <div className="uic--paginated-tile__pagination-controls">
          <PaginationButton
            disabled={pagination.firstPage}
            direction="left"
            onClick={previous}
          />
          <PaginationButton
            disabled={pagination.lastPage}
            direction="right"
            onClick={next}
          />
        </div>
      )}
    </div>
  );
};

type PaginationButtonProps = {
  disabled: boolean;
  onClick: () => void;
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
      className="uic--paginated-tile__pagination-button"
      onClick={onClick}
    >
      <CaretIcon
        direction={direction}
        fill={disabled ? 'rgb(122,84,199)' : colors.white}
      />
    </Button>
  );
};

export default PaginatedTile;
