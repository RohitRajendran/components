import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import Slider from '~components/atoms/Slider/Slider';
import {withReadme} from 'storybook-readme';
import SliderReadme from '~components/atoms/Slider/Slider.md';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Atoms/Slider', module);

const store = new Store({
  value: 4,
});

stories
  .addDecorator(withReadme(SliderReadme))
  .addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

stories.add('default', () => (
  <Slider
    value={store.get('value')}
    leftAnnotate="Lower Risk"
    rightAnnotate="Higher Risk"
    name="mySlider"
    tooltip={<div>Hello</div>}
    tooltipStickyVariant="green-star"
    tooltipStickyPosition={5}
    onChange={(value) => store.set({value})}
  />
));
