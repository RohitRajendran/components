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
