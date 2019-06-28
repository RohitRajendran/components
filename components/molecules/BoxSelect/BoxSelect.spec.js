import {mount, shallow} from 'enzyme';
import React from 'react';
import {stub} from 'sinon';
import test from 'tape';
import BoxSelect from './BoxSelect';

test('BoxSelect - renders', (t) => {
  const props = {
    options: [
      {
        value: 'pica',
        label: 'Pica',
        description: 'Great cat',
      },
      {
        value: 'pixie',
        label: 'Pixie',
        description: 'Good cat',
      },
      {
        value: 'montezuma',
        label: 'Montezuma',
        description: 'Best cat',
      },
    ],
    name: 'boxGroup',
    onClick: stub(),
  };

  const component = shallow(<BoxSelect {...props} />);

  t.equals(
    component.find('.uic--box-select').length,
    1,
    'Should load the BoxSelect component.'
  );

  t.end();
});

test('BoxSelect - toggleSelected', (t) => {
  const props = {
    options: [
      {
        value: 'pica',
        label: 'Pica',
        description: 'Great cat',
      },
      {
        value: 'pixie',
        label: 'Pixie',
        description: 'Good cat',
      },
      {
        value: 'montezuma',
        label: 'Montezuma',
        description:
          'Best catBest catBest catBest caBest catBest catBest catBest catBest cattBest catBest catBest cat',
      },
    ],
    name: 'boxGroup',
    onChange: stub(),
  };

  const component = mount(<BoxSelect {...props} />, {attachTo: document.body});

  component.instance().toggleSelected('montezuma');

  t.deepEquals(
    props.onChange.args[0],
    ['boxGroup', 'montezuma'],
    'Should be called with the correct arguments.'
  );

  t.end();
});
