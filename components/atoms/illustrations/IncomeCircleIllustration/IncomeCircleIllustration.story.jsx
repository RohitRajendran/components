import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import IncomeCircleIllustration from './IncomeCircleIllustration.tsx';
import IncomeCircleIllustrationReadMe from './IncomeCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/IncomeCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: IncomeCircleIllustrationReadMe,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
});

stories.add('default', () => <IncomeCircleIllustration {...defaultProps()} />);
