import {boolean, number, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CompassCircleIllustration from './CompassCircleIllustration';
import CompassCircleIllustrationReadMe from './CompassCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/CompassCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: CompassCircleIllustrationReadMe,
  },
});

const defaultProps = () => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  isAnimated: boolean('isAnimated', false),
  animationDuration: number('animationDuration', 10),
});

stories.add(
  'default',
  () => <CompassCircleIllustration {...defaultProps()} />,
  {
    'in-dsm': {
      id: '5e0f931153102bec042c09f1',
    },
  },
);
