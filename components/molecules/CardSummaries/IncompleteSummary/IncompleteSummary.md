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
