import {StateDecorator, Store} from '@sambego/storybook-state';
import {object, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import BubbleSelector from './BubbleSelector';
import BubbleSelectorReadme from './BubbleSelector.mdx';

const stories = storiesOf('Atoms/BubbleSelector', module);

stories.addParameters({
  docs: {
    page: BubbleSelectorReadme,
  },
});

const store = new Store({value: 'there'});

stories.addDecorator(StateDecorator(store));

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

stories.add('dynamic width', () => <BubbleSelector {...defaultProps({})} />, {
  'in-dsm': {
    id: '5df7b4e7b7f96738f046a1a8',
  },
});

stories.add('fixed width', () => (
  <BubbleSelector {...defaultProps({fixedWidth: '17rem'})} />
));
