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

const getTileProps = (hasFooter, isDark) => ({
  footerContent: hasFooter && (
    <Button style={{textAlign: 'left'}} variant="link" to="#" dark={isDark}>
      View Montezuma the Cat
    </Button>
  ),
  isDark: boolean('isDark', isDark),
});

const defaultProps = ({listTemplate, tileProps}) => ({
  items: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  listTemplate: {
    ...listTemplate,
    itemsPerPage: number('itemsPerPage', listTemplate.itemsPerPage),
  },
  tileProps,
});

stories.add('default', () => (
  <PaginatedTile
    {...defaultProps({
      listTemplate: {itemsPerPage: 3, Template},
      tileProps: getTileProps(false, false),
    })}
  />
));
stories.add('footer content with pagination', () => (
  <PaginatedTile
    {...defaultProps({
      listTemplate: {itemsPerPage: 3, Template},
      tileProps: getTileProps(true, false),
    })}
  />
));
stories.add('dark', () => (
  <PaginatedTile
    {...defaultProps({
      listTemplate: {itemsPerPage: 3, Template},
      tileProps: getTileProps(true, true),
    })}
  />
));
stories.add('footer content no pagination', () => (
  <PaginatedTile
    {...defaultProps({
      listTemplate: {itemsPerPage: 7, Template},
      tileProps: getTileProps(true, false),
    })}
  />
));
stories.add('no footer content and no pagination', () => (
  <PaginatedTile
    {...defaultProps({
      listTemplate: {itemsPerPage: 7, Template},
      tileProps: getTileProps(false, false),
    })}
  />
));
