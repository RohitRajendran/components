# BubbleNav

The BubbleNav component renders a responsive navigation selector in a solid color bubble style.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import BubbleNav from '@unitedincome/components/dist/BubbleNav';
```

```javascript
import {BubbleNav} from '@unitedincome/components';
```

## Example 🚀

```javascript
<BubbleNav
  options={[
    {value: 'montezuma1'},
    {value: 'montezuma2'},
    {value: 'montezuma3', color: 'Red'},
  ]}
  value={this.state.bestCat}
  onChange={(value) => this.setState({val: value})}
/>
```
