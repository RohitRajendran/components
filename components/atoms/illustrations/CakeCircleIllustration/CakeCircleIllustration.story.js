import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import CakeCircleIllustration from './CakeCircleIllustration';
import CakeCircleIllustrationReadMe from './CakeCircleIllustration.md';

const stories = storiesOf('Atoms/Illustrations/CakeCircleIllustration', module);

stories.addDecorator(withReadme(CakeCircleIllustrationReadMe));

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
  illuminate: boolean('illuminate', illuminate),
});

stories.add('default', () => (
  <CakeCircleIllustration {...defaultProps(false, false, false)} />
));

stories.add('illuminated', () => (
  <CakeCircleIllustration {...defaultProps(false, false, true)} />
));
