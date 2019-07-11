# BubbleSelector

The BubbleSelector component renders a horizontal item selector in a bubble style.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import BubbleSelector from '@unitedincome/components/dist/BubbleSelector';
```

```javascript
import {BubbleSelector} from '@unitedincome/components';
```

## Example 🚀

```javascript
<BubbleSelector
  options={[
    {value: 'montezuma1'},
    {value: 'montezuma2', color: 'Blue'},
    {value: 'montezuma3', color: 'Red'},
  ]}
  value={this.state.bestCat}
  onChange={(value) => this.setState({val: value})}
/>
```
