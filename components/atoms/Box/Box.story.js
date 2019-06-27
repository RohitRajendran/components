import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import Box from './Box';
import BoxReadMe from './Box.md';
import {boolean, text} from '@storybook/addon-knobs';
import CarCircleIllustration from '~components/atoms/illustrations/CarCircleIllustration/CarCircleIllustration';

const stories = storiesOf('Atoms/Box', module);

stories.addDecorator(withReadme(BoxReadMe));

const defaultProps = (selected) => ({
  selected: boolean('selected', selected),
  title: text('title', 'Essentials'),
  description: text(
    'description',
    'These are the basics: paying the bills and putting food on the table. They include your non-discretionary spending.'
  ),
});

stories.add('default', () => (
  <Box {...defaultProps()} icon={CarCircleIllustration} />
));

stories.add('selected', () => (
  <Box {...defaultProps(true)} icon={CarCircleIllustration} />
));
