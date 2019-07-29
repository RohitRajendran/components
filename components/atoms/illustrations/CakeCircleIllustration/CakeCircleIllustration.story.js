import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import CakeCircleIllustration from './CakeCircleIllustration';
import CakeCircleIllustrationReadMe from './CakeCircleIllustration.md';

const stories = storiesOf('Atoms/Illustrations/CakeCircleIllustration', module);

stories.addDecorator(withReadme(CakeCircleIllustrationReadMe));

const defaultProps = (illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
});

stories.add('default', () => (
  <CakeCircleIllustration {...defaultProps(false)} />
));

stories.add('illuminated', () => (
  <CakeCircleIllustration {...defaultProps(true)} />
));
