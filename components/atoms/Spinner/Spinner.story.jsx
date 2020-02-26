import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {PureSpinner as Spinner} from './Spinner';
import SpinnerReadme from './Spinner.mdx';

const stories = storiesOf('Atoms/Spinner', module);

stories.addParameters({
  docs: {
    page: SpinnerReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '20'),
  width: text('width', '20'),
});

stories.add('default', () => <Spinner {...defaultProps()} />, {
  // The Spinner story is disabled from Percy as it moves too much.
  percy: {
    skip: true,
  },
});
