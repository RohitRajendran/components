# OptionBox Component

The OptionBox component displays an option box which can be used in either select or radio button inputs.

## Example 🚀

```javascript
<OptionBox variant="check" checked={true} disabled={false} />
```

## Props 🔧

The following component props are valid.

| Prop         | Type    | Default | Description                                                               | Required |
| ------------ | ------- | ------- | ------------------------------------------------------------------------- | -------- |
| **variant**  | String  |         | The type of option box to display. This can be either `check` or `radio`. | Yes      |
| **checked**  | Boolean | `false` | Determines if the option box should be checked or not.                    | No       |
| **disabled** | Boolean | `false` | Determines if the option box should be disabled or not.                   | No       |
