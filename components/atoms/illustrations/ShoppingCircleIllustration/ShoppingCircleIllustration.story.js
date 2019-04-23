import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ShoppingCircleIllustration from './ShoppingCircleIllustration';
import ShoppingCircleIllustrationReadMe from './ShoppingCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/ShoppingCircleIllustration',
  module
);

stories.addDecorator(withReadme(ShoppingCircleIllustrationReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '265'),
  width: text('width', '160'),
});

stories.add('default', () => (
  <ShoppingCircleIllustration {...defaultProps()} />
));
