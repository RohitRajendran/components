import React from 'react';
import {storiesOf} from '@storybook/react';
import CloseIcon from './CloseIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import CloseIconReadme from './CloseIcon.md';

const stories = storiesOf('Atoms/Icons/CloseIcon', module);

stories.addDecorator(withReadme(CloseIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '20'),
  width: text('width', '20'),
});

stories.add('default', () => <CloseIcon {...defaultProps()} />);
