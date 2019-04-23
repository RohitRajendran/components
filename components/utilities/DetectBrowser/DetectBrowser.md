# Detect Browser HOC

Higher order component that detects the current browser the user is using.

## Example 🚀

```javascript
detectBrowser(<Component />);
```

## Props 🔧

The `detectBrowser` HOC passes down the following props to anything that gets wrapped in it.

| Prop         | Type    | Default | Description                                                  |
| ------------ | ------- | ------- | ------------------------------------------------------------ |
| **isIe**     | Boolean | `false` | Toggles to true if the user agent matches Internet Explorer. |
| **isIos**    | Boolean | `false` | Toggles to true if the user agent matches iPad/iOS.          |
| **isTablet** | Boolean | `false` | Toggles to true if the user agent matches a tablet device.   |
| **isMobile** | Boolean | `false` | Toggles to true if the user agent matches a mobile device.   |
