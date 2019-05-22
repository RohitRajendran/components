/** @module CardShell */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component, createRef} from 'react';
import {animated, Spring, config} from 'react-spring/renderprops.cjs';
import Button from '~components/atoms/Button/Button';
import {maskEnum} from '~components/atoms/Input/Input';
import Spinner from '~components/atoms/Spinner/Spinner';
import {dsmColors} from '~constants/js/colors';
import './CardShell.scss';

/**
 * Validates children to see if it is valid
 * @param {array<Node>} children - Component
 * @param {boolean} startValidated - Determines if the validation should start as validated or not.
 * @returns {object} - An object containing information about the validation.
 */
export const validateChildren = (children, startValidated = false) => {
  const childValidity = React.Children.map(children, (child) => {
    let isChildValid = startValidated;
    let hasIncompleteRequiredFields = false;
    if (React.isValidElement(child)) {
      if (!child.props.disabled && child.props.required) {
        hasIncompleteRequiredFields = true;
        if (
          (child.props.value && child.props.value.length > 0) ||
          typeof child.props.value === 'boolean' ||
          !startValidated
        ) {
          hasIncompleteRequiredFields = false;
          if (child.props.mask && child.props.isValid) {
            isChildValid =
              maskEnum[child.props.mask].mask.regex.test(child.props.value) &&
              child.props.isValid(child.props.value);
          } else if (child.props.mask) {
            isChildValid = maskEnum[child.props.mask].mask.regex.test(
              child.props.value
            );
          } else if (child.props.isValid) {
            isChildValid = child.props.isValid(child.props.value);
          } else if (Array.isArray(child.props.value)) {
            isChildValid = Boolean(child.props.value.length > 0);
          } else if (typeof child.props.value === 'boolean') {
            isChildValid = true;
          } else {
            isChildValid = Boolean(child.props.value);
          }
        }
      } else if (
        !child.props.disabled &&
        ((child.props.pattern &&
          !new RegExp(child.props.pattern).test(child.props.value)) ||
          (child.props.min && child.props.value < child.props.min) ||
          (child.props.max && child.props.value > child.props.max) ||
          (child.props.maxLength &&
            child.props.value &&
            child.props.value.length > child.props.maxLength) ||
          (child.props.isValid && !child.props.isValid(child.props.value)))
      ) {
        isChildValid = false;
      } else {
        isChildValid = true;
      }
      // Check if element uses follow ups and if so validate those followups
      if (child.props.options) {
        const option = child.props.options.find(
          (opt) => opt.value === child.props.value
        );

        if (option && option.followup) {
          const revalidated = validateChildren(
            [option.followup],
            startValidated
          );
          isChildValid = isChildValid && revalidated.isChildValid;
          hasIncompleteRequiredFields =
            hasIncompleteRequiredFields ||
            revalidated.hasIncompleteRequiredFields;
        }
      }
      const revalidated = validateChildren(
        child.props.children,
        startValidated
      );
      isChildValid = isChildValid && revalidated.isChildValid;
      hasIncompleteRequiredFields =
        hasIncompleteRequiredFields || revalidated.hasIncompleteRequiredFields;
      return {
        isChildValid,
        hasIncompleteRequiredFields,
      };
    } else {
      isChildValid = true;
    }
    return {
      isChildValid,
      hasIncompleteRequiredFields,
    };
  });
  if (childValidity) {
    return childValidity.reduce(
      (accumulator, object) => {
        accumulator['isChildValid'] =
          object.isChildValid && accumulator.isChildValid;
        accumulator['hasIncompleteRequiredFields'] =
          object.hasIncompleteRequiredFields ||
          accumulator.hasIncompleteRequiredFields;

        return accumulator;
      },
      {isChildValid: true, hasIncompleteRequiredFields: false}
    );
  }
  return {isChildValid: true, hasIncompleteRequiredFields: false};
};

/** CardShell Component */
class CardShell extends Component {
  /**
   * Standard react constructor method
   * @param {Object} props - component props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAnimationStart = this.onAnimationStart.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);

    this.contentNode = createRef();
    this.state = {
      isInvalid: !validateChildren(props.children).isChildValid,
      height: props.animate ? 0 : 'auto',
      animationEnded: false, // Used to add a class that can be used to trigger other css animations in children
      hasAnimationRun: false, // Used to prevent delay in animation effect in subsequent animations,
      isSubmitting: false,
    };
  }

  /** @inheritdoc */
  componentDidUpdate(prevProps) {
    const updatedState = {};

    const {isChildValid} = validateChildren(this.props.children);
    if (this.state.isInvalid !== !isChildValid) {
      updatedState.isInvalid = !isChildValid;
    }

    if (
      prevProps.isCollapsed !== this.props.isCollapsed &&
      this.state.height !== this.contentNode.current.clientHeight
    ) {
      updatedState.height = this.contentNode.current.clientHeight;
    }

    if (Object.keys(updatedState).length > 0) {
      this.setState(updatedState);
    }
  }

