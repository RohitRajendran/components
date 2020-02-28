import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import TwitterIcon from './TwitterIcon.tsx';
import TwitterIconReadme from './TwitterIcon.mdx';

const stories = storiesOf('Atoms/Icons/TwitterIcon', module);

stories.addParameters({
  docs: {
    page: TwitterIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <TwitterIcon {...defaultProps()} />);
