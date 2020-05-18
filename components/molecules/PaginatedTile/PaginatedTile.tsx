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
  /**Additional Tile Properties*/
  tileProps?: TileProps;
};

const PaginatedTile = function <T>(
  props: PaginatedTileProps<T>,
): ReactElement | null {
  const fn: FC<PaginatedTileProps<T>> = ({items, listTemplate, tileProps}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const containerClasses = classNames(
      {
        'uic--paginated-tile': true,
      },
      tileProps?.className,
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
        style={tileProps?.style}
        isDark={tileProps?.isDark}
        footerContent={
          (tileProps?.footerContent || paginationCtrls) && (
            <React.Fragment>
              {tileProps?.footerContent}
              {paginationCtrls && (
                <div className="uic--paginated-tile__pagination-controls uic--position-absolute">
                  <Button
                    variant="secondary"
                    light
                    disabled={paginationCtrls.firstPage}
                    className="uic--paginated-tile__pagination-button uic--h-100"
                    onClick={paginationCtrls.previous}
                  >
                    <CaretIcon
                      direction={'left'}
                      fill={
                        paginationCtrls.firstPage
                          ? colors['fuchsia-blue']
                          : colors.white
                      }
                    />
                  </Button>
                  <Button
                    variant="secondary"
                    light
                    disabled={paginationCtrls.lastPage}
                    className="uic--paginated-tile__pagination-button uic--h-100"
                    onClick={paginationCtrls.next}
                  >
                    <CaretIcon
                      direction={'right'}
                      fill={
                        paginationCtrls.lastPage
                          ? colors['fuchsia-blue']
                          : colors.white
                      }
                    />
                  </Button>
                </div>
              )}
            </React.Fragment>
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

export default PaginatedTile;
