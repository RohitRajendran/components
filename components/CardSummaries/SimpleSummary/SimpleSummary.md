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

## Props 🔧

The following component props are valid.

| Prop           | Type          | Default | Description                                                     | Required |
| -------------- | ------------- | ------- | --------------------------------------------------------------- | -------- |
| **answers**    | Array<String> |         | The card answer(s)                                              | Yes      |
| **cardUrl**    | String        |         | The url for this current step which is used for the edit button | Yes      |
| **shortTitle** | String        |         | A shorter version of the card title                             | Yes      |
