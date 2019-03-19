import React from 'react';
import {storiesOf} from '@storybook/react';
import Slider from '../../components/Slider/Slider';
import {withReadme} from 'storybook-readme';
import SliderReadme from '../../components/Slider/Slider.md';

const stories = storiesOf('Atoms/Slider', module);

stories.addDecorator(withReadme(SliderReadme));

stories.add('default', () => (
  <Slider />
));
