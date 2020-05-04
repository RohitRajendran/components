import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import AddIcon from './AddIcon.tsx';
import AddIconReadme from './AddIcon.mdx';

const stories = storiesOf('Atoms/Icons/AddIcon', module);

stories.addParameters({
  docs: {
    page: AddIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <AddIcon {...defaultProps()} />);
