# Radio Button Card Component

This component makes it easier to render a basic radio button card for the Hogwarts/McGonagall flow.

The collapsed state of this card uses the Simple Summary component.

## Example 🚀

```javascript
<RadioButtonCard
  name="radioQuestion"
  title="This is the title"
  description="This is the description"
  shortTitle="title"
  editCard={() => true}
  onSubmit={() => console.log('Submit')}
  onChange={(name, value) => this.setState({[name]: value})}
  value={this.state.radio}
  radioButtonName="yesNo"
  options={[
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
  ]}
/>
```

### To Use With Hogwarts 1.0

This will work similar to the existing Hogwarts Screen components, just set container to RadioButtonCard

```javascript
<Hogwarts.Screen
  name="radioQuestion"
  transitions="gender"
  container={RadioButtonCard}
  title="This is the title"
  description="This is the description"
  shortTitle="title"
  onSubmit={() => console.log('Submit')}
  onChange={(name, value) => this.setState({[name]: value})}
  value={this.state.radio}
  radioButtonName="yesNo"
  options={[
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
  ]}
/>
```

## Props 🔧

The following component props are valid.

| Prop                 | Type          | Default                     | Description                                                                                                                                                 | Required |
| -------------------- | ------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **radioButtonName**  | string        |                             | A string representing the name of the radio button group. For example `yesNo` or something similar.                                                         | Yes      |
| **table**            | Boolean       | `false`                     | Renders the radio button group in a table.                                                                                                                  | No       |
| **value**            | String        |                             | The current selected option in the radio button group.                                                                                                      | Yes      |
| **options**          | Array         |                             | An array of objects containing options that should be rendered. You can take a look at the RadioButton component for examples of what this should look like | Yes      |
| **answers**          | Array<String> | Label of the selected value | The card answer(s) to show in the collapsed summary.                                                                                                        | No       |
| **onChange**         | Function      |                             | Change handler which takes in the `name` of the input and the `value` of the option which is currently selected.                                            | Yes      |
| **afterButton**      | JSX           |                             | To display something after the Submit button                                                                                                                | No       |
| **beforeButton**     | JSX           |                             | To display something before the Submit button                                                                                                               | No       |
| **buttonText**       | String        | `Continue`                  | Changes the text in the Submit button                                                                                                                       | No       |
| **changeActiveCard** | Function      |                             | The handler to fire to change the active card. Should take in a boolean to indicate that it is being used to cancel and navigate back to the latest card    | Yes      |
| **className**        | String        |                             | Applies additional class names to the button                                                                                                                | No       |
| **clearFuture**      | Boolean       | `false`                     | Whether making changes should clear out any changes made in steps after this                                                                                | No       |
| **description**      | JSX/String    |                             | Card description                                                                                                                                            | No       |
| **disabled**         | Boolean       | `false`                     | Force disables the button                                                                                                                                   | No       |
| **editCard**         | Function   |            | Handler called to edit the card, only necessary for McGonagall                                                                                           | No       |
| **hasError**         | Boolean       | `false`                     | Displays the error state of the card                                                                                                                        | No       |
| **isCollapsed**      | Boolean       | `false`                     | Shows the collapsed state of the card which switches the content to the summary                                                                             | No       |
| **isLatestCard**     | Boolean       | `false`                     | Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary                                            | No       |
| **loading**          | Boolean       | `false`                     | Show loading indicator in button                                                                                                                            | No       |
| **moreDetail**       | JSX           |                             | Support passing in JSX for the more detail area under the description. Typically, this should be link that opens up a Hogwart cabinet                       | No       |
| **onChange**         | Function      |                             | The handler to fire when a change happens                                                                                                                   | No       |
| **onSubmit**         | Function      |                             | The handler to fire when the Submit button is clicked                                                                                                       | Yes      |
| **shortTitle**       | JSX/String    |                             | Shorter title to be used with the card summary                                                                                                              | No       |
| **title**            | JSX/String    |                             | Title of the card                                                                                                                                           | Yes      |
