import React from 'react';
import {storiesOf} from '@storybook/react';
import ColorsReadme from './colors.mdx';
import {colors} from '../../../constants/js/colors';

const stories = storiesOf('Utilities/Styles', module);

stories.addParameters({
  docs: {
    page: ColorsReadme,
  },
});

export const ColorStyles = () => (
  <table className="uic--w-100 uic--text-left">
    <tr>
      <th>Token</th>
      <th>Value</th>
      <th>Example</th>
    </tr>
    {Object.entries(colors).map(([key, value]) => (
      <tr key={key}>
        <td>{key}</td>

        <td>{value}</td>

        <td>
          <div
            style={{height: '100px', width: '100px', backgroundColor: value}}
          />
        </td>
      </tr>
    ))}
  </table>
);

stories.add('colors', () => <ColorStyles />);
