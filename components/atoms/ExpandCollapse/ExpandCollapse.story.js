import React from 'react';
import {storiesOf} from '@storybook/react';
import ExpandCollapse from './ExpandCollapse';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ExpandCollapseReadme from './ExpandCollapse.md';

const stories = storiesOf('Atoms/ExpandCollapse', module);

stories.addDecorator(withReadme(ExpandCollapseReadme));

const defaultProps = () => ({
  label: 'Open ?Me;'
});

stories.add('default', () => 
  <ExpandCollapse {...defaultProps()}>
    <div>HELLOITME</div>
  </ExpandCollapse>
);
