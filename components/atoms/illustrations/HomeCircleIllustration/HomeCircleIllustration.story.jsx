import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import HomeCircleIllustration from './HomeCircleIllustration.tsx';
import HomeCircleIllustrationReadMe from './HomeCircleIllustration.mdx';

const stories = storiesOf('Atoms/Illustrations/HomeCircleIllustration', module);

stories.addParameters({
  docs: {
    page: HomeCircleIllustrationReadMe,
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
  () => <HomeCircleIllustration {...defaultProps(false, false, false)} />,
  {
    'in-dsm': {
      id: '5e0f9210c8dd1c4e4a2e6e6c',
    },
  },
);
stories.add('color', () => (
  <HomeCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <HomeCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <HomeCircleIllustration {...defaultProps(false, false, true)} />
));
