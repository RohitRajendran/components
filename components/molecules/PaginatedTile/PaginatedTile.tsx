/** @module PaginatedTile */
import classNames from 'classnames';
import React, {FC, useState} from 'react';
import './PaginatedTile.scss';
import Tile, {TileProps} from '~components/atoms/Tile/Tile';
import PaginationControls from '~components/atoms/PaginationControls/PaginationControls';

type PaginatedTileProps = {
  /** List of pages to be rendered in the Tile.*/
  pages: React.ReactNode[];
  /**Additional Tile Properties*/
  tileProps?: TileProps;
};

const PaginatedTile: FC<PaginatedTileProps> = ({pages, tileProps}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const containerClasses = classNames(
    {
      'uic--paginated-tile': true,
    },
    tileProps?.className,
  );

  const firstPage = currentPage === 0;
  const lastPage = currentPage + 1 === pages.length;
  const hasMultiplePages = !(firstPage && lastPage);

  return (
    <Tile
      className={containerClasses}
      style={tileProps?.style}
      isDark={tileProps?.isDark}
      footerContent={
        (tileProps?.footerContent || hasMultiplePages) && (
          <React.Fragment>
            {tileProps?.footerContent}
            {hasMultiplePages && (
              <PaginationControls
                className="uic--paginated-tile__pagination-controls uic--position-absolute"
                previousDisabled={firstPage}
                nextDisabled={lastPage}
                previous={(): void => setCurrentPage(currentPage - 1)}
                next={(): void => setCurrentPage(currentPage + 1)}
              />
            )}
          </React.Fragment>
        )
      }
    >
      {pages[currentPage]}
    </Tile>
  );
};

export default PaginatedTile;
