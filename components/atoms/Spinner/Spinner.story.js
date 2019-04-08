import React from 'react';
import {storiesOf} from '@storybook/react';
import {PureSpinner as Spinner} from './Spinner';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import SpinnerReadme from './Spinner.md';

const stories = storiesOf('Atoms/Spinner', module);

stories.addDecorator(withReadme(SpinnerReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '20'),
  width: text('width', '20'),
});

stories.add('default', () => <Spinner {...defaultProps()} />);
