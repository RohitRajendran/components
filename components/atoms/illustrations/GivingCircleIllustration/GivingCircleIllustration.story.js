import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import GivingCircleIllustration from './GivingCircleIllustration';
import GivingCircleIllustrationReadMe from './GivingCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/GivingCircleIllustration',
  module
);

stories.addDecorator(withReadme(GivingCircleIllustrationReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '265'),
  width: text('width', '160'),
});

stories.add('default', () => <GivingCircleIllustration {...defaultProps()} />);
