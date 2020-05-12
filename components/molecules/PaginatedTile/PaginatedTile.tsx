/** @module PaginatedTile */
import classNames from 'classnames';
import React, {FC, useState} from 'react';
import './PaginatedTile.scss';
import Tile, {TileProps} from '~components/atoms/Tile/Tile';
import Button from '~components/atoms/Button/Button';

type PaginatedTileProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** Determines if the navigation tile should be dark or not. */
  isDark?: boolean;
  tileProps: TileProps;
  /** The tile items.
   * This can contain items to be rendered in the Template component.
   * If not, this can be JSX elements that can be readily rendered.
   */
  items: any[];
  /** Template used to render a list of items*/
  ListTemplate?: React.ComponentType<{paginatedItems: any[]}>;
  itemsPerPage: number;
};

const PaginatedTile: FC<PaginatedTileProps> = ({
  className,
  style,
  items,
  isDark,
  ListTemplate,
  tileProps,
  itemsPerPage,
}): JSX.Element => {
  const [page, setPage] = useState(0);

  const containerClasses = classNames(
    {
      'uic--paginated-tile': true,
    },
    className,
  );

  return (
    <div className={containerClasses} style={style}>
      <Tile
        isDark={isDark}
        {...tileProps}
        paginationControls={
          <PaginationControls
            page={page}
            numberOfItems={items.length}
            itemsPerPage={itemsPerPage}
            goToPrevious={() => setPage(page - 1)}
            goToNext={() => setPage(page + 1)}
          />
        }
      >
        <Page
          items={items}
          page={page}
          itemsPerPage={itemsPerPage}
          ListTemplate={ListTemplate}
        />
      </Tile>
    </div>
  );
};

PaginatedTile.defaultProps = {
  className: 'uic--default-placeholder',
  itemsPerPage: 1,
};

type PageProps = {
  items: any[];
  page: number;
  itemsPerPage: number;
  ListTemplate: React.ComponentType<{paginatedItems: any[]}> | undefined;
};
const Page: FC<PageProps> = ({
  items,
  page,
  itemsPerPage,
  ListTemplate,
}): JSX.Element => {
  if (!ListTemplate) {
    return items[page];
  }
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return <ListTemplate paginatedItems={items.slice(startIndex, endIndex)} />;
};

type PaginationControlsProps = {
  page: number;
  numberOfItems: number;
  itemsPerPage: number;
  goToPrevious: () => void;
  goToNext: () => void;
};
const PaginationControls: FC<PaginationControlsProps> = ({
  page,
  numberOfItems,
  itemsPerPage,
  goToPrevious,
  goToNext,
}): JSX.Element => {
  return (
    <React.Fragment>
      {page > 0 ? (
        <Button onClick={goToPrevious}>Previous</Button>
      ) : (
        <Button disabled>Previous</Button>
      )}
      {page + 1 < Math.ceil(numberOfItems / itemsPerPage) ? (
        <Button onClick={goToNext}>Next</Button>
      ) : (
        <Button disabled>Next</Button>
      )}
    </React.Fragment>
  );
};

export default PaginatedTile;
