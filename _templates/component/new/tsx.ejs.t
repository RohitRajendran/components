---
to: components/<%= compPath %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
<%
  compName = h.changeCase.pascal(name)
-%>
/** @module <%= compName %> */
import classNames from 'classnames';
import React<%= isStateful && hooks ? ', {FC, useState}' : isStateful ? ', {Component}' : ', {FC}' %> from 'react';
import './<%= compName %>.scss';

type <%= compName %>Props = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties
}

<% if (isStateful && !hooks) { -%>
/** <%= description %>  */
class <%= compName %> extends Component<<%= compName %>Props> {
  /** @inheritdoc */
  constructor(props: <%= compName %>Props) {
    super(props);

    this.state = {};
  }

  /** @inheritdoc */
  render(): JSX.Element {
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
<% } else if (isStateful && hooks) { -%>
const <%= compName %>: FC<<%= compName %>> = ({className, style}): JSX.Element => {
  const [state, setState] = useState(false);

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
<% } else {-%>
const <%= compName %>: FC<<%= compName %>> = ({className, style}) => {
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

<%= compName %>.defaultProps = {
  className: 'uic--default-placeholder',
};

export default <%= compName %>;
