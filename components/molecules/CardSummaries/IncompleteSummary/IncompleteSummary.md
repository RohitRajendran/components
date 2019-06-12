# IncompleteSummary

This component renders an incomplete summary that tells the user this step still needs to be completed. The Question Card component automatically shows this summary when the card is collapsed and is the latest step.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import IncompleteSummary from '@unitedincome/components/dist/IncompleteSummary'
```

```javascript
import {IncompleteSummary} from '@unitedincome/components'
```

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
