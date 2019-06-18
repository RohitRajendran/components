# QuestionCard

This component renders a question card for the Hogwarts/McGonagall flow.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import QuestionCard from '@unitedincome/components/dist/QuestionCard';
```

```javascript
import {QuestionCard} from '@unitedincome/components';
```

## Example 🚀

```javascript
export const renderCard = (props, state) => {
  return <QuestionCard {...props}>Some card content</QuestionCard>;
};
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

## Best Practices

### Text Styles

You can find examples of text style classes to use with cards in the [Typography section](/?path=/story/utilities-styles--typography)
