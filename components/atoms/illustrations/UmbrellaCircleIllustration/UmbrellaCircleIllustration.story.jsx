import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import UmbrellaCircleIllustration from './UmbrellaCircleIllustration.tsx';
import UmbrellaCircleIllustrationReadMe from './UmbrellaCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/UmbrellaCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: UmbrellaCircleIllustrationReadMe,
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
  <UmbrellaCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <UmbrellaCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <UmbrellaCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <UmbrellaCircleIllustration {...defaultProps(false, false, true)} />
));
