# ItemizationWidget

Displays a widget which itemizes and sums totals. Turns into collapsible menu on smaller screen sizes.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import ItemizationWidget from '@unitedincome/components/dist/ItemizationWidget'
```

```javascript
import {ItemizationWidget} from '@unitedincome/components'
```

## Example 🚀

```javascript
<ItemizationWidget
  value={[
    {
      label: 'Montezuma',
      value: 9999,
    },
    {
      label: 'Other Cats',
      threshold: 500,
      suffix: 'mo',
      thresholdWarning: 'You have budgeted far too much for cats.',
      items: [
        {
          value: 1000,
          label: 'Pica',
        },
        {
          value: 50,
          label: 'Pixie',
        },
      ],
    },
  ]}
  title="Cat Budget"
  totalSuffix="mo"
/>
```
