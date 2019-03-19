import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import {select, text, boolean} from '@storybook/addon-knobs';
import ButtonReadme from './Button.md';
import Button from './Button';

const stories = storiesOf('Atoms/Button', module);

stories.addDecorator(withReadme(ButtonReadme));

const permutations = [
  {
    variant: 'primary',
    background: 'light',
  },
  {
    variant: 'primary',
    background: 'light',
  },
  {
    variant: 'secondary',
    background: 'light',
  },
  {
    variant: 'secondary',
    background: 'light',
  },
  {
    variant: 'secondary',
    background: 'dark',
  },
  {
    variant: 'secondary',
    background: 'dark',
  },
  {
    variant: 'tertiary',
    background: 'light',
  },
  {
    variant: 'tertiary',
    background: 'light',
  },
  {
    variant: 'tertiary',
    background: 'dark',
  },
  {
    variant: 'tertiary',
    background: 'dark',
  },
  {
    variant: 'link',
    background: 'light',
  },
  {
    variant: 'link',
    background: 'dark',
  },
];

const defaultProps = (
  defaultVariant = 'primary',
  defaultBackground = 'light'
) => ({
  variant: select(
    'Variant',
    {
      Primary: 'primary',
      Secondary: 'secondary',
      Tertiary: 'tertiary',
      Link: 'link',
    },
    defaultVariant
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
  disabled: boolean('Disabled', false),
  isLoading: boolean('isLoading', false),
});

for (const permutation of permutations) {
  stories.add(`${permutation.variant} ${permutation.background}`, () => {
    const props = defaultProps(permutation.variant, permutation.background);

    return (
      <Button
        variant={props.variant}
        light={props.background === 'light'}
        dark={props.background === 'dark'}
        disabled={props.disabled}
        isLoading={props.isLoading}
      >
        {props.text}
      </Button>
    );
  });
}

stories.add('disabled', () => <Button disabled>Testing</Button>);
