import React from 'react';
import {Store} from '@sambego/storybook-state';
import {storiesOf, forceReRender} from '@storybook/react';
import TabbedTile from './TabbedTile';
import TabbedTileReadMe from './TabbedTile.mdx';
import {boolean} from '@storybook/addon-knobs';
import Button from '~components/atoms/Button/Button';

const stories = storiesOf('Molecules/TabbedTile', module);

const store = new Store({});

store.subscribe(() => {
  forceReRender();
});

stories.addParameters({
  docs: {
    page: TabbedTileReadMe,
  },
});

const defaultProps = (isDark) => ({
  isDark: boolean('isDark', isDark),
  items: [
    {
      title: 'The Portfolio You Accepted',
      tileContent: (
        <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
          Here is some text that I honestly cannot be bothered to write but I am
          doing it anyway.
        </p>
      ),
      tileProps: {
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
      },
    },
    {
      title: `How You're Currently Doing`,
      tileContent: (
        <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
          When you retire, this is our recommendation for the order in which you
          should withdraw funds from your accounts. This could save you money
          over time by avoiding fees and optimizing tax benefits.
        </p>
      ),
      tileProps: {
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
      },
    },
    {
      title: `Where You Could Be`,
      tileContent: (
        <p className="uic--body-text" style={{margin: 0, color: 'inherit'}}>
          This is some other text!
        </p>
      ),
      tileProps: {
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
      },
    },
  ],
});

stories.add('default', () => <TabbedTile {...defaultProps()} />);
stories.add('dark', () => <TabbedTile {...defaultProps(true)} />);
