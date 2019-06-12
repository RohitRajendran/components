import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import Link from './Link';

test('Link - renders', (t) => {
  const component = shallow(<Link>Montezuma</Link>);

  t.equals(component.find('a').length, 1, 'Should load the Link component.');

  t.end();
});
