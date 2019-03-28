/** @module IncompleteSummary */
import {and} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '~components/atoms/Button/Button';
import {exclusive} from '~proptypes';
import '../CardSummaries.scss';

const IncompleteSummary = ({shortTitle, editCard, text, to}) => {
  return (
    <div className="uic--card-summary uic--incomplete-card uic--container-fluid">
      <div className="uic--row">
        <div className="uic--col-6">
          <h2 className="uic--card-summary-label">{shortTitle}</h2>
        </div>
        <div className="uic--col-6 uic--col-sm-1 uic--order-sm-last">
          <div className="uic--d-flex uic--justify-content-end">
            <Button variant="link" onClick={editCard} to={to}>
              Resume
            </Button>
          </div>
        </div>
        <div className="uic--col-12 uic--col-sm-5">
          <p className="uic--card-summary-answer uic--error">{text}</p>
        </div>
      </div>
    </div>
  );
};

IncompleteSummary.propTypes = {
  /** Handler called to edit the card, used instead of `to` for McGonagall. */
  editCard: and([PropTypes.func, exclusive(['to'])]),
  /** A shorter version of the card title. */
  shortTitle: PropTypes.string.isRequired,
  /** Text that tells the user they need to finish this step. */
  text: PropTypes.string,
  /** The URL that the user should be directed to when resume is clicked, used instead of `editCard` for Hogwarts Express. */
  to: and([PropTypes.string, exclusive(['editCard'])]),
};

IncompleteSummary.defaultProps = {
  text: 'You still have to answer this question.',
};

export default React.memo(IncompleteSummary);
