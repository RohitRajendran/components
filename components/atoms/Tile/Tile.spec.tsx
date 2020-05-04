import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import Tile from './Tile';

test('Tile - renders', (t) => {
  try {
    const {getByText} = render(<Tile>James</Tile>);

    t.true(getByText('James'));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('Tile - renders footer', (t) => {
  try {
    const {getByText} = render(
      <Tile isDark footerContent={<div>Ives</div>}>
        James
      </Tile>,
    );

    t.true(getByText('James'));
    t.true(getByText('Ives'));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
