# Checkbox Card Component

This component makes it easier to render a basic checkbox card for the Hogwarts/McGonagall flow.

The collapsed state of this card uses the Simple Summary component.

## Example 🚀

```javascript
<CheckboxCard
  {...props}
  config={{
    name: 'selectBtn',
    value: state.selectBtn,
    options: [
      {
        label: 'Yes',
        value: 'yes',
      },
      {
        label: 'No',
        value: 'no',
      },
      {
        label: "I don't know",
        value: 'idk',
        disabled: true,
      },
    ],
  }}
/>
```

### To Use With Hogwarts 1.0

This will work similar to the existing Hogwarts Screen components, just set container to CheckboxCard

```javascript
<Hogwarts.Screen
  name="selectQuestion"
  transitions="gender"
  container={CheckboxCard}
  title="This is the title"
  description="This is the description"
  shortTitle="title"
  config={{
    name: 'selectBtn',
    value: this.state.selectBtn,
    options: [
      {
        label: 'Yes',
        value: 'yes',
      },
      {
        label: 'No',
        value: 'no',
      },
      {
        label: "I don't know",
        value: 'idk',
        disabled: true,
      },
    ],
  }}
/>
```
