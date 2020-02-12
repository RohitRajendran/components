import {registerDsm} from '@invisionapp/dsm-storybook/register';
import '@sambego/storybook-state';
import '@storybook/addon-a11y/register';
import '@storybook/addon-backgrounds/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-viewport/register';
import '@storybook/addon-docs/register';
import addonAPI from '@storybook/addons';
import {STORIES_CONFIGURED, STORY_MISSING} from '@storybook/core-events';

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

if (process.env.NODE_ENV === 'dsm') {
  registerDsm(process.env.STORYBOOK_DSM);
}
