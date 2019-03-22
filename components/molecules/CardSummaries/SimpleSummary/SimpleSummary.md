# SimpleSummary Component

This component renders a simple summary to be used with a card component when it is collapsed. Use this summary for simpler questions like radio button or checkbox questions.

## Example 🚀

```javascript
<QuestionCard
  summary={
    <SimpleSummary
      shortTitle="This is a simpler question"
      answers={['This is the first answer', 'This is the second answer']}
      editCard={() => true}
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
      to="/"
    />
  }
/>
```

## Props 🔧

The following component props are valid.

| Prop           | Type          | Default | Description                                                                                                       | Required |
| -------------- | ------------- | ------- | ----------------------------------------------------------------------------------------------------------------- | -------- |
| **answers**    | Array<String> |         | The card answer(s)                                                                                                | Yes      |
| **editCard**   | Function      |         | Handler called to edit the card, used instead of `to` for McGonagall                                              | No       |
| **shortTitle** | String        |         | A shorter version of the card title                                                                               | Yes      |
| **to**         | String        |         | The URL that the user should be directed to when edit is clicked, used instead of `editCard` for Hogwarts Express | No       |
