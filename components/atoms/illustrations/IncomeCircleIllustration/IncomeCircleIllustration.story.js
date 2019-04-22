import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import IncomeCircleIllustration from './IncomeCircleIllustration';
import IncomeCircleIllustrationReadMe from './IncomeCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/IncomeCircleIllustration',
  module
);

stories.addDecorator(withReadme(IncomeCircleIllustrationReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '265'),
  width: text('width', '160'),
});

stories.add('default', () => <IncomeCircleIllustration {...defaultProps()} />);
