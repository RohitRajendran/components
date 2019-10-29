import {mount, shallow} from 'enzyme';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import Navbar from './Navbar';

test('Navbar - renders', (t) => {
  window.requestAnimationFrame = stub();
  const component = shallow(<Navbar />);

  t.equals(
    component.find('nav').length,
    1,
    'Should load the Navbar component.',
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

test('Navbar - toggleDrawer', (t) => {
  window.requestAnimationFrame = stub();
  const component = mount(<Navbar />);

  t.equals(
    component.state().open,
    false,
    'Drawer open should start as false if not specified as such.',
  );

  component.instance().toggleDrawer();

  t.equals(
    component.state().open,
    true,
    'Drawer open state should toggle to true.',
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
    'Unless specified the fixed state should start as false.',
  );

  component.instance().toggleFixed();

  t.equals(component.state().fixed, false, 'The state should remain as false.');

  // Mimics window scroll.
  window.scrollY = 4000;

  component.instance().toggleFixed();

  t.equals(component.state().fixed, true, 'The state should toggle to fixed.');

  t.end();
});

test('Navbar - toggleActive', (t) => {
  window.requestAnimationFrame = stub();
  const props = {
    isFixed: false,
    isStatic: false,
    transitionToFixed: 100,
    isOpen: true,
    logoLink: 'https://unitedincome.com',
    leftNavigation: [
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
    linkComponent: 'a',
  };

  const component = mount(<Navbar {...props} />);

  component.setState({open: true});

  t.equals(component.state().open, true, 'Should default to true.');

  component.instance().toggleActive();

  t.equals(
    component.state().open,
    false,
    'Should close the drawer if it is open',
  );

  t.end();
});

test('Navbar - generateNavigation', (t) => {
  window.requestAnimationFrame = stub();
  const props = {
    isFixed: false,
    isStatic: false,
    transitionToFixed: 100,
    linkComponent: 'div',
  };

  const component = mount(<Navbar {...props} />);

  const results = component.instance().generateNavigation([
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

test('Navbar - componentDidUpdate', (t) => {
  t.plan(3);
  window.requestAnimationFrame = stub();
  const props = {
    isFixed: true,
    isStatic: false,
    transitionToFixed: 100,
    linkComponent: 'div',
  };

  const component = mount(<Navbar {...props} />);

  t.deepEquals(component.state().fixed, true, 'Should be fixed.');

  component.setProps({isFixed: false});

  t.deepEquals(component.state().fixed, false, 'Should not be fixed.');

  component.instance().componentDidUpdate({isFixed: false});

  t.deepEquals(
    component.state().fixed,
    false,
    'Should still not be fixed as the props never updated.',
  );
});

test('Navbar - handleResize', (t) => {
  window.requestAnimationFrame = stub();
  const props = {
    isFixed: true,
    isStatic: false,
    transitionToFixed: 100,
    linkComponent: 'div',
  };

  const component = mount(<Navbar {...props} />);

  t.deepEquals(component.state().mobile, false, 'Should be false.');

  window.innerWidth = 500;

  component.instance().handleResize();

  t.deepEquals(
    component.state().mobile,
    true,
    'Should toggle to the mobile state.',
  );

  t.end();
});

test('Navbar - handleResize (Close)', (t) => {
  window.requestAnimationFrame = stub();
  const props = {
    isFixed: true,
    isStatic: false,
    transitionToFixed: 100,
    linkComponent: 'div',
  };

  const component = mount(<Navbar {...props} />);

  component.setState({
    open: true,
  });

  t.deepEquals(component.state().open, true, 'Should be true.');

  window.innerWidth = 1000;

  component.instance().handleResize();

  t.deepEquals(
    component.state().open,
    false,
    'Should toggle to the state to closed.',
  );

  t.end();
});
