# DropDown

The DropDown component displays a series options in a dropdown list. The list can either be manually configured, or powered via type ahead.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import DropDown from '@unitedincome/components/dist/DropDown';
```

```javascript
import {DropDown} from '@unitedincome/components';
```

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
  value={this.state.suffix}
  onChange={(name, value) => this.setState({[name]: value})}
  disabled={false}
  required={true}
/>
```

## Props 🔧

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

### props.disableOptionalFlag

If an input is _not_ marked as `required` it will show an `(Optional)` flag in the label. You can disable this behavior by setting the `disableOptionalFlag` prop to `true`.
