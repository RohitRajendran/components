import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import GivingCircleIllustration from './GivingCircleIllustration.tsx';
import GivingCircleIllustrationReadMe from './GivingCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/GivingCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: GivingCircleIllustrationReadMe,
  },
});

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
  illuminate: boolean('illuminate', illuminate),
});

stories.add(
  'default',
  () => <GivingCircleIllustration {...defaultProps(false, false, false)} />,
  {
    'in-dsm': {
      id: '5e0f91b053102b7a9b2c095c',
    },
  },
);
stories.add('color', () => (
  <GivingCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <GivingCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <GivingCircleIllustration {...defaultProps(false, false, true)} />
));
