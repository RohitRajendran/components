/** @module CheckboxCard */
import PropTypes from 'prop-types';
import React from 'react';
import SimpleSummary from '~components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import Checkboxes from '~components/molecules/Checkboxes/Checkboxes';
import QuestionCard from '~components/organisms-simple/QuestionCard/QuestionCard';

/**
 * Gets the label of a given value
 * @param {array<object>} options Array of options available
 * @param {Array<any>} currValue The value to look for
 * @returns {Array<string>} answer labels
 */
const getSelectedAnswerLabel = (options, currValue) => {
  return currValue.map((val) => {
    const option = options.find((opt) => opt.value === val);

    if (option) {
      return option.label;
    }
  });
};

/** Displays the CheckboxCard component.
 * @param {object} props - Component props.
 * @returns {JSX} - JSX representation of the CheckboxCard component.
 */
const CheckboxCard = ({
  answers,
  editCard,
  onChange,
  config,
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
            answers || getSelectedAnswerLabel(config.options, config.value)
          }
          editCard={editCard}
          shortTitle={shortTitle || title}
        />
      }
    >
      <Checkboxes {...config} onChange={onChange} required />
    </QuestionCard>
  );
};

export default CheckboxCard;

CheckboxCard.propTypes = {
  /** Values to pass into checkbox group */
  config: PropTypes.shape({
    /** A string representing the name of the checkbox group. For example `yesNo` or something similar. */
    name: PropTypes.string.isRequired,
    /** Renders the checkbox group in a table. */
    table: PropTypes.bool,
    /** The current selected option in the checkbox group. */
    value: PropTypes.array.isRequired,
    /** An array of objects containing options that should be rendered. These options are explained below. */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        /** The value of the checkbox, for example `yes` or `no`. */
        value: PropTypes.string.isRequired,
        /** The text that should appear next to the checkbox. */
        label: PropTypes.string.isRequired,
        /** Renders a followup input or message if the checkbox is selected. */
        followup: PropTypes.node,
        /** Displays a secondary label to the far right of the checkbox.  */
        secondaryLabel: PropTypes.string,
        /** Disables the option. */
        disabled: PropTypes.bool,
      })
    ),
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

CheckboxCard.defaultProps = {
  buttonText: 'Continue',
};
