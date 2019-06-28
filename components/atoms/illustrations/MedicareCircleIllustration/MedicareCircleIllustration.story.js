import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import MedicareCircleIllustration from './MedicareCircleIllustration';
import MedicareCircleIllustrationReadMe from './MedicareCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/MedicareCircleIllustration',
  module
);

stories.addDecorator(withReadme(MedicareCircleIllustrationReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
});

stories.add('default', () => (
  <MedicareCircleIllustration {...defaultProps()} />
));
