import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import IncomeCircleIllustration from './IncomeCircleIllustration';

test('IncomeCircleIllustration - renders', (t) => {
  const component = shallow(<IncomeCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the IncomeCircleIllustration component.'
  );

  t.end();
});

test('IncomeCircleIllustration - handleClick', (t) => {
  const component = mount(<IncomeCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});
