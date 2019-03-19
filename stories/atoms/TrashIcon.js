import React from 'react';
import {storiesOf} from '@storybook/react';
import TrashIcon from '../../components/TrashIcon/TrashIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import TrashIconReadme from '../../components/TrashIcon/TrashIcon.md';

const stories = storiesOf('Atoms/TrashIcon', module);

stories.addDecorator(withReadme(TrashIconReadme));

stories.add('default', () => (
  <TrashIcon
    fill={text('fill', '#000')}
    height={text('height', '20')}
    width={text('width', '20')}
    className={text('className')}
  />
));
