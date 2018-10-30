import React, { Children, Component } from "react";

/**
 * All management boards need to have those functions,
 * So this
 */
class ManagementBoard extends Component {
  deleteItem = (id, mutation, query) => {
    mutation({
      variables: {
        id
      }
    })
      .then(_ => {
        this.setState({
          pageNumber: 1
        });

        query.refetch({
          first: this.state.amountPerPage,
          skip: 0
        });
      })
      .catch(console.log);
  };
  navigateToPage = (pageNumber, query) => {
    query
      .fetchMore({
        variables: {
          skip: (pageNumber - 1) * this.state.amountPerPage,
          first: this.state.amountPerPage
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          return fetchMoreResult;
        }
      })
      .then(_ => {
        this.setState({
          pageNumber
        });
      });
  };

  constructor(props) {
    super(props);

    this.state = {
      amountPerPage: 3,
      pageNumber: 1
    };
  }

  render() {
    return (
      <div>
        {Children.map(this.props.children, child =>
          React.cloneElement(child, {
            amountPerPage: this.state.amountPerPage,
            pageNumber: this.state.pageNumber,
            navigateToPage: this.navigateToPage,
            deleteItem: this.deleteItem
          })
        )}
      </div>
    );
  }
}

export default ManagementBoard;
