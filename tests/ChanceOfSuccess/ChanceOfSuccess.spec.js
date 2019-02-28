import test from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import ChanceOfSuccess, {percentDescriptor, percentIsValid} from '../../components/ChanceOfSuccess';

test('Spinner - renders', (t) => {
  shallow(<ChanceOfSuccess />);
  t.pass('Renders');
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