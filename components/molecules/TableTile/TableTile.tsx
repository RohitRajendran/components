/** @module TableTile */
import classNames from 'classnames';
import React, {FC, Fragment} from 'react';
import './TableTile.scss';
import {TileProps} from '../../atoms/Tile/Tile';
import PaginatedTile from '../PaginatedTile/PaginatedTile';

export type TableTileProps = {
  /** Title of the table.*/
  title: string;
  /** Items to be rendered in the table.*/
  items: React.ReactNode[];
  /** Number of items to be displayed per page.*/
  itemsPerPage: number;
} & TileProps;

const TableTile: FC<TableTileProps> = ({
  title,
  items,
  itemsPerPage,
  className,
  style,
  footerContent,
  background,
}) => {
  const containerClasses = classNames(
    {
      'uic--table-tile': true,
    },
    className,
  );

  const pages: React.ReactNode[] = [];

  for (let page = 0; page < Math.ceil(items.length / itemsPerPage); page++) {
    const pageItems = items.slice(
      page * itemsPerPage,
      page * itemsPerPage + itemsPerPage,
    );
    pages.push(
      <Fragment>
        <div className="uic--table-tile__title uic--font-weight-bold">
          {title}
        </div>
        {pageItems.map((item: React.ReactNode, index: number) => (
          <div
            key={index}
            className={classNames(
              (index + 1) % 2
                ? 'uic--table-tile__cell--odd'
                : 'uic--table-tile__cell--even',
              'uic--table-tile__cell',
            )}
          >
            {item}
          </div>
        ))}
      </Fragment>,
    );
  }

  return (
    <PaginatedTile
      pages={pages}
      className={containerClasses}
      style={style}
      footerContent={footerContent}
      background={background}
    />
  );
};

export default TableTile;
