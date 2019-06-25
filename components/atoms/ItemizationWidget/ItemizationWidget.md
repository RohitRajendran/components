# ItemizationWidget

Displays a widget which itemizes and sums totals. Turns into collapsible menu on smaller screen sizes.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import ItemizationWidget from '@unitedincome/components/dist/ItemizationWidget';
```

```javascript
import {ItemizationWidget} from '@unitedincome/components';
```

## Example 🚀

```javascript
<ItemizationWidget
  value={[
    {
      label: 'Montezuma',
      value: state.total,
      editConfig: {
        onConfirm: (value) => props.onChange('total', value),
        config: {
          disableOptionalFlag: true,
          label: 'Total Spending',
          mask: 'Currency',
          name: 'total',
          value: state.total,
        },
      },
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

## editConfig

You can allow a user to edit a total by passing in a TooltipInput config into the editConfig property. This will show a label (defaults to "Edit Total") under the value that when clicked, will open a tooltip with an input that allows the user to update the value.

```
[
    {
      label: 'Montezuma',
      value: state.total,
      editConfig: {
        onConfirm: (value) => props.onChange('total', value),
        config: {
          disableOptionalFlag: true,
          label: 'Total Spending',
          mask: 'Currency',
          name: 'total',
          value: state.total,
        }
      }
    },
  ]
```
