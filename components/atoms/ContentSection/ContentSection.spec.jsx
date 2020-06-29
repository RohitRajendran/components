import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import ContentSection from './ContentSection';

test('ContentSection - renders', (t) => {
  const component = shallow(
    <ContentSection heading="Test">
      <p>Content</p>
    </ContentSection>,
  );

  t.equals(component.find('h3').length, 1, 'Should wrap heading in h3 tag');

  t.end();
});

test('ContentSection - renders', (t) => {
  const component = shallow(
    <ContentSection heading={<h2>Test</h2>}>
      <p>Content</p>
    </ContentSection>,
  );

  t.equals(component.find('h3').length, 0, 'Should not wrap heading in h3 tag');

  t.end();
});
