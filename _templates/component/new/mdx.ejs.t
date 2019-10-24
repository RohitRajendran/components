---
to: components/<%= compPath %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.mdx
---
<%
  compName = h.changeCase.pascal(name)
-%>
import {Preview, Props} from '@storybook/addon-docs/blocks';
import <%= compName %> from './<%= compName %>';

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

<Preview>
  <<%= compName %> />
</Preview>

```javascript
<<%= compName %> />
```

## Props 🔧

<Props of={<%= compName %>} />

