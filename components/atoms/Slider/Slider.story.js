import {StateDecorator, Store} from '@sambego/storybook-state';
import {number, select, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import {PureSlider as Slider} from '~components/atoms/Slider/Slider';
import SliderReadme from '~components/atoms/Slider/Slider.mdx';

const stories = storiesOf('Atoms/Slider', module);

stories.addParameters({
  docs: {
    page: SliderReadme,
  },
});

const store = new Store({
  slider1: '5',
  slider2: '5',
  slider3: '5',
});

stories.addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = (variant, formName) => ({
  tooltipStickyVariant: select('variant', ['green', 'purple', null], variant),
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
