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

const paginationOnly = () => ({
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
  ListTemplate: ({paginatedItems}) => {
    return (
      <ul style={{fontSize: '1.4rem'}}>
        {paginatedItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  },
});

const footerContentWithPagination = () => ({
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
  ListTemplate: ({paginatedItems}) => {
    return (
      <ul style={{fontSize: '1.4rem'}}>
        {paginatedItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  },
  tileProps: {
    footerContent: (
      <Button style={{textAlign: 'left'}} variant="link" to="#">
        View Montezuma the Cat
      </Button>
    ),
  },
});

const darkFooterContentWithPagination = () => ({
  // Add props that the component uses with the appropriate storybook knob
  // https://stackoverflow.com/c/unitedincome/questions/136
  isDark: true,
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
  ListTemplate: ({paginatedItems}) => {
    return (
      <ul style={{fontSize: '1.4rem'}}>
        {paginatedItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  },
  tileProps: {
    footerContent: (
      <Button style={{textAlign: 'left'}} variant="link" to="#" dark>
        View Montezuma the Cat
      </Button>
    ),
  },
});

const footerContentOnly = () => ({
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
  itemsPerPage: 7,
  ListTemplate: ({paginatedItems}) => {
    return (
      <ul style={{fontSize: '1.4rem'}}>
        {paginatedItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  },
  tileProps: {
    footerContent: (
      <Button style={{textAlign: 'left'}} variant="link" to="#">
        View Montezuma the Cat
      </Button>
    ),
  },
});

const noFooterContentAndNoPagination = () => ({
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
  itemsPerPage: 7,
  ListTemplate: ({paginatedItems}) => {
    return (
      <ul style={{fontSize: '1.4rem'}}>
        {paginatedItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  },
});

stories.add('default', () => <PaginatedTile {...paginationOnly()} />);
stories.add('footer content with pagination', () => (
  <PaginatedTile {...footerContentWithPagination()} />
));
stories.add('dark', () => (
  <PaginatedTile {...darkFooterContentWithPagination()} />
));
stories.add('footer content no pagination', () => (
  <PaginatedTile {...footerContentOnly()} />
));
stories.add('no footer content and no pagination', () => (
  <PaginatedTile {...noFooterContentAndNoPagination()} />
));
