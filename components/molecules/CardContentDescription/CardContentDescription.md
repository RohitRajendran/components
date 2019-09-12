# CardContentDescription

Displays a dynamic message on a card.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import CardContentDescription from '@unitedincome/components/dist/CardContentDescription';
```

```javascript
import {CardContentDescription} from '@unitedincome/components';
```

## Example 🚀

```javascript
<CardContentDescription
  validate={validateFunc}
  values={values}
  onChange={() => Promise.resolve('Value')}
/>
```

## Props 🔧

### `props.validate`

The validate function should return `true` or `false` based on whatever condition you want.

```javascript
const validationFunction = () => {
  if (store.get('yesNo').length > 2) {
    return true;
  } else {
    return false;
  }
};
```

### `props.values`

The values prop should be an array of values that get passed into the component. If the component detects a change and the `validate` function returns true it will trigger the provided `onChange` function.

```javascript
const values = [loanTotal, assetTotal];
```

### `props.onChange`

The `onChange` prop accepts a function which returns a promise.

```javascript
const handler = () => {
  return Promise.resolve(
    'This is the text that should display in the component when fetched.'
  );
};
```
