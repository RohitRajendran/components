---
to: <%= path %>/<%= h.changeCase.pascal(name) %>.constants.js
---
// Used to keep output names consistent across the various files.
export const outputs = {
  name: 'name',
  favCat: 'favCat',
  navigatingToLatestCard: 'navigatingToLatestCard'
};
