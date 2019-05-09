import React from 'react';
import test from 'tape';
import {shallow, mount} from 'enzyme';
import {stub} from 'sinon';
import ItemizationWidget from './ItemizationWidget';

test('ItemizationWidget - renders', (t) => {
  window.requestAnimationFrame = stub();

  const props = {
    values: [
      {
        label: 'Primary Residence',
        value: 4000,
      },
      {
        label: 'Other Essentials',
        threshold: 1000,
        suffix: 'mo',
        thresholdWarning:
          'You have itemized more than your initial estimate so we have increased that total for you.',
        items: [
          {
            value: 1000,
            label: 'Itemized',
          },
          {
            value: 50,
            label: 'Estimated by UI',
          },
        ],
      },
    ],
    title: 'Essential Spending',
    totalSuffix: 'mo',
  };

  shallow(<ItemizationWidget {...props} />);
  t.pass('the component rendered!');
  t.end();
});

test('ItemizationWidget - determineError', (t) => {
  t.plan(3);

  window.requestAnimationFrame = stub();

  const props = {
    values: [
      {
        label: 'Primary Residence',
        value: 4000,
      },
      {
        label: 'Other Essentials',
        threshold: 1000,
        suffix: 'mo',
        thresholdWarning:
          'You have itemized more than your initial estimate so we have increased that total for you.',
        items: [
          {
            value: 1000,
            label: 'Itemized',
          },
          {
            value: 50,
            label: 'Estimated by UI',
          },
        ],
      },
    ],
    title: 'Essential Spending',
    totalSuffix: 'mo',
  };

  const props2 = {
    values: [
      {
        label: 'Primary Residence',
        value: 4000,
      },
      {
        label: 'Other Essentials',
        threshold: 1000,
        value: 1100,
        suffix: 'mo',
        thresholdWarning:
          'You have itemized more than your initial estimate so we have increased that total for you.',
      },
    ],
    title: 'Essential Spending',
    totalSuffix: 'mo',
  };

  const component = mount(<ItemizationWidget {...props} />);

  component.instance().determineError();

  t.equals(component.state().warning, true, 'Should be in a warning state.');

  t.equals(
    component.state().thresholdWarning,
    'You have itemized more than your initial estimate so we have increased that total for you.',
    'Should save the threshold warning to state.'
  );

  const component2 = mount(<ItemizationWidget {...props2} />);

  t.equals(component2.state().warning, true, 'Should be in a warning state.');
});

test('ItemizationWidget - sumTotal', (t) => {
  t.plan(2);

  window.requestAnimationFrame = stub();

  const props = {
    values: [
      {
        label: 'Primary Residence',
        value: 4000,
      },
      {
        label: 'Other Essentials',
        threshold: 1000,
        suffix: 'mo',
        thresholdWarning:
          'You have itemized more than your initial estimate so we have increased that total for you.',
        items: [
          {
            value: 1000,
            label: 'Itemized',
          },
          {
            value: 50,
            label: 'Estimated by UI',
          },
        ],
      },
    ],
    title: 'Essential Spending',
    totalSuffix: 'mo',
  };

  const component = mount(<ItemizationWidget {...props} />);

  component.instance().determineError();

  t.equals(
    component.instance().sumTotal(props.values),
    5050,
    'Should sum the entire object.'
  );

  t.equals(
    component.instance().sumTotal(props.values[1].items),
    1050,
    'Should sum the individual item.'
  );
});

test('ItemizationWidget - handleClick', (t) => {
  t.plan(2);

  window.requestAnimationFrame = stub();

  const props = {
    values: [
      {
        label: 'Primary Residence',
        value: 4000,
      },
      {
        label: 'Other Essentials',
        threshold: 1000,
        suffix: 'mo',
        thresholdWarning:
          'You have itemized more than your initial estimate so we have increased that total for you.',
        items: [
          {
            value: 1000,
            label: 'Itemized',
          },
          {
            value: 50,
            label: 'Estimated by UI',
          },
        ],
      },
    ],
    title: 'Essential Spending',
    totalSuffix: 'mo',
  };

  const component = mount(<ItemizationWidget {...props} />);

  t.equals(component.state().open, false, 'Should initialize as closed.');

  component.instance().handleClick();

  t.equals(component.state().open, true, 'Should open the dropdown.');
});
