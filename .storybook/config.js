import { configure, getStorybook, setAddon } from '@storybook/react';

const req = require.context('../stories', true, /\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);
configure(loadStories, module);
serializeStories(getStorybook);