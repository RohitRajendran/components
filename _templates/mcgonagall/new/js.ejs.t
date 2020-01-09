---
to: <%= path %>/<%= h.changeCase.pascal(name) %>.js
---
<%
  compName = h.changeCase.pascal(name)
-%>
import {Loader, McGonagall} from '@unitedincome/components';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import browserHistory from '../../../history'; // TODO: You must provide McGonagall with a browser history object.
import {steps} from './<%= compName %>.cards';
import {stateConfig, stateOptions} from './<%= compName %>.xstate';

/**
 * Map Redux state to component props
 * @param {Object} state - Redux state
 * @param {Object} ownProps - Props
 * @returns {Object} Props for component from state.
 */
const mapStateToProps = (state, ownProps) => ({
  // TODO: Basic usage example with Redux.
  userData: state.userData.get('data').toJS(),
  exitLocation: state.userData.get('exitLocation'),
  isFetching: state.userData.get('isFetching'),
  hasFetched: state.userData.get('hasFetched'),
});

/**
 * Map actions to component props
 */
const mapDispatchToProps = {
  // TODO: Add needed actions or remove if not.
};

/** <%= compName %> Component */
class <%= compName %> extends PureComponent {
  /** @inheritdoc */
  render() {
    if (!this.props.hasFetched && this.props.isFetching) {
      return <Loader />;
    }

    // Stores data in the stateContext which is accesible in each card.
    const stateContext = {
      userData: this.props.userData,
      madeWithMcGonagall: true,
    };

    return (
      <McGonagall
        name="<%= compName %>"
        browserHistory={browserHistory}
        location={this.props.location}
        stateConfig={stateConfig}
        stateContext={stateContext}
        stateOptions={stateOptions}
        steps={steps}
        isFetching={this.props.isFetching}
        //exitLocation={} TODO: Add an exit location - The user will be taken here upon completion of the flow.
      />
   );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= compName %>);
export {<%= compName %> as Pure<%= compName %>};