# Message Card Component

This component renders a message card for the Hogwarts/McGonagall flow used for intros or to explain new questions.

## Example 🚀

```javascript
export const renderCard = (props, state) => {
  return (
    <MessageCard
      {...props}
      featureImage={
        <img
          alt="example"
          src="https://app.unitedincome.com/assets/images/pencil.svg"
          style={{height: 100, width: 100}}
        />
      }
    />
  );
};
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
/>
```
