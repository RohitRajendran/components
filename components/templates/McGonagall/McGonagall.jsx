/** @module McGonagall */
import pick from 'lodash/pick';
import PropTypes from 'prop-types';
import * as queryString from 'query-string';
import React from 'react';
import {assign, Machine} from 'xstate';
import CloseIcon from '~components/atoms/icons/CloseIcon/CloseIcon.tsx';
import Confirm from '~components/utilities/Confirm/Confirm';
import {isWindowDefined} from '~components/utilities/DetectBrowser/DetectBrowser';
import './McGonagall.scss';

// Saves the user data to McGonagalls state context.
export const saveToStateContext = assign((ctx, eve) => ({
  ...eve,
}));

/** McGonagall Component */
class McGonagall extends React.Component {
  /**
   * Standard react constructor method
   * @param {Object} props - component props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);

    this.stateMachine = Machine(
      props.stateConfig,
      props.stateOptions,
      props.stateContext,
    );

    // Finds the step that matches the initial step declared by state machine
    const firstStep = this.getMatchingStep(
      props.steps,
      this.stateMachine.initialState,
    );

    const {currXState, activeCard, cardHistory} = this.navigateToLatestCard(
      [firstStep],
      this.stateMachine.initialState,
    );

    this.state = {
      ...this.stateMachine.initialState.context,
      activeCard,
      cardHistory,
      currXState,
      hasMounted: false, // Used to switch animation styles
    };

    this.close = this.close.bind(this);
    this.navigateToLatestCard = this.navigateToLatestCard.bind(this);
    this.navigateToStep = this.navigateToStep.bind(this);
    this.renderStep = this.renderStep.bind(this);
    this.setStateField = this.setStateField.bind(this);
  }

  /** @inheritdoc */
  componentDidMount() {
    this.setState({hasMounted: true});
  }

  /** @inheritdoc */
  componentDidUpdate() {
    // When final step is no longer the active card
    if (
      this.isFinalStep(
        this.props.stateConfig.states,
        this.state.cardHistory[0].name,
      ) &&
      this.activeCard !== this.state.cardHistory[0].name
    ) {
      // Remove final step from the card history and revert currXState to the second last step
      const newCardHistory = this.state.cardHistory.slice(1);
      const newXState = this.stateMachine.transition(newCardHistory[1].name, {
        type: 'NEXT',
        ...this.state.currXState.context,
      });

      this.setState({
        cardHistory: newCardHistory,
        currXState: newXState,
      });
    }
  }

  /**
   * Gets active card based on query string
   */
  get activeCard() {
    return (
      queryString.parse(this.props.location.search).step ||
      this.state.currXState.value
    );
  }

  /**
   * Recursively transitions until it reaches the last card it can navigate to
   * @param {array} cardHistory current card history
   * @param {object} currXState current xstate object
   * @returns {object} updated currXstate, activeCard, and cardHistory
   */
  navigateToLatestCard(cardHistory, currXState) {
    const newCardHistory = cardHistory;
    let latest = this.stateMachine.transition(currXState.value, {
      type: 'NEXT',
      navigatingToLatestCard: true,
      ...currXState.context,
    });
    let finalReached = false;

    do {
      if (
        latest.value !== currXState.value &&
        latest.value !== newCardHistory[0].name
      ) {
        newCardHistory.unshift(this.getMatchingStep(this.props.steps, latest));
      }

      const next = this.stateMachine.transition(latest.value, {
        type: 'NEXT',
        navigatingToLatestCard: true,
        ...currXState.context,
      });

      // Stop right before final step
      if (!this.isFinalStep(this.props.stateConfig.states, next.value)) {
        latest = next;
      } else {
        finalReached = true;
      }
    } while (latest.value !== newCardHistory[0].name && !finalReached);

    this.navigateToStep(latest.value);

    return {
      currXState: latest,
      activeCard: latest.value,
      cardHistory: newCardHistory,
    };
  }

