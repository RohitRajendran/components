---
to: <%= path %>/<%= h.changeCase.pascal(name) %>.cards.js
---
<%
  compName = h.changeCase.pascal(name)
-%>
import {
  CarCircleIllustration,
  CompletionScreen,
  MessageCard,
  InputCard,
  RadioButtonCard,
} from '@unitedincome/components';
import React from 'react';
import {outputs} from './<%= compName %>.constants';

export const renderStartMessage = (props) => {
  return (
    <MessageCard
      {...props}
      featureImage={
        <CarCircleIllustration height="10rem" width="10rem" color />
      }
    />
  );
};

export const renderName = (props, state) => (
  <InputCard
    {...props}
    config={{
      name: outputs.name,
      value: state[outputs.name],
      label: `Name`,
      placeholder: 'Enter a name...',
    }}
  />
);

export const renderChoice = (props, state) => {
  return (
    <RadioButtonCard
      {...props}
      config={{
        name: outputs.favCat,
        value: state[outputs.favCat],
        options: [
          {
            label: 'Montezuma',
            value: 'montezuma',
          },
          {
            label: 'Pica',
            value: 'pica',
          },
          {
            label: 'Pixel',
            value: 'pixel',
          },
        ],
      }}
    />
  );
};

export const renderReview = (props, state) => {
  return (
    <MessageCard
      {...props}
      buttonText="Submit"
    />
  );
};

export const renderComplete = (props, state) => {
  return (
    <CompletionScreen
      {...props}
      feature={
        <CarCircleIllustration height="20rem" width="20rem" color />
      }
    />
  );
};

export const steps = [
  {
    name: 'start',
    title: 'Welcome to a McGonagall Flow',
    shortTitle: 'Description',
    description: 'You can use the following boilerplate to get started with McGonagall.',
    card: renderStartMessage,
  },
  {
    name: 'name',
    title: 'What should we call you?',
    shortTitle: 'Name',
    description: `Enter a name or a word into the input field. You'll need to include an additional action which will save the data into your application state if it needs to persist.`,
    card: renderName,
    outputs: [outputs.name],
  },
  {
    name: 'choice',
    title: 'Which United Income cat is the cutest?',
    shortTitle: 'Choice',
    description: 'All are good options honestly.',
    card: renderChoice,
    outputs: [outputs.favCat],
  },
  {
    name: 'review',
    title: 'Review the Choices',
    description: 'You can click edit on any of the collapsed cards to change your answers.',
    shortTitle: 'Review',
    card: renderReview,
  },
  {
    name: 'complete',
    shortTitle: 'Complete',
    title: `Congratulations!`,
    description: 'You completed the flow. You will need to populate the exitLocation prop otherwise closing the flow will present an error, please refer to the documentation for more details.',
    card: renderComplete,
  }
];
