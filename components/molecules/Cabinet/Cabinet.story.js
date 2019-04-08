import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import Cabinet from './Cabinet';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import CabinetReadme from './Cabinet.md';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Molecules/Cabinet', module);

const store = new Store({
  cabinet: true,
});

stories
  .addDecorator(withReadme(CabinetReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({CabinetName, header}) => ({
  visibleInPrint: boolean('visibleInPrint', false),
  show: store.get('cabinet'),
  header: text('header', header),
  toggle: (name, value) => store.set({[name]: value}),
  name: CabinetName,
  label: <div>Open the Cabinet</div>,
  handleWithState: true,
});

stories.add('default', () => (
  <Cabinet
    {...defaultProps({
      CabinetName: 'cabinet',
      header: '10 Reasons Montezuma is the Best Cat',
    })}
  >
    <h1>These are all the reasons why Montezuma is the best cat.</h1>
    <h2>He has really nice fur</h2>
    <p>He really does have nice fur, it is so soft.</p>
    <h2>He meows</h2>
    <p>All cats meow, but his is the nicest.</p>
    <h2>He enjoys naps</h2>
    <p>He enjoys napping on people.</p>
    <h2>He is the cutest</h2>
    <p>I mean, look at him.</p>
    <img src="https://jamesiv.es/assets/images/montezuma.png" alt="Montezuma" />
    <h2>He likes fish</h2>
    <p>He likes it.</p>
  </Cabinet>
));
