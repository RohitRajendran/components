import {object, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React, {Fragment} from 'react';
import {withReadme} from 'storybook-readme';
import QuestionAnswer from './QuestionAnswer';
import QuestionAnswerReadMe from './QuestionAnswer.md';

const stories = storiesOf('Molecules/QuestionAnswer', module);

stories.addDecorator(withReadme(QuestionAnswerReadMe));

const defaultProps = () => ({
  header: text('header', 'FAQs'),
  items: object('items', [
    {
      question: 'Why is Monte so cute?',
      answer:
        'He is really ginger, has cute white paws, and his eyes are greenish, and generally has a really nice meow.',
    },
    {
      question: 'Why has Montezuma got ginger fur?',
      answer: 'Genetics, I guess.',
    },
    {
      question: 'Who owns Montezuma?',
      answer: 'James!',
    },
    {
      question: 'Is it true that Montezuma is the king of all cats?',
      answer: 'Yes, it is certainly true he is the king of all cats.',
    },
  ]),
});

stories.add('default', () => (
  <Fragment>
    <style>{`body { margin: 0}`}</style>
    <QuestionAnswer {...defaultProps()} />
  </Fragment>
));
