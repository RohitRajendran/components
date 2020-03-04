import {render, cleanup} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import {PureHouseIcon} from './HouseIcon';

test('HouseIcon - renders', (t) => {
  try {
    const component = render(
      <PureHouseIcon houses={10} highlight={10} isIE={false} />,
    );

    t.equals(
      component.container.querySelectorAll('svg').length,
      10,
      'Should load the HouseIcon component 10 times due to the provided houses prop.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HouseIcon - renders with no highlight', (t) => {
  try {
    const component = render(<PureHouseIcon houses={10} isIE={false} />);

    t.equals(
      component.container.querySelectorAll('g[fill="#dddddd"]').length,
      10,
      'All houses should be uncolored.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HouseIcon - renders with IE browser', (t) => {
  try {
    const component = render(
      <PureHouseIcon houses={3} highlight={2} isIE={true} />,
    );

    t.equals(
      component.container.querySelectorAll('g[fill="#10004c"]').length,
      2,
      'Two houses should be colored on IE.',
    );

    t.equals(
      component.container.querySelectorAll('g[fill="#dddddd"]').length,
      1,
      'One house should be uncolored on IE.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HouseIcon - Highlight number is higher than house number', (t) => {
  try {
    const component = render(
      <PureHouseIcon houses={3} highlight={20} isIE={true} />,
    );

    t.equals(
      component.container.querySelectorAll('g[fill="#10004c"]').length,
      3,
      'All houses should be colored on IE.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
