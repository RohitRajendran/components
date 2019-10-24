import {color, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import StackableExpandCollapse from './StackableExpandCollapse';
import StackableExpandCollapseReadMe from './StackableExpandCollapse.mdx';

const stories = storiesOf('Atoms/StackableExpandCollapse', module);

stories.addParameters({
  docs: {
    page: StackableExpandCollapseReadMe,
  },
});

const defaultProps = (
  defaultLabel = 'Click to Open Me',
  defaultIconColor = StackableExpandCollapse.defaultProps.fill,
  defaultChildren = 'This was hidden before you opened me.'
) => ({
  label: text('label', defaultLabel),
  iconColor: color('iconColor', defaultIconColor),
  children: text('children', defaultChildren),
});

stories.add('single', () => (
  <div style={{width: 250}}>
    <StackableExpandCollapse {...defaultProps()} />
  </div>
));

stories.add('single wrap', () => (
  <div style={{width: 250}}>
    <StackableExpandCollapse
      {...defaultProps()}
      label="This label is very long and should wrap its text"
    />
  </div>
));

stories.add('multiple', () => (
  <div style={{width: 250}}>
    <StackableExpandCollapse {...defaultProps()} />
    <StackableExpandCollapse {...defaultProps()} />
    <StackableExpandCollapse {...defaultProps()} />
  </div>
));
