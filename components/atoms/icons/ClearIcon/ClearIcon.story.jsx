import {number, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ClearIcon from './ClearIcon.tsx';
import ClearIconReadme from './ClearIcon.mdx';

const stories = storiesOf('Atoms/Icons/ClearIcon', module);

stories.addParameters({
  docs: {
    page: ClearIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: number('height', 20),
  width: number('width', 20),
});

stories.add('default', () => <ClearIcon {...defaultProps()} />);
