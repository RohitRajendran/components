import {create} from '@storybook/theming';
import {colors} from '../constants/js/colors';

// Configures Storybook theme.
// More info: https://storybook.js.org/docs/configurations/theming/
export default create({
  base: 'light',
  barSelectedColor: colors.royal,
  brandTitle: 'United Income',
  brandUrl: 'https://unitedincome.com',
  brandImage: 'https://i.imgur.com/rPP3kdY.png',
  colorSecondary: colors.midnight,
  fontBase: '"Open Sans", sans-serif',
  textColor: colors.midnight,
});
