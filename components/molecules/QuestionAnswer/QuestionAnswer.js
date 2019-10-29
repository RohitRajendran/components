/** @module QuestionAnswer */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import ExpandCollapse from '~components/atoms/ExpandCollapse/ExpandCollapse';
import './QuestionAnswer.scss';

/** Displays a group of frequently asked questions in a list.
 * @param {object} props - The component props.
 * @returns {JSX} - Returns the JSX representation of the QuestionAnswer component.
 */
class QuestionAnswer extends PureComponent {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      expanded: null,
    };

    this.setExpanded = this.setExpanded.bind(this);
  }

  /** Sets the expanded item.
   * @param {integer} item - The item index.
   * @returns {undefined}
   */
  setExpanded(item) {
    this.setState({
      expanded: this.state.expanded === item ? null : item,
    });
  }

  /** @inheritdoc */
  render() {
    const {className, style, items, header} = this.props;

    const containerClasses = classNames(
      {
        'uic--question-answer': true,
      },
      className,
    );

    return (
      <div className={containerClasses} style={style}>
        <div className="uic--row">
          <div className="uic--question-answer__header uic--d-flex uic--justify-content-center uic--align-items-center uic--col-12 uic--col-md-6">
            <h2 className="uic--question-answer__header-inner uic--header-1-5-text uic--text-center">
              {header}
            </h2>
          </div>

          <div className="uic--question-answer__qa uic--col-12 uic--col-md-6">
            <div className="uic--question-answer__qa-wrapper">
              {items.map(({question, answer}, index) => (
                <div
                  key={index}
                  className="uic--question-answer__qa-wrapper-question"
                  role="menu"
                >
                  <ExpandCollapse
                    name={`item-${index}`}
                    open={`item-${index}` === this.state.expanded}
                    onClick={this.setExpanded}
                    label={question}
                  >
                    {answer}
                  </ExpandCollapse>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

QuestionAnswer.propTypes = {
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** The header of the QuestionAnswer section. */
  header: PropTypes.string.isRequired,
  /** The items to appear within the QuestionAnswer component. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** The question being asked. */
      question: PropTypes.string.isRequired,
      /** The answer of the question. */
      answer: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
        .isRequired,
    }),
  ).isRequired,
};

export default QuestionAnswer;
