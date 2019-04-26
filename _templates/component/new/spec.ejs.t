---
to: components/<%= compPath %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.spec.js
---
<%
  compName = h.changeCase.pascal(name)
-%>
import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import <%= compName %> from './<%= compName %>';

test('<%= compName %> - renders', (t) => {
  const component = shallow(<<%= compName %> />);

  t.equals(component.find('div').length, 1, 'Should load the <%= compName %> component.');

  t.end();
});
