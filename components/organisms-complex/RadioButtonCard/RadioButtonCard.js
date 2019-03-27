/** @module RadioButtonCard */
import PropTypes from 'prop-types';
import React from 'react';
import SimpleSummary from '~components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import RadioButtons from '~components/molecules/RadioButtons/RadioButtons';
import QuestionCard from '~components/organisms-simple/QuestionCard/QuestionCard';

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
};

/** Displays the RadioButtonCard component.
 * @param {object} props - Component props.
 * @returns {JSX} - JSX representation of the RadioButtonCard component.
 */
const RadioButtonCard = ({
  answers,
  editCard,
  radioButtonOptions,
  shortTitle,
  title,
  ...props
}) => {
  return (
    <QuestionCard
      {...props}
      editCard={editCard}
      shortTitle={shortTitle}
      title={title}
      summary={
        <SimpleSummary
          answers={
            answers || [
              getSelectedAnswerLabel(
                radioButtonOptions.options,
                radioButtonOptions.value
              ),
            ]
          }
          editCard={editCard}
          shortTitle={shortTitle || title}
        />
      }
    >
      <RadioButtons {...radioButtonOptions} required />
    </QuestionCard>
  );
};

export default RadioButtonCard;

RadioButtonCard.propTypes = {
  /** Values to pass into radio button */
  radioButtonOptions: PropTypes.shape({
    /** A string representing the name of the radio button group. For example `yesNo` or something similar. */
    name: PropTypes.string.isRequired,
    /** Renders the radio button group in a table. */
    table: PropTypes.bool,
    /** The current selected option in the radio button group. */
    value: PropTypes.string.isRequired,
    /** An array of objects containing options that should be rendered. */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        /** The value of the button. */
        value: PropTypes.string.isRequired,
        /** The label of the button. */
        label: PropTypes.string.isRequired,
        /** Optional followup input JSX. */
        followup: PropTypes.node,
        /** Label to appear to the right of the selection. */
        secondaryLabel: PropTypes.string,
        /** Disables the option. */
        disabled: PropTypes.bool,
      })
    ).isRequired,
  }),
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the seleted value */
  answers: PropTypes.arrayOf(PropTypes.string),
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button */
  buttonText: PropTypes.string,
  /** Handler to cancel the changes. */
  cancelChanges: PropTypes.func.isRequired,
  /** Additional class names to apply to the card. */
  className: PropTypes.string,
  /** Whether making changes should clear out any changes made in steps after this. */
  clearFuture: PropTypes.bool,
  /** The card description. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Forces the disabled state of the button. */
  disabled: PropTypes.bool,
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard: PropTypes.func,
  /** Displays the error state of the card. */
  hasError: PropTypes.bool,
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed: PropTypes.bool,
  /** Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary. */
  isLatestCard: PropTypes.bool,
  /** Shows a loading indicator in the button. */
  loading: PropTypes.bool,
  /** Support passing in JSX for the more detail area under the description. Typically, this should be link that opens up a Hogwarts cabinet. */
  moreDetail: PropTypes.node,
  /** The handler to fire when a change happens. */
  onChange: PropTypes.func.isRequired,
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: PropTypes.func.isRequired,
  /** Shorter title to be used with the card summary. */
  shortTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** The title of the card. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

RadioButtonCard.defaultProps = {
  buttonText: 'Continue',
};
