import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import InsuranceCircleIllustration from './InsuranceCircleIllustration.tsx';
import InsuranceCircleIllustrationReadMe from './InsuranceCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/InsuranceCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: InsuranceCircleIllustrationReadMe,
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
  () => <InsuranceCircleIllustration {...defaultProps(false, false, false)} />,
  {
    'in-dsm': {
      id: '5e0f920bc8dd1cd9b32e6e5a',
    },
  },
);
stories.add('color', () => (
  <InsuranceCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <InsuranceCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <InsuranceCircleIllustration {...defaultProps(false, false, true)} />
));
