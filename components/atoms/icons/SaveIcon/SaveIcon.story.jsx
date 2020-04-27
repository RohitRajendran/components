import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import SaveIcon from './SaveIcon.tsx';
import SaveIconReadme from './SaveIcon.mdx';

const stories = storiesOf('Atoms/Icons/SaveIcon', module);

stories.addParameters({
  docs: {
    page: SaveIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <SaveIcon {...defaultProps()} />);
