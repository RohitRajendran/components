import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import PlantCircleIllustration from './PlantCircleIllustration';
import PlantCircleIllustrationReadMe from './PlantCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/PlantCircleIllustration',
  module
);

stories.addDecorator(withReadme(PlantCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <PlantCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <PlantCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <PlantCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <PlantCircleIllustration {...defaultProps(false, false, true)} />
));
