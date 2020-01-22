import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import RamenCircleIllustration from './RamenCircleIllustration';
import RamenCircleIllustrationReadMe from './RamenCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/RamenCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: RamenCircleIllustrationReadMe,
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
  () => <RamenCircleIllustration {...defaultProps(false, false, false)} />,
  {
    'in-dsm': {
      id: '5e0f904e53102b787e2c092e',
    },
  },
);
stories.add('color', () => (
  <RamenCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <RamenCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <RamenCircleIllustration {...defaultProps(false, false, true)} />
));
