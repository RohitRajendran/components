import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import {object, text} from '@storybook/addon-knobs';
import {StateDecorator, Store} from '@sambego/storybook-state';
import {withReadme} from 'storybook-readme';
import BubbleNav from './BubbleNav';
import BubbleNavReadme from './BubbleNav.md';

const stories = storiesOf('Molecules/BubbleNav', module);

const store = new Store({value: 'there'});

stories
  .addDecorator(withReadme(BubbleNavReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({
  options = [
    {value: 'Hi'},
    {value: 'there', color: 'Blue'},
    {value: 'son', color: 'Red'},
  ],
  fixedWidth = '',
}) => ({
  options: object('Options', options),
  value: store.get('value'),
  onChange: (newValue) => store.set({value: newValue}),
  fixedWidth: text('Fixed Width', fixedWidth),
});

stories.add('default', () => <BubbleNav {...defaultProps({})} />);

stories.add('fixed width', () => (
  <BubbleNav {...defaultProps({fixedWidth: '14rem'})} />
));
