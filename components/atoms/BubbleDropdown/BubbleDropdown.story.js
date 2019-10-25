import {StateDecorator, Store} from '@sambego/storybook-state';
import {object} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import BubbleDropdown from './BubbleDropdown';
import BubbleDropdownReadme from './BubbleDropdown.mdx';

const stories = storiesOf('Atoms/BubbleDropdown', module);

stories.addParameters({
  docs: {
    page: BubbleDropdownReadme,
  },
});

const store = new Store({value: 'Small'});

stories.addDecorator(StateDecorator(store));

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
