import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import DollarCircleIllustration from './DollarCircleIllustration';
import DollarCircleIllustrationReadMe from './DollarCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/DollarCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: DollarCircleIllustrationReadMe,
  },
});

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add(
  'default',
  () => <DollarCircleIllustration {...defaultProps(false, false, false)} />,
  {
    'in-dsm': {
      id: '5e0f928f8c220d14123b39e0',
    },
  },
);
stories.add('color', () => (
  <DollarCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <DollarCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <DollarCircleIllustration {...defaultProps(false, false, true)} />
));
