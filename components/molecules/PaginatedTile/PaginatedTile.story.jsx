import React from 'react';
import {StateDecorator, Store} from '@sambego/storybook-state';
import {storiesOf, forceReRender} from '@storybook/react';
import PaginatedTile from './PaginatedTile';
import PaginatedTileReadMe from './PaginatedTile.mdx';
import Button from '~components/atoms/Button/Button';
import {boolean, number} from '@storybook/addon-knobs';

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

const defaultProps = ({itemsPerPage, isDark, hasFooter}) => ({
  items: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  itemsPerPage: number('itemsPerPage', itemsPerPage || 1),
  ListTemplate: ({paginatedItems}) => {
    return (
      <ul style={{fontSize: '1.4rem', color: 'inherit'}}>
        {paginatedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  },
  tileProps: hasFooter
    ? {
        footerContent: (
          <Button
            style={{textAlign: 'left'}}
            variant="link"
            to="#"
            dark={isDark}
          >
            View Montezuma the Cat
          </Button>
        ),
      }
    : null,
  isDark: boolean('isDark', isDark),
});

stories.add('default', () => (
  <PaginatedTile {...defaultProps({itemsPerPage: 3})} />
));
stories.add('footer content with pagination', () => (
  <PaginatedTile
    {...defaultProps({
      itemsPerPage: 3,
      hasFooter: true,
    })}
  />
));
stories.add('dark', () => (
  <PaginatedTile
    {...defaultProps({
      itemsPerPage: 3,
      isDark: true,
      hasFooter: true,
    })}
  />
));
stories.add('footer content no pagination', () => (
  <PaginatedTile {...defaultProps({itemsPerPage: 7, hasFooter: true})} />
));
stories.add('no footer content and no pagination', () => (
  <PaginatedTile {...defaultProps({itemsPerPage: 7})} />
));
