import React from 'react';
import {Store} from '@sambego/storybook-state';
import {storiesOf, forceReRender} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import Tooltip from './Tooltip';
import TooltipReadMe from './Tooltip.md';
import CardShell from '~components/molecules/CardShell/CardShell';
import {text, select, boolean} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/Tooltip', module);

const store = new Store({
  input: '',
});

store.subscribe(() => {
  forceReRender();
});

stories.addDecorator(withReadme(TooltipReadMe));

const defaultProps = (hoverEnabled, darkTooltip) => ({
  label: text('label', 'keyboard'),
  lightLabel: boolean('lightLabel', true),
  isDarkTooltip: boolean('isDarkTooltip', darkTooltip),
  labelVariant: select(
    'labelVariant',
    ['link', 'icon', 'tertiary', 'secondary', 'primary'],
    'link'
  ),
  hover: boolean('hover', hoverEnabled),
  placement: select('placement', ['top', 'bottom', 'left', 'right'], 'bottom'),
});

stories.add('default', () => (
  <CardShell hideButton={true}>
    <p style={{fontSize: '1.2rem'}}>
      Meow meow, i tell my human sit in window and stare oooh, a bird, yum meow
      and walk away but stare at ceiling. Cat gets stuck in tree firefighters
      try to get cat down firefighters get stuck in tree cat eats firefighters
      slippers hopped up on catnip, for bite the neighbors bratty kid. Let me in
      let me out let me in let me out let me in let me out who broke this door
      anyway immediately regret falling into bathtub yet pet my belly, you know
      you want to; seize the hand and shred it! experiences short bursts of
      poo-phoria after going to the loo. Claw at curtains stretch and yawn
      nibble on tuna ignore human bite human hand sleep on{' '}
      <Tooltip {...defaultProps(false)}>
        Montezuma is the king of cats, and all other cats shall kneel to him. He
        is the overlord.
      </Tooltip>
      , so refuse to drink water except out of someones glass really likes
      hummus stare at ceiling light yet take a big fluffing crap 💩 soft kitty
      warm kitty little ball of furr. Toy mouse squeak roll over. Swipe at
      owners legs sleep on my humans head for at four in the morning wake up
      owner meeeeeeooww scratch at legs and beg for food then cry and yowl until
      they wake up at two pm jump on window and sleep while observing the
      bootyful cat next door that u really like but who already has a boyfriend
      end up making babies with her and let her move in but eat owners food but
      claws in the eye of the beholder and meowing chowing and wowing. Destroy
      the blinds no, you cant close the door, i havent decided whether or not i
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

stories.add('hover', () => (
  <CardShell hideButton={true}>
    <p style={{fontSize: '1.2rem'}}>
      Meow meow, i tell my human sit in window and stare oooh, a bird, yum meow
      and walk away but stare at ceiling. Cat gets stuck in tree firefighters
      try to get cat down firefighters get stuck in tree cat eats firefighters
      slippers hopped up on catnip, for bite the neighbors bratty kid. Let me in
      let me out let me in let me out let me in let me out who broke this door
      anyway immediately regret falling into bathtub yet pet my belly, you know
      you want to; seize the hand and shred it! experiences short bursts of
      poo-phoria after going to the loo. Claw at curtains stretch and yawn
      nibble on tuna ignore human bite human hand sleep on{' '}
      <Tooltip {...defaultProps(true)}>
        Montezuma is the king of cats, and all other cats shall kneel to him. He
        is the overlord.
      </Tooltip>
      , so refuse to drink water except out of someones glass really likes
      hummus stare at ceiling light yet take a big fluffing crap 💩 soft kitty
      warm kitty little ball of furr. Toy mouse squeak roll over. Swipe at
      owners legs sleep on my humans head for at four in the morning wake up
      owner meeeeeeooww scratch at legs and beg for food then cry and yowl until
      they wake up at two pm jump on window and sleep while observing the
      bootyful cat next door that u really like but who already has a boyfriend
      end up making babies with her and let her move in but eat owners food but
      claws in the eye of the beholder and meowing chowing and wowing. Destroy
      the blinds no, you cant close the door, i havent decided whether or not i
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

stories.add('dark default', () => (
  <CardShell hideButton={true}>
    <p style={{fontSize: '1.2rem'}}>
      Meow meow, i tell my human sit in window and stare oooh, a bird, yum meow
      and walk away but stare at ceiling. Cat gets stuck in tree firefighters
      try to get cat down firefighters get stuck in tree cat eats firefighters
      slippers hopped up on catnip, for bite the neighbors bratty kid. Let me in
      let me out let me in let me out let me in let me out who broke this door
      anyway immediately regret falling into bathtub yet pet my belly, you know
      you want to; seize the hand and shred it! experiences short bursts of
      poo-phoria after going to the loo. Claw at curtains stretch and yawn
      nibble on tuna ignore human bite human hand sleep on{' '}
      <Tooltip {...defaultProps(false, true)}>
        Montezuma is the king of cats, and all other cats shall kneel to him. He
        is the overlord.
      </Tooltip>
      , so refuse to drink water except out of someones glass really likes
      hummus stare at ceiling light yet take a big fluffing crap 💩 soft kitty
      warm kitty little ball of furr. Toy mouse squeak roll over. Swipe at
      owners legs sleep on my humans head for at four in the morning wake up
      owner meeeeeeooww scratch at legs and beg for food then cry and yowl until
      they wake up at two pm jump on window and sleep while observing the
      bootyful cat next door that u really like but who already has a boyfriend
      end up making babies with her and let her move in but eat owners food but
      claws in the eye of the beholder and meowing chowing and wowing. Destroy
      the blinds no, you cant close the door, i havent decided whether or not i
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
