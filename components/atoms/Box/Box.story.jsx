import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CarCircleIllustration from '~components/atoms/illustrations/CarCircleIllustration/CarCircleIllustration';
import Box from './Box.tsx';
import BoxReadMe from './Box.mdx';

const stories = storiesOf('Atoms/Box', module);

stories.addParameters({
  docs: {
    page: BoxReadMe,
  },
});

const defaultProps = (selected, disabled, showCheck) => ({
  selected: boolean('selected', selected),
  label: text('label', 'Essentials'),
  description: text(
    'description',
    'These are the basics: paying the bills and putting food on the table. They include your non-discretionary spending.',
  ),
  disabled: boolean('disabled', disabled),
  showCheck: boolean('showCheck', showCheck),
});

stories.add('default', () => (
  <Box {...defaultProps()} icon={CarCircleIllustration} />
));

stories.add('selected', () => (
  <Box {...defaultProps(true)} icon={CarCircleIllustration} />
));

stories.add('disabled with check', () => (
  <Box {...defaultProps(false, true, true)} icon={CarCircleIllustration} />
));
