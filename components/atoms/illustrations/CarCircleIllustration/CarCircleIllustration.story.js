import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CarCircleIllustration from './CarCircleIllustration';
import CarCircleIllustrationReadMe from './CarCircleIllustration.mdx';

const stories = storiesOf('Atoms/Illustrations/CarCircleIllustration', module);

stories.addParameters({
  docs: {
    page: CarCircleIllustrationReadMe,
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
