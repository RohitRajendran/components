/** @module MultiColumnTile */
import classNames from 'classnames';
import React, {FC, Fragment, ReactNode} from 'react';
import './MultiColumnTile.scss';
import {TileProps} from '../../atoms/Tile/Tile';
import PaginatedTile from '../PaginatedTile/PaginatedTile';

export type MultiColumnItemsPerPage = {
  smallDevice: number;
  mediumDevice: number;
};

export type MultiColumnProps = {
  /**Items to be displayed in the tile. */
  items: React.ReactNode[];
  /**Items per page for different device sizes*/
  itemsPerPage?: MultiColumnItemsPerPage;
  /**aria role to describe semantic meaning of container for items*/
  ariaRole?: string;
} & TileProps;

/**
 * Gets a single column layout
 * @param items Array of react nodes
 * @param obj object consisting of items per page for small devices
 * @returns List of react nodes
 */
const singleColumnLayout = (
  items: ReactNode[],
  {smallDevice: itemsPerPage}: MultiColumnItemsPerPage,
): ReactNode[] => {
  const pages: React.ReactNode[] = [];
  for (let page = 0; page < Math.ceil(items.length / itemsPerPage); page++) {
    pages.push(
      <div className="uic--multi-column-tile__first-column" role="presentation">
        {items
          .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
          .map((item, index) => (
            <div role="presentation" key={index}>
              {item}
            </div>
          ))}
      </div>,
    );
  }
  return pages;
};

/**
 * Gets a multi column layout
 * @param items Array of react nodes
 * @param obj object consisting of items per page for medium devices
 * @returns List of react nodes
 */
const multiColumnlayout = (
  items: ReactNode[],
  {mediumDevice: itemsPerPage}: MultiColumnItemsPerPage,
): ReactNode[] => {
  const pages: React.ReactNode[] = [];
  for (let page = 0; page < Math.ceil(items.length / itemsPerPage); page++) {
    const pageItems = items.slice(
      page * itemsPerPage,
      page * itemsPerPage + itemsPerPage,
    );

    const maxItemsPerColumn = Math.ceil(itemsPerPage / 2);

    pages.push(
      <Fragment>
        <div
          className="uic--multi-column-tile__first-column"
          role="presentation"
        >
          {pageItems.slice(0, maxItemsPerColumn).map((item, index) => (
            <div role="presentation" key={index}>
              {item}
            </div>
          ))}
        </div>
        {pageItems.length > maxItemsPerColumn && (
          <div
            className="uic--multi-column-tile__second-column"
            role="presentation"
          >
            {pageItems
              .slice(maxItemsPerColumn, itemsPerPage)
              .map((item, index) => (
                <div role="presentation" key={index}>
                  {item}
                </div>
              ))}
          </div>
        )}
      </Fragment>,
    );
  }
  return pages;
};

const MultiColumnTile: FC<MultiColumnProps> = ({
  items,
  itemsPerPage = {
    smallDevice: 5,
    mediumDevice: 10,
  },
  ariaRole = 'presentation',
  footerContent,
  className,
  style,
}) => {
  const containerClasses = classNames(
    {
      'uic--multi-column-tile': true,
    },
    className,
  );

  return (
    <div className={containerClasses} role={ariaRole}>
      <PaginatedTile
        pages={singleColumnLayout(items, itemsPerPage)}
        footerContent={footerContent}
        className={'uic--d-sm-block uic--d-md-none'}
        style={style}
      />
      <PaginatedTile
        pages={multiColumnlayout(items, itemsPerPage)}
        footerContent={footerContent}
        className={'uic--d-none uic--d-md-block'}
        style={style}
      />
    </div>
  );
};

export default MultiColumnTile;
