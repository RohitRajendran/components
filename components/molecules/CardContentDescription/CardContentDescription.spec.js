import {mount} from 'enzyme';
import React from 'react';
import {stub, useFakeTimers} from 'sinon';
import test from 'tape';
import CardContentDescription from './CardContentDescription';

test('CardContentDescription - fetchData', async (t) => {
  const props = {
    onChange: stub().resolves('Montezuma is the best cat'),
    isValid: true,
    values: ['montezuma'],
    fetchStatus: stub(),
  };

  const clock = useFakeTimers();
  const component = mount(<CardContentDescription {...props} />);
  component.instance().fetchData();
  await clock.tick(1000);

  t.deepEquals(
    component.state(),
    {isFetchingData: false},
    'State should be correctly set..',
  );

  clock.restore();
  t.end();
});

test('CardContentDescription - checkValidityAndFetch', async (t) => {
  const props = {
    onChange: stub().resolves('Montezuma is the best cat'),
    isValid: true,
    values: ['montezuma'],
    fetchStatus: stub(),
  };

  const component = new CardContentDescription(props);
  component.setState = stub();
  await component.checkValidityAndFetch(true);

  t.deepEquals(
    component.setState.args[0][0],
    {isFetchingData: true},
    'Sets fetching to true',
  );

  t.end();
});

test('CardContentDescription - componentDidMount', (t) => {
  const props = {
    onChange: stub().resolves('Montezuma is the best cat'),
    isValid: true,
    values: ['montezuma'],
    fetchStatus: stub(),
  };

  const component = mount(<CardContentDescription {...props} />);

  t.deepEquals(
    component.state(),
    {isFetchingData: true},
    'Should go into fetching mode.',
  );

  t.end();
});

test('CardContentDescription - componentDidUpdate', (t) => {
  const props = {
    onChange: stub().resolves('Montezuma is the best cat'),
    isValid: true,
    values: ['montezuma'],
    fetchStatus: stub(),
  };

  const component = mount(<CardContentDescription {...props} />);

  component.setProps({
    values: ['montezuma2'],
  });

  t.deepEquals(
    component.state(),
    {isFetchingData: true},
    'Should go into fetching mode.',
  );

  // Toggle to valid to make sure it correctly sets the validation state.
  component.setProps({
    values: ['montezuma2'],
    isValid: true,
  });

  t.deepEquals(
    component.state(),
    // isFetching is true here due to how this function is being called.
    {isFetchingData: true},
    'Should go into fetching mode.',
  );

  t.end();
});
