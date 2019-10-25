import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import PaintingCircleIllustration from './PaintingCircleIllustration';
import PaintingCircleIllustrationReadMe from './PaintingCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/PaintingCircleIllustration',
  module
);

stories.addParameters({
  docs: {
    page: PaintingCircleIllustrationReadMe,
  },
});

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <PaintingCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <PaintingCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <PaintingCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <PaintingCircleIllustration {...defaultProps(false, false, true)} />
));
