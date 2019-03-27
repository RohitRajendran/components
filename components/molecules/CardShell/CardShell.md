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
