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

### `props.isValid`

The `isValid` prop should be a boolean which determines if the data returned from the `onChange` handler is valid or not. Providing `false` here will cause the component to hide. Any subsequent `onChange` fires will still fire, and the component will come back into view while it's fetching or when this value is `true`.

### `props.values`

The values prop should be an array of values that get passed into the component. If the component detects a change and the `validate` function returns true it will trigger the provided `onChange` function.

```javascript
const values = [loanTotal, assetTotal];
```

### `props.onChange`

The `onChange` prop accepts a function which returns a promise.

```javascript
const handler = () => {
  return Promise.resolve();
};
```

### `props.isFetching`

If you're using the data that is returned from `onChange` to validate a McGonnagal card you'll need to assign a `fetchStatus` and `isFetching` prop to the component. This is so the cards validation function will know that the data isn't ready yet when it reads from its prop values.

You can view an example of this below.

```javascript
<CardContentDescription
  validate={validateFunc}
  values={values}
  onChange={() => Promise.resolve('Value')}
  isFetching={this.state.isFetching}
  fetchStatus={(fetching) => this.setState({isFetching: fetching})}
/>
```
