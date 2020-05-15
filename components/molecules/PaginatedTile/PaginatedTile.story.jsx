import React from 'react';
import {Store} from '@sambego/storybook-state';
import {storiesOf, forceReRender} from '@storybook/react';
import PaginatedTile from './PaginatedTile';
import PaginatedTileReadMe from './PaginatedTile.mdx';
import Button from '~components/atoms/Button/Button';
import {boolean, number} from '@storybook/addon-knobs';
import PropTypes from 'prop-types';

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

const Template = ({paginatedItems}) => {
  return (
    <ul style={{fontSize: '1.4rem', color: 'inherit'}}>
      {paginatedItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
Template.displayName = 'Template';
Template.propTypes = {
  paginatedItems: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = ({listTemplate, isDark, hasFooter}) => ({
  items: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  listTemplate,
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
  <PaginatedTile
    {...defaultProps({
      listTemplate: {itemsPerPage: number('itemsPerPage', 3), Template},
    })}
  />
));
stories.add('footer content with pagination', () => (
  <PaginatedTile
    {...defaultProps({
      listTemplate: {itemsPerPage: number('itemsPerPage', 3), Template},
      hasFooter: true,
    })}
  />
));
stories.add('dark', () => (
  <PaginatedTile
    {...defaultProps({
      listTemplate: {itemsPerPage: number('itemsPerPage', 3), Template},
      isDark: true,
      hasFooter: true,
    })}
  />
));
stories.add('footer content no pagination', () => (
  <PaginatedTile
    {...defaultProps({
      listTemplate: {itemsPerPage: number('itemsPerPage', 7), Template},
      hasFooter: true,
    })}
  />
));
stories.add('no footer content and no pagination', () => (
  <PaginatedTile
    {...defaultProps({
      listTemplate: {itemsPerPage: number('itemsPerPage', 7), Template},
    })}
  />
));
