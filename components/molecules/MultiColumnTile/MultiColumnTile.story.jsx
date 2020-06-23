import React from 'react';
import {storiesOf} from '@storybook/react';
import MultiColumnTile from './MultiColumnTile';
import MultiColumnTileReadMe from './MultiColumnTile.mdx';
import {CheckIcon} from '~components/';
import {colors} from '~constants/js/colors';
import Button from '~components/atoms/Button/Button';
import './MultiColumnTile.story.scss';
import CloseIcon from '~components/atoms/icons/CloseIcon/CloseIcon';
import {number} from '@storybook/addon-knobs';
import Skeleton from 'react-loading-skeleton';

const stories = storiesOf('Molecules/MultiColumnTile', module);

stories.addParameters({
  docs: {
    page: MultiColumnTileReadMe,
  },
});

const items = [
  'Essentials',
  'Healthcare',
  'Gift for the University of',
  `Kid's College`,
  `Second Kid's College`,
  'Favorite Charity',
  'Repayment',
  'Something Awesome',
  'More something repayment awesome',
  'More Something Else',
  'More Something Else',
  'More Something charity repayment awesome',
].map((item, index) => (
  <div key={index} className="uic--d-flex uic--align-items-center">
    {index < 7 ? (
      <CheckIcon
        className="uic--spending-needs-story__check-icon"
        width="2.4rem"
        height="2.4rem"
        removeBackground
      />
    ) : (
      <CloseIcon
        className="uic--spending-needs-story__close-icon"
        width="2.2rem"
        height="2.2rem"
        fill={colors.pink}
      />
    )}
    <div
      style={{
        fontSize: '1.8rem',
        fontStyle: index < 7 ? '' : 'italic',
        lineHeight: '2.4rem',
        color: index < 7 ? colors.slate : colors['slate-80'],
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}
    >
      {index + 1}. {item}
    </div>
  </div>
));

const defaultProps = () => ({
  items,
  itemsPerPage: {
    smallDevice: number('smallDevice', 5),
    mediumDevice: number('mediumDevice', 10),
  },
  footerContent: (
    <Button style={{textAlign: 'left'}} variant="link" to="#">
      View Montezuma the Cat
    </Button>
  ),
  className: 'uic--spending-needs-story',
});

const skeletonProps = () => ({
  items: [],
  itemsPerPage: {
    smallDevice: number('smallDevice', 5),
    mediumDevice: number('mediumDevice', 10),
  },
  className: 'uic--spending-needs-story',
  showSkeleton: true,
});

stories.add('default', () => <MultiColumnTile {...defaultProps()} />);
stories.add('skeleton', () => <MultiColumnTile {...skeletonProps()} />);
