import React from 'react';
import {storiesOf} from '@storybook/react';
import ErrorFlagIcon from './ErrorFlagIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ErrorFlagIconReadme from './ErrorFlagIcon.md';

const stories = storiesOf('Atoms/Icons/ErrorFlagIcon', module);

stories.addDecorator(withReadme(ErrorFlagIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#B30052'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <ErrorFlagIcon {...defaultProps()} />);
