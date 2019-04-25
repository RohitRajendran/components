import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import LampCircleIllustration from './LampCircleIllustration';
import LampCircleIllustrationReadMe from './LampCircleIllustration.md';

const stories = storiesOf('Atoms/Illustrations/LampCircleIllustration', module);

stories.addDecorator(withReadme(LampCircleIllustrationReadMe));

const defaultProps = (color, draft) => ({
  height: text('height', '265'),
  width: text('width', '160'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <LampCircleIllustration {...defaultProps(false, false)} />
));
stories.add('color', () => (
  <LampCircleIllustration {...defaultProps(true, false)} />
));
stories.add('draft', () => (
  <LampCircleIllustration {...defaultProps(false, true)} />
));
