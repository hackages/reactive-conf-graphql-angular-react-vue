import ApolloClient from 'apollo-boost';
import * as PropTypes from 'prop-types';
import React from 'react';
import {graphql, Query} from 'react-apollo';
import LoadingComponent from './component/LoadingComponent';

export const apolloClient = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cj1ufizxi5lgy0109064uyi7i'
});

export const waitForGraphql = (query, config) => WrappedComponent => {
  const GraphQLHandler = props => {
    //If skip in config, pass if true
    if (config && config.skip && config.skip(props))
      return <WrappedComponent {...props} />;

    let propertyName = 'data'; //default property name used by Apollo
    if (config && config.name && typeof config.name === 'string')
      propertyName = config.name; //Can be changed by config object

    if (props[propertyName].loading) {
      return <LoadingComponent/>;
    } else if (props[propertyName].error) {
      return <div>Error</div>;
    }
    return <WrappedComponent {...props} />;
  };
  //Wrapped component will loose it's static properties,
  //Transfer them to the returned graphQLHandler function
  Object.keys(WrappedComponent).map(
    key => (GraphQLHandler[key] = WrappedComponent[key])
  );
  return graphql(query, config)(GraphQLHandler);
};

export const QueryWithDefaultLoadingAndError = props => {
  const {children, ...rest} = props;
  return (
    <Query {...rest}>
      {query => {
        if (props.skip) return children(query);
        if (query.loading) return <LoadingComponent/>;
        if (query.error) return `Error!: ${query.error}`;

        return children(query);
      }}
    </Query>
  );
};

QueryWithDefaultLoadingAndError.propTypes = {
  client: PropTypes.object,
  children: PropTypes.func,
  fetchPolicy: PropTypes.string,
  notifyOnNetworkStatusChange: PropTypes.bool,
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
  pollInterval: PropTypes.number,
  query: PropTypes.object.isRequired,
  variables: PropTypes.object,
  ssr: PropTypes.bool,
  partialRefetch: PropTypes.bool
};
