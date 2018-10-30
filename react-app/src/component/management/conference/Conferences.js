import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { QueryWithDefaultLoadingAndError } from "../../../apollo";
import Header from "../Header";
import { ConferencesTable } from "./ConferencesTable";

// TODO write a query to deleteConference
const DELETE_CONFERENCE =undefined;

// TODO write a query to get all conferences
const GET_CONFERENCES = undefined;

class Conferences extends Component {
  render() {
    const {
      amountPerPage,
      pageNumber,
      navigateToPage,
      deleteItem
    } = this.props;

    const labels = ["ID", "Name", "City", "Country", "Start Date"];
    return (
      <div>
        <Header title="Conferences" addLink="/secure/conference" />
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <QueryWithDefaultLoadingAndError
                  query={GET_CONFERENCES}
                  variables={{
                    first: amountPerPage,
                    skip: 0
                  }}
                  fetchPolicy="cache-and-network"
                >
                  {query => (
                    <Mutation mutation={DELETE_CONFERENCE}>
                      {deleteConference => (
                        <ConferencesTable
                          conferences={query.data.conferences}
                          total={query.data._allConferencesMeta.count}
                          getConferences={query}
                          navigateToPage={navigateToPage}
                          deleteConference={deleteConference}
                          deleteItem={deleteItem}
                          amountPerPage={amountPerPage}
                          pageNumber={pageNumber}
                          labels={labels}
                        />
                      )}
                    </Mutation>
                  )}
                </QueryWithDefaultLoadingAndError>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Conferences;
