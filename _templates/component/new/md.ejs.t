---
to: components/<%= compPath %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.md
---
<%
  compName = h.changeCase.pascal(name)
-%>
# <%= compName %> Component

<%= description %>

## Example 🚀

```javascript
<<%= compName %> />
```
