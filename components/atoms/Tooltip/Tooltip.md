# Tooltip

Attaches a tooltip to a link or button on hover or press.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import Tooltip from '@unitedincome/components/dist/Tooltip';
```

```javascript
import {Tooltip} from '@unitedincome/components';
```

## Example 🚀

```javascript
<Tooltip label="keyboard" labelVariant="link" placement="bottom" hover={false}>
  Montezuma is the best cat in the world!
</Tooltip>
```

## Activating on Hover

By default the Tooltip will activate when the label is pressed. To change this behavior so it activates/deactivates on mouse over/out you can pass in a prop of `hover` as `true`.

```javascript
<Tooltip label="keyboard" labelVariant="link" placement="bottom" hover={true}>
  Montezuma is the best cat in the world!
</Tooltip>
```
