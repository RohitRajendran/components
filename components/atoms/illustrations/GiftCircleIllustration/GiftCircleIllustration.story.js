import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import GiftCircleIllustration from './GiftCircleIllustration';
import GiftCircleIllustrationReadMe from './GiftCircleIllustration.md';

const stories = storiesOf('Atoms/Illustrations/GiftCircleIllustration', module);

stories.addDecorator(withReadme(GiftCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <GiftCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <GiftCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <GiftCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <GiftCircleIllustration {...defaultProps(false, false, true)} />
));
