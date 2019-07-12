import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import {boolean, object} from '@storybook/addon-knobs';
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
  isFixedWidth = false,
}) => ({
  options: object('Options', options),
  value: store.get('value'),
  onChange: (newValue) => store.set({value: newValue}),
  isFixedWidth: boolean('Fixed Width?', isFixedWidth),
});

stories.add('default', () => <BubbleNav {...defaultProps({})} />);

stories.add('fixed width', () => (
  <BubbleNav {...defaultProps({isFixedWidth: true})} />
));
