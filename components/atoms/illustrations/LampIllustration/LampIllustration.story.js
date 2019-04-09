import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import LampIlluminator from './LampIllustration';
import LampIlluminatorReadMe from './LampIllustration.md';

const stories = storiesOf('Atoms/Illuminators/LampIllustration', module);

stories.addDecorator(withReadme(LampIlluminatorReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '265'),
  width: text('width', '160'),
  on: boolean('on', false),
});

stories.add('default', () => <LampIlluminator {...defaultProps()} />);
