import React from 'react';
import {storiesOf} from '@storybook/react';
import LinkedInIcon from './LinkedInIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import LinkedInIconReadme from './LinkedInIcon.md';

const stories = storiesOf('Atoms/Icons/LinkedInIcon', module);

stories.addDecorator(withReadme(LinkedInIconReadme));

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <LinkedInIcon {...defaultProps()} />);
