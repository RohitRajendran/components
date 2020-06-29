import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import MultiColumnTile from './MultiColumnTile';

const getItems = (itemCount: number): string[] => {
  const items: string[] = [];
  for (let count = 0; count < itemCount; count++) {
    items.push(`item ${count + 1}`);
  }
  return items;
};

test('MultiColmun Tile - renders', (t) => {
  const itemCount = 10;
  const items = getItems(itemCount);

  const {getAllByText} = render(<MultiColumnTile items={items} />);

  //accounts for display of items on mobile and desktop/tablet layouts
  t.true(
    items.every(
      (item, idx) =>
        getAllByText(item).length === (idx < Math.ceil(itemCount / 2) ? 2 : 1),
    ),
    'Items not being displayed correctly.',
  );

  cleanup();
  t.end();
});
