import {initDsm} from '@invisionapp/dsm-storybook';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs} from '@storybook/addon-knobs';
import {addDecorator, addParameters, configure} from '@storybook/react';
import '../constants/sass/util/prefixed-utils.scss';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import unitedIncomeTheme from './theme';
import {storybookBackgrounds} from '../constants/js/colors';

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
  backgrounds: storybookBackgrounds.defaultWhiteBackground,
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
