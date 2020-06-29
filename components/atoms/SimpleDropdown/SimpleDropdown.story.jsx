import {StateDecorator, Store} from '@sambego/storybook-state';
import {object} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import SimpleDropdown from './SimpleDropdown';
import SimpleDropdownReadme from './SimpleDropdown.mdx';

const stories = storiesOf('Atoms/SimpleDropdown', module);

stories.addParameters({
  docs: {
    page: SimpleDropdownReadme,
  },
});

const store = new Store({value: 'Small'});

stories.addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = (options = ['Big', 'Red', 'Small']) => ({
  options: object('Options', options),
  value: store.get('value'),
  onChange: (newValue) => store.set({value: newValue}),
});

stories.add('default', () => <SimpleDropdown {...defaultProps()} />);
