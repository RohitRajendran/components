import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import HealthMeterCircleIllustration from './HealthMeterCircleIllustration';

test('HealthMeterCircleIllustration - renders', (t) => {
  try {
    const component = render(<HealthMeterCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the HealthMeterCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HealthMeterCircleIllustration - renders the illuminated illustration', (t) => {
  try {
    const component = render(
      <HealthMeterCircleIllustration illuminate={true} />,
    );

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the HealthMeterCircleIllustration component.',
    );

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('HealthMeterCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<HealthMeterCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the HealthMeterCircleIllustration component.',
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
