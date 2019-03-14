import {create} from '@storybook/theming';
import logo from './unitedincome.png';

// Configures Storybook theme.
// More info: https://storybook.js.org/docs/configurations/theming/
export default create({
  base: 'light',
  brandTitle: 'United Income',
  brandUrl: 'https://unitedincome.com',
  brandImage: logo,
});
