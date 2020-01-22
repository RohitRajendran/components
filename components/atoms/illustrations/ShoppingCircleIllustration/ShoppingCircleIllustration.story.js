import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ShoppingCircleIllustration from './ShoppingCircleIllustration';
import ShoppingCircleIllustrationReadMe from './ShoppingCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/ShoppingCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: ShoppingCircleIllustrationReadMe,
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
  () => <ShoppingCircleIllustration {...defaultProps(false, false, false)} />,
  {
    'in-dsm': {
      id: '5e0f910a8c220d220a3b399b',
    },
  },
);

stories.add('color', () => (
  <ShoppingCircleIllustration {...defaultProps(true, false, false)} />
));

stories.add('draft', () => (
  <ShoppingCircleIllustration {...defaultProps(false, true, false)} />
));

stories.add('illuminated', () => (
  <ShoppingCircleIllustration {...defaultProps(false, false, true)} />
));
