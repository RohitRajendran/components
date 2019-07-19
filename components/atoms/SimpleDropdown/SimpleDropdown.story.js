import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import {object} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import {StateDecorator, Store} from '@sambego/storybook-state';
import SimpleDropdown from './SimpleDropdown';
import SimpleDropdownReadme from './SimpleDropdown.md';

const stories = storiesOf('Atoms/SimpleDropdown', module);

const store = new Store({value: 'Small'});

stories
  .addDecorator(withReadme(SimpleDropdownReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = (options = ['Big', 'Red', 'Small']) => ({
  options: object('Options', options),
  value: store.get('value'),
  onChange: (newValue) => store.set({value: newValue}),
});

stories.add('default', () => <SimpleDropdown {...defaultProps()} />);
