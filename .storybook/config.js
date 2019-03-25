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
import {withInfo} from '@storybook/addon-info';
import {dsmColors as colors} from '~constants/js/colors';
import {State} from '@sambego/storybook-state';
import {MemoryRouter} from 'react-router-dom';
import '../constants/sass/util/prefixed-utils.scss';

const req = require.context('../components', true, /story\.js$/);

const {percyAddon, serializeStories} = createPercyAddon();

// Registers global decorators.
addDecorator(
  withInfo({
    source: false,
    header: true, // Global configuration for the info addon across all of stories.
    propTablesExclude: [State, MemoryRouter], // Excludes the state wrapper from appearing in the story prop table.
    styles: {
      button: {
        base: {
          fontFamily: 'sans-serif',
          fontSize: '14px',
          fontWeight: '500',
          display: 'block',
          position: 'fixed',
          border: 'none',
          background: '#14558f',
          color: '#fff',
          padding: '5px 15px',
          cursor: 'pointer',
        },
        topRight: {
          bottom: 0,
          right: 0,
          top: 'unset',
          borderRadius: '5px 0 0 0',
        },
      },
    },
  })
);
addDecorator(withA11y);
addDecorator(withKnobs);

// Configures global parameters.
addParameters({
  options: {
    theme: unitedIncomeTheme,
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
}

setAddon(percyAddon); // Initializes the Percy addon.
configure(loadStories, module);
serializeStories(getStorybook); // Serializes the stories so Percy can access them.
