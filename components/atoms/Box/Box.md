# Box

Displays content within a simple box with an icon, title, and description.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import Box from '@unitedincome/components/dist/Box';
```

```javascript
import {Box} from '@unitedincome/components';
```

## Example 🚀

```javascript
<Box
  label="Montezuma the Cat"
  description="Montezuma is honestly the best cat I've ever seen."
  icon={CatIllustration}
/>
```

## Props 🔧

### Using an Icon

You can include an icon or illustration at the top of the box by passing it in using the `icon` prop. When the `selected` prop is set to `true` the box will also pass the value to the `illuminate` prop on the icon component, which will trigger the activated state for most of the illustrations found in this library.
