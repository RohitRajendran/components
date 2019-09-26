# FileInput

The FileInput component renders an [HTML input element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) of `type="file"` for a single file input.

The FileInput component is an [uncontrolled component](https://reactjs.org/docs/uncontrolled-components.html). Unlike the [Input](?path=/story/atoms-input--default) component it has no `value` prop. The selected file can be accessed

- using the `onChange` handler, which triggers when the user selects a file, or
- accessing the input element directly by passing in the `setRef` prop.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import FileInput from '@unitedincome/components/dist/FileInput';
```

```javascript
import {FileInput} from '@unitedincome/components';
```

## Example 🚀

### Using the `onChange` handler

```javascript
const OnChange = () => (
  <FileInput
    name="fileInput"
    label="File Name"
    placeholder="Drag and Drop, or Click"
    description="Upload that awesome file!"
    onChange={(name, file) => alert(`onChange('${name}', ${file.name})`)}
  />
);
```

### Using the `setRef` callback

```javascript
class ByRef extends React.Component {
    render() {
        return (
            <div>
                {this.inputRef &&
                 this.inputRef.current &&
                 this.inputRef.current.files.length === 1
                   ? this.inputRef.current.files[0].name
                   : 'No file chosen'}
                <FileInput
                    name="refExample"
                    label="Example File"
                    setRef={(fileInputRef) => (this.inputRef = fileInputRef)}
                />
            </div>
        );
    }
);
```

## Props 🔧

### props.setRef

To obtain the HTML input element, you may provide a function as the prop `setRef`. The FileInput will invoke `setRef` with the [HTML input ref](https://reactjs.org/docs/refs-and-the-dom.html) as its argument when the file input is initially mounted.

### props.disableOptionalFlag

If an input is _not_ marked as `required` it will show an `(Optional)` flag in the label. You can disable this behavior by setting the `disableOptionalFlag` prop to `true`.
