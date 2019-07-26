import {mount} from 'enzyme';
import * as React from 'react';
import test from 'tape';
import QuestionAnswer from './QuestionAnswer';

test('QuestionAnswer - renders', (t) => {
  const props = {
    header: 'FAQs',
    items: [
      {
        question: 'Montezuma',
        answer: 'Cat',
      },
    ],
  };
  const component = mount(<QuestionAnswer {...props} />);

  t.equals(
    component.find('.uic--question-answer').length,
    1,
    'Should load the QuestionAnswer component.'
  );

  t.end();
});

test('QuestionAnswer - setExpanded', (t) => {
  const props = {
    header: 'FAQs',
    items: [
      {
        question: 'Montezuma',
        answer: 'Cat',
      },
    ],
  };
  const component = mount(<QuestionAnswer {...props} />);

  t.equals(component.state().expanded, null, 'Should init the state as null.');

  component.instance().setExpanded('item-1');

  t.equals(
    component.state().expanded,
    'item-1',
    'Should set the state to item-1.'
  );

  t.end();
});
