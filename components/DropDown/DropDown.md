# DropDown Component

The DropDown component displays a series options in a dropdown list. The list can either be manually configured, or powered via type ahead.

## Example 🚀

```javascript
<DropDown
  name="suffix"
  label="Suffix"
  options={SuffixOptions}
  placeholder="optional"
  value={user.get('suffix') || ''}
  onChange={onChangeSelect('suffix')}
  disabled={isReadOnly}
/>
```

## Props 🔧

The following component props are valid.

| Prop                   | Type     | Default | Description                                                                              | Required |
| ---------------------- | -------- | ------- | ---------------------------------------------------------------------------------------- | -------- |
| **label**              | String   |         | The label which appears above the form label.                                            | Yes      |
| **options**            | Array    |         | An array of options such as label and value, see the detailed example below.             | Yes      |
| **value**              | String   |         | The currently selected option in the dropdown.                                           | Yes      |
| **disabled**           | Boolean  | `false` | Determines if the dropdown input shoudl be disabled or not.                              | No       |
| **className**          | String   |         | Additional class names to apply to the container.                                        | No       |
| **description**        | String   |         | Additional class names to apply to the container.                                        | No       |
| **validationErrorMsg** | String   |         | The error message to display when the input fails validation.                            | No       |
| **validate**           | Function |         | Validates the input based on the provided logic.                                         | No       |
| **getOptions**         | Function |         | Function that fetches a series of options. Useful when lazy loading content from an API. | No       |  | **onChange** | Function |  | Handler which is run whenever there's a change to the input. | No |
| **onBlur**             | Function |         | Handler which is run whenever the input fired a blur event.                              | No       |
| **onBlur**             | Function |         | Handler which is run whenever the input fired a blur event.                              | No       |
| **searchable**         | Boolean  | `true`  | Toggles type ahead functionality on/off.                                                 | No       |
| **clearable**          | Boolean  | `true`  | Toggles the ability to clear the search field on/off.                                    | No       |
