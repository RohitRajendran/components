# Message Card Component

This component renders a message card for the Hogwarts/McGonagall flow used for intros or to explain new questions.

## Example 🚀

```javascript
<MessageCard
  title="This is the title"
  description="This is the description"
  shortTitle="title"
  featureImage={
    <img
      alt="example"
      src="https://app.unitedincome.com/assets/images/pencil.svg"
      style={{height: 100, width: 100}}
    />
  }
  onSubmit={() => console.log('Submit')}
  cardUrl="/"
/>
```

### To Use With Hogwarts 1.0

This will work similar to the existing Hogwarts Screen components, just set container to MessageCard

```javascript
<Hogwarts.Screen
  name="birthday"
  transitions="gender"
  container={MessageCard}
  title="This is the title"
  description="This is the description"
  shortTitle="title"
  cardUrl={'/'}
/>
```

## Props 🔧

The following component props are valid.

| Prop             | Type       | Default    | Description                                                                                                      | Required |
| ---------------- | ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------- | -------- |
| **afterButton**  | JSX        |            | To display something after the Submit button                                                                     | No       |
| **beforeButton** | JSX        |            | To display something before the Submit button                                                                    | No       |
| **buttonText**   | String     | `Continue` | Changes the text in the Submit button                                                                            | No       |
| **cardUrl**      | String     |            | The url for the current step, used for the edit link in the summary                                              | Yes      |
| **className**    | String     |            | Applies additional class names to the button                                                                     | No       |
| **description**  | JSX/String |            | Card description                                                                                                 | No       |
| **disabled**     | Boolean    | `false`    | Force disables the button                                                                                        | No       |
| **featureImage** | JSX        |            | Use to display a feature image or other content at the top of the card                                           | No       |
| **hasError**     | Boolean    | `false`    | Displays the error state of the card                                                                             | No       |
| **isCollapsed**  | Boolean    | `false`    | Shows the collapsed state of the card which switches the content to the summary                                  | No       |
| **isLatestCard** | Boolean    | `false`    | Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary | No       |
| **loading**      | Boolean    | `false`    | Show loading indicator in button                                                                                 | No       |
| **onSubmit**     | Function   |            | The handler to fire when the Submit button is clicked                                                            | Yes      |
| **shortTitle**   | JSX/String |            | Shorter title to be used with the card summary                                                                   | No       |
| **title**        | JSX/String |            | Title of the card                                                                                                | Yes      |
