import {render, cleanup, fireEvent} from '@testing-library/react';
import React from 'react';
import {spy} from 'sinon';
import test from 'tape';
import BubbleSelector from './BubbleSelector';

test('BubbleSelector - render', (t) => {
  try {
    const onChangeSpy = spy();
    const component = render(
      <BubbleSelector
        options={[{value: 'Yo'}, {value: 'Dawg'}]}
        value="Dawg"
        onChange={onChangeSpy}
      />,
    );

    t.equal(
      component.container.querySelectorAll('.uic--bubble-selector__item')
        .length,
      2,
      'Display two items',
    );

    fireEvent.click(component.getAllByRole('button')[0]);

    t.true(
      onChangeSpy.withArgs('Yo').calledOnce,
      'Call onChange with new value',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('BubbleSelector - render with color options', (t) => {
  try {
    const onChangeSpy = spy();
    const component = render(
      <BubbleSelector
        options={[
          {value: 'Yo', color: '#fecebc'},
          {value: 'Dawg', color: '#013143'},
        ]}
        value="Dawg"
        onChange={onChangeSpy}
      />,
    );

    t.equal(
      component.container.querySelectorAll('button')[1].style.backgroundColor,
      'rgb(1, 49, 67)',
      'Second button has color rgb(1, 49, 67)',
    );
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
