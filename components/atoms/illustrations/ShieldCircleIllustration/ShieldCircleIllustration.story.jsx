import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ShieldCircleIllustration from './ShieldCircleIllustration.tsx';
import ShieldCircleIllustrationReadMe from './ShieldCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/ShieldCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: ShieldCircleIllustrationReadMe,
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
  <ShieldCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <ShieldCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <ShieldCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <ShieldCircleIllustration {...defaultProps(false, false, true)} />
));
