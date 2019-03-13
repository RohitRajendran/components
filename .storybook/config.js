import {configure, getStorybook, setAddon, addDecorator} from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs} from '@storybook/addon-knobs';
import {addParameters} from '@storybook/react';
import unitedIncomeTheme from './theme';

addParameters({
  options: {
    theme: unitedIncomeTheme,
  },
});

const req = require.context('../stories', true, /\.js$/);

// Registers global decorators.
addDecorator(withA11y);
addDecorator(withKnobs);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon); // Initializes the Percy addon.
configure(loadStories, module);
serializeStories(getStorybook); // Serializes the stories so Percy can access them.