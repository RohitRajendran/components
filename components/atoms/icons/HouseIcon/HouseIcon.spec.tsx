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
