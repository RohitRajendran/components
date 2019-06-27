# BoxSelect

Displays a toggleable list of Box components.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import BoxSelect from '@unitedincome/components/dist/BoxSelect';
```

```javascript
import {BoxSelect} from '@unitedincome/components';
```

## Example 🚀

```javascript
<BoxSelect
  name="boxGroup"
  onChange={(name, value) => this.setState({[name]: value})}
  value={this.state.boxGroup}
  options={[
    {
      value: 'essentials',
      label: 'Essentials',
      description:
        'These are the basics: paying the bills and putting food on the table. They include your non-discretionary spending.',
      icon: LampCircleIllustration,
    },
    {
      value: 'lifestyle',
      label: 'Lifestyle',
      description:
        'This is the fun stuff: entertainment, eating out, lawn care. It includes all  recurring, discretionary expenses.',
      icon: RamenCircleIllustration,
    },
    {
      value: 'healthcare',
      label: 'Healthcare',
      description:
        'This spending keeps you healthy. It includes your out-of-pocket health expenses and private insurance costs.',
      icon: HealthCircleIllustration,
    },
  ]}
/>
```
