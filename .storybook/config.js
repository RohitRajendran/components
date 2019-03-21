import {
  configure,
  getStorybook,
  setAddon,
  addDecorator,
  addParameters,
} from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs} from '@storybook/addon-knobs';
import unitedIncomeTheme from './theme';
import {jsxDecorator} from 'storybook-addon-jsx';
import { withPropsTable } from 'storybook-addon-react-docgen';
import '../constants/sass/util/prefixed-utils.scss';

const req = require.context('../components', true, /story\.js$/);

const {percyAddon, serializeStories} = createPercyAddon();

// Registers global decorators.
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(jsxDecorator);
addDecorator(withPropsTable);

// Configures global parameters.
addParameters({
  options: {
    theme: unitedIncomeTheme,
  },
  // Background names/values according to DSM
  // https://projects.invisionapp.com/dsm/united-income-design-system/united-income-brand/folder/colors/5bfd958fc541d90011cf975d
  backgrounds: [
    {name: 'White', value: '#ffffff', default: true},
    {name: 'Parchment', value: '#f8f7f4'},
    {name: 'Royal', value: '#4d00ba'},
    {name: 'Midnight', value: '#10004c'},
    {name: 'Middle Purple', value: '#260070'},
  ],
});

/** Loads each story into Storybook.
 * @returns {undefined}
 */
function loadStories() {
  req.keys().forEach(req);
}

setAddon(percyAddon); // Initializes the Percy addon.
configure(loadStories, module);
serializeStories(getStorybook); // Serializes the stories so Percy can access them.
