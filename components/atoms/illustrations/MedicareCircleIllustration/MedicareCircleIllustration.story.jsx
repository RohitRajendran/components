import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import MedicareCircleIllustration from './MedicareCircleIllustration.tsx';
import MedicareCircleIllustrationReadMe from './MedicareCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/MedicareCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: MedicareCircleIllustrationReadMe,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
});

stories.add('default', () => (
  <MedicareCircleIllustration {...defaultProps()} />
));
