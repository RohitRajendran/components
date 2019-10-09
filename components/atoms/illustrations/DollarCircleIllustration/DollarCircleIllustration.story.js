import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import DollarCircleIllustration from './DollarCircleIllustration';
import DollarCircleIllustrationReadMe from './DollarCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/DollarCircleIllustration',
  module
);

stories.addDecorator(withReadme(DollarCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <DollarCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <DollarCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <DollarCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <DollarCircleIllustration {...defaultProps(false, false, true)} />
));
