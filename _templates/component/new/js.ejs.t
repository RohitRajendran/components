---
to: components/<%= compPath %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.js
---
<%
  compName = h.changeCase.pascal(name)
-%>
/** @module <%= compName %> */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React<%= isStateful ? ', {Component}' : '' %> from 'react';
import './<%= compName %>.scss';

<% if (isStateful) { -%>
/** <%= description %>  */
class <%= compName %> extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {};
  }

  /** @inheritdoc */
  render() {
    const {className, style} = this.props;

    const containerClasses = classNames(
      {
        'uic--<%= h.changeCase.paramCase(name) %>': true,
      },
      className
    );

    return (
      <div className={containerClasses} style={style}>
        Hello World
      </div>
    );
  }
}
<% } else {-%>
const <%= compName %> = ({className, style}) => {
  const containerClasses = classNames(
    {
      'uic--<%= h.changeCase.paramCase(name) %>': true,
    },
    className
  );

  return (
    <div className={containerClasses} style={style}>
      Hello World
    </div>
  );
};
<% } -%>

<%= compName %>.propTypes = {
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

export default <%= compName %>;
