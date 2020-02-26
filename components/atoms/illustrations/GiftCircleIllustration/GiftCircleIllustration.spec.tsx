import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import GiftCircleIllustration from './GiftCircleIllustration';

test('GiftCircleIllustration - renders', (t) => {
  try {
    const component = render(<GiftCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GiftCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('GiftCircleIllustration - renders the draft illustration', (t) => {
  try {
    const component = render(<GiftCircleIllustration draft={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GiftCircleIllustration component.',
    );

    t.true(component.getByTestId('draft'), 'Draft illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('GiftCircleIllustration - renders the color illustration', (t) => {
  try {
    const component = render(<GiftCircleIllustration color={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GiftCircleIllustration component.',
    );

    t.true(component.getByTestId('color'), 'Color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('GiftCircleIllustration - renders the illuminated illustration', (t) => {
  try {
    const component = render(<GiftCircleIllustration illuminate={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GiftCircleIllustration component.',
    );

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('GiftCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<GiftCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the GiftCircleIllustration component.',
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
