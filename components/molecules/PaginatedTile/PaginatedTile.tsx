/** @module PaginatedTile */
import classNames from 'classnames';
import React, {FC, useState, Fragment} from 'react';
import './PaginatedTile.scss';
import Tile, {TileProps} from '../../atoms/Tile/Tile';
import PaginationControls from '../../atoms/PaginationControls/PaginationControls';

export type PaginatedTileProps = {
  /** List of pages to be rendered in the Tile.*/
  pages: React.ReactNode[];
} & TileProps;

const PaginatedTile: FC<PaginatedTileProps> = ({
  pages,
  className,
  style,
  footerContent,
  background,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const containerClasses = classNames(
    {
      'uic--paginated-tile': true,
    },
    className,
  );

  const firstPage = currentPage === 0;
  const lastPage = currentPage + 1 === pages.length;
  const hasMultiplePages = !(firstPage && lastPage);

  return (
    <Tile
      className={containerClasses}
      style={style}
      background={background}
      footerContent={
        (footerContent || hasMultiplePages) && (
          <Fragment>
            {footerContent}
            {hasMultiplePages && (
              <PaginationControls
                className="uic--paginated-tile__pagination-controls uic--position-absolute"
                previousDisabled={firstPage}
                nextDisabled={lastPage}
                previous={(): void => setCurrentPage(currentPage - 1)}
                next={(): void => setCurrentPage(currentPage + 1)}
              />
            )}
          </Fragment>
        )
      }
    >
      {pages[currentPage]}
    </Tile>
  );
};

export default PaginatedTile;
