# Input Card Component

This component makes it easier to render a basic input card for the Hogwarts/McGonagall flow.

The collapsed state of this card uses the Simple Summary component.

## Example 🚀

```javascript
<InputCard
  name="inputQuestion"
  title="This is the title"
  description="This is the description"
  shortTitle="Title"
  editCard={() => true}
  onSubmit={() => console.log('Submit')}
  onChange={(name, value) => this.setState({[name]: value})}
  inputOptions={{
    name: 'input',
    value: this.state.input,
    label: 'value',
    type: 'text',
  }}
/>
```

### To Use With Hogwarts 1.0

This will work similar to the existing Hogwarts Screen components, just set container to InputCard

```javascript
<Hogwarts.Screen
  name="inputQuestion"
  transitions="gender"
  container={InputCard}
  title="This is the title"
  description="This is the description"
  shortTitle="title"
  onSubmit={() => console.log('Submit')}
  onChange={(name, value) => this.setState({[name]: value})}
  inputOptions={{
    name: 'input',
    value: this.state.input,
    label: 'value',
    type: 'text',
  }}
/>
```
