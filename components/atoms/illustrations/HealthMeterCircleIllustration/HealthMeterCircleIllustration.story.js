import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import HealthMeterCircleIllustration from './HealthMeterCircleIllustration';
import HealthMeterCircleIllustrationReadMe from './HealthMeterCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/HealthMeterCircleIllustration',
  module
);

stories.addDecorator(withReadme(HealthMeterCircleIllustrationReadMe));

const defaultProps = (illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
});

stories.add('default', () => (
  <HealthMeterCircleIllustration {...defaultProps(false)} />
));

stories.add('illuminated', () => (
  <HealthMeterCircleIllustration {...defaultProps(true)} />
));
