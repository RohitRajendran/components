import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import CategoryBubble from './CategoryBubble';

test('CategoryBubble - render', (t) => {
  const component = shallow(<CategoryBubble label="Blogs" color="#b30052" />);

  t.equal(
    component.find('div').prop('style').backgroundColor,
    '#b30052',
    'Correct background color'
  );

  t.equal(component.find('div').text(), 'Blogs', 'Correct text');

  t.end();
});
