# IncompleteSummary Component

This component renders an incomplete summary that tells the user this step still needs to be completed. The Question Card component automatically shows this summary when the card is collapsed and is the latest step.

## Example 🚀

```javascript
<QuestionCard
  summary={
    <IncompleteSummary
      shortTitle="This is a simpler question"
      editCard={() => true}
    />
  }
/>
```

### To Use With Hogwarts 1.0

```javascript
<Hogwarts.Screen
  container={QuestionCard}
  summary={<IncompleteSummary shortTitle="This is a simpler question" to="/" />}
/>
```

## Props 🔧

The following component props are valid.

| Prop           | Type     | Default                                   | Description                                                                                                         | Required |
| -------------- | -------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------- |
| **editCard**   | Function |                                           | Handler called to edit the card, used instead of `to` for McGonagall                                                | No       |
| **shortTitle** | String   |                                           | A shorter version of the card title                                                                                 | Yes      |
| **text**       | String   | 'You still have to answer this question.' | Text that tells the user they need to finish this step                                                              | No       |
| **to**         | String   |                                           | The URL that the user should be directed to when resume is clicked, used instead of `editCard` for Hogwarts Express | No       |
