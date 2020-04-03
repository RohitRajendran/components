import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import AdminIcon from './AdminIcon.tsx';
import AdminIconReadme from './AdminIcon.mdx';

const stories = storiesOf('Atoms/Icons/AdminIcon', module);

stories.addParameters({
  docs: {
    page: AdminIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <AdminIcon {...defaultProps()} />);
