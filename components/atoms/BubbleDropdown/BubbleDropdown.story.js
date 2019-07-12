import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import {object} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import {StateDecorator, Store} from '@sambego/storybook-state';
import BubbleDropdown from './BubbleDropdown';
import BubbleDropdownReadme from './BubbleDropdown.md';

const stories = storiesOf('Atoms/BubbleDropdown', module);

const store = new Store({value: 'Small'});

stories
  .addDecorator(withReadme(BubbleDropdownReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = (
  options = [{value: 'Big', color: 'Red'}, {value: 'Small'}]
) => ({
  options: object('Options', options),
  value: store.get('value'),
  onChange: (newValue) => store.set({value: newValue}),
});

stories.add('default', () => <BubbleDropdown {...defaultProps()} />);
