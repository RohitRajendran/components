import React from 'react';
import {storiesOf} from '@storybook/react';
import ArrowEllipsisIcon from './ArrowEllipsisIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ArrowEllipsisIconReadme from './ArrowEllipsisIcon.md';

const stories = storiesOf('Atoms/Icons/ArrowEllipsisIcon', module);

stories.addDecorator(withReadme(ArrowEllipsisIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '20'),
  width: text('width', '20'),
});

stories.add('default', () => <ArrowEllipsisIcon {...defaultProps} />);
