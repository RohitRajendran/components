# BubbleDropdown

The BubbleDropdown component renders a simple static dropdown menu in a solid color bubble style.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import BubbleDropdown from '@unitedincome/components/dist/BubbleDropdown';
```

```javascript
import {BubbleDropdown} from '@unitedincome/components';
```

## Example 🚀

```javascript
<BubbleDropdown
  options={[
    {value: 'montezuma1', color: 'Blue'},
    {value: 'montezuma2'},
    {value: 'montezuma3', color: 'Green'},
  ]}
  value={this.state.bestCat}
  onChange={(value) => this.setState({val: value})}
/>
```
