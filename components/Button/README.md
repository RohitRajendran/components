# Button Component

The Button component displays a HTML button.

## Example 🚀

```javascript
<Button variant="primary" light={false} dark={true} disabled={false}>
  Submit
</Button>
```

## Props 🔧

The following component props are valid.

| Prop          | Type     | Default | Description                                                                                              | Required |
| ------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------- | -------- |
| **variant**   | String   |         | The style of button to be shown, for example `primary`, `secondary`, `tertiary` or `link`.               | Yes      |
| **light**     | Boolean  | `false` | Changes the color scheme to light.                                                                       | No       |
| **dark**      | Boolean  | `false` | Changes the color scheme to dark.                                                                        | No       |
| **className** | String   |         | Applies additional class names to the button.                                                            | No       |
| **type**      | String   |         | The type of button, for example `button`, `submit` or `reset`.                                           | Yes      |
| **disabled**  | Boolean  | `false` | Determines if the button is disabled or not.                                                             | No       |
| **onClick**   | Function |         | The handler to fire when the button is clicked.                                                          | No       |
| **to**        | String   |         | The URL that the user should be directed to when the button is clicked. Used primarily for link buttons. | No       |
| **children**  | Object   |         | HTML element that should appear within the button.                                                       | Yes      |
