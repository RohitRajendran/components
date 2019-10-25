import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CreditCardCircleIllustration from './CreditCardCircleIllustration';
import CreditCardCircleIllustrationReadMe from './CreditCardCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/CreditCardCircleIllustration',
  module
);

stories.addParameters({
  docs: {
    page: CreditCardCircleIllustrationReadMe,
  },
});

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <CreditCardCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <CreditCardCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <CreditCardCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <CreditCardCircleIllustration {...defaultProps(false, false, true)} />
));
