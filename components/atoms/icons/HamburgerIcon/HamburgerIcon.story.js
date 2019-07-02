import React from 'react';
import {storiesOf} from '@storybook/react';
import HamburgerIcon from './HamburgerIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import HamburgerIconReadme from './HamburgerIcon.md';

const stories = storiesOf('Atoms/Icons/HamburgerIcon', module);

stories.addDecorator(withReadme(HamburgerIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <HamburgerIcon {...defaultProps()} />);
