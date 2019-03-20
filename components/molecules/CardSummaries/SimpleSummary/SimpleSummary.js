/** @module SimpleSummary */
import PropTypes from 'prop-types';
import React from 'react';
import Button from '~components/atoms/Button/Button';
import '../CardSummaries.scss';

const SimpleSummary = ({shortTitle, cardUrl, answers}) => {
  return (
    <div className="card-summary uic--container-fluid">
      <div className="uic--row">
        <div className="uic--col-6">
          <h2 className="card-summary-label">{shortTitle}</h2>
        </div>
        <div className="uic--col-6 uic--col-sm-1 uic--order-sm-last">
          <div className="uic--d-flex uic--justify-content-end">
            <Button to={cardUrl} variant={'link'}>
              Edit
            </Button>
          </div>
        </div>
        <div className="uic--col-12 uic--col-sm-5">
          {answers.map((answer) => {
            return (
              <p key={answer} className="card-summary-answer">
                {answer}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

SimpleSummary.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  cardUrl: PropTypes.string.isRequired,
  shortTitle: PropTypes.string.isRequired,
};

export default React.memo(SimpleSummary);
