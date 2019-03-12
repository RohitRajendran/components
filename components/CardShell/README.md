# Card Shell Component

This component is a flexible shell for the McGonagall card. See if any of the other card components better suit your need before using this one.

## Example 🚀

```javascript
<CardShell
  buttonText="Submit"
  hasError={false}
  isCollapsed={false}
  onSubmit={() => console.log('Submit')}
>
  Some card content
</CardShell>
```

### To Use With Hogwarts 1.0

This will work similar to the existing Hogwarts Screen components, just set container to CardShell

```javascript
<Hogwarts.Screen name="birthday" transitions="gender" container={CardShell} />
```

## Props 🔧

The following component props are valid.

| Prop             | Type     | Default    | Description                                                                     | Required |
| ---------------- | -------- | ---------- | ------------------------------------------------------------------------------- | -------- |
| **afterButton**  | JSX      |            | To display something after the Submit button                                    | No       |
| **beforeButton** | JSX      |            | To display something before the Submit button                                   | No       |
| **buttonText**   | String   | `Continue` | Changes the text in the Submit button                                           | No       |
| **className**    | String   |            | Applies additional class names to the button                                    | No       |
| **disabled**     | Boolean  | `false`    | Force disables the button                                                       | No       |
| **hasError**     | Boolean  | `false`    | Displays the error state of the card                                            | No       |
| **isCollapsed**  | Boolean  | `false`    | Shows the collapsed state of the card which switches the content to the summary | No       |
| **loading**      | Boolean  | `false`    | Show loading indicator in button                                                | No       |
| **onChange**     | Function |            | The handler to fire when a change happens                                       | No       |
| **onSubmit**     | Function |            | The handler to fire when the Submit button is clicked                           | Yes      |
| **summary**      | JSX      |            | The summary view that should display when the card is collapsed                 | No       |
| **children**     | Object   |            | HTML element that should appear within the card when not collapsed              | Yes      |
