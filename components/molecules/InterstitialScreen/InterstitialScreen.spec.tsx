import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import InterstitialScreen from './InterstitialScreen';

test('InterstitialScreen - renders', (t) => {
  const component = shallow(<InterstitialScreen />);

  t.equals(component.find('div').length, 1, 'Should load the InterstitialScreen component.');

  t.end();
});
