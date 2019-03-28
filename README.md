![Storybook](/.storybook/unitedincome.png)
# United Income Component Library 💰📘

[![Master Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](http://ui.unitedincome.com/master/) [![Develop Storybook](https://img.shields.io/badge/view-develop-blue.svg)](http://ui.unitedincome.com/develop/) [![CircleCI](https://circleci.com/gh/UnitedIncome/components.svg?style=svg&circle-token=d8c505b4412cf8d13df383f7b5411ea9dc5d3e6a)](https://circleci.com/gh/UnitedIncome/components) [![codecov](https://codecov.io/gh/UnitedIncome/components/branch/master/graph/badge.svg?token=O1vKU2SVdc)](https://codecov.io/gh/UnitedIncome/components)

This library aims to standardize the implementation and appearance of React components throughout United Income's properties. This library has a series of exportable components that can be reused. It also utilizes Storybook to create a pseudo-design system manager that is based on the principals of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

## Getting Started 🚀

The component library can be installed and initialized by running `yarn install `followed by `yarn start`. This will start a local instance of Storybook, allowing you to view a series of "stories" that represent each component.


## Using a Component

You can install the component library into your project by running the following command.

```bash
yarn add @unitedincome/components
```

You can then decide if you want to use this library by importing components individually or by importing them all together which will result in a larger bundle size.

For individual importing, you can pull in separate files from the `dist` folder.

```javascript
import Button from '@unitedincome/components/dist/Button';
```

To import all components together, you can import more simply:

```javascript
import {Button, CardShell, Slider} from '@unitedincome/components';
```

You will also need to import the relevant CSS files. You have the choice between importing them individually into your style manifest or in bulk. For both methods you'll need to also include the `util.css` file which includes a prefixed grid layout and utility classes.

For individual imports you can use the following:

```sass
@import "@unitedincome/components/dist/util.css";
@import "@unitedincome/components/dist/Button.css";
```

To import all styles you can use:

```sass
@import "@unitedincome/components/dist/util.css";
@import "@unitedincome/components/dist/index.css";
```

## Building a Story 

You can build a story by creating a directory within the `components` directory. Each component at the very least should have an export, documentation testing, and a story file. The general structure should look something like the following.

```markdown
•
└── components
    ├── atoms
    │   └── Input
    │       ├── Input.js 
    │       ├── Input.md
    │       ├── Input.spec.js
    │       └── Input.story.js
    └── molecules
```

This component library also has a number of directory aliases which allow for easier importing, you can utilize `~components`, `~constants` and `~proptypes` to access the root directories.

### Best Practices

While there are always going to be special cases, the following guidelines should be considered when contributing to the library.

1. Carefully scope CSS to the component to prevent side effects.
2. Do not include margins on the individual components by default.
3. Create strong PropTypes for all props on all components, even if that necessitates custom PropTypes.
4. Comment each PropType, this will allow for React doc gen to properly document what each one does.
5. Components should have **100%**test coverage.
6. Keep external dependencies to an absolute minimum and, when used, most likely add them as peer dependencies in the `package.json` and as external dependencies in `webpack.config.js`.
7. While components can utilize internal state, do not make them reliant on a global state (i.e., redux).
8. The Bootstrap 4 grid and utility classes are included, and prefixed with `uic--`, these should be used as much as possible.

### Creating a `.story.js` file
The `.story.js` file should represent a staged version of your component which will display in the Storybook interface. Each story is snapshot tested with a visual regression testing tool called Percy, so capturing different visual variations of your component in a story is preferred.

This component library utilizes a number of Storybook addons, such as knobs and storybook-readme to allow users to play around with the relevant PropTypes, and to see inline documentation. To simplify your story creation, adding a `defaultProps` helper function that configures the component props is preferred.

You can find a basic example of a Story below.

```javascript
import React from 'react';
import {storiesOf} from '@storybook/react';
import TrashIcon from './TrashIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import TrashIconReadme from './TrashIcon.md';

const stories = storiesOf('Atoms/Icons/TrashIcon', module);

stories.addDecorator(withReadme(TrashIconReadme));

// Sets up the default props for multiple different story variations.
const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '20'),
  width: text('width', '20'),
});

stories.add('default', () => <TrashIcon {...defaultProps()} />);
```

#### State Wrapper
If your component is controlled by state, you'll need to add a state wrapper to your Story. For this you can use the `storybook-state` addon. You can find more information about the state wrapper we utilize [here](https://github.com/Sambego/storybook-state).


```javascript
import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Molecules/RadioButtons', module);

// Default state is stored in a Store object.
const store = new Store({
  yesNo: '',
  followup: 'custom',
  input: '',
  bank: '',
});

// You'll need to add the StateDecorator as a Storybook decorator using addDecorator.
stories.addDecorator(StateDecorator(store));

// Subscribes to store changes and forces the component to re-render.
store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({formName, table}) => ({
  name: formName,
  table: boolean('table', table),
  onChange: (name, value) => store.set({[name]: value}),
  value: store.get(formName),
  key: formName,
});

// You can set/get state using state.set() and state.get().
stories.add('default', () => (
  <RadioButtons
    {...defaultProps({
      formName: 'yesNo',
      options: [
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
          disabled: true,
        },
      ],
    })}
  />
));
```