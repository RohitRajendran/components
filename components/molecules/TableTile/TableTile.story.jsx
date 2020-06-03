import React from 'react';
import {storiesOf} from '@storybook/react';
import TableTile from './TableTile';
import TableTileReadMe from './TableTile.mdx';
import {number} from '@storybook/addon-knobs';
import Button from '~components/atoms/Button/Button';

const stories = storiesOf('Molecules/TableTile', module);

stories.addParameters({
  docs: {
    page: TableTileReadMe,
  },
});

const items = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
].map((item, index) => (
  <div
    key={index}
    style={{
      fontSize: '1.4rem',
      color: 'inherit',
      height: '5rem',
      lineHeight: '5rem',
    }}
  >
    {item}
  </div>
));

const defaultProps = (itemsPerPage, hasFooter) => ({
  title: '1. Test-Exempt Accounts',
  items,
  itemsPerPage: number('itemsPerPage', itemsPerPage),
  footerContent: hasFooter && (
    <Button style={{textAlign: 'left'}} variant="link" to="#">
      View Montezuma the Cat
    </Button>
  ),
});

stories.add('default', () => <TableTile {...defaultProps(7)} />);
stories.add('with footer content and pagination', () => (
  <TableTile {...defaultProps(3, true)} />
));
