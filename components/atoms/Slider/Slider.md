# Slider Component

The Slider component creates an interactive range slider between 1 and 10.

## Example 🚀

```javascript
<Slider
  value={this.state.slider}
  leftAnnotate="Lower Risk"
  rightAnnotate="Higher Risk"
  name="slider"
  tooltip={
    <h3>
      You can pass any arbitrary node into the tooltip to style it how you'd
      like
    </h3>
  }
  tooltipStickyVariant="green"
  onChange={(name, value) => this.setState({[name]: value})}
/>
```

## Props 🔧

The following component props are valid.

| Prop                      | Type       | Default | Description                                                                                | Required |
| ------------------------- | ---------- | ------- | ------------------------------------------------------------------------------------------ | -------- |
| **name**                  | String     |         | The name of the component.                                                                 | Yes      |
| **onChange**              | Function   |         | Passes back the current value and the name of the slider on change.                        | No       |
| **value**                 | Integer    |         | The current value of the slider.                                                           | No       |
| **toolip**                | String/JSX |         | Data to display inside of the tooltip.                                                     | No       |
| **leftAnnotate**          | String/JSX |         | Text to display to the left of the slider.                                                 | No       |
| **rightAnnotate**         | String/JSX |         | Text to display to the right of the slider.                                                | No       |
| **tooltipStickyPosition** | Integer    |         | Shows a ghost dot on the slider, sets the position between 1 and 10.                       | No       |
| **tooltipStickyVariant**  | String     |         | Determines which variant to set the slider to, can either be set to null, green or orange. | No       |
| **required**              | Boolean    |         | Determines if the input is required or not.                                                | No       |
| **className**             | String     |         | Optional classes to apply to the slider container.                                         | No       |
