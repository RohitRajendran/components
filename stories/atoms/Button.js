import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import Button from '../../components/Button';

const stories = storiesOf('Atoms/Button', module);

stories.addDecorator(withKnobs);

const permutations = [
  {
    type: 'primary',
    background: 'light',
  },
  {
    type: 'secondary',
    background: 'light',
  },
  {
    type: 'secondary',
    background: 'dark',
  },
  {
    type: 'tertiary',
    background: 'light',
  },
  {
    type: 'tertiary',
    background: 'dark',
  },
];

const defaultProps = (
  defaultType = 'primary',
  defaultBackground = 'light'
) => ({
  type: select(
    'Type',
    {
      Primary: 'primary',
      Secondary: 'secondary',
      Tertiary: 'tertiary',
    },
    defaultType
  ),
  background: select(
    'Background',
    {
      Light: 'light',
      Dark: 'dark',
    },
    defaultBackground
  ),
  text: text('Button Text', 'Become A Member'),
});

for (const permutation of permutations) {
  stories.add(`${permutation.type} ${permutation.background}`, () => {
    const props = defaultProps(permutation.type, permutation.background);

    return (
      <Button
        type={props.type}
        light={props.background === 'light'}
        dark={props.background === 'dark'}
      >
        {props.text}
      </Button>
    );
  });
}

stories.add('disabled', () => <Button disabled>Testing</Button>);
