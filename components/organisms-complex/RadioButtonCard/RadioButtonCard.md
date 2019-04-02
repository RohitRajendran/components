# Radio Button Card Component

This component makes it easier to render a basic radio button card for the Hogwarts/McGonagall flow.

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
    value: this.state.yesNo,
    name: 'yesNo',
    options:[
      {
        label: 'Yes',
        value: 'yes',
      },
      {
        label: 'No',
        value: 'no',
      },
      {
        label: "I don't know",
        value: 'idk',
        disabled: true,
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
    value: this.state.yesNo,
    name: 'yesNo',
    options:[
      {
        label: 'Yes',
        value: 'yes',
      },
      {
        label: 'No',
        value: 'no',
      },
      {
        label: "I don't know",
        value: 'idk',
        disabled: true,
      },
    ]
  }
/>
```
