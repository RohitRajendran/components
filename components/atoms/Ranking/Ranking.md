# Ranking Component

The Ranking component renders an ordered list with clickable buttons and drag and drop support.

## Example 🚀

```javascript
<Ranking
  name="Best Cats"
  items={[
  {
    label: 'Montezuma',
    secondaryLabel: '$8,345',
    id: 'montezuma',
  },
  {
    label: 'Pica',
    secondaryLabel: '$1,000',
    id: 'pica',
  },
  {
    label: 'Pixie',
    secondaryLabel: '$13,000',
    id: 'pixie',
  },
  ]}
  onChange={(name, value) => this.setState([name]: value)}
/>
```
