import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import {object, text} from '@storybook/addon-knobs';
import {StateDecorator, Store} from '@sambego/storybook-state';
import {withReadme} from 'storybook-readme';
import BubbleSelector from './BubbleSelector';
import BubbleSelectorReadme from './BubbleSelector.md';

const stories = storiesOf('Atoms/BubbleSelector', module);

const store = new Store({value: 'there'});

stories
  .addDecorator(withReadme(BubbleSelectorReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({
  options = [
    {value: 'Hi', color: 'Green'},
    {value: 'there', color: 'Blue'},
    {value: 'son'},
  ],
  fixedWidth = '',
}) => ({
  options: object('Options', options),
  value: store.get('value'),
  onChange: (newValue) => store.set({value: newValue}),
  fixedWidth: text('Fixed Width', fixedWidth),
});

stories.add('dynamic width', () => <BubbleSelector {...defaultProps({})} />);

stories.add('fixed width', () => (
  <BubbleSelector {...defaultProps({fixedWidth: '17rem'})} />
));
