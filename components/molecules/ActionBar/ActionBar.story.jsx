import React from 'react';
import {storiesOf} from '@storybook/react';
import ActionBar from './ActionBar';
import ActionBarReadMe from './ActionBar.mdx';

const stories = storiesOf('Molecules/ActionBar', module);

stories.addParameters({
  docs: {
    page: ActionBarReadMe,
  },
});

const defaultProps = () => ({
  title: 'Montezuma',
});

stories.add('default', () => (
  <ActionBar onBack={() => true} onClose={() => true} {...defaultProps()} />
));

stories.add('back only', () => (
  <ActionBar onBack={() => true} {...defaultProps()} />
));

stories.add('close only', () => (
  <ActionBar onClose={() => true} {...defaultProps()} />
));

stories.add('no actions', () => <ActionBar {...defaultProps()} />);
