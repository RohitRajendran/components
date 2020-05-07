/** @module TabbedTile */
import classNames from 'classnames';
import React, {FC, useState} from 'react';
import Tile, {TileProps} from '../../atoms/Tile/Tile';
import BubbleDropdown from '../../atoms/BubbleDropdown/BubbleDropdown';
import './TabbedTile.scss';
import {colors} from '../../../constants/js/colors';
import {isNullOrUndefined} from 'util';

type TabbedTileProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** The tile items. */
  items: {
    title: string;
    tileContent: React.ReactNode;
    tileProps: TileProps;
  }[];
  /** Determines if the navigation tile should be dark or not. */
  isDark?: boolean;
  /** The item that the navigation should start on. */
  defaultView?: number;
};

const TabbedTile: FC<TabbedTileProps> = ({
  className,
  style,
  items,
  isDark,
  defaultView,
}): JSX.Element => {
  const [currentView, setView] = useState(
    !isNullOrUndefined(defaultView) ? defaultView : 0,
  );

  const containerClasses = classNames(
    {
      'uic--tabbed-tile': true,
      'uic--tabbed-tile--dark': isDark,
      'uic--tabbed-tile--light': !isDark,
    },
    className,
  );

  const bubbleDropDownOptions = items.map((item) => ({
    value: item.title,
    color: colors.royal,
  }));

  return (
    <div className={containerClasses} style={style}>
      <div className="uic--tabbed-tile__navigation">
        <div className="uic--tabbed-tile__navigation-bubble">
          <BubbleDropdown
            options={bubbleDropDownOptions}
            value={bubbleDropDownOptions[currentView].value}
            onChange={(value: string): void =>
              setView(
                bubbleDropDownOptions.map((item) => item.value).indexOf(value),
              )
            }
          />
        </div>
        <ul className="uic--tabbed-tile__navigation-box uic--position-relative">
          {items.map((item, index) => {
            const tabStyles = classNames({
              'uic--d-flex': true,
              'uic--justify-content-center': true,
              'uic--align-items-center': true,
              'uic--tabbed-tile__navigation-box--item': true,
              'uic--tabbed-tile__navigation-box--item-active':
                currentView === index,
              'uic--position-relative': true,
            });

            return (
              <li key={index}>
                <button
                  className={tabStyles}
                  onClick={(): void => setView(index)}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <Tile isDark={isDark} {...items[currentView].tileProps}>
        {items[currentView].tileContent}
      </Tile>
    </div>
  );
};

export default TabbedTile;
