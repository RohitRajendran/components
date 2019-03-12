# RadioButtons Component

The RadioButton component renders a group of HTML radio buttons with a number of customization options.

## Example 🚀

```javascript
<RadioButtons
  name="bestCat"
  table={false}
  options={[
    {
      label: 'Montezuma is the worlds best cat, this is guaranteed.',
      value: 'montezuma1',
      disabled: true,
    },
    {
      label: 'Montezuma is a really good ginger boi',
      value: 'montezuma2',
      followup: (
        <div>He really is. The current selected value is {state.selected}</div>
      ),
      secondaryLabel: '$100',
      disabled: false,
    },
    {
      label: 'Some people say he is the best cat ever',
      value: 'montezuma3',
      followup: <div>I am so glad you agree!</div>,
      secondaryLabel: '$100',
      disabled: false,
    },
  ]}
  onChange={(value) => store.set({selected: value})}
  value={state.selected}
/>
```

## Props 🔧

The following component props are valid.

| Prop          | Type     | Default | Description                                                                                         | Required |
| ------------- | -------- | ------- | --------------------------------------------------------------------------------------------------- | -------- |
| **name**      | String   |         | A string representing the name of the radio button group. For example `yesNo` or something similar. | Yes      |
| **disabled**  | Boolean  | `false` | Determines if the entire group of radio buttons should be disabled or not.                          | No       |
| **table**     | Boolean  | `false` | Renders the radio button group in a table.                                                          | No       |
| **required**  | Boolean  | `false` | Determines if an input from the group is required or not for form validation.                       | No       |
| **value**     | String   |         | The current selected option in the radio button group.                                              | Yes      |
| **onChange**  | Function |         | Change handler which passes back the `value` of the option which is currently selected.             | Yes      |
| **className** | String   |         | Applies a series of class names to the radio button container.                                      | Yes      |
| **options**   | Array    |         | An array of objects containing options that should be rendered. These options are explained below.  | Yes      |

### props.options

`props.options` should be an array containing objects with the following structure.

| Prop               | Type   | Default | Description                                                          | Required |
| ------------------ | ------ | ------- | -------------------------------------------------------------------- | -------- |
| **label**          | String |         | The text that should appear next to the radio button.                | Yes      |
| **value**          | String |         | The value of the radio button, for example `yes` or `no`.            | Yes      |
| **secondaryLabel** | String |         | Displays a secondary label to the far right of the radio button.     | No       |
| **followup**       | JSX    |         | Renders a followup input or message if the radio button is selected. | No       |
