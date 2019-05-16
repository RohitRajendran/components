/** @module SliderCard */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SimpleSummary from '~components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import Slider from '~components/atoms/Slider/Slider';
import QuestionCard from '~components/organisms-simple/QuestionCard/QuestionCard';

/** Displays the SliderCard component.
 * @param {object} props - Component props.
 * @returns {JSX} - JSX representation of the SliderCard component.
 */
const SliderCard = ({
  answers,
  className,
  editCard,
  onChange,
  config,
  shortTitle,
  title,
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
      editCard={editCard}
      className={cardClass}
      shortTitle={shortTitle}
      title={title}
      summary={
        <SimpleSummary
          answers={answers || [config.value.toString()]}
          editCard={editCard}
          shortTitle={shortTitle || title}
        />
      }
    >
      <Slider {...config} onChange={onChange} required />
    </QuestionCard>
  );
};

export default SliderCard;

SliderCard.propTypes = {
  /** Values to pass into select button */
  config: PropTypes.shape({
    /** A string representing the name of the select button group. For example `yesNo` or something similar. */
    name: PropTypes.string.isRequired,
    /** The current selected option in the select button group. */
    value: PropTypes.number.isRequired,
    /** Data to display inside of the tooltip. */
    tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Text to display to the left of the slider. */
    leftAnnotate: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Text to display to the right of the slider. */
    rightAnnotate: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Shows a ghost dot on the slider, set the position between 1 and 10. */
    tooltipStickyPosition: PropTypes.number,
    /** Determines which variant to set the slider to, can either be set to null, green or orange. */
    tooltipStickyVariant: PropTypes.oneOf(['green', 'purple']),
  }),
  /** Whether it should animate on mount */
  animate: PropTypes.bool,
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the seleted value */
  answers: PropTypes.arrayOf(PropTypes.string),
  /** Enables browser auto complete. */
  autoComplete: PropTypes.bool,
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button */
  buttonText: PropTypes.string,
  /** Handler to cancel the changes. */
  cancelChanges: PropTypes.func,
  /** Additional class names to apply to the button. */
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
  /** Shows spinner in place of card button, used when need to prevent actions while card is loading  */
  isFetching: PropTypes.bool,
  /** Shows a loading indicator on the button for actions after the button is clicked. */
  loading: PropTypes.bool,
  /** Displays a Cabinet component beneath the question, suitable for displaying additional information about the card. */
  moreDetails: PropTypes.shape({
    /** The contents of the cabinet. */
    cabinetContent: PropTypes.node.isRequired,
    /** The header to display at the top of the cabinet. */
    header: PropTypes.string.isRequired,
    /** Determines if the cabinet is visible when the page is printed or not. */
    visibleInPrint: PropTypes.bool,
    /** Adds a label to open the cabinet. */
    label: PropTypes.string.isRequired,
  }),
  /** The handler to fire when a change happens. */
  onChange: PropTypes.func.isRequired,
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: PropTypes.func.isRequired,
  /** Output defaults to fallback to on continue if an output is empty. The key should be the output name and the value should be the default value */
  outputDefaults: PropTypes.shape({}),
  /** Shorter title to be used with the card summary. */
  shortTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** The index of this card in the flow, used for animation purposes */
  stepIndex: PropTypes.number,
  /** The title of the card. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
