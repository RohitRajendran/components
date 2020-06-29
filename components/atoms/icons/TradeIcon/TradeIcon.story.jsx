import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import TradeIcon from './TradeIcon.tsx';
import TradeIconReadme from './TradeIcon.mdx';

const stories = storiesOf('Atoms/Icons/TradeIcon', module);

stories.addParameters({
  docs: {
    page: TradeIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <TradeIcon {...defaultProps()} />);
