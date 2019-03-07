# ChanceOfSuccess Component
The ChanceOfSuccess component displays the users current chance of success in a dial.

## Example 🚀

```javascript
<ChanceOfSuccess
  percent={50}
  isDraftPlan={false}
  currentPlanChanceOfSuccess={20}
  refreshedPlanChanceOfSuccess={22}
  isRunningPlan={false}
  compact={false}
/>
```

## Props 🔧

The following component props are valid.

| Prop          | Type     | Default     | Description | Required
| ------------- | -------- | ----------- | --------------------------------------------- | ----------- | 
| **currentPlanChanceOfSuccess**    | Integer   |           | The chance of success that you'd like to show, this can be either the draft or current plan. | No |
| **refreshedPlanChanceOfSuccess**    | Integer   |           | The updated plan chance of success. This will cause the component to show the difference between the current and the refreshed chance. | No |
| **identifier**    | String  |           | Unique string identifier. Used when there's multiple of the same component on the page. | No |
| **percent**    |  Integer  |           | The percent value to display. | No |
| **isRunningPlan**    | Boolean  |   `false`        | Plays an animation if the user is currently running a financial plan. | No |
| **className**    | String  |        | Additional class names to apply to the component. | No |
| **isDraftPlan**    | Boolean  |  `false`     | Changes the appearance of the component if the user is currently viewing a draft plan. | No |
| **compact**    | Boolean  |  `false`     | Changes the appearance of the component so it's more compact. | No |
| **isIe**    | Boolean  |  `false`     | Adjusts the appearance of the component if the user is using Internet Explorer. | No |