# Question Card Component

This component renders a question card for the Hogwarts/McGonagall flow.

## Example 🚀

```javascript
<QuestionCard
  title="This is the title"
  description="This is the description"
  shortTitle="title"
  buttonText="Submit"
  onSubmit={() => console.log('Submit')}
  editCard={() => true}
>
  Some card content
</QuestionCard>
```

### To Use With Hogwarts 1.0

This will work similar to the existing Hogwarts Screen components, just set container to QuestionCard

```javascript
<Hogwarts.Screen
  name="birthday"
  transitions="gender"
  container={QuestionCard}
  title="This is the title"
  description="This is the description"
  shortTitle="title"
/>
```
