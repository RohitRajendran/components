# IncompleteSummary Component

This component renders an incomplete summary that tells the user this step still needs to be completed. The Question Card component automatically shows this summary when the card is collapsed and is the latest step.

## Example 🚀

```javascript
<QuestionCard
  summary={
    <IncompleteSummary shortTitle="This is a simpler question" cardUrl="/" />
  }
/>
```

### To Use With Hogwarts 1.0

```javascript
<Hogwarts.Screen
  container={QuestionCard}
  summary={
    <IncompleteSummary shortTitle="This is a simpler question" cardUrl="/" />
  }
/>
```

## Props 🔧

The following component props are valid.

| Prop           | Type   | Default                                   | Description                                                     | Required |
| -------------- | ------ | ----------------------------------------- | --------------------------------------------------------------- | -------- |
| **cardUrl**    | String |                                           | The url for this current step which is used for the edit button | Yes      |
| **shortTitle** | String |                                           | A shorter version of the card title                             | Yes      |
| **text**       | String | 'You still have to answer this question.' | Text that tells the user they need to finish this step          | No       |
