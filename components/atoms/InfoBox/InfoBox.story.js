import {StateDecorator, Store} from '@sambego/storybook-state';
import {text, object} from '@storybook/addon-knobs';
import {storiesOf, forceReRender} from '@storybook/react';
import React, {Fragment} from 'react';
import InfoBox from './InfoBox';
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

const defaultProps = ({formName, title, imageURL, content, footer}) => ({
  name: formName,
  title: text('title', title),
  imageURL: text('imageURL', imageURL),
  content: object('content', content),
  footer: object('footer', footer),
});

stories.add('default', () => (
  <InfoBox
    {...defaultProps({
      formName: 'default',
      title: 'Giannis - 401k',
      imageURL:
        'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/greek_freak_j2qb.svg',
      content: <div>Here is some unstyled content!</div>,
      footer: (
        <Fragment>
          <div className="uic--info-box-formatted-row">
            <div className="uic--row-label">Equity Allocation Override</div>
            <div className="uic--mcg-subhead-text">95%</div>
          </div>
          <div className="uic--field-description-text">
            High Investment Risk and Return Potential
          </div>
        </Fragment>
      ),
    })}
  />
));
