/** @module FormSummary */
import classNames from 'classnames';
import React, {Fragment, FC} from 'react';
import Button from '~components/atoms/Button/Button';
import '../CardSummaries.scss';
import './FormSummary.scss';

type FormSummaryWithTo = {
  /** The URL that the user should be directed to when edit is clicked, used instead of `editCard` for Hogwarts Express. */
  to?: string | null;
};

type FormSummaryWithEdit = {
  /** Handler called to edit the card, used instead of `to` for McGonagall. */
  editCard?: React.MouseEventHandler | null;
};

type FormSummaryProps = {
  /** An array of objects containing the groups of answers to display. The object is broken down below. */
  answerGroups: {
    /** The React key to use for the group of data */
    key?: string;
    /** The name of the group of data */
    groupName?: string;
    /** An array of objects containing the answers for the group. The object is broken down below. */
    answers: {
      /** The label for the answer to display. */
      label: string;
      /** The value of the answer to display. */
      value: string;
    }[];
  }[];
  /** A shorter version of the card title. */
  shortTitle: string;
} & (FormSummaryWithTo | FormSummaryWithEdit);

const FormSummary: FC<FormSummaryProps> = ({
  shortTitle,
  answerGroups,
  ...props
}) => {
  const propsWithTo = props as FormSummaryWithTo;
  const propsWithEdit = props as FormSummaryWithEdit;

  const showEditButton = Boolean(propsWithTo.to || propsWithEdit.editCard);

  return (
    <Fragment>
      <div className="uic--card-summary uic--container-fluid">
        <div className="uic--row">
          <div className="uic--col-6 uic--col-sm-11">
            <h2 className="uic--card-summary-label" data-cy={shortTitle}>
              {shortTitle}
            </h2>
          </div>
          {showEditButton && (
            <div className="uic--col-6 uic--col-sm-1">
              <div className="uic--d-flex uic--justify-content-end">
                {propsWithTo && propsWithTo.to && (
                  <Button variant="link" to={propsWithTo.to}>
                    Edit
                  </Button>
                )}

                {propsWithEdit && propsWithEdit.editCard && (
                  <Button variant="link" onClick={propsWithEdit.editCard}>
                    Edit
                  </Button>
                )}
              </div>
            </div>
          )}
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

export default FormSummary;
