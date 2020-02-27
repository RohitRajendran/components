import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import FacebookIcon from './FacebookIcon.tsx';
import FacebookIconReadme from './FacebookIcon.mdx';

const stories = storiesOf('Atoms/Icons/FacebookIcon', module);

stories.addParameters({
  docs: {
    page: FacebookIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <FacebookIcon {...defaultProps()} />);
