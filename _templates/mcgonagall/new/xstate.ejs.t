---
to: <%= path %>/<%= h.changeCase.pascal(name) %>.xstate.js
---
<%
  compName = h.changeCase.pascal(name)
-%>
import {saveToStateContext} from '@unitedincome/components/dist/McGonagall';
import {assign} from 'xstate';
import {outputs} from './<%= compName %>.constants';
import {isNullOrUndefined} from 'util'; // TODO: This is a helper function that checks if something is undefined or null.

const stateConfig = {
  id: '<%= compName %>',
  initial: 'start',
  states: {
    start: {
      on: {
        NEXT: [
          {
            cond: 'hasName',
            target: 'name',
          },
        ],
      },
    },
    name: {
      on: {
        NEXT: [
          {
            target: 'choice',
            actions: [
              'saveToStateContext'
            ]
          },
        ],
      },
    },
    choice: {
      on: {
        NEXT: [
          {
            cond: 'hasFavCat',
            target: 'review',
            actions: [
              'saveToStateContext'
            ]
          },
        ],
      },
    },
    review: {
      on: {
        NEXT: [
          {
            target: 'complete',
          },
        ],
      },
    },
    complete: {
      type: 'final',
    },
  },
};

const stateOptions = {
  actions: {
    saveToStateContext,
  },
  guards: {
    hasName: (ctx, eve) => !isNullOrUndefined(eve[outputs.name])  || !eve[outputs.navigatingToLatestCard],
    hasFavCat: (ctx, eve) => !isNullOrUndefined(eve[outputs.favCat]),
  },
};

export {stateConfig, stateOptions};
