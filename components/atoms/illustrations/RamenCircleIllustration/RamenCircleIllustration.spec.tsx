import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import RamenCircleIllustration from './RamenCircleIllustration';

test('RamenCircleIllustration - renders', (t) => {
  try {
    const component = render(<RamenCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the RamenCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('RamenCircleIllustration - renders the draft illustration', (t) => {
  try {
    const component = render(<RamenCircleIllustration draft={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the RamenCircleIllustration component.',
    );

    t.true(component.getByTestId('draft'), 'Draft illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('RamenCircleIllustration - renders the color illustration', (t) => {
  try {
    const component = render(<RamenCircleIllustration color={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the RamenCircleIllustration component.',
    );

    t.true(component.getByTestId('color'), 'Color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('RamenCircleIllustration - renders the illuminated illustration', (t) => {
  try {
    const component = render(<RamenCircleIllustration illuminate={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the RamenCircleIllustration component.',
    );

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('RamenCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<RamenCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the RamenCircleIllustration component.',
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
