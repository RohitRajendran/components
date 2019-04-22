import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import LampCircleIllustration from './LampCircleIllustration';
import LampCircleIllustrationReadMe from './LampCircleIllustration.md';

const stories = storiesOf('Atoms/Illustrations/LampCircleIllustration', module);

stories.addDecorator(withReadme(LampCircleIllustrationReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '265'),
  width: text('width', '160'),
});

stories.add('default', () => <LampCircleIllustration {...defaultProps()} />);
