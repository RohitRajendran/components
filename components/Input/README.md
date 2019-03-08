# Input Component
The Input component renders a [HTML input element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) with a number of customization and validation options.

## Example 🚀

```javascript
<Input
  name="institutionName"
  append="%"
  label="Institution Name"
  type="text"
  placeholder="Bank Account"
  description="Not the right account? Visit the Manage Linked Accounts page."
  />
```

## Props 🔧

The following component props are valid.

| Prop          | Type     | Default     | Description | Required
| ------------- | -------- | ----------- | --------------------------------------------- | ----------- | 
| **append**    | String   |           | A string or symbol to append to the end of the input. For example `%`. | No |
| **prepend**    | String   |           | A string or symbol to pre-pend to the start of the input. For example `$`. | No |
| **label**    | String   |           | The label representing the input field. | Yes |
| **label**    | String   |           | The label representing the input field. | Yes |
| **name**    | String   |          | The [name of the input field](https://www.w3schools.com/tags/att_input_name.asp). | Yes |
| **description**    | String   |           | The description of the input field. Displayed separately to the label. | No |
| **type**    | String   |           | [The type of input field](https://www.w3schools.com/tags/att_input_type.asp) to render. | Yes |
| **placeholder**    | String   |           | The placeholder text of the input field. This is displayed if there's no value. | No |
| **value**    | String   |            | The default value of the input field. | No |
| **required**    | Boolean   |    `false`        | Boolean representing if the input value is required in a form. | No |
| **pattern**    | String   |         | The regex pattern that determines what input characters are allowed. | No |
| **maxLength**    | Integer   |          | The max length of the input field value. | No |
| **mask**    | Object  |         | An optional object containing an input mask for validation. | No |
| **onChange**    | Function  |            | Handler which is run whenever there's a change to the input. | No |
| **min**    | Integer  |          | [The minimum number](https://www.w3schools.com/tags/att_input_min.asp) value. | No |
| **max**    | Integer  |            | [The maximum number](https://www.w3schools.com/tags/att_input_max.asp) value. | No |
| **step**    | Integer  |             | The [step value](https://www.w3schools.com/tags/att_input_step.asp). | No |
| **validationErrorMsg**    | String  |            | The error message to display when the input fails validation. | No |
| **validateOnBlur**    | Boolean  |    `false`        | Runs the validation logic on every blur event if toggled as true. | No |
| **error**    | Boolean  |    `false`        | Forces the input error state. | No |
| **disabled**    | Boolean  |    `false`        | Determines if the input field should prevent the user interacting with it. | No |
| **inputClasses**    | String  |      | Adds class names to the input field. | No |
| **setRef**    | Function  |      | Sets the ref to the input. | No |
| **hideValidity**   | Function |  |  Hides the validation message under the defined conditions. | No |
| **isValid**   | Function |  |  Validates the input based on the provided logic. | No |