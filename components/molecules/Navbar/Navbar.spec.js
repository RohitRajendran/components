import {mount, shallow} from 'enzyme';
import {stub} from 'sinon';
import React from 'react';
import test from 'tape';
import Navbar from './Navbar';

test('Navbar - renders', (t) => {
  window.requestAnimationFrame = stub();
  const component = shallow(<Navbar />);

  t.equals(
    component.find('nav').length,
    1,
    'Should load the Navbar component.'
  );

  t.end();
});

test('Navbar - componentWillUnmount', (t) => {
  window.requestAnimationFrame = stub();
  const component = mount(<Navbar />);

  component.instance().componentWillUnmount();

  t.pass();

  t.end();
});

test('Navbar - toggleActive', (t) => {
  window.requestAnimationFrame = stub();
  const props = {
    isOpen: true,
  };

  const component = mount(<Navbar {...props} />);

  t.equals(component.state().active, null, 'Active id should start null.');

  component.instance().toggleActive('primary-1');

  t.equals(
    component.state().active,
    'primary-1',
    'Should correctly set the active id.'
  );

  t.end();
});

test('Navbar - toggleDrawer', (t) => {
  window.requestAnimationFrame = stub();
  const component = mount(<Navbar />);

  t.equals(
    component.state().open,
    false,
    'Drawer open should start as false if not specified as such.'
  );

  component.instance().toggleDrawer();

  t.equals(
    component.state().open,
    true,
    'Drawer open state should toggle to true.'
  );

  t.end();
});

test('Navbar - toggleFixed', (t) => {
  window.requestAnimationFrame = stub();
  const props = {
    isFixed: false,
    isStatic: false,
    transitionToFixed: 100,
    logoLink: 'https://unitedincome.com',
  };

  const component = mount(<Navbar {...props} />);

  t.equals(
    component.state().fixed,
    false,
    'Unless specified the fixed state should start as false.'
  );

  component.instance().toggleFixed();

  t.equals(component.state().fixed, false, 'The state should remain as false.');

  // Mimics window scroll.
  window.scrollY = 4000;

  component.instance().toggleFixed();

  t.equals(component.state().fixed, true, 'The state should toggle to fixed.');

  t.end();
});

test('Navbar - generateNavigation', (t) => {
  window.requestAnimationFrame = stub();
  const props = {
    isFixed: false,
    isStatic: false,
    transitionToFixed: 100,
  };

  const component = mount(<Navbar {...props} />);

  const results = component.instance().generateNavigation('primary', [
    {
      label: 'Login',
      link: '#',
      hideFixed: true,
    },
    {
      label: 'Join us Today',
      link: '#',
      variant: 'secondary',
      hideStatic: true,
    },
  ]);

  t.true(results);

  t.end();
});

test('Navbar - generateNavigation handler', (t) => {
  window.requestAnimationFrame = stub();
  const props = {
    isFixed: false,
    isStatic: false,
    transitionToFixed: 100,
    linkComponent: 'div',
    logoLink: 'https://unitedincome.com',
    rightNavigation: [
      {
        label: 'Login',
        link: '#',
        hideFixed: true,
      },
      {
        label: 'Join us Today',
        link: '#',
        variant: 'secondary',
        hideStatic: true,
      },
    ],
  };

  const component = mount(<Navbar {...props} />);

  component
    .find('.uic--navbar__right-navigation')
    .find('li')
    .at(0)
    .prop('onClick')();

  t.equals(component.state().active, 'right-0', 'Should set the active state.');

  t.end();
});
