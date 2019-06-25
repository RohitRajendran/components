import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import PaintingCircleIllustration from './PaintingCircleIllustration';
import PaintingCircleIllustrationReadMe from './PaintingCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/PaintingCircleIllustration',
  module
);

stories.addDecorator(withReadme(PaintingCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '265'),
  width: text('width', '160'),
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
