import React from 'react';
import {Store} from '@sambego/storybook-state';
import {storiesOf, forceReRender} from '@storybook/react';
import PaginatedTile from './PaginatedTile';
import PaginatedTileReadMe from './PaginatedTile.mdx';
import Button from '~components/atoms/Button/Button';
import {boolean} from '@storybook/addon-knobs';

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
      <ul style={{fontSize: '1.4rem', color: 'inherit'}}>
        {pageItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>,
    );
  }
  return pages;
};

const defaultProps = (itemsPerPage, hasFooter, isDark) => ({
  pages: getPages(itemsPerPage),
  tileProps: {
    footerContent: hasFooter && (
      <Button
        style={{textAlign: 'left'}}
        variant="link"
        to="#"
        dark={boolean('isDark', isDark)}
      >
        View Montezuma the Cat
      </Button>
    ),
    isDark: boolean('isDark', isDark),
  },
});

stories.add('default', () => (
  <PaginatedTile {...defaultProps(3, false, false)} />
));
stories.add('footer content with pagination', () => (
  <PaginatedTile {...defaultProps(3, true, false)} />
));
stories.add('dark', () => <PaginatedTile {...defaultProps(3, true, true)} />);
stories.add('footer content no pagination', () => (
  <PaginatedTile {...defaultProps(7, true, false)} />
));
stories.add('no footer content and no pagination', () => (
  <PaginatedTile {...defaultProps(7, false, false)} />
));
