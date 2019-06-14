---
to: components/<%= compPath %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.md
---
<%
  compName = h.changeCase.pascal(name)
-%>
# <%= compName %>

<%= description %>

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import <%= compName %> from '@unitedincome/components/dist/<%= compName %>'
```

```javascript
import {<%= compName %>} from '@unitedincome/components'
```

## Example 🚀

```javascript
<<%= compName %> />
```
