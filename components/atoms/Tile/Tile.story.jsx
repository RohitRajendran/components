import React from 'react';
import {storiesOf} from '@storybook/react';
import Tile from './Tile';
import TileReadMe from './Tile.mdx';
import Button from '~components/atoms/Button/Button';
import {boolean} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/Tile', module);

stories.addParameters({
  docs: {
    page: TileReadMe,
  },
});

const defaultProps = (isDark) => ({
  isDark: boolean('isDark', isDark),
});

const copy = (
  <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
    When you retire, this is our recommendation for the order in which you
    should withdraw funds from your accounts. This could save you money over
    time by avoiding fees and optimizing tax benefits.
  </p>
);

const lightFooter = (
  <Button style={{textAlign: 'left'}} variant="link" to="#" light>
    View Montezuma the Cat
  </Button>
);

const darkFooter = (
  <Button style={{textAlign: 'left'}} variant="link" to="#" dark>
    View Montezuma the Cat
  </Button>
);

stories.add('default', () => <Tile {...defaultProps()}>{copy}</Tile>);
stories.add('dark', () => <Tile {...defaultProps(true)}>{copy}</Tile>);

stories.add('with footer', () => (
  <Tile {...defaultProps()} footerContent={lightFooter}>
    {copy}
  </Tile>
));
stories.add('dark with footer', () => (
  <Tile {...defaultProps(true)} footerContent={darkFooter}>
    {copy}
  </Tile>
));
