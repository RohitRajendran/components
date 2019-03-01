import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ChanceOfSuccess, {percentDescriptor, percentIsValid} from '../../components/ChanceOfSuccess';

test('Spinner - renders', (t) => {
  const props = {
    percent: 30,
    currentPlanChanceOfSuccess: 30,
    refreshedPlanChanceOfSuccess: 30,
    isRunningPlan: false,
    isDraftPlan: false,
  }
  const component = mount(
    <ChanceOfSuccess
      {...props}
    />);
  
  t.equals(
    component.find('svg').length,
    1,
    'Should locate the SVG'
  );

  t.equals(
    component.find('style').length,
    1,
    'Should include the component inline styles'
  );

  t.end();
});

test('ChanceOfSuccess - Correctly describes the value', (t) => {
  t.plan(5);
  
  t.equals(
    percentDescriptor(0),
    'Very Low'
  );

  t.equals(
    percentDescriptor(30),
    'Low'
  );

  t.equals(
    percentDescriptor(50),
    'Moderate'
  );

  t.equals(
    percentDescriptor(79),
    'High'
  );

  t.equals(
    percentDescriptor(99),
    'Very High'
  );
});

test('ChanceOfSuccess - Correctly informs if the value is valid', (t) => {
  t.plan(5);
  
  t.true(
    percentIsValid(50)
  );

  t.true(
    percentIsValid(0)
  );

  t.true(
    percentIsValid(100)
  );

  t.false(
    percentIsValid(-5)
  );


  t.false(
    percentIsValid(150)
  );
});