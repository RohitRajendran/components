import React from 'react';
import {storiesOf} from '@storybook/react';
import StarIcon from './StarIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import StarIconReadme from './StarIcon.md';

const stories = storiesOf('Atoms/Icons/StarIcon', module);

stories.addDecorator(withReadme(StarIconReadme));

stories.add('default', () => (
  <StarIcon
    fill={text('fill', '#000')}
    height={text('height', '20')}
    width={text('width', '20')}
    className={text('className')}
  />
));
