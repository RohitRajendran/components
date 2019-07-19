/** @module FormSummary */
import {and} from 'airbnb-prop-types';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Button from '~components/atoms/Button/Button';
import {exclusive} from '~proptypes';
import '../CardSummaries.scss';
import './FormSummary.scss';

const FormSummary = ({shortTitle, editCard, answerGroups, to}) => {
  return (
    <Fragment>
      <div className="uic--card-summary uic--container-fluid">
        <div className="uic--row">
          <div className="uic--col-6 uic--col-sm-11">
            <h2 className="uic--card-summary-label">{shortTitle}</h2>
          </div>
          <div className="uic--col-6 uic--col-sm-1">
            <div className="uic--d-flex uic--justify-content-end">
              <Button variant="link" onClick={editCard} to={to}>
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
      {answerGroups.map((group, index) => {
        const key = group.key || group.groupName || `${shortTitle}-${index}`;

        const groupClass = classNames({
          'uic--card-summary': true,
          'uic--card-summary-group': true,
          'uic--striped': group.groupName || answerGroups.length > 1,
        });

        return (
          <div key={key} className={groupClass}>
            {(answerGroups.length > 1 || group.groupName) && (
              <h3 className="uic--card-summary-label">{group.groupName}</h3>
            )}

            {group.answers.map((answer) => (
              <div key={`${key}-${answer.label}`} className="uic--row">
                <div className="uic--col-6">
                  <span className="uic--card-summary-label">
                    {answer.label}
                  </span>
                </div>
                <div className="uic--col-6">
                  <span className="uic--card-summary-answer">
                    {answer.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </Fragment>
  );
};

FormSummary.propTypes = {
  /** An array of objects containing the groups of answers to display. The object is broken down below. */
  answerGroups: PropTypes.arrayOf(
    PropTypes.shape({
      /** The React key to use for the group of data */
      key: PropTypes.string,
      /** The name of the group of data */
      groupName: PropTypes.string,
      /** An array of objects containing the answers for the group. The object is broken down below. */
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          /** The label for the answer to display. */
          label: PropTypes.string.isRequired,
          /** The value of the answer to display. */
          value: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  /** Handler called to edit the card, used instead of `to` for McGonagall. */
  editCard: and([PropTypes.func, exclusive(['to'])]),
  /** A shorter version of the card title. */
  shortTitle: PropTypes.string.isRequired,
  /** The URL that the user should be directed to when edit is clicked, used instead of `editCard` for Hogwarts Express. */
  to: and([PropTypes.string, exclusive(['editCard'])]),
};

export default FormSummary;
