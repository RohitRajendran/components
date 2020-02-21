import {storiesOf} from '@storybook/react';
import React from 'react';
import {colors} from '~constants/js/colors';
import {zindex} from '~constants/js/zindex';
import zIndexReadMe from './zindex.mdx';

const stories = storiesOf('Utilities/Styles', module);

stories.addParameters({
  docs: {
    page: zIndexReadMe,
  },
});

const sharedStyles = {
  height: '200px',
  width: '200px',
  color: colors.white,
  fontSize: '1.6rem',
  fontWeight: 'bold',
};

const colorMap = [
  colors.midnight,
  colors['middle-purple'],
  colors.royal,
  colors.slate,
  colors.pink,
  colors.green,
  colors.orange,
  colors.yellow,
  colors['super-dark'],
  colors['orange-text'],
];

export const IndexStyles = () => (
  <div className="uic--position-relative">
    {Object.entries(zindex).map(([key, value], index) => {
      return (
        <div
          key={value}
          style={{
            ...sharedStyles,
            backgroundColor: colorMap[index],
            margin: `${index * 6 + 5}rem`,
          }}
          className={`uic--${key} uic--position-absolute`}
        >
          Sass: ${key} <br />
          Class: .uic--{key} <br />
          Value: {value}
        </div>
      );
    })}
  </div>
);

stories.add('zindex', () => <IndexStyles />);
