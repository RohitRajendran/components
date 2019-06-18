# McGonagall

McGonagall is the successor to the Hogwarts framework that we initially used to build question flows. McGonagall uses [xState](https://xstate.js.org/docs/), a finite-state machine library, to help it navigate through the flow.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import McGonagall from '@unitedincome/components/dist/McGonagall';
```

```javascript
import {McGonagall} from '@unitedincome/components';
```

## Quick Start

1. In client run `yarn generate mcg new` to set up the scaffolding for a new McGonagall flow
1. In the `.xstate.js` file, lay out the flow by adding state nodes to the `stateConfig` with the names for the conditions
1. In the `.steps.js` file, add an object to the steps array for each state node that you created in the `stateConfig`
1. In the `.js` file, fill out the `stateContext` object with any data you need to pull in
1. Starting with the first step, start adding the render card function for the step in `.step,js` and updating the `stateConfig` and the `stateOptions` with necessary actions and guards

## Key Parts

There's 4 key parts to creating a flow in McGonagall: `stateConfig`, `stateOptions`, `stateContext`, and `steps`.

### stateConfig

The `stateConfig` is an xState defined object that will be passed through to the state machine to configure the machine and specify the different potential states and transitions.

```javascript
{
  // Machine identifier
  id: 'questions',

  // Initial state node
  initial: 'first',

  // State definitions
  states: {
    first: {
      /* ... */
    },
    second: {
      /* ... */
    },
    third: {
      /* ... */
    }
  }
}
```

#### State Nodes

In the `stateConfig`, each step of the flow should be declared as a seperate state node. Each state node declares events that can occur, which state nodes it can transition to, what conditions should apply to be able to transition to another state node, and any actions that should be executed. McGonagall only supports one event, "NEXT", but within that event you can navigate to different steps by specifying conditions.

Below is an example of a `stateConfig` that has three state nodes with "name" branching off between "owner" and "acquisition" depending on the conditions specified. Depending on which state node is transitoned to, you can see that different actions will also be executed. Since "owner" and "acquisition" are the last steps of this flow, it is declared as `type: final` to indicate it is the last step in the flow.

The logic for the conditions and actions are specified in the `stateOptions`.

```javascript
const stateConfig = {
  id: 'Assets - Current - Real Estate',
  initial: 'name',
  states: {
    name: {
      on: {
        NEXT: [
          {
            cond: 'hasNameAndIsMarried',
            target: 'owner',
            actions: [
              'saveToContext',
              'addNewAsset',
              'insertAssetValue',
              'makeIncomplete',
              'saveUserData',
            ],
          },
          {
            cond: 'hasNameAndIsNotMarried',
            target: 'acquisition',
            actions: [
              'saveToContext',
              'addOwner',
              'addNewAsset',
              'insertAssetValue',
              'makeIncomplete',
              'saveUserData',
            ],
          },
        ],
      },
    },
    owner: {
      type: 'final',
    },
    acquisition: {
      type: 'final',
    },
  },
};
```

### stateOptions

`stateOptions` is an xState defined object that declares all the implementations for actions and guards that are used in the `stateConfig`.

```javascript
const stateOptions = {
  actions: {
    saveToContext: assign((ctx, eve) => eve),
    addNewAsset: (ctx) => {
      if (!ctx.userData.externalAccounts[ctx.id]) {
        ctx.insertAssetValue('id', ctx.id);
        ctx.insertAssetValue('type', assetTypeEnum.REAL_ESTATE);
      }
    },
  },
  guards: {
    hasNameAndIsMarried: (ctx, eve) =>
      !isNullOrUndefined(eve[outputs.nickname]) &&
      ctx.userData.maritalStatus === MARRIED,
    hasNameAndIsNotMarried: (ctx, eve) =>
      !isNullOrUndefined(eve[outputs.nickname]) &&
      ctx.userData.maritalStatus !== MARRIED,
  },
};
```

#### Actions

Actions are functions that should be called when an event happens. Action functions take in 2 arguments, the machine context and the event payload.

If you want to update the State Machine's context, you need to wrap the function in `assign` and return the value to update similar to the "saveToContext" action in the example above. Any actions wrapped in `assign` will get executed first. In the example below, `saveToContext` is wrapped in `assign` so that it can take the event payload and update the state machine context with it. In the `addNewAsset` action is not wrapped in `assign` because it's just inserting some initial values for a new asset into redux that are already in the state machine context.

It's best to use descriptive names for your actions and create seperate actions for functionally different tasks so that if you're viewing it in the xState visualizer, you can easily understand it.

```javascript
const stateOptions = {
  actions: {
    saveToContext: assign((ctx, eve) => eve),
    addNewAsset: (ctx) => {
      if (!ctx.userData.externalAccounts[ctx.id]) {
        ctx.insertAssetValue('id', ctx.id);
        ctx.insertAssetValue('type', assetTypeEnum.REAL_ESTATE);
      }
    },
  },
};
```

In an event for a state node, you can pass in an array of strings that correspond to the name of the action to excute.

In the below example, there are 2 potential state nodes a user can go from the `name` state node. The state machine will first check if it passes the condition for the first object in the array so if the `hasNameAndIsMarried` guard returns true, the flow will transition to the owner step and run the 5 actions that are listed. If `hasNameAndIsMarried` returns false, it will then check the next condition. A state node should be able to pass at least one of the conditions.

```javascript
name: {
  on: {
    NEXT: [
      {
        cond: 'hasNameAndIsMarried',
        target: 'owner',
        actions: [
          'saveToContext',
          'addNewAsset',
          'insertAssetValue',
          'makeIncomplete',
          'saveUserData',
        ],
      },
      {
        cond: 'hasNameAndIsNotMarried',
        target: 'acquisition',
        actions: [
          'saveToContext',
          'addOwner',
          'addNewAsset',
          'insertAssetValue',
          'makeIncomplete',
          'saveUserData',
        ],
      },
    ],
  },
},
```

#### Guards

If you want a transition to a state node to happen only under certain conditions, you can create guards to see if the conditions are met. Guards are function that take in 2 arguments, the machine context and the event payload, and return a boolean on whether it should transition or not. In the below example.

```javascript
const stateOptions = {
  guards: {
    hasNameAndIsMarried: (ctx, eve) =>
      !isNullOrUndefined(eve[outputs.nickname]) &&
      ctx.userData.maritalStatus === MARRIED,
    hasNameAndIsNotMarried: (ctx, eve) =>
      !isNullOrUndefined(eve[outputs.nickname]) &&
      ctx.userData.maritalStatus !== MARRIED,
  },
};
```

In an event for a state node, you can pass in the name of the guard to test against in the `cond` property.

```javascript
name: {
  on: {
    NEXT: [
      {
        cond: 'hasNameAndIsMarried',
        target: 'owner',
      },
    ],
  },
};
```

It's best to use descriptive names for your guards and create seperate guards for functionally different conditions so that if you're viewing it in the xState visualizer, you can easily understand it.

When the McGonagall component first mounts, the framework uses the guards to essentially rehydrate the flow. It trys transitioning at each step until it hits a step that it can't navigate away from because it doesn't satisfy any condition. It's important to add guards to each State Node possible transition so that it the flow starts back up at the appropriate place.

### State Context

State context is an xState defined object that sets up the state machine's initial extended state. Any values or functions that you need should be passed through the state context and will then be accessible through the ctx argument of an action/argument or as the state argument of a render card function. Any changes to the state context object you pass in will not be reflected in McGonagall after initialization. After the initialization, any changes to the state context should happen through actions.

```javascript
const stateContext = {
  id: this.assetId,
  ...asset,
  userData: this.props.userData || null,
  insertAssetValue: this.insertAssetValue,
  saveUserData: this.props.saveUserData,
};
```

### Steps

The steps array helps render the appropriate card for a specific state node by matching the names between the two. Properties like title, description, and short title are optional in case you need to have dynamic content.

| Prop         | Prop Type     | Description                                                                   |
| ------------ | ------------- | ----------------------------------------------------------------------------- |
| name         | string        | Name that should map to a state node name                                     |
| title        | string        | Optional title of the card                                                    |
| description  | string        | Optional description of the card                                              |
| shortTitle   | string        | Optional short title of the card                                              |
| outputs      | array[string] | Array of state context property names that will be affected by this card      |
| card         | function      | Function that renders the card that gets passed props and state               |
| clearFuture  | boolean       | Indicates whether all future cards needs to be cleared when editing this card |
| isCollapsed  | boolean       | whether the card should be collapsed                                          |
| isFetching   | boolean       | whether card should show the loading indicator                                |
| isLatestCard | boolean       | whether it's the latest card in the flow                                      |
| key          | string        | step name to use as the key                                                   |
| name         | string        | step name                                                                     |
| onChange     | function      | function that accepts field name and value to update local state              |
| onSubmit     | function      | function to call to progress to submit the card                               |
| shortTitle   | string        | short title to be used with the summary                                       |
| stepIndex    | number        | index of the current step                                                     |
| title        | string        | title of the card                                                             |

```javascript
const steps = [
  {
    name: 'name',
    title: 'Let’s get started by giving this property a name.',
    description:
      'Explain why we need this. Giving this property a name helps you identify this asset when viewing it in your financial plan.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    shortTitle: 'Name',
    outputs: [outputs.nickname],
    card: renderName, //
    clearFuture: false, // Boolean to indicate whether all future cards needs to be cleared when editing thihs card
  },
];
```

#### Card

The function in the card property will get passed 2 arguments, props and state.

The props argument will include information from the mcgonagall framework and was designed so you can pass it straight through to the cards:

| Prop           | Prop Type | Description                                                                                                |
| -------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| animate        | boolean   | whether it should be animated or not (true when it's not the latest card)                                  |
| cancelChanges  | function  | function to call to cancel changes and navigate back to latest step                                        |
| clearFuture    | boolean   | passed through from the steps object                                                                       |
| context        | object    | current context from xState                                                                                |
| defaultValues  | object    | object defining default values to use for an output if a specified output of the step is null or undefined |
| description    | string    | passed through from the steps object                                                                       |
| editCard       | function  | function that gets used by the card summary to edit a card                                                 |
| hasMadeChanges | boolean   | whether there has been changes made that aren't in the state machine's context                             |
| isCollapsed    | boolean   | whether the card should be collapsed                                                                       |
| isFetching     | boolean   | whether card should show the loading indicator                                                             |
| isLatestCard   | boolean   | whether it's the latest card in the flow                                                                   |
| key            | string    | step name to use as the key                                                                                |
| name           | string    | step name                                                                                                  |
| onChange       | function  | function that accepts field name and value to update local state                                           |
| onSubmit       | function  | function to call to progress to submit the card                                                            |
| shortTitle     | string    | short title to be used with the summary                                                                    |
| stepIndex      | number    | index of the current step                                                                                  |
| title          | string    | title of the card                                                                                          |

The state argument will pass down the McGonagall component's state which will include everything you passed into `stateContext`.

```javascript
const outputs = {
  whose: 'whose',
};

export const renderOwner = (props, state) => {
  return (
    <RadioButtonCard
      {...props}
      config={{
        name: outputs.whose,
        value: state[outputs.whose],
        options: [
          {
            label: 'I own this property',
            value: whoseEnum.MINE,
          },
          {
            label: `${state.userData.spouseFirstName} owns this property`,
            value: whoseEnum.THEIRS,
          },
          {
            label: `${state.userData.spouseFirstName} and I are joint owners of this property`,
            value: whoseEnum.OURS,
          },
        ],
      }}
    />
  );
};

const steps = [
  {
    name: 'owner',
    title: 'Who is the owner',
    description: 'Choose who the owner is',
    shortTitle: 'Owner',
    outputs: [whose],
    card: renderOwner,
  },
];
```

##### Text Styles

You can find examples of text style classes to use with cards in the [Typography section](/?path=/story/utilities-styles--typography)

## File Structure

When creating a McGonagall flow, the code is split up across 4 files:

```markdown
├── FlowName
│ ├── FlowName.js - A parent component that renders the McGonagall component and passes in the necessary information
│ ├── FlowName.cards.js - Includes the card render functions and the steps object
│ ├── FlowName.xstate.js - Includes the stateConfig and the stateOptions
│ └── FlowName.constants.js - Includes an outputs constant (to help keep output names consistent across the files) and other constants needed for the flow
```

In client, you can easily scaffold out these files by running `yarn generate mcg new`

## How Data is Handled

There's 2 layers to how data is handled within the McGonagall framework, the state machine context and the local component state.

The state machine's context is the source of truth of the values as you navigate through the flow. This is updated by using the an action that is wrapped in `assign` and only gets updated when the `onSubmit` function is called.

The state machine's context is replicated in the local component state. This is so that you can make changes in a card, decide to cancel it, and revert back to the original value. The local component state values get changed when the `onChange` function gets called. When the `onSubmit` function is called, it pulls the outputs you specified in the `steps` object from the component state and passes it through as the event payload of the state machine.

## Visualizing the Flow

Thanks to xState, it's now much easier to visualize the entire flow. You just have to copy and paste the `stateConfig` and `stateOptions` (which is essentially the entire `.xstate.js` file except for the import and exports) into the [xState visualizer tool](https://statecharts.github.io/xstate-viz/) and pass both of the variables into the machine like so:

```javascript
const stateConfig = {
  id: 'Assets - Current - Real Estate',
  initial: 'name',
  states: {
    name: {
      on: {
        NEXT: [
          {
            cond: 'hasNameAndIsMarried',
            target: 'owner',
            actions: ['saveToContext', 'addNewAsset'],
          },
          {
            cond: 'hasNameAndIsNotMarried',
            target: 'acquisition',
            actions: ['saveToContext', 'addNewAsset'],
          },
        ],
      },
    },
    owner: {
      type: 'final',
    },
    acquisition: {
      type: 'final',
    },
  },
};

const stateOptions = {
  actions: {
    saveToContext: assign((ctx, eve) => eve),
    addNewAsset: (ctx) => {
      if (!ctx.userData.externalAccounts[ctx.id]) {
        ctx.insertAssetValue('id', ctx.id);
        ctx.insertAssetValue('type', assetTypeEnum.REAL_ESTATE);
      }
    },
  },
  guards: {
    hasNameAndIsMarried: (ctx, eve) =>
      !isNullOrUndefined(eve[outputs.nickname]) &&
      ctx.userData.maritalStatus === MARRIED,
    hasNameAndIsNotMarried: (ctx, eve) =>
      !isNullOrUndefined(eve[outputs.nickname]) &&
      ctx.userData.maritalStatus !== MARRIED,
  },
};

const fetchMachine = Machine(stateConfig, stateOptions);
```

## Utilities

You're able to import a number of utilities from McGonagall to help build your flows.

### saveToStateContext

The `saveToStateContext` function will allow you to save data to your state context. It can be imported using the following pattern.

```javascript
import {saveToStateContext} from '@unitedincome/components/dist/mcgonagall';
```
