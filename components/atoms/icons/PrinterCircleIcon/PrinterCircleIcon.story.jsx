import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import PrinterCircleIcon from './PrinterCircleIcon.tsx';
import PrinterCircleIconReadme from './PrinterCircleIcon.mdx';

const stories = storiesOf('Atoms/Icons/PrinterCircleIcon', module);

stories.addParameters({
  docs: {
    page: PrinterCircleIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <PrinterCircleIcon {...defaultProps()} />);
