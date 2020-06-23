import {
  cleanup,
  render,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import PencilCircleIllustration from './PencilCircleIllustration';

test('PencilCircleIllustration - renders', (t) => {
  const component = render(<PencilCircleIllustration />);

  try {
    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PencilCircleIllustration component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('PencilCircleIllustration - renders (color)', (t) => {
  const component = render(<PencilCircleIllustration color />);

  try {
    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PencilCircleIllustration component.',
    );
    t.true(component.getByTestId('color'), 'Paints the color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('PencilCircleIllustration - renders (color)', (t) => {
  const component = render(<PencilCircleIllustration illuminate />);

  try {
    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PencilCircleIllustration component.',
    );
    t.true(
      component.getByTestId('illuminated'),
      'Paints the illuminated illustration',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('PencilCircleIllustration - test onClick', async (t) => {
  const component = render(<PencilCircleIllustration />);

  try {
    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the PencilCircleIllustration component.',
    );

    fireEvent.click(component.container.querySelector('svg') as Element);

    await waitForElement(() => component.getByTestId('illuminated'));

    t.equals(
      component.getAllByTestId('illuminated').length,
      1,
      'Should load the PencilCircleIllustration illuminated component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
