import {boolean, number, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {withReadme} from 'storybook-readme';
import CompassCircleIllustration from './CompassCircleIllustration';
import CompassCircleIllustrationReadMe from './CompassCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/CompassCircleIllustration',
  module
);

stories.addDecorator(withReadme(CompassCircleIllustrationReadMe));

const defaultProps = () => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  isAnimated: boolean('isAnimateed', false),
  animationDuration: number('animationSpeed', 10),
});

stories.add('default', () => <CompassCircleIllustration {...defaultProps()} />);
