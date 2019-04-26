---
to: components/<%= compPath %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.story.js
---
<%
  compName = h.changeCase.pascal(name)
-%>
import React from 'react';
<% if (isStateful) { -%>
import {StateDecorator, Store} from '@sambego/storybook-state';
import {storiesOf, forceReRender} from '@storybook/react';
<% } else {-%>
import {storiesOf} from '@storybook/react';
<% } -%>
import {withReadme} from 'storybook-readme';
import <%= compName %> from './<%= compName %>';
import <%= compName %>ReadMe from './<%= compName %>.md';

const stories = storiesOf('<%= storyPath %>/<%= compName %>', module);

<% if (isStateful) { -%>
const store = new Store({});

store.subscribe(() => {
  forceReRender();
});

<% }-%>
stories.addDecorator(withReadme(<%= compName %>ReadMe));

const defaultProps = () => ({
  // Add props that the component uses with the appropriate storybook knob
  // https://stackoverflow.com/c/unitedincome/questions/136
});

stories.add('default', () => <<%= compName %> {...defaultProps()} />);

// Add more stories: https://stackoverflow.com/c/unitedincome/questions/140
