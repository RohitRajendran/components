import {mount} from 'enzyme';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import ItemizationBox from './ItemizationBox';

test('ItemizationBox - renders', (t) => {
  window.requestAnimationFrame = stub();

  const props = {
    values: [
      {
        label: 'Montezumas Cat Food',
        value: 900000,
      },
      {
        label: 'Spice 6 Palak Paneer',
        value: 200,
      },
      {
        label:
          'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
        value: 600,
      },
      {
        label:
          'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
        value: 600,
        tooltip: {
          label: 'Tooltip label',
          description: 'Tooltip description',
        },
      },
    ],
    label: 'External Accounts',
  };

  mount(<ItemizationBox {...props} />);
  t.pass('the component rendered!');
  t.end();
});

test('ItemizationBox - sumTotal', (t) => {
  window.requestAnimationFrame = stub();

  const props = {
    values: [
      {
        label: 'Montezumas Cat Food',
        value: 900000,
      },
      {
        label: 'Spice 6 Palak Paneer',
        value: 200,
      },
      {
        label:
          'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
        value: 600,
      },
      {
        label:
          'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
        value: 600,
      },
    ],
    label: 'External Accounts',
  };

  const component = mount(<ItemizationBox {...props} />);

  t.equals(
    component.instance().sumTotal(props.values),
    901400,
    'Should return the summed totals',
  );

  t.end();
});

test('ItemizationBox - sumTotal (negative values)', (t) => {
  window.requestAnimationFrame = stub();

  const props = {
    values: [
      {
        label: 'Montezumas Cat Food',
        value: -900000,
      },
      {
        label: 'Spice 6 Palak Paneer',
        value: 200,
      },
      {
        label:
          'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
        value: 600,
      },
      {
        label:
          'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
        value: 600,
      },
    ],
    label: 'External Accounts',
  };

  const component = mount(<ItemizationBox {...props} />);

  t.equals(
    component.instance().sumTotal(props.values),
    -898600,
    'Should return the summed totals',
  );

  t.end();
});

test('ItemizationBox - componentDidUpdate', (t) => {
  window.requestAnimationFrame = stub();

  const prevProps = {
    values: [
      {
        label: 'Montezumas Cat Food',
        value: -900000,
      },
      {
        label: 'Spice 6 Palak Paneer',
        value: 200,
      },
      {
        label:
          'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
        value: 600,
      },
      {
        label:
          'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
        value: 600,
      },
    ],
    label: 'External Accounts',
    isCollapsed: true,
  };

  const props = {
    values: [
      {
        label: 'Montezumas Cat Food',
        value: -900000,
      },
      {
        label: 'Spice 6 Palak Paneer',
        value: 200,
      },
      {
        label:
          'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
        value: 600,
      },
      {
        label:
          'Things that I really should not spend my money on but I do because I do not really care is this long enough yet because I want a really long title',
        value: 600,
      },
    ],
    label: 'External Accounts',
    isCollapsed: false,
  };

  const component = mount(<ItemizationBox {...props} />);

  t.deepEquals(
    component.state(),
    {height: '100%'},
    'The collapsed state should be false',
  );

  component.instance().componentDidUpdate(prevProps);

  // Height is 0 here due to how the components render in Enzyme.
  t.deepEquals(
    component.state(),
    {height: 0},
    'The collapsed state should be true',
  );

  t.end();
});
