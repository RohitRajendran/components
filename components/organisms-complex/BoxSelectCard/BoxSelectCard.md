# BoxSelectCard

This component makes it easier to render a basic box select card for the Hogwarts/McGonagall flow.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import BoxSelectCard from '@unitedincome/components/dist/BoxSelectCard';
```

```javascript
import {BoxSelectCard} from '@unitedincome/components';
```

## Example 🚀

```javascript
export const renderCard = (props, state) => {
  return (
    <BoxSelectCard
      {...props}
      config={
        value: state.yesNo,
        name: 'yesNo',
        options:[
          {
            label: 'Yes',
            value: 'yes',
          },
          {
            label: 'No',
            value: 'no',
          },
          {
            label: "I don't know",
            value: 'idk',
          },
        ]
      }
    />
  );
};
```
