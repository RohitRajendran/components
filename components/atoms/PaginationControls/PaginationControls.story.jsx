import React from 'react';
import {storiesOf} from '@storybook/react';
import PaginationControls from './PaginationControls';
import PaginationControlsReadMe from './PaginationControls.mdx';
import {number, boolean} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/PaginationControls', module);

stories.addParameters({
  docs: {
    page: PaginationControlsReadMe,
  },
});

const defaultProps = (previousDisabled, nextDisabled) => ({
  previousDisabled: boolean('previousDisabled', previousDisabled),
  nextDisabled: boolean('nextDisabled', nextDisabled),
});
stories.add('default', () => <PaginationControls {...defaultProps()} />);
stories.add('previous disabled', () => (
  <PaginationControls {...defaultProps(true, false)} />
));
stories.add('next disabled', () => (
  <PaginationControls {...defaultProps(false, true)} />
));
