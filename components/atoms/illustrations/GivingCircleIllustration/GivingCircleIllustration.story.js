import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import GivingCircleIllustration from './GivingCircleIllustration';
import GivingCircleIllustrationReadMe from './GivingCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/GivingCircleIllustration',
  module
);

stories.addDecorator(withReadme(GivingCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '265'),
  width: text('width', '160'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
  illuminate: boolean('illuminate', illuminate),
});

stories.add('default', () => (
  <GivingCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <GivingCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <GivingCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <GivingCircleIllustration {...defaultProps(false, false, true)} />
));
