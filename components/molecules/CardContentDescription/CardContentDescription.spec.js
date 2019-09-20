import {mount} from 'enzyme';
import React from 'react';
import {stub, useFakeTimers} from 'sinon';
import test from 'tape';
import CardContentDescription from './CardContentDescription';

test('CardContentDescription - fetchData', async (t) => {
  const props = {
    onChange: stub().resolves('Montezuma is the best cat'),
    validate: () => true,
    values: ['montezuma'],
  };

  const clock = useFakeTimers();
  const component = mount(<CardContentDescription {...props} />);
  component.instance().fetchData();
  await clock.tick(1000);

  t.deepEquals(
    component.state(),
    {valid: true, isFetching: false},
    'State should be correctly set..'
  );

  clock.restore();
  t.end();
});

test('CardContentDescription - checkValidityAndFetch (valid)', async (t) => {
  const props = {
    onChange: stub().resolves('Montezuma is the best cat'),
    validate: () => true,
    values: ['montezuma'],
  };

  const component = new CardContentDescription(props);
  component.setState = stub();
  await component.checkValidityAndFetch(true);

  t.deepEquals(
    component.setState.args[0][0],
    {isFetching: true, valid: true},
    'Sets fetching to true'
  );

  t.end();
});

test('CardContentDescription - checkValidityAndFetch (invalidvalid)', async (t) => {
  const props = {
    onChange: stub().resolves('Montezuma is the best cat'),
    validate: () => false,
    values: ['montezuma'],
  };

  const component = new CardContentDescription(props);
  component.state.valid = true;
  component.setState = stub();
  component.checkValidityAndFetch(false);

  t.deepEquals(
    component.setState.args[0][0],
    {valid: false},
    'Does not set fetching to true'
  );

  t.end();
});

test('CardContentDescription - componentDidUpdate (invalid/valid toggle)', (t) => {
  const props = {
    onChange: stub().resolves('Montezuma is the best cat'),
    validate: () => true,
    values: ['montezuma'],
  };

  const component = mount(<CardContentDescription {...props} />);

  component.setProps({
    values: ['montezuma2'],
  });

  t.deepEquals(
    component.state(),
    {valid: true, isFetching: true},
    'Should go into fetching mode.'
  );

  // Toggle to valid to make sure it correctly sets the validation state.
  component.setProps({
    values: ['montezuma2'],
    validate: () => false,
  });

  t.deepEquals(
    component.state(),
    // isFetching is true here due to how this function is being called.
    {valid: false, isFetching: true},
    'Should go into fetching mode.'
  );

  t.end();
});

test('CardContentDescription - componentDidUpdate (invalid)', (t) => {
  const props = {
    onChange: stub().resolves('Montezuma is the best cat'),
    validate: () => false,
    values: ['montezuma'],
  };

  const component = mount(<CardContentDescription {...props} />);

  component.setProps({
    values: ['montezuma2'],
  });

  t.deepEquals(
    component.state(),
    {valid: false, isFetching: false},
    'Should not go into fetching mode.'
  );

  t.end();
});
