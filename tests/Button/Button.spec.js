import test from 'tape';
import React from 'react';
import {mount} from 'enzyme';
import Button from '../../components/Button';
import {Link} from 'react-router';

test('Button - rendering', (t) => {
  t.plan(2);

  const buttonComponent = mount(<Button onClick={() => null}>Testing</Button>);

  t.equal(
    buttonComponent.find('button').length,
    1,
    'should render as an html button'
  );

  const linkComponent = mount(<Button to="/url">Testing</Button>);

  t.equal(linkComponent.find(Link).length, 1, 'should render as a Link');
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
      .find(Link)
      .first()
      .hasClass('disabled'),
    'should include "disabled" class'
  );
});

test('Button - variant', (t) => {
  t.plan(2);

  const variantPrimary = mount(<Button variant="primary">Hello</Button>);

  t.true(
    variantPrimary
      .find('button')
      .first()
      .hasClass('btn-primary'),
    'should render a primary button'
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
