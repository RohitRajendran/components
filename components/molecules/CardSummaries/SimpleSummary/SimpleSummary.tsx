/** @module SimpleSummary */
import React, {FC, memo} from 'react';
import Button from '~components/atoms/Button/Button';
import '../CardSummaries.scss';

type SimpleSummaryWithTo = {
  /** The URL that the user should be directed to when edit is clicked, used instead of `editCard` for Hogwarts Express. */
  to?: string | null;
};

type SimpleSummaryWithEdit = {
  /** Handler called to edit the card, used instead of `to` for McGonagall. */
  editCard?: React.MouseEventHandler | null;
};

type SimpleSummaryProps = {
  /** The card answer(s). */
  answers: string[];
  /** Text to display in the edit button--defaults to 'Edit' if not present */
  editCardText?: string;
  /** A shorter version of the card title. */
  shortTitle: React.ReactNode;
} & (SimpleSummaryWithTo | SimpleSummaryWithEdit);

const SimpleSummary: FC<SimpleSummaryProps> = ({
  shortTitle,
  editCardText,
  answers,
  ...props
}) => {
  const propsWithTo = props as SimpleSummaryWithTo;
  const propsWithEdit = props as SimpleSummaryWithEdit;

  const showEditButton = Boolean(propsWithTo.to || propsWithEdit.editCard);

  return (
    <div className="uic--card-summary uic--container-fluid">
      <div className="uic--row">
        <div className="uic--col-6">
          <h2 className="uic--card-summary-label">{shortTitle}</h2>
        </div>
        {showEditButton && (
          <div className="uic--col-6 uic--col-sm-1 uic--order-sm-last">
            <div className="uic--d-flex uic--justify-content-end">
              {propsWithTo && propsWithTo.to && (
                <Button variant="link" to={propsWithTo.to}>
                  {editCardText}
                </Button>
              )}

              {propsWithEdit && propsWithEdit.editCard && (
                <Button variant="link" onClick={propsWithEdit.editCard}>
                  {editCardText}
                </Button>
              )}
            </div>
          </div>
        )}
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

SimpleSummary.defaultProps = {
  editCardText: 'Edit',
};

export default memo(SimpleSummary);
