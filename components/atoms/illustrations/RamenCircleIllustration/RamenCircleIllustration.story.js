import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import RamenCircleIllustration from './RamenCircleIllustration';
import RamenCircleIllustrationReadMe from './RamenCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/RamenCircleIllustration',
  module
);

stories.addDecorator(withReadme(RamenCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '265'),
  width: text('width', '160'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
  illuminate: boolean('illuminate', illuminate),
});

stories.add('default', () => (
  <RamenCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <RamenCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <RamenCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <RamenCircleIllustration {...defaultProps(false, false, true)} />
));
