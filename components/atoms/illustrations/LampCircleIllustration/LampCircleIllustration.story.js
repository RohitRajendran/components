import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import LampCircleIllustration from './LampCircleIllustration';
import LampCircleIllustrationReadMe from './LampCircleIllustration.mdx';

const stories = storiesOf('Atoms/Illustrations/LampCircleIllustration', module);

stories.addParameters({
  docs: {
    page: LampCircleIllustrationReadMe,
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
  () => <LampCircleIllustration {...defaultProps(false, false, false)} />,
  {
    'in-dsm': {
      id: '5e0f90878c220d36433b3978',
    },
  },
);
stories.add('color', () => (
  <LampCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <LampCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <LampCircleIllustration {...defaultProps(false, false, true)} />
));
