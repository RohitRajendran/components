import {shallow} from 'enzyme';
import React from 'react';
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
  const component = shallow(<QuestionAnswer {...props} />);

  t.equals(
    component.find('.uic--question-answer').length,
    1,
    'Should load the QuestionAnswer component.'
  );

  t.end();
});
