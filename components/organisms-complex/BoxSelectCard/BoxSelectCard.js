/** @module BoxSelectCard */
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import SimpleSummary from '~components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import BoxSelect from '~components/molecules/BoxSelect/BoxSelect';
import QuestionCard from '~components/organisms-simple/QuestionCard/QuestionCard';
import {getSelectedAnswerLabel} from '~components/organisms-complex/RadioButtonCard/RadioButtonCard';
import './BoxSelectCard.scss';

/** Displays the BoxSelectCard component.
 * @param {object} props - Component props.
 * @returns {JSX} - JSX representation of the BoxSelectCard component.
 */
const BoxSelectCard = ({
  answers,
  config,
  className,
  editCard,
  onChange,
  shortTitle,
  title,
  ...props
}) => {
  const cardClass = classNames(
    {
      'uic--box-select-card': true,
    },
    className
  );

  return (
    <QuestionCard
      {...props}
      editCard={editCard}
      shortTitle={shortTitle}
      title={title}
      className={cardClass}
      summary={
        <SimpleSummary
          answers={
            answers || [getSelectedAnswerLabel(config.options, config.value)]
          }
          editCard={editCard}
          shortTitle={shortTitle || title}
        />
      }
    >
      <BoxSelect {...config} onChange={onChange} required />
    </QuestionCard>
  );
};

BoxSelectCard.propTypes = {
  /** Values to pass into  BoxSelect component. */
  config: PropTypes.shape({
    /** The select options to appear within the box. */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        /** The value of the select button, for example `yes` or `no`. */
        value: PropTypes.string.isRequired,
        /** The label to appear on the box. */
        label: PropTypes.string,
        /** The description to appear on the box. */
        description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        /** The icon to display at the top of the card. */
        icon: PropTypes.node,
      })
    ).isRequired,
    /** The name of the box group. Gets passed back when the onClick handler is triggered. */
    name: PropTypes.string.isRequired,
    /** The item that is currently selected. */
    value: PropTypes.string,
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

export default BoxSelectCard;
