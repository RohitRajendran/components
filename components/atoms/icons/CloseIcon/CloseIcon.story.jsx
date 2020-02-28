import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import CloseIcon from './CloseIcon.tsx';
import CloseIconReadme from './CloseIcon.mdx';

const stories = storiesOf('Atoms/Icons/CloseIcon', module);

stories.addParameters({
  docs: {
    page: CloseIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <CloseIcon {...defaultProps()} />);
