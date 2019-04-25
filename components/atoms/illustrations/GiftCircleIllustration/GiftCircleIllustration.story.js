import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import GiftCircleIllustration from './GiftCircleIllustration';
import GiftCircleIllustrationReadMe from './GiftCircleIllustration.md';

const stories = storiesOf('Atoms/Illustrations/GiftCircleIllustration', module);

stories.addDecorator(withReadme(GiftCircleIllustrationReadMe));

const defaultProps = (color, draft) => ({
  height: text('height', '265'),
  width: text('width', '160'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <GiftCircleIllustration {...defaultProps(false, false)} />
));
stories.add('color', () => (
  <GiftCircleIllustration {...defaultProps(true, false)} />
));
stories.add('draft', () => (
  <GiftCircleIllustration {...defaultProps(false, true)} />
));
