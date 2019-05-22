import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import {PureSlider as Slider} from '~components/atoms/Slider/Slider';
import {withReadme} from 'storybook-readme';
import SliderReadme from '~components/atoms/Slider/Slider.md';
import {StateDecorator, Store} from '@sambego/storybook-state';
import {number, text, select} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/Slider', module);

const store = new Store({
  slider1: '5',
  slider2: '5',
  slider3: '5',
});

stories
  .addDecorator(withReadme(SliderReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = (variant, formName) => ({
  tooltipStickyVariant: select('Variant', ['green', 'purple', null], variant),
  leftAnnotate: text('leftAnnotate', 'Less Cats'),
  rightAnnotate: text('rightAnnotate', 'More Cats'),
  tooltip: text('tooltip', 'How many cats would you like?'),
  tooltipStickyPosition: number('tooltipStickyPosition', 4),
  value: store.get(formName),
  name: formName,
  onChange: (name, value) => store.set({[name]: value}),
});

stories.add('default', () => <Slider {...defaultProps(null, 'slider1')} />);

stories.add('green', () => <Slider {...defaultProps('green', 'slider2')} />);

stories.add('purple', () => <Slider {...defaultProps('purple', 'slider3')} />);
