# RadioButtons

The RadioButton component renders a group of HTML radio buttons with a number of customization options.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import RadioButtons from '@unitedincome/components/dist/RadioButtons';
```

```javascript
import {RadioButtons} from '@unitedincome/components';
```

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
  onChange={(name, value) => this.setState({[name]: value})}
  value={this.state.bestCat}
/>
```

## Props 🔧

### props.options

`props.options` should be an array containing objects with the following structure.

| Prop               | Type           | Default | Description                                                          | Required |
| ------------------ | -------------- | ------- | -------------------------------------------------------------------- | -------- |
| **label**          | String         |         | The text that should appear next to the radio button.                | Yes      |
| **value**          | String/Boolean |         | The value of the radio button, for example `yes` or `no`.            | Yes      |
| **secondaryLabel** | String         |         | Displays a secondary label to the far right of the radio button.     | No       |
| **followup**       | JSX            |         | Renders a followup input or message if the radio button is selected. | No       |
