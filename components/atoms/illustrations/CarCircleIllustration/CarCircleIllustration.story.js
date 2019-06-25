import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import CarCircleIllustration from './CarCircleIllustration';
import CarCircleIllustrationReadMe from './CarCircleIllustration.md';

const stories = storiesOf('Atoms/Illustrations/CarCircleIllustration', module);

stories.addDecorator(withReadme(CarCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '265'),
  width: text('width', '160'),
  illuminate: boolean('illuminate', illuminate),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <CarCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <CarCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <CarCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <CarCircleIllustration {...defaultProps(false, false, true)} />
));
