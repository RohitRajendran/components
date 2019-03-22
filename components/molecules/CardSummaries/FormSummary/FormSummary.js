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
      <div className="card-summary uic--container-fluid">
        <div className="uic--row">
          <div className="uic--col-6 uic--col-sm-11">
            <h2 className="card-summary-label">{shortTitle}</h2>
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
        const key = group.groupName || `${shortTitle}-${index}`;

        const groupClass = classNames({
          'card-summary': true,
          'card-summary-group': true,
          striped: answerGroups.length > 1,
        });

        return (
          <div key={key} className={groupClass}>
            {answerGroups.length > 1 && group.groupName && (
              <h3 className="card-summary-label">{group.groupName}</h3>
            )}

            {group.answers.map((answer) => (
              <div key={`${key}-${answer.label}`} className="uic--row">
                <div className="uic--col-6">
                  <span className="card-summary-label">{answer.label}</span>
                </div>
                <div className="uic--col-6">
                  <span className="card-summary-answer">{answer.value}</span>
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
  answerGroups: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  editCard: and([PropTypes.func, exclusive(['to'])]),
  shortTitle: PropTypes.string.isRequired,
  to: and([PropTypes.string, exclusive(['editCard'])]),
};

export default FormSummary;
