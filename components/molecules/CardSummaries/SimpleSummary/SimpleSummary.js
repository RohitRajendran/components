/** @module SimpleSummary */
import {and} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '~components/atoms/Button/Button';
import {exclusive} from '~proptypes';
import '../CardSummaries.scss';

const SimpleSummary = ({shortTitle, editCard, editCardText, answers, to}) => {
  return (
    <div className="uic--card-summary uic--container-fluid">
      <div className="uic--row">
        <div className="uic--col-6">
          <h2 className="uic--card-summary-label">{shortTitle}</h2>
        </div>
        <div className="uic--col-6 uic--col-sm-1 uic--order-sm-last">
          <div className="uic--d-flex uic--justify-content-end">
            <Button variant="link" onClick={editCard} to={to}>
              {editCardText}
            </Button>
          </div>
        </div>
        <div className="uic--col-12 uic--col-sm-5">
          {answers.map((answer) => {
            return (
              <p key={answer} className="uic--card-summary-answer">
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
  /** The card answer(s). */
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Handler called to edit the card, used instead of `to` for McGonagall. */
  editCard: and([PropTypes.func, exclusive(['to'])]),
  /** Text to display in the edit button--defaults to 'Edit' if not present */
  editCardText: PropTypes.string.isRequired,
  /** The URL that the user should be directed to when edit is clicked, used instead of `editCard` for Hogwarts Express. */
  to: and([PropTypes.string, exclusive(['editCard'])]),
  /** A shorter version of the card title. */
  shortTitle: PropTypes.string.isRequired,
};

SimpleSummary.defaultProps = {editCardText: 'Edit'};

export default React.memo(SimpleSummary);
