import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import GingerBreadCircleIllustration from './GingerBreadCircleIllustration';

test('GingerBreadCircleIllustration - renders', (t) => {
  try {
    const component = render(<GingerBreadCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GingerBreadCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('GingerBreadCircleIllustration - renders the illuminated illustration', (t) => {
  try {
    const component = render(
      <GingerBreadCircleIllustration illuminate={true} />,
    );

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GingerBreadCircleIllustration component.',
    );

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('GingerBreadCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<GingerBreadCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GingerBreadCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');

    fireEvent.click(getByTestId(component.container, 'default'));

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
