import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import HealthMeterCircleIllustration from './HealthMeterCircleIllustration';
import HealthMeterCircleIllustrationReadMe from './HealthMeterCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/HealthMeterCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: HealthMeterCircleIllustrationReadMe,
  },
});

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
