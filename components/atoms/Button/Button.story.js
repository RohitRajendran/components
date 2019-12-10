import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import TrashIcon from '~components/atoms/icons/TrashIcon/TrashIcon';
import Button from './Button';
import ButtonReadme from './Button.mdx';

const stories = storiesOf('Atoms/Button', module);

stories.addParameters({
  docs: {
    page: ButtonReadme,
  },
});

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
    variant: 'link',
    background: 'light',
    accent: 'warning',
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

const defaultProps = ({
  defaultVariant = 'primary',
  defaultBackground = 'light',
  defaultText = 'Become A Member',
  defaultTitle = '',
  defaultAccent = '',
}) => ({
  variant: select(
    'Variant',
    {
      Primary: 'primary',
      Secondary: 'secondary',
      Tertiary: 'tertiary',
      Link: 'link',
      Icon: 'icon',
    },
    defaultVariant,
  ),
  background: select(
    'Background',
    {
      Light: 'light',
      Dark: 'dark',
    },
    defaultBackground,
  ),
  text:
    // Icon buttons are meant to display components,
    // but the text field is not applicable for components.
    defaultVariant === 'icon' ? defaultText : text('Button Text', defaultText),
  disabled: boolean('disabled', false),
  isLoading: boolean('isLoading', false),
  title: text('title', defaultTitle),
  accent: boolean('accent', defaultAccent),
});

for (const permutation of permutations) {
  const storyName = [
    permutation.variant,
    permutation.background,
    ...(permutation.accent ? [permutation.accent] : []),
  ].join(' ');

  stories.add(storyName, () => {
    const props = defaultProps({
      defaultVariant: permutation.variant,
      defaultBackground: permutation.background,
      defaultText: permutation.text,
      defaultTitle: permutation.title,
      defaultAccent: permutation.accent,
    });

    return (
      <Button
        variant={props.variant}
        light={props.background === 'light'}
        dark={props.background === 'dark'}
        disabled={props.disabled}
        isLoading={props.isLoading}
        title={props.title}
        accent={props.accent}
      >
        {props.text}
      </Button>
    );
  });
}

stories.add('disabled', () => <Button disabled>Testing</Button>);
