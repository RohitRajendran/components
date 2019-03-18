# DropDown Component

The DropDown component displays a series options in a dropdown list. The list can either be manually configured, or powered via type ahead.

## Example 🚀

```javascript
<DropDown
  name="suffix"
  label="Suffix"
  options={[
    {
      value: 'valid',
      label: 'Montezuma is the best cat',
    },
    {
      value: 'invalid',
      label: 'Montezuma is not the best cat',
    },
  ]}
  placeholder="optional"
  value={user.get('suffix')}
  value={state.apiExample}
  onChange={(name, value) => store.set({[name]: value})}
  disabled={false}
  required={true}
/>
```

## Props 🔧

The following component props are valid.

| Prop            | Type     | Default | Description                                                                                                                                                                                                           | Required |
| --------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **name**        | String   |         | The name of the input field.                                                                                                                                                                                          | Yes      |
| **label**       | String   |         | The label which appears above the form label.                                                                                                                                                                         | Yes      |
| **options**     | Array    |         | An array of options such as label and value, see the detailed example below.                                                                                                                                          | Yes      |
| **value**       | String   |         | The currently selected option in the dropdown.                                                                                                                                                                        | Yes      |
| **disabled**    | Boolean  | `false` | Determines if the dropdown input should be disabled or not.                                                                                                                                                           | No       |
| **className**   | String   |         | Additional class names to apply to the container.                                                                                                                                                                     | No       |
| **description** | String   |         | Displays an input field description beneath the dropdown.                                                                                                                                                             | No       |
| **validate**    | Function |         | Validates the input based on the provided logic. Must return an object with the `isValid` key set to true or false.                                                                                                   | No       |
| **getOptions**  | Function |         | Function that fetches a series of options. Useful when lazy loading content from an API.                                                                                                                              | No       |  | **onChange** | Function |  | Handler which is run whenever there's a change to the input. | No |
| **onBlur**      | Function |         | Handler which is run whenever the input fired a blur event.                                                                                                                                                           | No       |
| **searchable**  | Boolean  | `true`  | Toggles type ahead functionality on/off.                                                                                                                                                                              | No       |
| **clearable**   | Boolean  | `true`  | Toggles the ability to clear the search field on/off.                                                                                                                                                                 | No       |
| **loading**     | Boolean  | `false` | Toggles the loading state of the input on/off.                                                                                                                                                                        | No       |
| **required**    | Boolean  | `false` | Determines if this field is required or not.                                                                                                                                                                          |
| **isSubmitted** | Boolean  | `false` | Determines if this field has been submitted or not. This will typically be passed down using a context provider/consumer. This prop can be used to run additional validation on the field prior to a form submitting. |

### props.validate

`props.validate` requires an array of functions which should look something like the following.

```javascript
function validator(value) {
  if (value === 'invalid') {
    return {
      isValid: false,
      message: 'Message to display beneath the input',
    };
  } else {
    return {isValid: true};
  }
}

const props {
  validate: [validator],
}

<DropDown {...props} />
```

### props.getOptions

`props.getOptions` requires a function which will eventually resolve to an object with the key of `options` containing your array of options. You can filter down via the input in this function also.

```javascript
async function getOptions(input) {
  if (input) {
    const options = await Promise.resolve(
      [
        {
          label: 'Montezuma',
          value: 'montezuma',
        },
        {
          label: 'Pica',
          value: 'pica',
        },
        {
          label: 'Hector',
          value: 'hector',
        },
        {
          label: 'Peterson',
          value: 'peterson',
        },
      ].filter((data) => input === data.value)
    );
    return {options};
  } else {
    return Promise.resolve({});
  }
}
```
