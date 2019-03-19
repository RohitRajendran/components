import React from 'react';
import {storiesOf} from '@storybook/react';
import CloseIcon from './CloseIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import CloseIconReadme from './CloseIcon.md';

const stories = storiesOf('Atoms/CloseIcon', module);

stories.addDecorator(withReadme(CloseIconReadme));

stories.add('default', () => (
  <CloseIcon
    fill={text('fill', '#000')}
    height={text('height', '20')}
    width={text('width', '20')}
    className={text('className')}
  />
));
