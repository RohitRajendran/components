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
      },
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
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
      },
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
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
      },
      {
        label: 'Pica',
        secondaryLabel: '$1,000',
        value: 'pica',
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
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
      },
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
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
      },
      {
        label: 'Montezuma',
        secondaryLabel: '$8,345',
        value: 'montezuma',
      },
      {
        label: 'Pixie',
        secondaryLabel: '$13,000',
        value: 'pixie',
      },
    ],
    'State return early and not modify the order.'
  );
});
