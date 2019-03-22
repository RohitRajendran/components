/** @module RadioButtonCard */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SimpleSummary from '~components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import RadioButtons from '~components/molecules/RadioButtons/RadioButtons';
import QuestionCard from '~components/organisms/QuestionCard/QuestionCard';

/**
 * Gets the label of a given value
 * @param {array<object>} options Array of options available
 * @param {any} currValue The value to look for
 * @returns {string} answer label
 */
const getSelectedAnswerLabel = (options, currValue) => {
  const option = options.find((opt) => opt.value === currValue);
  if (option) {
    return option.label;
  }

  return '';
};

/** Displays the RadioButtonCard component.
 * @param {object} props - Component props.
 * @returns {JSX} - JSX representation of the RadioButtonCard component.
 */
const RadioButtonCard = ({
  answers,
  cardUrl,
  className,
  onChange,
  options,
  radioButtonName,
  shortTitle,
  table,
  title,
  value,
  ...props
}) => {
  const cardClass = classNames(
    {
      'mcg-radio-button-card': true,
    },
    className
  );

  return (
    <QuestionCard
      {...props}
      cardUrl={cardUrl}
      className={cardClass}
      onChange={onChange}
      shortTitle={shortTitle}
      title={title}
      summary={
        <SimpleSummary
          answers={answers || [getSelectedAnswerLabel(options, value)]}
          cardUrl={cardUrl}
          shortTitle={shortTitle || title}
        />
      }
    >
      <RadioButtons
        name={radioButtonName}
        options={options}
        table={table}
        value={value}
      />
    </QuestionCard>
  );
};

export default RadioButtonCard;

RadioButtonCard.propTypes = {
  radioButtonName: PropTypes.string.isRequired,
  table: PropTypes.bool,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      followup: PropTypes.node,
      secondaryLabel: PropTypes.string,
    })
  ),
  answers: PropTypes.arrayOf(PropTypes.string),
  afterButton: PropTypes.node,
  beforeButton: PropTypes.node,
  buttonText: PropTypes.string,
  cardUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  clearFuture: PropTypes.bool,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  isLatestCard: PropTypes.bool,
  loading: PropTypes.bool,
  moreDetail: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  shortTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

RadioButtonCard.defaultProps = {
  buttonText: 'Continue',
};
