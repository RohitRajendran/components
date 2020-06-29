import React, {Fragment} from 'react';
import {Store} from '@sambego/storybook-state';
import {storiesOf, forceReRender} from '@storybook/react';
import PaginatedTile from './PaginatedTile';
import PaginatedTileReadMe from './PaginatedTile.mdx';
import Button from '~components/atoms/Button/Button';
import {select} from '@storybook/addon-knobs';
import {TileBackgrounds} from '~components/atoms/Tile/Tile';

const stories = storiesOf('Molecules/PaginatedTile', module);

const store = new Store({});

store.subscribe(() => {
  forceReRender();
});

stories.addParameters({
  docs: {
    page: PaginatedTileReadMe,
  },
});

const getPages = (itemsPerPage) => {
  const items = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const pages = [];

  for (let page = 0; page < items.length / itemsPerPage; page++) {
    const pageItems = items.slice(
      page * itemsPerPage,
      page * itemsPerPage + itemsPerPage,
    );
    pages.push(
      <Fragment>
        {pageItems.map((item, index) => (
          <div
            key={index}
            style={{fontSize: '1.4rem', color: 'inherit', paddingBottom: 5}}
          >
            {item}
          </div>
        ))}
      </Fragment>,
    );
  }
  return pages;
};

const defaultProps = (itemsPerPage, hasFooter, background) => ({
  pages: getPages(itemsPerPage),
  footerContent: hasFooter && (
    <Button
      style={{textAlign: 'left'}}
      variant="link"
      to="#"
      dark={
        TileBackgrounds.Light !==
        select(
          'Background',
          TileBackgrounds,
          background || TileBackgrounds.Light,
        )
      }
    >
      View Montezuma the Cat
    </Button>
  ),
  background: select('Background', TileBackgrounds, background),
});

stories.add('default', () => <PaginatedTile {...defaultProps(3, false)} />);
stories.add('footer content with pagination', () => (
  <PaginatedTile {...defaultProps(3, true)} />
));
stories.add('dark', () => (
  <PaginatedTile {...defaultProps(3, true, TileBackgrounds.Dark)} />
));
stories.add('footer content no pagination', () => (
  <PaginatedTile {...defaultProps(7, true)} />
));
stories.add('no footer content and no pagination', () => (
  <PaginatedTile {...defaultProps(7, false)} />
));
