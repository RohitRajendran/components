# SimpleSummary Component

This component renders a simple summary to be used with a card component when it is collapsed. Use this summary for simpler questions like radio button or checkbox questions.

## Example 🚀

```javascript
<QuestionCard
  summary={
    <SimpleSummary
      shortTitle="This is a simpler question"
      answers={['This is the first answer', 'This is the second answer']}
      cardUrl="/"
    />
  }
/>
```

### To Use With Hogwarts 1.0

```javascript
<Hogwarts.Screen
  container={QuestionCard}
  summary={
    <SimpleSummary
      shortTitle="This is a simpler question"
      answers={['This is the first answer', 'This is the second answer']}
      cardUrl="/"
    />
  }
/>
```
