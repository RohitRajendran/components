# Ranking Card Component

This component makes it easier to render a basic Ranking card for the Hogwarts/McGonagall flow.

The collapsed state of this card uses the Simple Summary component.

## Example 🚀

```javascript
<RadioButtonCard
  name="radioQuestion"
  title="This is the title"
  description="This is the description"
  shortTitle="title"
  editCard={() => true}
  onSubmit={() => console.log('Submit')}
  onChange={(name, value) => this.setState({[name]: value})}
  config={
    name: 'bestCat',
    options:[
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: false,
      },
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
        focus: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: false,
      },
    ]
  }
/>
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
  onSubmit={() => console.log('Submit')}
  onChange={(name, value) => this.setState({[name]: value})}
  config={
    name: 'bestCat',
    options:[
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: false,
      },
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
        focus: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: false,
      },
    ]
  }
/>
```
