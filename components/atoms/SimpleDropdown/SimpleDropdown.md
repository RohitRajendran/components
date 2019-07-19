# SimpleDropdown

The SimpleDropdown component renders a basic static dropdown menu.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import SimpleDropdown from '@unitedincome/components/dist/SimpleDropdown';
```

```javascript
import {SimpleDropdown} from '@unitedincome/components';
```

## Example 🚀

```javascript
<SimpleDropdown
  options={['montezuma1', 'montezuma2', 'montezuma3']}
  value={this.state.bestCat}
  onChange={(value) => this.setState({val: value})}
/>
```
