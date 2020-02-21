import {initDsm} from '@invisionapp/dsm-storybook';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs} from '@storybook/addon-knobs';
import {addDecorator, addParameters, configure} from '@storybook/react';
import {colors} from '~constants/js/colors';
import '../constants/sass/util/prefixed-utils.scss';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import unitedIncomeTheme from './theme';

const req = require.context('../components', true, /(story)\.([jt]sx?|mdx)$/);

// Registers global decorators.
addDecorator(withA11y);
addDecorator(withKnobs);

// Configures global parameters.
addParameters({
  options: {
    theme: unitedIncomeTheme,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  // Background names/values according to DSM
  // https://projects.invisionapp.com/dsm/united-income-design-system/united-income-brand/folder/colors/5bfd958fc541d90011cf975d
  backgrounds: [
    {name: 'White', value: colors['white'], default: true},
    {name: 'Parchment', value: colors['parchment']},
    {name: 'Royal', value: colors['royal']},
    {name: 'Midnight', value: colors['midnight']},
    {name: 'Middle Purple', value: colors['midnight-purple']},
  ],
});

/** Loads each story into Storybook.
 * @returns {undefined}
 */
function loadStories() {
  req.keys().forEach(req);
  return req
    .keys()
    .map(req)
    .filter((reqFiltered) => Boolean(reqFiltered.default));
}

if (process.env.NODE_ENV === 'dsm') {
  // Initialize InVision DSM.
  initDsm({
    addDecorator,
    addParameters,
    callback: () => configure(loadStories, module),
  });
} else {
  // Initialize Storybook normally.
  configure(loadStories, module);
}
