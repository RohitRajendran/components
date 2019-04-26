---
inject: true
to: components/index.js
skip_if: <%= h.changeCase.pascal(name) %>,
after: "export {"
---
<%
  compName = h.changeCase.pascal(name)
-%>
  <%= compName %>,