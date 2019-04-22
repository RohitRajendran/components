import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import GiftCircleIllustration from './GiftCircleIllustration';
import GiftCircleIllustrationReadMe from './GiftCircleIllustration.md';

const stories = storiesOf('Atoms/Illustrations/GiftCircleIllustration', module);

stories.addDecorator(withReadme(GiftCircleIllustrationReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '265'),
  width: text('width', '160'),
});

stories.add('default', () => <GiftCircleIllustration {...defaultProps()} />);
