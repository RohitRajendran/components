/** @module IncompleteSummary */
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../Button/Button';
import '../CardSummaries.scss';

const IncompleteSummary = ({shortTitle, cardUrl, text}) => {
  return (
    <div className="card-summary incomplete-card uic--container-fluid">
      <div className="uic--row">
        <div className="uic--col-6">
          <h2 className="card-summary-label">{shortTitle}</h2>
        </div>
        <div className="uic--col-6 uic--col-sm-1 uic--order-sm-last">
          <div className="uic--d-flex uic--justify-content-end">
            <Button to={cardUrl} variant="link">
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
  cardUrl: PropTypes.string.isRequired,
  shortTitle: PropTypes.string.isRequired,
  text: PropTypes.string,
};

IncompleteSummary.defaultProps = {
  text: 'You still have to answer this question.',
};

export default React.memo(IncompleteSummary);
