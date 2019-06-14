import React from "react";
import { connect } from "react-redux";
import { listResources, getQueries } from "reresource";

export default (
  resourceType,
  serviceFunction,
  serviceParameters = {},
  resourceOptions = {}
) => WrappedComponent => {
  function mapStateToProps(state, props) {
    const resource = getQueries(state, resourceType, props.queries);
    return {
      resource
    };
  }

  function mapDispatchToProps(dispatch, props) {
    return {
      listResources: parameters => {
        const mergedParameters = { ...serviceParameters, ...parameters };
        props.addQuery(mergedParameters);
        dispatch(
          listResources.call(
            this,
            resourceType,
            serviceFunction,
            mergedParameters,
            resourceOptions
          )
        );
      }
    };
  }

  const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);

  return class QueryAwareComponent extends React.PureComponent {
    state = { queries: [] };

    addQuery = q =>
      this.setState(prevState => ({ queries: [...prevState.queries, q] }));

    render() {
      return (
        <ConnectedComponent
          {...this.props}
          queries={this.state.queries}
          addQuery={this.addQuery}
        />
      );
    }
  };
};
