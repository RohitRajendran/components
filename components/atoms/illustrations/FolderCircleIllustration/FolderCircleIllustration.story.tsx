import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import FolderCircleIllustration, {
  FolderCircleIllustrationProps,
} from './FolderCircleIllustration';
import FolderCircleIllustrationReadMe from './FolderCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/FolderCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: FolderCircleIllustrationReadMe,
  },
});

const defaultProps = (
  color: boolean,
  draft: boolean,
  illuminate: boolean,
): FolderCircleIllustrationProps => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <FolderCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <FolderCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <FolderCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <FolderCircleIllustration {...defaultProps(false, false, true)} />
));
