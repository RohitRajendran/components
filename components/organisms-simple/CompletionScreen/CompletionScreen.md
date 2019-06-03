# Completion Screen Component

This component renders the completion screen for the McGonagall flow. It should be the last screen in the flow.

## Example 🚀

```javascript
export const renderCard = (props, state) => {
  return (
    <CompletionScreen
      {...props}
      actions={
        <Button type="submit" variant="secondary" light>
          Finish
        </Button>
      }
    />
  );
};
```

### To Use With Hogwarts 1.0

This will work similar to the existing Hogwarts Screen components, just set container to CompletionScreen

```javascript
<Hogwarts.Screen
  name="birthday"
  container={CompletionScreen}
  title="Congrats! You completed something."
  description="That's pretty cool."
  actions={
    <Button type="submit" variant="secondary" light>
      Finish
    </Button>
  }
/>
```
