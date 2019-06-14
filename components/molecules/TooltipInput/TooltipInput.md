# TooltipInput

Wraps an Input field in a Tooltip component which activates on key press. Unlike the regular Tooltip, the TooltipInput component can only activate on button click.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import TooltipInput from '@unitedincome/components/dist/TooltipInput';
```

```javascript
import {TooltipInput} from '@unitedincome/components';
```

## Example 🚀

```javascript
<TooltipInput
  label="keyboard"
  labelVariant="link"
  placement="bottom"
  confirmLabel="Confirm"
  cancelLabel="Cancel"
  onConfirm={(value) => this.setState({input: value})}
  onRemove={() => true}
  config={{
    name: 'inputValue',
    label: 'Name',
    placeholder: 'Enter a name...',
    value: this.state.inputValue,
    onChange: (name, value) => this.setState({[name]: value}),
  }}
/>
```

## onRemove

If you include an `onRemove` handler as a prop it will automatically render a trash can icon on the tooltip. This will trigger the handler when it's clicked.
