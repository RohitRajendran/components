# Contributing

When contributing to this project, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

## Testing Changes 💊

As you are developing new components or updating existing ones, testing these components in the context of an existing front-end repository can be useful. Instead of going through the life cycle of publishing new versions, the easier way of handling this is utilizing package linking.

You can mimic publishing this repository locally by running `yarn link` in the directory for this library. To use it in another library you can mimic installing it by running `yarn link @unitedincome/components`.

At this point, whenever you make changes to the component library and run `yarn build`, the code running in the other repository will automatically change.

If you are getting errors with hooks after using `yarn link` (*Error: Invalid hook call. Hooks can only be called inside of the body of a function component.*), try this workaround found [here](https://github.com/facebook/react/issues/14257#issuecomment-595183610/):
```shell
cd components
yarn link
yarn install
cd node_modules/react
yarn link
cd ../../node_modules/react-dom
yarn link
cd <YOUR_PROJECT>
yarn link components
yarn link react
yarn link react-dom
```

## Pull Request Best Practices :octocat:

1. Ensure that you've tested your feature/change yourself. For details on how to test your changes in another project please follow the `Testing Changes` section of this document.
2. Make sure you update the appropriate README or story file if you've made a change that requires documentation.
3. When making a pull request, highlight any areas that may cause a breaking change so the maintainer can update the version number accordingly, even if it's as simple as changing the name of a prop.
4. If you need to manually bump the version number to a large number you can do so by modifying it in `package.json` in your pull request.

## Deploying 🔧

This project utilizes [GitHub Actions](https://github.com/features/actions) and [CircleCI](https://circleci.com/) to make automatic deployments.

- When a change is merged to the `develop` branch, it will push the changes automatically to the develop instance of Storybook which can be found [here](https://unitedincome.github.io/components/develop).

- When a pull request from `develop` is opened against `master` some additional tasks are run. The integration tests will attempt to flag any visual changes that need attention via Percy. Once approved and merged by a project maintainer the [deployment to production](https://unitedincome.github.io/components) will commence.

- Once the deployment is complete another script will run which will automatically version bump the component library and push it to the registry. The status of this can be found in [CircleCI](https://circleci.com/).
