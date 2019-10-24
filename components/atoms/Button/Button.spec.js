import {mount} from 'enzyme';
import React from 'react';
import test from 'tape';
import TrashIcon from '~components/atoms/icons/TrashIcon/TrashIcon';
import {colors} from '~constants/js/colors';
import Button from './Button';

test('Button - rendering', (t) => {
  t.plan(2);

  const buttonComponent = mount(<Button onClick={() => null}>Testing</Button>);

  t.equal(
    buttonComponent.find('button').length,
    1,
    'should render as an html button'
  );

  const linkComponent = mount(<Button to="/url">Testing</Button>);

  t.equal(linkComponent.find('a').length, 1, 'should render as a Link');
});

test('Button - rendering with a linkComponent prop', (t) => {
  t.plan(1);

  const linkComponent = mount(
    <Button to="/url" linkComponent={Button}>
      Testing
    </Button>
  );

  t.equal(linkComponent.find('Button').length, 2, 'should render as a Link');
});

test('Button - disabling', (t) => {
  t.plan(2);

  const buttonComponent = mount(
    <Button disabled onClick={() => null}>
      Testing
    </Button>
  );

  t.true(
    buttonComponent
      .find('button')
      .first()
      .prop('disabled'),
    'should render as disabled button'
  );

  const linkComponent = mount(
    <Button disabled to="/url">
      Testing
    </Button>
  );

  t.true(
    linkComponent
      .find('a')
      .first()
      .hasClass('disabled'),
    'should include "disabled" class'
  );
});

test('Button - variant', (t) => {
  t.plan(3);

  const variantPrimary = mount(<Button variant="primary">Hello</Button>);

  t.true(
    variantPrimary
      .find('button')
      .first()
      .hasClass('btn-primary'),
    'should render a primary button'
  );

  const variantIcon = mount(
    <Button variant="icon" title="Delete Me">
      <TrashIcon />
    </Button>
  );

  t.true(
    variantIcon
      .find('button')
      .first()
      .hasClass('btn-icon'),
    'should render an icon button'
  );

  const noVariant = mount(<Button>Hello</Button>);

  t.false(
    noVariant
      .find('button')
      .first()
      .hasClass('btn-primary'),
    'should not have a variant class'
  );
});

test('Button - loading', (t) => {
  t.plan(3);

  const loadingPrimary = mount(
    <Button variant="primary" isLoading>
      Hello
    </Button>
  );

  t.equals(
    loadingPrimary.find('Spinner').prop('fill'),
    colors.white,
    'Shows white spinner'
  );

  const loadingSecondaryDark = mount(
    <Button variant="secondary" dark isLoading>
      Hello
    </Button>
  );

  t.equals(
    loadingSecondaryDark.find('Spinner').prop('fill'),
    colors['super-dark'],
    'Shows colored spinner'
  );

  const loadingTertiaryLight = mount(
    <Button variant="tertiary" light isLoading>
      Hello
    </Button>
  );

  t.equals(
    loadingTertiaryLight.find('Spinner').prop('fill'),
    colors['royal'],
    'Shows colored spinner'
  );
});
