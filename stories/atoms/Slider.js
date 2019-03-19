import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import Slider from '../../components/Slider/Slider';
import {withReadme} from 'storybook-readme';
import SliderReadme from '../../components/Slider/Slider.md';
import {StateDecorator, Store} from '@sambego/storybook-state';
import _ from 'lodash';

const marks = _.fromPairs(_.range(11).map((x) => [x, x]));

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

stories.add('default', () => <Slider value={store.get('value')} name="mySlider" tooltip={<div>Hello</div>} marks={marks} tooltipStickyVariant="green-star" tooltipStickyPosition={5} onChange={(value) => store.set({value})} />);
