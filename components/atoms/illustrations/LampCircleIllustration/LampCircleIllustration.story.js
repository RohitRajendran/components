import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import LampCircleIllustration from './LampCircleIllustration';
import LampCircleIllustrationReadMe from './LampCircleIllustration.md';

const stories = storiesOf('Atoms/Illustrations/LampCircleIllustration', module);

stories.addDecorator(withReadme(LampCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
  illuminate: boolean('illuminate', illuminate),
});

stories.add('default', () => (
  <LampCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <LampCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <LampCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <LampCircleIllustration {...defaultProps(false, false, true)} />
));
