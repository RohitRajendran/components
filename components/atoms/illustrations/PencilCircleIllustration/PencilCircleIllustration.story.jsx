import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import PencilCircleIllustration from './PencilCircleIllustration.tsx';
import PencilCircleIllustrationReadMe from './PencilCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/PencilCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: PencilCircleIllustrationReadMe,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
});

stories.add('default', () => <PencilCircleIllustration {...defaultProps()} />);

stories.add('color', () => (
  <PencilCircleIllustration {...defaultProps()} color />
));

stories.add('illuminated', () => (
  <PencilCircleIllustration {...defaultProps()} illuminate />
));
