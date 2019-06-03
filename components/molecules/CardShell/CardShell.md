# Card Shell Component

This component is a flexible shell for the McGonagall card. See if any of the other card components better suit your need before using this one.

## Example 🚀

```javascript
export const renderCard = (props, state) => {
  return <CardShell {...props}>Some card content</CardShell>;
};
```

### To Use With Hogwarts 1.0

This will work similar to the existing Hogwarts Screen components, just set container to CardShell

```javascript
<Hogwarts.Screen name="birthday" transitions="gender" container={CardShell} />
```

## Best Practices

If you're making a component that will extend past the edges of the card similar to the ExpandCollapse, you will need to add a css animation to make that element appear after the card is finished animating because of the `overflow: hidden` the card uses while animating.

Here's an example of how it was applied in the ExpandCollapse component

```
.uic--mcgonagall-card {
  .uic--ec-controls-wrapper {
    transform: scale(0);
  }

  &.uic--animation-ended {
    .uic--ec-controls-wrapper {
      transform: scale(1);
      transition: 1s cubic-bezier(0.18, 0.89, 0.35, 2.05) transform;
    }
  }
}
```
