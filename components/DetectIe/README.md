# Detect Internet Explorer HOC

Higher order component that detects if the user is currently using Internet Explorer or not.

## Example 🚀

```javascript
detectIe(<Component />);
```

## Props 🔧

The `detectIe` HOC passes down the following props to anything that gets wrapped in it.

| Prop     | Type    | Default | Description                                                  |
| -------- | ------- | ------- | ------------------------------------------------------------ |
| **isIe** | Boolean | `false` | Toggles to true if the user agent matches Internet Explorer. |
