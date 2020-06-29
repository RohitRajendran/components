import {StateDecorator, Store} from '@sambego/storybook-state';
import {text, object, boolean, number} from '@storybook/addon-knobs';
import {storiesOf, forceReRender} from '@storybook/react';
import React from 'react';
import InfoBox from './InfoBox.tsx';
import InfoBoxReadMe from './InfoBox.mdx';

const stories = storiesOf('Atoms/InfoBox', module);

stories.addParameters({
  docs: {
    page: InfoBoxReadMe,
  },
});

const store = new Store({
  default: '',
});

stories.addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({
  formName,
  title,
  imageURL,
  content,
  isInactive,
  isDeemphasized,
  titleCharLimit,
}) => ({
  name: formName,
  title: text('title', title),
  imageURL: text('imageURL', imageURL),
  content: object('content', content),
  isInactive: boolean('isInactive', isInactive),
  isDeemphasized: boolean('isDeemphasized', isDeemphasized),
  titleCharLimit: number('titleCharLimit', titleCharLimit),
  height: text('height', 'auto'),
});

stories.add('default', () => {
  const props = defaultProps({
    formName: 'default',
    title: 'Giannis - 401k',
    imageURL:
      'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/greek_freak_j2qb.svg',
    content: (
      <div>
        Here is some unstyled content!
        <hr />
        <div className="uic--info-box-formatted-row">
          <div className="uic--row-label">Equity Allocation Override</div>
          <div className="uic--mcg-subhead-text">95%</div>
        </div>
        <div className="uic--field-description-text">
          High Investment Risk and Return Potential
        </div>
      </div>
    ),
  });

  return <InfoBox {...props} style={{height: props.height}} />;
});

stories.add('isInactive', () => {
  const props = defaultProps({
    formName: 'isInactive',
    title: 'Giannis - 401k',
    imageURL:
      'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/greek_freak_j2qb.svg',
    content: (
      <div>
        Here is some unstyled content!
        <hr />
        <div className="uic--info-box-formatted-row">
          <div className="uic--row-label">Equity Allocation Override</div>
          <div className="uic--mcg-subhead-text">95%</div>
        </div>
        <div className="uic--field-description-text">
          High Investment Risk and Return Potential
        </div>
      </div>
    ),
    isInactive: true,
  });

  return <InfoBox {...props} style={{height: props.height}} />;
});

stories.add('isDeemphasized', () => {
  const props = defaultProps({
    formName: 'isInactive',
    title: 'Giannis - 401k',
    imageURL:
      'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/greek_freak_j2qb.svg',
    content: (
      <div>
        Here is some unstyled content!
        <hr />
        <div className="uic--info-box-formatted-row">
          <div className="uic--row-label">Equity Allocation Override</div>
          <div className="uic--mcg-subhead-text">95%</div>
        </div>
        <div className="uic--field-description-text">
          High Investment Risk and Return Potential
        </div>
      </div>
    ),
    isDeemphasized: true,
  });

  return <InfoBox {...props} style={{height: props.height}} />;
});
