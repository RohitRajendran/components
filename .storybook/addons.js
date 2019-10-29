import {STORIES_CONFIGURED, STORY_MISSING} from '@storybook/core-events';
import addonAPI from '@storybook/addons';
import '@storybook/addon-knobs/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-viewport/register';
import '@storybook/addon-backgrounds/register';
import '@sambego/storybook-state';

// Forces the 'Introduction' page to be the landing page.
addonAPI.register('unitedincome/first-page', (storybookAPI) => {
  storybookAPI.on(STORIES_CONFIGURED, () => {
    if (storybookAPI.getUrlState().path === '/story/*') {
      storybookAPI.selectStory('introduction', 'page');
    }
  });
  storybookAPI.on(STORY_MISSING, () => {
    storybookAPI.selectStory('introduction', 'page');
  });
});
