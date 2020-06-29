import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import DocumentCircleIllustration from './DocumentCircleIllustration.tsx';
import DocumentCircleIllustrationReadMe from './DocumentCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/DocumentCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: DocumentCircleIllustrationReadMe,
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
  <DocumentCircleIllustration {...defaultProps(false, false, false)} />
));
stories.add('color', () => (
  <DocumentCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <DocumentCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <DocumentCircleIllustration {...defaultProps(false, false, true)} />
));
