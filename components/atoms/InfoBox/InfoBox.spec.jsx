import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import {stub} from 'sinon';
import InfoBox from './InfoBox';

test('InfoBox - renders correctly', (t) => {
  const testProps = {
    title: 'Here is a title',
    content: 'Here is some content!',
  };

  const component = shallow(<InfoBox {...testProps} />);

  t.equals(
    component.find('aside').length,
    1,
    'Should load the InfoBox component.',
  );
  t.equals(
    component.find('.uic--info-box-title-text').text(),
    'Here is a title',
    'Should correctly load InfoBox title',
  );
  t.equals(
    component.find('.uic--info-box-information-area').prop('children').length,
    2,
    'Should render a content and footer child',
  );
  t.equals(
    component.find('.uic--info-box-information-area').text(),
    'Here is some content!',
    'Should correctly load InfoBox content',
  );
  t.equals(component.find('footer').length, 0, 'Should not render a footer');
  t.deepEqual(
    component.find('.uic--info-box-title-area').prop('style'),
    {},
    'There should be no additional style applied if no image provided',
  );

  const onClickStub = stub();

  const component2 = shallow(
    <InfoBox
      {...{
        ...testProps,
        imageURL: 'urlLocation',
        footer: 'Here is a footer',
        onClick: onClickStub,
      }}
    />,
  );

  t.notDeepEqual(
    component2.find('.uic--info-box-title-area').prop('style'),
    {},
    'There should be an additional style applied if an image provided',
  );
  t.equals(component2.find('footer').length, 1, 'Should render a footer');

  component2.find('aside').simulate('click', {
    stopPropagation: stub(),
  });

  t.equals(onClickStub.callCount, 1, 'onClick functionality works');

  t.end();
});

test('InfoBox - state and hover updated correctly', (t) => {
  const testProps = {
    title: 'This is a very, very long title',
    content: 'Here is some content!',
  };

  const component = shallow(<InfoBox {...testProps} />);

  t.equal(
    component.find('.uic--info-box-title-text').text(),
    'This is a very, very lon…',
    'Shortened title should be displayed',
  );

  component.find('.uic--info-box-title-area').simulate('mouseEnter', {
    stopPropagation: stub(),
  });

  t.true(
    component.hasClass('uic--info-box-expand'),
    'Should apply uic--info-box-expand on hover',
  );

  t.equal(
    component
      .find('.uic--info-box-title-text')
      .first()
      .text(),
    'This is a very, very long title',
    'Full title should be displayed on hover',
  );

  component.find('.uic--position-relative').simulate('mouseLeave', {
    stopPropagation: stub(),
  });

  t.false(
    component.hasClass('uic--info-box-expand'),
    'uic--info-box-expand should no longer be applied',
  );

  t.end();
});
