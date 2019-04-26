---
inject: true
to: components/index.js
skip_if: import <%= h.changeCase.pascal(name) %>
after: "// <%= storyPath %>"
---
<%
  compName = h.changeCase.pascal(name)
-%>
import <%= compName %> from '~components/<%= compPath %>/<%= compName %>/<%= compName %>';