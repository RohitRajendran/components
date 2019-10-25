import {Store} from '@sambego/storybook-state';
import {boolean, select, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import CardShell from '~components/molecules/CardShell/CardShell';
import TooltipInput from './TooltipInput';
import TooltipReadMe from './TooltipInput.mdx';

const stories = storiesOf('Molecules/TooltipInput', module);

stories.addParameters({
  docs: {
    page: TooltipReadMe,
  },
});

const store = new Store({
  input: '',
});

store.subscribe(() => {
  forceReRender();
});

const defaultProps = () => ({
  label: text('label', 'Montezuma is the king of all cats.'),
  lightLabel: boolean('lightLabel', true),
  placement: select('placement', ['top', 'bottom', 'left', 'right'], 'bottom'),
  onConfirm: () => true,
  confirmLabel: text('confirmLabel', 'Confirm'),
  cancelLabel: text('cancelLabel', 'Cancel'),
  labelVariant: select(
    'labelVariant',
    ['link', 'icon', 'tertiary', 'secondary', 'primary'],
    'link'
  ),
  config: {
    name: 'input',
    label: 'Name',
    placeholder: 'Enter a name....',
    isValid: (value) => value && value.length > 3,
  },
});

stories.add('default', () => (
  <CardShell hideButton={true} onSubmit={() => true}>
    <p style={{fontSize: '1.2rem'}}>
      Meow meow, i tell my human sit in window and stare oooh, a bird, yum meow
      and walk away but stare at ceiling. Cat gets stuck in tree firefighters
      try to get cat down firefighters get stuck in tree cat eats firefighters
      slippers hopped up on catnip, for bite the neighbors bratty kid. Let me in
      let me out let me in let me out let me in let me out who broke this door
      anyway immediately regret falling into bathtub yet pet my belly, you know
      you want to; seize the hand and shred it! experiences short bursts of
      poo-phoria after going to the loo. Claw at curtains stretch and yawn
      nibble on tuna ignore human bite human hand sleep on .
    </p>

    <TooltipInput {...defaultProps()} />

    <p style={{fontSize: '1.2rem'}}>
      So refuse to drink water except out of someones glass really likes hummus
      stare at ceiling light yet take a big fluffing crap soft kitty warm kitty
      little ball of furr. Toy mouse squeak roll over. Swipe at owners legs
      sleep on my humans head for at four in the morning wake up owner
      meeeeeeooww scratch at legs and beg for food then cry and yowl until they
      wake up at two pm jump on window and sleep while observing the bootyful
      cat next door that u really like but who already has a boyfriend end up
      making babies with her and let her move in but eat owners food but claws
      in the eye of the beholder and meowing chowing and wowing. Destroy the
      blinds no, you cant close the door, i havent decided whether or not i
      wanna go out. Cat snacks bring your owner a dead bird yet i like fish or i
      see a bird i stare at it i meow at it i do a wiggle come here birdy favor
      packaging over toy woops poop hanging from butt must get rid run run
      around house drag poop on floor maybe it comes off woops left brown marks
      on floor human slave clean lick butt now thinking longingly about tuna
      brine. Hide when guests come over sit on human they not getting up ever,
      plop down in the middle where everybody walks. Scratch my tummy actually i
      hate you now fight me when owners are asleep, cry for no apparent reason.
    </p>
  </CardShell>
));

stories.add('remove option', () => (
  <CardShell hideButton={true} onSubmit={() => true}>
    <p style={{fontSize: '1.2rem'}}>
      Meow meow, i tell my human sit in window and stare oooh, a bird, yum meow
      and walk away but stare at ceiling. Cat gets stuck in tree firefighters
      try to get cat down firefighters get stuck in tree cat eats firefighters
      slippers hopped up on catnip, for bite the neighbors bratty kid. Let me in
      let me out let me in let me out let me in let me out who broke this door
      anyway immediately regret falling into bathtub yet pet my belly, you know
      you want to; seize the hand and shred it! experiences short bursts of
      poo-phoria after going to the loo. Claw at curtains stretch and yawn
      nibble on tuna ignore human bite human hand sleep on .
    </p>

    <TooltipInput {...defaultProps()} onRemove={() => true} />

    <p style={{fontSize: '1.2rem'}}>
      So refuse to drink water except out of someones glass really likes hummus
      stare at ceiling light yet take a big fluffing crap soft kitty warm kitty
      little ball of furr. Toy mouse squeak roll over. Swipe at owners legs
      sleep on my humans head for at four in the morning wake up owner
      meeeeeeooww scratch at legs and beg for food then cry and yowl until they
      wake up at two pm jump on window and sleep while observing the bootyful
      cat next door that u really like but who already has a boyfriend end up
      making babies with her and let her move in but eat owners food but claws
      in the eye of the beholder and meowing chowing and wowing. Destroy the
      blinds no, you cant close the door, i havent decided whether or not i
      wanna go out. Cat snacks bring your owner a dead bird yet i like fish or i
      see a bird i stare at it i meow at it i do a wiggle come here birdy favor
      packaging over toy woops poop hanging from butt must get rid run run
      around house drag poop on floor maybe it comes off woops left brown marks
      on floor human slave clean lick butt now thinking longingly about tuna
      brine. Hide when guests come over sit on human they not getting up ever,
      plop down in the middle where everybody walks. Scratch my tummy actually i
      hate you now fight me when owners are asleep, cry for no apparent reason.
    </p>
  </CardShell>
));
