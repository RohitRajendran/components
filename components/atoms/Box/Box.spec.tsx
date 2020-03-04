import {render, cleanup, fireEvent} from '@testing-library/react';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import CarCircleIllustration from '~components/atoms/illustrations/CarCircleIllustration/CarCircleIllustration';
import Box from './Box';

test('Box - renders', (t) => {
  try {
    const component = render(<Box />);

    t.equals(
      component.container.querySelectorAll('div').length,
      1,
      'Should load the Box component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('Box - renders with an icon', (t) => {
  try {
    const component = render(<Box icon={CarCircleIllustration} />);

    t.equals(
      component.container.querySelectorAll('div').length,
      1,
      'Should load the Box component.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('Box - renders disabled with check', (t) => {
  try {
    const component = render(
      <Box icon={CarCircleIllustration} disabled={true} showCheck={true} />,
    );

    t.equals(
      component.container.querySelectorAll('.uic--box__disabled').length,
      1,
      'Should load the Box component with disabled class.',
    );
    t.equals(
      component.container.querySelectorAll('.uic--box__check').length,
      1,
      'Shows check',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('Box - should hand back the value onClick', (t) => {
  try {
    const props = {
      value: 'montezuma',
      label: 'the best cat',
      description: 'v ginger and v good',
      onClick: stub(),
    };
    const component = render(<Box {...props} />);

    fireEvent.click(component.getByRole('button'));

    t.deepEquals(
      props.onClick.args[0][0],
      'montezuma',
      'The montezuma box was selected.',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('Box - handleHover', (t) => {
  try {
    const props = {
      value: 'montezuma',
      label: 'the best cat',
      description: 'v ginger and v good',
      onClick: stub(),
      icon: CarCircleIllustration,
    };

    const component = render(<Box {...props} />);

    fireEvent.mouseEnter(component.getByTestId('color'));
    t.ok(component.getByTestId('illuminated'), 'icon is illuminated');

    fireEvent.mouseLeave(component.getByTestId('illuminated'));
    t.ok(component.getByTestId('color'), 'icon is no longer illuminated');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
