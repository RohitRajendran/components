# Modal Component

The Modal component generates a full screen prompt to the user.

## Example 🚀

```javascript
<Modal defaultOpen={false} preventClose={false} label="Open Modal">
  <h1>Montezuma is the best cat</h1>
  <p>You can place a paragraph about how good of a cat he is here</p>
  <div className="uic--modal-bottom">
    <p>Additional content to place at the bottom of the modal.</p>
  </div>
</Modal>
```

## Displaying the Modal

The modal can displayed using the `label` prop which will create a button to open/close the modal. You can also trigger the modal to open using your own state by using the `defaultOpen` prop with the following pattern. This will cause the modal to show when it the mounts, you can then use a handler within the modal to toggle your parent components state to unmount it.

```javascript
{
  this.state.showModal && (
    <Modal defaultOpen={true}>
      <h1>Montezuma is the best cat.</h1>

      <div className="uic--modal-bottom">
        <button onClick={() => this.setState({showModal: false})} />
      </div>
    </Modal>
  );
}
```

Additionally if you'd like to force a user prompt you can prevent the modal from being closed and control it using your own state. To do this you can pass in the `preventClose` prop as `true`.

## Helper Classes

The modal comes with a number of helper styles to make sure you're adhering to the styleguide. For modal headers you should use `h1` tags, and any additional paragraphs should use `p` tags. If you'd like to add a button to the bottom of the modal you can wrap it in the `uic--modal-bottom` class.

```javascript
<h1>The header!</h1>
<p>Some helper text!</p>
<div className="uic--modal-bottom">
  <p>Do you want to click me?</p>
  <button>
    Click me!
  </button>
</div>
```
