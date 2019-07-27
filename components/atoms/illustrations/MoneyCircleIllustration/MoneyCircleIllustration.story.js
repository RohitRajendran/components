import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import MoneyCircleIllustration from './MoneyCircleIllustration';
import MoneyCircleIllustrationReadMe from './MoneyCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/MoneyCircleIllustration',
  module
);

stories.addDecorator(withReadme(MoneyCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
  illuminate: boolean('illuminate', illuminate),
});

stories.add('default', () => (
  <MoneyCircleIllustration {...defaultProps(false, false, false)} />
));

stories.add('illuminated', () => (
  <MoneyCircleIllustration {...defaultProps(false, false, true)} />
));
