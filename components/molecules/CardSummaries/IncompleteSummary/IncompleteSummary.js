/** @module IncompleteSummary */
import {and} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '~components/atoms/Button/Button';
import {exclusive} from '~proptypes';
import '../CardSummaries.scss';

const IncompleteSummary = ({shortTitle, editCard, text, to}) => {
  return (
    <div className="card-summary incomplete-card uic--container-fluid">
      <div className="uic--row">
        <div className="uic--col-6">
          <h2 className="card-summary-label">{shortTitle}</h2>
        </div>
        <div className="uic--col-6 uic--col-sm-1 uic--order-sm-last">
          <div className="uic--d-flex uic--justify-content-end">
            <Button variant="link" onClick={editCard} to={to}>
              Resume
            </Button>
          </div>
        </div>
        <div className="uic--col-12 uic--col-sm-5">
          <p className="card-summary-answer error">{text}</p>
        </div>
      </div>
    </div>
  );
};

IncompleteSummary.propTypes = {
  editCard: and([PropTypes.func, exclusive(['to'])]),
  shortTitle: PropTypes.string.isRequired,
  text: PropTypes.string,
  to: and([PropTypes.string, exclusive(['editCard'])]),
};

IncompleteSummary.defaultProps = {
  text: 'You still have to answer this question.',
};

export default React.memo(IncompleteSummary);
