/** @module Tile */
import classNames from 'classnames';
import React, {FC} from 'react';
import './Tile.scss';

export type TileProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** Content which should appear in the footer of the tile. */
  footerContent?: React.ReactNode;
  /** Determines if the card should be rendered on a dark background or not. */
  isDark?: boolean;
  paginationControls?: React.ReactNode;
};

const Tile: FC<TileProps> = ({
  className,
  style,
  children,
  footerContent,
  isDark,
  paginationControls,
}) => {
  const containerClasses = classNames(
    {
      'uic--tile': true,
      'uic--tile--dark': isDark,
      'uic--tile--light': !isDark,
    },
    className,
  );

  return (
    <div className={containerClasses} style={style}>
      <div className="uic--tile__inner">{children}</div>

      {(footerContent || paginationControls) && (
        <footer className="uic--tile__footer">
          {footerContent ? footerContent : null}
          {paginationControls ? paginationControls : null}
        </footer>
      )}
    </div>
  );
};

export default Tile;
