import React from 'react';
import {storiesOf} from '@storybook/react';
import ClearIcon from './ClearIcon';
import {withReadme} from 'storybook-readme';
import ClearIconReadme from './ClearIcon.md';
import {text, number} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/Icons/ClearIcon', module);

stories.addDecorator(withReadme(ClearIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: number('height', 20),
  width: number('width', 20),
});

stories.add('default', () => <ClearIcon {...defaultProps()} />);
