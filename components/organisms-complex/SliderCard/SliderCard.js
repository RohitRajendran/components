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

SliderCard.defaultProps = {
  buttonText: 'Continue',
};
