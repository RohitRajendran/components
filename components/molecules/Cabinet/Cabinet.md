# Cabinet

The Cabinet component generates a cabinet pullout which appears on the right side of the screen. By default the Cabinet is controlled using your own state to handle the opening and closing.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import Cabinet from '@unitedincome/components/dist/Cabinet'
```

```javascript
import {Cabinet} from '@unitedincome/components'
```

## Example 🚀

```javascript
<Cabinet
  name="cabinet"
  show={this.state.show}
  label="Open Cabinet"
  toggle={() => this.setState({show: !this.state.show})}
>
  <h2>Montezuma is the best cat</h2>
  <p>You can place a paragraph about how good of a cat he is here</p>
  <h2>This is why</h2>
  <p>Because he just is</p>
</Cabinet>
```

## Using `handleWithState`

If you're including the Cabinet once on the page you can use the `handleWithState` prop to disable the `show` and `toggle` props, allowing the Cabinet component to manage its own state. This will make it so the Cabinet can _only_ be activated through the label, which may not be appropriate for all use cases.

```javascript
<Cabinet name="cabinet" label="Open Cabinet" handleWithState={true}>
  <h2>Montezuma is the best cat</h2>
  <p>You can place a paragraph about how good of a cat he is here</p>
  <h2>This is why</h2>
  <p>Because he just is</p>
</Cabinet>
```

## Label Styling

You can modify the label styling using the following props.

```javascript
<Cabinet
  label="Open the cabinet"
  labelOnDark
  labelClassName="my-class-name"
  visibleInPrint={false}
  header="Learn more about Montezuma"
  handleWithState
>
  <p>I'm not sure why Monte is the best? He just is</p>
</Cabinet>
```
