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

const defaultProps = (illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
});

stories.add('default', () => (
  <MoneyCircleIllustration {...defaultProps(false)} />
));

stories.add('illuminated', () => (
  <MoneyCircleIllustration {...defaultProps(true)} />
));
