import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {withReadme} from 'storybook-readme';
import CheckIcon from './CheckIcon';
import CheckIconReadMe from './CheckIcon.md';

const stories = storiesOf('Atoms/Icons/CheckIcon', module);

stories.addDecorator(withReadme(CheckIconReadMe));

const defaultProps = () => ({
  fill: text('fill', '#008422'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <CheckIcon {...defaultProps()} />);
