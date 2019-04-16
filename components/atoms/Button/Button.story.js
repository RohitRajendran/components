import React from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import {select, text, boolean} from '@storybook/addon-knobs';
import ButtonReadme from './Button.md';
import Button from './Button';
import TrashIcon from '~components/atoms/icons/TrashIcon/TrashIcon';

const stories = storiesOf('Atoms/Button', module);

stories.addDecorator(withReadme(ButtonReadme));

const permutations = [
  {
    variant: 'primary',
    background: 'light',
  },
  {
    variant: 'primary',
    background: 'dark',
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
    variant: 'tertiary',
    background: 'light',
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
  {
    variant: 'icon',
    background: 'light',
    text: <TrashIcon />,
    title: 'Delete',
  },
  {
    variant: 'icon',
    background: 'dark',
    text: <TrashIcon />,
    title: 'Delete',
  },
];

const defaultProps = (
  defaultVariant = 'primary',
  defaultBackground = 'light',
  defaultText = 'Become A Member',
  defaultTitle = ''
) => ({
  variant: select(
    'Variant',
    {
      Primary: 'primary',
      Secondary: 'secondary',
      Tertiary: 'tertiary',
      Link: 'link',
      Icon: 'icon',
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
  text:
    // Icon buttons are meant to display components,
    // but the text field is not applicable for components.
    defaultVariant === 'icon' ? defaultText : text('Button Text', defaultText),
  disabled: boolean('Disabled', false),
  isLoading: boolean('isLoading', false),
  title: text('Title Text', defaultTitle),
});

for (const permutation of permutations) {
  stories.add(`${permutation.variant} ${permutation.background}`, () => {
    const props = defaultProps(
      permutation.variant,
      permutation.background,
      permutation.text,
      permutation.title
    );

    return (
      <Button
        variant={props.variant}
        light={props.background === 'light'}
        dark={props.background === 'dark'}
        disabled={props.disabled}
        isLoading={props.isLoading}
        title={props.title}
      >
        {props.text}
      </Button>
    );
  });
}

stories.add('disabled', () => <Button disabled>Testing</Button>);
