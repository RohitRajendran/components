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

const defaultProps = (itemsPerPage, hasFooter) => ({
  title: '1. Test-Exempt Accounts',
  items: [
    <span key="0" style={{fontSize: '1.4rem', color: 'inherit'}}>
      Monday
    </span>,
    <span key="0" style={{fontSize: '1.4rem', color: 'inherit'}}>
      Tuesday
    </span>,
    <span key="0" style={{fontSize: '1.4rem', color: 'inherit'}}>
      Wednesday
    </span>,
    <span key="0" style={{fontSize: '1.4rem', color: 'inherit'}}>
      Thursday
    </span>,
    <span key="0" style={{fontSize: '1.4rem', color: 'inherit'}}>
      Friday
    </span>,
    <span key="0" style={{fontSize: '1.4rem', color: 'inherit'}}>
      Saturday
    </span>,
    <span key="0" style={{fontSize: '1.4rem', color: 'inherit'}}>
      Sunday
    </span>,
  ],
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
