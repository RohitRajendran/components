import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import HamburgerIcon from './HamburgerIcon.tsx';
import HamburgerIconReadme from './HamburgerIcon.mdx';

const stories = storiesOf('Atoms/Icons/HamburgerIcon', module);

stories.addParameters({
  docs: {
    page: HamburgerIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <HamburgerIcon {...defaultProps()} />);