  /**
   * Update state machine and transition
   * @param {array<string>} outputs the expected outputs for the step
   * @param {object} outputDefaults default values for outputs to fallback to
   * @param {boolean} clearFuture whether it should clear values from future steps
   * @returns {undefined}
   */
  updateStateMachine(outputs, outputDefaults, clearFuture) {
    let prevHistory = this.state.cardHistory;

    // Get values from state based on expected step outputs
    const payload = pick(this.state, outputs);

    // If output defaults are provided, check if any values should use them
    let updatedPayloadValues = {};
    if (outputDefaults) {
      updatedPayloadValues = Object.keys(payload).reduce((accum, key) => {
        const outputHasNoValue = !payload[key] || payload.key === '';
        const hasDefaultValue = Boolean(accum[key]);

        if (!(outputHasNoValue && hasDefaultValue)) {
          delete accum[key];
        }

        return accum;
      }, outputDefaults);
    }

    if (clearFuture) {
      // Find current position in card history
      const currIndex = this.state.cardHistory.findIndex(
        (history) => history.name === this.activeCard,
      );

      // Clear out future history
      prevHistory = prevHistory.slice(currIndex, prevHistory.length);
    }

    // Feed values to state machine to find the next state
    const newState = this.stateMachine.transition(
      this.activeCard,
      {
        type: 'NEXT',
        ...payload,
        ...updatedPayloadValues,
      },
      {...this.state.currXState.context},
    );

    // Get the side-effect actions to execute
    newState.actions.forEach((action) => {
      // If the action is executable, execute it
      action.exec &&
        action.exec(this.state.currXState.context, {
          ...payload,
          ...updatedPayloadValues,
        });
    });

    // If editing a previous step and not clearing future, it should just return to latest
    const shouldReturnToLatest =
      this.activeCard !== this.state.currXState.value && !clearFuture;

    // If returning to latest, use the same state but with an update context
    let updatedCurrState;
    if (shouldReturnToLatest) {
      updatedCurrState = this.state.currXState;
      updatedCurrState.context = newState.context;
    } else {
      updatedCurrState = newState;
    }

    const updatedData = {
      currXState: updatedCurrState,
      ...updatedCurrState.context,
      ...updatedPayloadValues,
    };

    // If not returning to latest, need to update the card history
    if (!shouldReturnToLatest) {
      updatedData.cardHistory = [
        this.getMatchingStep(this.props.steps, newState),
        ...prevHistory,
      ];
    }

    this.navigateToStep(
      this.activeCard !== this.state.currXState.value && !clearFuture
        ? this.state.currXState.value
        : newState.value,
    );
    this.setState(updatedData);
  }

  /**
   * Finds the step that matches the given state machine state
   * @param {array<object>} allSteps array of step objects
   * @param {object} state state machine
   * @returns {object} step
   */
  getMatchingStep(allSteps, state) {
    return allSteps.find((step) => state.matches(step.name));
  }

