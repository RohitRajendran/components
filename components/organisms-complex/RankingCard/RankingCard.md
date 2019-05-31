# Ranking Card Component

This component makes it easier to render a basic Ranking card for the Hogwarts/McGonagall flow.

The collapsed state of this card uses the Simple Summary component.

## Example 🚀

```javascript
export const renderCard = (props, state) => {
  return (
    <RankingCard
      {...prop}
      config={{
        name: 'yesNo',
        items: [
          {
            label: 'Montezuma',
            secondaryLabel: '$8,345',
            id: 'montezuma',
            movable: false,
          },
          {
            label: 'Pica',
            secondaryLabel: '$1,000',
            id: 'pica',
            movable: true,
            focus: true,
          },
          {
            label: 'Pixie',
            secondaryLabel: '$13,000',
            id: 'pixie',
            movable: false,
          },
        ],
      }}
    />
  );
};
```

### To Use With Hogwarts 1.0

This will work similar to the existing Hogwarts Screen components, just set container to RadioButtonCard

```javascript
<Hogwarts.Screen
  name="radioQuestion"
  transitions="gender"
  container={RadioButtonCard}
  title="This is the title"
  description="This is the description"
  shortTitle="title"
  config={
    name: 'bestCat',
    options:[
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        id: 'montezuma',
        movable: false,
      },
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        id: 'pica',
        movable: true,
        focus: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        id: 'pixie',
        movable: false,
      },
    ]
  }
/>
```
