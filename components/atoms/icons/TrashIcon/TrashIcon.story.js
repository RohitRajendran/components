import React from 'react';
import {storiesOf} from '@storybook/react';
import TrashIcon from './TrashIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import TrashIconReadme from './TrashIcon.md';

const stories = storiesOf('Atoms/Icons/TrashIcon', module);

stories.addDecorator(withReadme(TrashIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '20'),
  width: text('width', '20'),
});

stories.add('default', () => <TrashIcon {...defaultProps()} />);
