/** @module Tile */
import classNames from 'classnames';
import React, {FC} from 'react';
import './Tile.scss';

export enum TileBackgrounds {
  Light = 'light',
  Dark = 'dark',
  Draft = 'draft',
}

export type TileProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** Content which should appear in the footer of the tile. */
  footerContent?: React.ReactNode;
  /** Determines the background color of the tile */
  background?: TileBackgrounds;
};

const Tile: FC<TileProps> = ({
  className,
  style,
  children,
  footerContent,
  background,
}) => {
  const containerClasses = classNames(
    {
      'uic--tile': true,
      'uic--tile--dark': background === TileBackgrounds.Dark,
      'uic--tile--light': background === TileBackgrounds.Light,
      'uic--tile--draft': background === TileBackgrounds.Draft,
    },
    className,
  );

  return (
    <div className={containerClasses} style={style}>
      <div className="uic--tile__inner">{children}</div>

      {footerContent && (
        <footer className="uic--tile__footer">{footerContent}</footer>
      )}
    </div>
  );
};

Tile.defaultProps = {
  background: TileBackgrounds.Light,
};

export default Tile;
