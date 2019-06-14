# SimpleSummary

This component renders a simple summary to be used with a card component when it is collapsed. Use this summary for simpler questions like radio button or checkbox questions.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import SimpleSummary from '@unitedincome/components/dist/SimpleSummary';
```

```javascript
import {SimpleSummary} from '@unitedincome/components';
```

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
