import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CakeCircleIllustration from './CakeCircleIllustration.tsx';
import CakeCircleIllustrationReadMe from './CakeCircleIllustration.mdx';

const stories = storiesOf('Atoms/Illustrations/CakeCircleIllustration', module);

stories.addParameters({
  docs: {
    page: CakeCircleIllustrationReadMe,
  },
});

const defaultProps = (illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
});

stories.add(
  'default',
  () => <CakeCircleIllustration {...defaultProps(false)} />,
  {
    'in-dsm': {
      id: '5e0f92f88c220d707a3b3a07',
    },
  },
);

stories.add('illuminated', () => (
  <CakeCircleIllustration {...defaultProps(true)} />
));