  /**
   * Updates url query param to the provided step
   * @param {string} stepName step name
   * @param {boolean} [shouldScrollToTop = true] should scroll to top
   * @param {boolean} [shouldRevertChanges] should revert state to values from state machine context
   * @returns {undefined}
   */
  navigateToStep(stepName, shouldScrollToTop = true, shouldRevertChanges) {
    if (shouldRevertChanges) {
      this.setState(this.state.currXState.context);
    }
    this.props.browserHistory.push({
      pathname: this.props.location.pathname,
      query: {
        ...queryString.parse(this.props.location.search),
        step: stepName,
      },
    });
    if (shouldScrollToTop && isWindowDefined()) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  /**
   * Set state by field name
   * @param {string} fieldName name of field in state
   * @param {string} newValue value to set
   * @returns {undefined}
   */
  setStateField(fieldName, newValue) {
    this.setState({[fieldName]: newValue});
  }

  /**
   * Use exitLocation to close.
   * @param {object} e event
   * @returns {undefined}
   */
  close(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
    // Ignoring this if since window.location can't be set in unit test
    /* istanbul ignore if  */
    if (this.props.exitLocation.startsWith('http') && isWindowDefined()) {
      window.location = this.props.exitLocation;
    } else {
      this.props.browserHistory.push(this.props.exitLocation);
    }
  }

  /**
   * Determines if it is the final step
   * @param {object} states states from the state config
   * @param {string} stepName name of the current step
   * @returns {bool} whether it is the final step
   */
  isFinalStep(states, stepName) {
    return states[stepName].type && states[stepName].type === 'final';
  }

  /**
   * Shows confirmation modal
   * @param {func} onConfirm function to call on confirm
   * @returns {undefined}
   */
  async confirmChangeCancellation(onConfirm) {
    try {
      await Confirm({
        name: 'Cancel Changes',
        title: 'Are you sure?',
        description: `If you leave this card without hitting "Save Changes," all of your changes will be lost.`,
        okLabel: 'Leave Anyway',
        cancelLabel: 'Finish Answering',
      });

      onConfirm();
    } catch (e) {
      // Don't do anything if canceled
    }
  }

  /**
   * Renders a step
   * @param {object} step McG step
   * @param {number} stepIndex step index
   * @returns {JSX} step
   */
  renderStep(step, stepIndex) {
    const statePayload = pick(this.state, step.outputs);
    const contextPayload = pick(this.state.currXState.context, step.outputs);

    const hasMadeChanges =
      JSON.stringify(statePayload) !== JSON.stringify(contextPayload);

    // On submit will send data to state machine and update
    const onSubmit = (
      e, // Have to include because cards have to support Hogwarts passing through event
      outputDefaults,
    ) =>
      this.updateStateMachine(step.outputs, outputDefaults, step.clearFuture);

    // Reverts any component state changes and goes to latest card
    const cancelChanges = () => {
      // Dont display confirmation dialog if no changes
      !hasMadeChanges
        ? this.navigateToStep(this.state.currXState.value, true, true)
        : this.confirmChangeCancellation(() => {
            this.navigateToStep(this.state.currXState.value, true, true);
            this.forceUpdate(); // Won't rerender otherwise
          });
    };

    // Reverts any component state changes and opens card
    const editCard = () => {
      // Check for changes in active step
      const currStepOutputs = this.props.steps.find(
        ({name}) => name === this.activeCard,
      ).outputs;
      const currStepStatePayload = pick(this.state, currStepOutputs);
      const currStepContextPayload = pick(
        this.state.currXState.context,
        currStepOutputs,
      );

      // Dont display confirmation dialog if no changes in active step or is currently at the review step
      JSON.stringify(currStepStatePayload) ===
        JSON.stringify(currStepContextPayload) || this.activeCard === 'review'
        ? this.navigateToStep(step.name, false, true)
        : this.confirmChangeCancellation(() => {
            this.navigateToStep(step.name, false, true);
            this.forceUpdate(); // Won't rerender otherwise
          });
    };

    // Pass props and state into cards
    return step.card(
      {
        animate: stepIndex !== 0 || (stepIndex === 0 && this.state.hasMounted),
        cancelChanges,
        clearFuture: step.clearFuture,
        context: this.state.currXState.context,
        description: step.description,
        defaultValues: step.defaultValues,
        editCard,
        hasMadeChanges,
        isCollapsed: this.activeCard !== step.name,
        isFetching: this.props.isFetching,
        isLatestCard: this.state.currXState.matches(step.name),
        key: step.name,
        name: step.name,
        onChange: this.setStateField,
        onSubmit,
        shortTitle: step.shortTitle,
        stepIndex,
        title: step.title,
      },
      this.state,
    );
  }

  /** @inheritdoc */
  render() {
    const {name, stateConfig} = this.props;
    const {cardHistory} = this.state;

    return (
      <div className="uic--mcg-framework">
        <div className="uic--mcg-subnav uic--d-flex uic--align-items-center uic--justify-content-between uic--position-fixed">
          <span /> {/** To help with flex positioning */}
          <h1>{name}</h1>
          <button type="button" onClick={this.close}>
            <CloseIcon height="2rem" width="2rem" />
          </button>
        </div>

        {this.isFinalStep(stateConfig.states, cardHistory[0].name) ? (
          this.renderStep(cardHistory[0], 0)
        ) : (
          <div className="uic--mcg-card-container">
            {cardHistory.map(this.renderStep)}
          </div>
        )}
      </div>
    );
  }
}

McGonagall.propTypes = {
  /** Additional class names to apply */
  className: PropTypes.string,
  /** Name of the flow */
  name: PropTypes.string,
  /** Page to go to if user clicks the close button */
  exitLocation: PropTypes.string.isRequired,
  /** Function to call on exit of the flow */
  onClose: PropTypes.func,
  /** Location info from router */
  location: PropTypes.shape({
    /** Pathname */
    pathname: PropTypes.string,
    /** Query string */
    search: PropTypes.string,
  }).isRequired,
  /** State machine config object that tells the state machine the different states and context. View https://xstate.js.org/docs/guides/machines.html#configuration for more details */
  stateConfig: PropTypes.shape({
    /** Name of the flow */
    id: PropTypes.string.isRequired,
    /** The state to start with */
    initial: PropTypes.string.isRequired,
    /** The various states and transitions for the flow */
    states: PropTypes.object.isRequired,
  }).isRequired,
  /** State machine options for implementing actions, activities, guards and services. View https://xstate.js.org/docs/guides/machines.html#options for more details */
  stateOptions: PropTypes.shape({
    /** Fire-and-forget "side-effects" called on event. Can be called onEntry, onExit, or when a transition is executed. View https://xstate.js.org/docs/guides/machines.html#options for more details */
    actions: PropTypes.object,
    /** Actions that occur over time and can be started/stopped. View https://xstate.js.org/docs/guides/activities.html#activities for more details */
    activities: PropTypes.object,
    /** Conditional transitions. View https://xstate.js.org/docs/guides/guards.html#guards-conditional-transitions for more details */
    guards: PropTypes.object,
    /** Allows invoking promiseses, callbacks, and machines. View https://xstate.js.org/docs/guides/communication.html#invoking-services for more details */
    services: PropTypes.object,
  }),
  /** The local "extended state" for the state machine  */
  stateContext: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Browser history object */
  browserHistory: PropTypes.shape({
    /** Push new navigation */
    push: PropTypes.func.isRequired,
  }).isRequired,
  /** The various steps to render */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      /** Name of the step, should be the same as the state name */
      name: PropTypes.string.isRequired,
      /** Title of the card */
      title: PropTypes.string,
      /** Optional shorter title used for the collapsed state */
      shortTitle: PropTypes.string,
      /** Optional description */
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      /** Whether it should clear all future values when this card is edited */
      clearFuture: PropTypes.bool,
      /** A function that takes in props and state and renders the card */
      card: PropTypes.func.isRequired,
      /** The names of all the outputs for this card, required for cards that update values */
      outputs: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  /** Shows loading indicator in place of card button  */
  isFetching: PropTypes.bool,
};

export default McGonagall;
