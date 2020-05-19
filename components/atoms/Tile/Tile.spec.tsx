import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import Tile, {TileBackgrounds} from './Tile';

test('Tile - renders', (t) => {
  try {
    const {getByText, container} = render(<Tile>James</Tile>);

    t.true(
      container.querySelector('.uic--tile--light'),
      'Should add light class',
    );
    t.false(
      container.querySelector('.uic--tile--dark'),
      'Should not add dark class',
    );
    t.false(
      container.querySelector('.uic--tile--draft'),
      'Should not add draft class',
    );
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
    const {getByText, container} = render(
      <Tile background={TileBackgrounds.Dark} footerContent={<div>Ives</div>}>
        James
      </Tile>,
    );

    t.false(
      container.querySelector('.uic--tile--light'),
      'Should not add light class',
    );
    t.true(
      container.querySelector('.uic--tile--dark'),
      'Should add dark class',
    );
    t.false(
      container.querySelector('.uic--tile--draft'),
      'Should not add draft class',
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

test('Tile - renders draft', (t) => {
  try {
    const {getByText, container} = render(
      <Tile background={TileBackgrounds.Draft}>Rohit</Tile>,
    );

    t.false(
      container.querySelector('.uic--tile--light'),
      'Should not add light class',
    );
    t.false(
      container.querySelector('.uic--tile--dark'),
      'Should not add dark class',
    );
    t.true(
      container.querySelector('.uic--tile--draft'),
      'Should add draft class',
    );
    t.true(getByText('Rohit'));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
