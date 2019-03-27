import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import {stub} from 'sinon';
import Ranking from './Ranking';

test('Ranking - Correctly re-orders the items array', (t) => {
  const props = {
    items: [
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: true,
      },
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: true,
      },
    ],
    name: 'theBestCat',
    onChange: stub(),
  };

  const component = mount(<Ranking {...props} />);

  component.instance().changeOrder(0, 1);

  t.deepEqual(
    component.state().items,
    [
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
      },
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: true,
      },
    ],
    'State should switch item 1 with 2.'
  );

  t.end();
});

test('Ranking - onDragEnd', (t) => {
  t.plan(2);

  const props = {
    items: [
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: true,
      },
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: true,
      },
    ],
    name: 'theBestCat',
    onChange: stub(),
  };

  const component = mount(<Ranking {...props} />);

  component.instance().onDragEnd({
    destination: {
      index: 1,
    },
    source: {
      index: 0,
    },
  });

  t.deepEqual(
    component.state().items,
    [
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
      },
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: true,
      },
    ],
    'State should switch item 1 with 2.'
  );

  component.instance().onDragEnd({
    source: {
      index: 0,
    },
  });

  t.deepEqual(
    component.state().items,
    [
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
      },
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: true,
      },
    ],
    'State return early and not modify the order.'
  );
});

test('Ranking - changeOrder button press simulation', (t) => {
  t.plan(2);

  const props = {
    items: [
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: true,
      },
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: true,
      },
    ],
    name: 'theBestCat',
    onChange: stub(),
  };

  const component = mount(<Ranking {...props} />);

  component
    .find('li')
    .at(1)
    .find('.up')
    .prop('onClick')();

  t.deepEquals(
    component.state().items,
    [
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
      },
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: true,
      },
    ],
    'Should modify the order.'
  );

  component
    .find('li')
    .at(1)
    .find('.down')
    .prop('onClick')();

  t.deepEquals(
    component.state().items,
    [
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: true,
      },
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: true,
      },
    ],
    'Should modify the order again.'
  );
});

test('Ranking - changeOrder key down simulation', (t) => {
  t.plan(2);

  const props = {
    items: [
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: true,
      },
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: true,
      },
    ],
    name: 'theBestCat',
    onChange: stub(),
  };

  const component = mount(<Ranking {...props} />);

  component
    .find('li')
    .at(1)
    .find('.up')
    .prop('onKeyDown')();

  t.deepEquals(
    component.state().items,
    [
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
      },
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: true,
      },
    ],
    'Should modify the order.'
  );

  component
    .find('li')
    .at(1)
    .find('.down')
    .prop('onKeyDown')();

  t.deepEquals(
    component.state().items,
    [
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
        movable: true,
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
        movable: true,
      },
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
        movable: true,
      },
    ],
    'Should modify the order again.'
  );
});
