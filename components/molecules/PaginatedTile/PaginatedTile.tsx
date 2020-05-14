/** @module PaginatedTile */
import classNames from 'classnames';
import React, {FC, useState} from 'react';
import './PaginatedTile.scss';
import Tile, {TileProps} from '~components/atoms/Tile/Tile';
import Button from '~components/atoms/Button/Button';
import CaretIcon from '~components/atoms/icons/CaretIcon/CaretIcon';
import {colors} from '~constants/js/colors';

type PaginatedTileProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /**Tile Properties*/
  tileProps?: TileProps;
  /** Items to be rendered in the ListTemplate property or individual views to be rendered as pages.*/
  items: any[];
  /** Template used to render a list of items.*/
  ListTemplate?: React.ComponentType<{paginatedItems: any[]}>;
  /** Number of items to be displayed per page. This is used in conjuction with the ListTemplate property. */
  itemsPerPage: number;
  isDark?: boolean;
};

const PaginatedTile: FC<PaginatedTileProps> = ({
  className,
  style,
  items,
  ListTemplate,
  tileProps,
  itemsPerPage,
  isDark,
}): JSX.Element => {
  const [page, setPage] = useState(0);

  const containerClasses = classNames(
    {
      'uic--paginated-tile': true,
      // 'uic--tile--dark': isDark,
    },
    className,
  );

  return (
    <div className={containerClasses} style={style}>
      <Tile
        isDark={isDark}
        {...tileProps}
        footerContent={
          <PageFooter
            footerContent={tileProps?.footerContent}
            page={page}
            numberOfItems={items.length}
            itemsPerPage={itemsPerPage}
            previous={() => setPage(page - 1)}
            next={() => setPage(page + 1)}
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

type PageFooterProps = {
  footerContent?: React.ReactNode;
  page: number;
  numberOfItems: number;
  itemsPerPage: number;
  previous: () => void;
  next: () => void;
};
const PageFooter: FC<PageFooterProps> = ({
  footerContent,
  page,
  numberOfItems,
  itemsPerPage,
  previous,
  next,
}): JSX.Element | null => {
  const firstPage = page == 0;
  const lastPage = page + 1 >= Math.ceil(numberOfItems / itemsPerPage);
  const pagination = !(firstPage && lastPage);

  if (!footerContent && !pagination) {
    return null;
  }

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
            disabled={firstPage}
            direction="left"
            onClick={previous}
          />
          <PaginationButton
            disabled={lastPage}
            direction="right"
            onClick={next}
          />
        </div>
      )}
    </div>
  );
};

type PageProps = {
  items: any[];
  page: number;
  itemsPerPage: number;
  ListTemplate?: React.ComponentType<{paginatedItems: any[]}>;
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

type PaginationButtonProps = {
  disabled: boolean;
  onClick: () => void;
  direction: 'right' | 'left';
};
const PaginationButton: FC<PaginationButtonProps> = ({
  disabled,
  onClick,
  direction,
}): JSX.Element => {
  return (
    <Button
      variant="secondary"
      light={true}
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
