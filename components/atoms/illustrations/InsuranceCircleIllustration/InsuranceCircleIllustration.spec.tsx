import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import InsuranceCircleIllustration from './InsuranceCircleIllustration';

test('InsuranceCircleIllustration - renders', (t) => {
  try {
    const component = render(<InsuranceCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the InsuranceCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('InsuranceCircleIllustration - renders the draft illustration', (t) => {
  try {
    const component = render(<InsuranceCircleIllustration draft={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the InsuranceCircleIllustration component.',
    );

    t.true(component.getByTestId('draft'), 'Draft illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('InsuranceCircleIllustration - renders the colored illustration', (t) => {
  try {
    const component = render(<InsuranceCircleIllustration color={true} />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the InsuranceCircleIllustration component.',
    );

    t.true(component.getByTestId('color'), 'Color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('InsuranceCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<InsuranceCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the InsuranceCircleIllustration component.',
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
