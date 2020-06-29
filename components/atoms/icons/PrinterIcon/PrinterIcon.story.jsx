import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import PrinterIcon from './PrinterIcon.tsx';
import PrinterIconReadme from './PrinterIcon.mdx';

const stories = storiesOf('Atoms/Icons/PrinterIcon', module);

stories.addParameters({
  docs: {
    page: PrinterIconReadme,
  },
});

const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => <PrinterIcon {...defaultProps()} />);
