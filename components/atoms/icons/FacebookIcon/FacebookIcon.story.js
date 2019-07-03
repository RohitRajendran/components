import React from 'react';
import {storiesOf} from '@storybook/react';
import FacebookIcon from './FacebookIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import FacebookIconReadme from './FacebookIcon.md';

const stories = storiesOf('Atoms/Icons/FacebookIcon', module);

stories.addDecorator(withReadme(FacebookIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <FacebookIcon {...defaultProps()} />);
