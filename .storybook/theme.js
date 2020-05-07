import {create} from '@storybook/theming';
import {colors} from '../constants/js/colors';

// Configures Storybook theme.
// More info: https://storybook.js.org/docs/configurations/theming/
export default create({
  base: 'light',
  appBg: colors['parchment'],
  appBorderColor: colors['light-gray'],
  barBg: colors['white'],
  barSelectedColor: colors['royal'],
  colorSecondary: colors['royal'],
  fontBase: '"Open Sans", sans-serif',
  textColor: colors['midnight'],
  inputBg: colors['white'],
  inputBorder: colors['light-gray'],
  inputTextColor: colors['midnight'],
  brandTitle: 'United Income',
  brandUrl: '?path=/story/introduction--page',
  brandImage: 'https://i.imgur.com/rPP3kdY.png',
});
