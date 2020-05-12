import React from 'react';
import {StateDecorator, Store} from '@sambego/storybook-state';
import {storiesOf, forceReRender} from '@storybook/react';
import PaginatedTile from './PaginatedTile';
import PaginatedTileReadMe from './PaginatedTile.mdx';
import Button from '~components/atoms/Button/Button';

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

const defaultProps = (isDark) => ({
  // Add props that the component uses with the appropriate storybook knob
  // https://stackoverflow.com/c/unitedincome/questions/136

  items: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  itemsPerPage: 3,
  tileProps: {
    footerContent: (
      <Button style={{textAlign: 'left'}} variant="link" to="#" dark={isDark}>
        View Montezuma the Cat
      </Button>
    ),
  },
  ListTemplate: ({paginatedItems}) => {
    return (
      <ul>
        {paginatedItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  },
});

stories.add('default', () => <PaginatedTile {...defaultProps()} />);

// Add more stories: https://stackoverflow.com/c/unitedincome/questions/140
