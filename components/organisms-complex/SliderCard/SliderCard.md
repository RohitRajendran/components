# SliderCard Component

This component makes it easier to render a basic slider card for the Hogwarts/McGonagall flow.

The collapsed state of this card uses the Simple Summary component.

## Example 🚀

```javascript
<SliderCard
  name="selectQuestion"
  title="This is the title"
  description="This is the description"
  shortTitle="Title"
  editCard={() => true}
  onSubmit={() => console.log('Submit')}
  onChange={(name, value) => this.setState({[name]: value})}
  config={{
    name: 'slider',
    value: this.state.slider,
    leftAnnotate: 'Lower Risk',
    rightAnnotate: 'Higher Risk',
    name: 'slider',
    tooltip: (
      <h3>
        You can pass any arbitrary node into the tooltip to style it how you'd
        like
      </h3>
    ),
    tooltipStickyVariant: 'green',
  }}
/>
```

### To Use With Hogwarts 1.0

This will work similar to the existing Hogwarts Screen components, just set container to SliderCard

```javascript
<Hogwarts.Screen
  name="selectQuestion"
  transitions="gender"
  container={SliderCard}
  title="This is the title"
  description="This is the description"
  shortTitle="title"
  onSubmit={() => console.log('Submit')}
  onChange={(name, value) => this.setState({[name]: value})}
  config={{
    name: 'slider',
    value: this.state.slider,
    leftAnnotate: 'Lower Risk',
    rightAnnotate: 'Higher Risk',
    name: 'slider',
    tooltip: (
      <h3>
        You can pass any arbitrary node into the tooltip to style it how you'd
        like
      </h3>
    ),
    tooltipStickyVariant: 'green',
  }}
/>
```