  /**
   * Calls the onSubmit function from props
   * @param {object} e event
   * @returns {undefined}
   */
  async onSubmit(e) {
    e.preventDefault();
    this.setState({isSubmitting: true});

    await this.props.onSubmit(
      e, // Gets passed through because of Hogwarts
      this.props.outputDefaults
    );

    this.setState({isSubmitting: false});
  }

  /**
   * Calls the onChange function from props with field name and value passed through
   * @param {object} e event
   * @returns {undefined}
   */
  onChange(e) {
    e.preventDefault();
    this.props.onChange(e.target.name, e.target.value);
  }

  /**
   * Runs on start of animation to remove animation ended class
   * @returns {undefined}
   */
  onAnimationStart() {
    this.setState({animationEnded: false});
  }

  /**
   * Run on end of animation to add animation ended class and specify animations have been run
   * @returns {undefined}
   */
  onAnimationEnd() {
    this.setState({animationEnded: true, hasAnimationRun: true});
  }

  /**
   * Standard render method
   * @returns {JSX} - react JSX
   */
  render() {
    const {
      autoComplete,
      afterButton,
      beforeButton,
      buttonText,
      children,
      className,
      disabled,
      hasError,
      hideButton,
      isCollapsed,
      isFetching,
      loading,
      onChange,
      summary,
      stepIndex,
    } = this.props;
    const {
      animationEnded,
      hasAnimationRun,
      height,
      isInvalid,
      isSubmitting,
    } = this.state;

    const cardClass = classNames(
      {
        'uic--mcgonagall-card': true,
        'uic--w-100': true,
        'uic--active': !isCollapsed,
        'uic--collapsed': isCollapsed,
        'uic--error': hasError,
        'uic--position-relative': true,
        'uic--animation-ended': animationEnded,
      },
      className
    );

    return (
      <Spring
        native
        config={{...config.default, precision: 1}}
        from={{
          height,
          border: 'none',
          padding: 0,
        }}
        to={{
          height: 'auto',
          border: '',
          padding: '',
        }}
        delay={hasAnimationRun ? 0 : 150 * stepIndex}
        onStart={this.onAnimationStart}
        onRest={this.onAnimationEnd}
      >
        {(style) => (
          <animated.div
            className={cardClass}
            style={style}
            ref={this.contentNode}
          >
            {!isCollapsed && <div className="uic--active-border" />}
            {isCollapsed ? (
              summary
            ) : (
              <form
                autoComplete={autoComplete ? '' : 'off'}
                onChange={onChange && this.onChange}
                onSubmit={this.onSubmit}
              >
                {children}

                {(beforeButton || afterButton || !hideButton) && (
                  <div className="uic--card-after-content uic--d-flex uic--align-items-center uic--flex-column">
                    {beforeButton && (
                      <div className="uic--card-before-button">
                        {beforeButton}
                      </div>
                    )}

                    {!hideButton &&
                      (isFetching ? (
                        <Spinner
                          fill={dsmColors['royal']}
                          height="25"
                          width="25"
                        />
                      ) : (
                        <Button
                          className="uic--card-submit"
                          disabled={isInvalid || disabled}
                          isLoading={loading || isSubmitting}
                          light
                          type="submit"
                          variant="secondary"
                        >
                          {buttonText}
                        </Button>
                      ))}

                    {afterButton && (
                      <div className="uic--card-after-button uic--d-flex uic--align-items-center uic--flex-column">
                        {afterButton}
                      </div>
                    )}
                  </div>
                )}
              </form>
            )}
          </animated.div>
        )}
      </Spring>
    );
  }
}

CardShell.propTypes = {
  /** Whether it should animate on mount */
  animate: PropTypes.bool,
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** Enables browser auto complete. */
  autoComplete: PropTypes.bool,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button. */
  buttonText: PropTypes.string,
  /** HTML element that should appear within the card when not collapsed. */
  children: PropTypes.node.isRequired,
  /** Additional class names to apply */
  className: PropTypes.string,
  /** Force disables the button. */
  disabled: PropTypes.bool,
  /** Displays the error state of the card. */
  hasError: PropTypes.bool,
  /** Hides the button on the card. */
  hideButton: PropTypes.bool,
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed: PropTypes.bool,
  /** Shows spinner in place of card button, used when need to prevent actions while card is loading  */
  isFetching: PropTypes.bool,
  /** Shows a loading indicator on the button for actions after the button is clicked. */
  loading: PropTypes.bool,
  /** The handler to fire when a change happens. */
  onChange: PropTypes.func,
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: PropTypes.func.isRequired,
  /** Output defaults to fallback to on continue if an output is empty. The key should be the output name and the value should be the default value */
  outputDefaults: PropTypes.shape({}),
  /** The summary view that should display when the card is collapsed. */
  summary: PropTypes.node,
  /** The index of this card in the flow, used for animation purposes */
  stepIndex: PropTypes.number,
};

CardShell.defaultProps = {
  autoComplete: false,
  animate: false,
  buttonText: 'Continue',
  stepIndex: 0,
};

export default CardShell;
