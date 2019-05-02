import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import StackableExpandCollapse from './StackableExpandCollapse';
import StackableExpandCollapseReadMe from './StackableExpandCollapse.md';

const stories = storiesOf('Molecules/StackableExpandCollapse', module);

stories.addDecorator(withReadme(StackableExpandCollapseReadMe));

const defaultProps = (
  defaultLabel = 'Click to Open Me',
  defaultChildren = 'This was hidden before you opened me.'
) => ({
  label: text('label', defaultLabel),
  iconColor: text('iconColor'),
  children: text('children', defaultChildren),
});

stories.add('single', () => <StackableExpandCollapse {...defaultProps()} />);

stories.add('multiple', () => (
  <React.Fragment>
    <StackableExpandCollapse {...defaultProps()} />
    <StackableExpandCollapse {...defaultProps()} />
    <StackableExpandCollapse {...defaultProps()} />
  </React.Fragment>
));
