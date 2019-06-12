# SliderCard

This component makes it easier to render a basic slider card for the Hogwarts/McGonagall flow.

The collapsed state of this card uses the Simple Summary component.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import SliderCard from '@unitedincome/components/dist/SliderCard'
```

```javascript
import {SliderCard} from '@unitedincome/components'
```


## Example 🚀

```javascript
export const renderCard = (props, state) => {
  return (
    <SliderCard
      {...props}
      config={{
        name: 'slider',
        value: state.slider,
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
  )
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
