# Input

The Input component renders a [HTML input element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) with a number of customization and validation options.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import Input from '@unitedincome/components/dist/Input';
```

```javascript
import {Input} from '@unitedincome/components';
```

## Example 🚀

```javascript
<Input
  name="institutionName"
  append="%"
  label="Institution Name"
  type="text"
  placeholder="Bank Account"
  description="Not the right account? Visit the Manage Linked Accounts page."
  onChange={(name, value) => this.setState({[name]: value})}
  value={this.state.institutionName}
/>
```

## Props 🔧

### props.disableOptionalFlag
If an input is _not_ marked as `required` it will show an `(Optional)` flag in the label. You can disable this behavior by setting the `disableOptionalFlag` prop to `true`.