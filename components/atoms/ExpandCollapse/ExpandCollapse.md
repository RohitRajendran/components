# ExpandCollapse

The ExpandCollapse component displays content within a drawer which can be used in conjunction with a cabinet or card.


## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import ExpandCollapse from '@unitedincome/components/dist/ExpandCollapse'
```

```javascript
import {ExpandCollapse} from '@unitedincome/components'
```


## Example 🚀

```javascript
<ExpandCollapse
  label="Current Food"
  description="Lots of Food"
  defaultOpen={false}
  disabled={false}
  isInvalid={false}
  aside={<div>aside content</div>}
>
  Expanded content can be placed here.
</ExpandCollapse>
```

## Nested Validation

The ExpandCollapse component will validate any child inputs to display a `Required Field(s)` flag if there's a field that is required, or a red icon if one of the child inputs does not validate. If the child input validates, the `Required Field(s)` flag will no longer appear.
