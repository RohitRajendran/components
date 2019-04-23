import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import HomeCircleIllustration from './HomeCircleIllustration';
import HomeCircleIllustrationReadMe from './HomeCircleIllustration.md';

const stories = storiesOf('Atoms/Illustrations/HomeCircleIllustration', module);

stories.addDecorator(withReadme(HomeCircleIllustrationReadMe));

const defaultProps = () => ({
  fill: text('fill', '#fff'),
  height: text('height', '265'),
  width: text('width', '160'),
});

stories.add('default', () => <HomeCircleIllustration {...defaultProps()} />);
