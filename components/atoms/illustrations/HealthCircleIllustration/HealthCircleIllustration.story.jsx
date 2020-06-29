import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import HealthCircleIllustration from './HealthCircleIllustration.tsx';
import HealthCircleIllustrationReadMe from './HealthCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/HealthCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: HealthCircleIllustrationReadMe,
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
  () => <HealthCircleIllustration {...defaultProps(false, false)} />,
  {
    'in-dsm': {
      id: '5e0f90ae8c220d2c663b398e',
    },
  },
);
stories.add('color', () => (
  <HealthCircleIllustration {...defaultProps(true, false)} />
));
stories.add('draft', () => (
  <HealthCircleIllustration {...defaultProps(false, true)} />
));
stories.add('illuminated', () => (
  <HealthCircleIllustration {...defaultProps(false, false, true)} />
));
