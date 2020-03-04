import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ErrorFlagIcon from './ErrorFlagIcon.tsx';
import ErrorFlagIconReadme from './ErrorFlagIcon.mdx';

const stories = storiesOf('Atoms/Icons/ErrorFlagIcon', module);

stories.addParameters({
  docs: {
    page: ErrorFlagIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#B30052'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <ErrorFlagIcon {...defaultProps()} />);
