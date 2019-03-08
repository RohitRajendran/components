# United Income Component Library 💰📘

[![Master Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](http://docs.unitedincome.team/components/master/?selectedKind=Atoms%2FButton&selectedStory=primary%20light&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs) [![Develop Storybook](https://img.shields.io/badge/view-develop-blue.svg)](http://docs.unitedincome.team/components/develop/?selectedKind=Atoms%2FButton&selectedStory=primary%20light&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs) [![CircleCI](https://circleci.com/gh/UnitedIncome/components.svg?style=svg&circle-token=d8c505b4412cf8d13df383f7b5411ea9dc5d3e6a)](https://circleci.com/gh/UnitedIncome/components) [![codecov](https://codecov.io/gh/UnitedIncome/components/branch/master/graph/badge.svg?token=O1vKU2SVdc)](https://codecov.io/gh/UnitedIncome/components)

This library aims to standardize the implementation and appearance of React components throughout United Income's properties. This has a series of exportable components that can be reused. It also utilizes Storybook to create a pseudo-design system manager that is based on the principals of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

## Getting Started 🚀

### Within an application

First, make sure you install this library.

```
yarn add @unitedincome/components
```

Then, you'll need to decide if you want to use this library by importing components individually or by importing them all together.

For individual importing, you can pull in files from the `dist` folder:

```
import Button from '@unitedincome/components/dist/Button';
```

To import all components together, you can import more simply:

```
import {Button} from '@unitedincome/components';
```

If you plan to use only a few components from this library, importing components individually will result in a smaller bundle. If, however, you plan to use all or a majority of these components, you should import them all. The size of the individually bundled components is greater than the whole. Additionally, it won't necessitate individual imports to import multiple files.

You will also need to import the relevant css files. Again, you have the choice between importing them individually into your manifest or in bulk.

Individually, you will find those at `@unitedincome/components/dist/Button.css`. In bulk, you can find those at `@unitedincome/components/dist/index.css`.

### Running Storybook

To begin Storybook, just run `yarn start`. This will open a new window to Storybook.

## Development 🔧

### Best Practices

Because this library is so foundational to the rest of the codebase, it's vitally important to create a solid foundation for these components. The following are some best practices to keep these building blocks sane and straightforward.

1. Carefully scope CSS to the component to prevent side effects.
2. Do not include margins on the individual components by default.
3. Create strong PropTypes for all props on all components, even if that necessitates custom PropTypes.
4. Components should have 100% test coverage.
5. Keep external dependencies to an absolute minimum and, when used, most likely add them as peer dependencies in the `package.json` and as external dependencies in `webpack.config.js`.
6. While components can utilize internal state, do not make them reliant on a global state (i.e., redux).

### Testing Changes

As you are developing new components or updating existing ones, testing these components in the context of an existing front-end repository can be useful. Instead of going through the lifecycle of publishing new versions, the easier way of handling this is utilizing "linking" in yarn or npm.

You can mimic publishing this repository locally by running `yarn link` in the directory for this library. To use it in another library you can mimic installing it by running `yarn link @unitedincome/components`.

At this point, whenever you make changes to the component library and run `yarn build`, the code running in the other repository will automatically change.
