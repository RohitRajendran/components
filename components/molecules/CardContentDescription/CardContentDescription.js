/** @module CardContentDescription */
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import requiredIf from 'react-required-if';
import Spinner from '~components/atoms/Spinner/Spinner';
import {colors} from '~constants/js/colors';
import './CardContentDescription.scss';

/** Displays a dynamic message on a card.  */
class CardContentDescription extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      valid: false,
      isFetching: false,
    };

    this.fetchData = debounce(this.fetchData.bind(this), 1000);
    this.checkValidityAndFetch = this.checkValidityAndFetch.bind(this);
  }

  /** Fetches data and sets state to indicate it's complete.
   * @returns {undefined}
   */
  async fetchData() {
    await this.props.onChange();

    this.setState({
      isFetching: false,
    });
  }

  /**
   * Checks validity before fetching
   * @param {boolean} valuesChanged has values changed
   * @returns {undefined}
   */
  checkValidityAndFetch(valuesChanged) {
    const valid = this.props.validate && this.props.validate();

    if (valuesChanged && valid) {
      this.setState({
        isFetching: true,
        valid,
      });

      this.fetchData();
    } else if (!valid && valid !== this.state.valid) {
      // If the field is invalid then the following state causes the text to hide.
      this.setState({
        valid,
      });
    }
  }

  /** @inheritdoc */
  componentDidMount() {
    this.checkValidityAndFetch(true);
  }

  /** @inheritdoc */
  componentDidUpdate(prevProps) {
    if (this.props.validate && this.props.values && this.props.onChange) {
      const prevValues = JSON.stringify(prevProps.values);
      const values = JSON.stringify(this.props.values);

      this.checkValidityAndFetch(values !== prevValues);
    }
  }

  /** @inheritdoc */
  render() {
    const {
      className,
      style,
      children,
      removeTopBorder,
      removeBottomBorder,
      validate,
    } = this.props;

    const {isFetching, valid} = this.state;

    const containerClasses = classNames(
      {
        'uic--card-content-description': true,
        'uic--text-center': true,
      },
      className
    );

    if (validate && !valid) {
      return null;
    }

    return (
      <div className={containerClasses} style={style}>
        {!removeTopBorder && <hr />}
        <div className="uic--card-content-description__content uic--text-center uic--mcg-subhead-2-text">
          {isFetching ? (
            <Spinner height="2rem" width="2rem" fill={colors.midnight} />
          ) : (
            children
          )}
        </div>
        {!removeBottomBorder && <hr />}
      </div>
    );
  }
}

CardContentDescription.propTypes = {
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** HTML element that should appear when the component is not fetching. */
  children: PropTypes.node.isRequired,
  /** An object of values which the component will keep track of to see if there's a change. */
  values: PropTypes.arrayOf(PropTypes.string),
  /** The function which will fire when the validation function passes, and if a value has changed. */
  onChange: requiredIf(PropTypes.func, (props) => props.values),
  /** The validation function which is used to see if the conditions are right for the onChange handler to fire. Must returns true/false. */
  validate: requiredIf(PropTypes.func, (props) => props.values),
  /** Removes the top horizontal rule. */
  removeTopBorder: PropTypes.bool,
  /** Removes the bottom horizontal rule. */
  removeBottomBorder: PropTypes.bool,
};

export default CardContentDescription;
