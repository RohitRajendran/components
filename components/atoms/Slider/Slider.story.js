import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import Slider from '~components/atoms/Slider/Slider';
import {withReadme} from 'storybook-readme';
import SliderReadme from '~components/atoms/Slider/Slider.md';
import {StateDecorator, Store} from '@sambego/storybook-state';
import {number, text, select} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/Slider', module);

const store = new Store({
  slider1: 5,
  slider2: 5,
  slider3: 5,
});

stories
  .addDecorator(withReadme(SliderReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const optionDefaults = (variant, name) => ({
  tooltipStickyVariant: select('Variant', ['green', 'purple', null], variant),
  name: text('name', name),
  leftAnnotate: text('leftAnnotate', 'Less Cats'),
  rightAnnotate: text('rightAnnotate', 'More Cats'),
  tooltip: text('tooltip', 'How many cats would you like?'),
  tooltipStickyPosition: number('tooltipStickyPosition', 5),
});

stories.add('default', () => (
  <Slider
    value={store.get('slider1')}
    onChange={(name, value) => store.set({[name]: value})}
    {...optionDefaults(null, 'slider1')}
  />
));

stories.add('green', () => (
  <Slider
    value={store.get('slider2')}
    onChange={(name, value) => store.set({[name]: value})}
    {...optionDefaults('green', 'slider2')}
  />
));

stories.add('purple', () => (
  <Slider
    value={store.get('slider3')}
    onChange={(name, value) => store.set({[name]: value})}
    {...optionDefaults('purple', 'slider3')}
  />
));
