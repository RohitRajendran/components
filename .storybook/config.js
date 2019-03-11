import { configure, getStorybook, setAddon } from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';

const req = require.context('../stories', true, /\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon); // Initializes the Percy addon.
configure(loadStories, module);
serializeStories(getStorybook); // Serializes the stories so Percy can access them.