import gql from "graphql-tag";
import React, { Component } from "react";

import { Mutation } from "react-apollo";
import { QueryWithDefaultLoadingAndError } from "../../../apollo";
import Header from "../Header";
import { TalksTable } from "./TalksTable";

// TODO write a query to get all talks
const GET_TALKS = undefined;

// TODO write a query to deleteTalk
const DELETE_TALK = undefined;

class Talks extends Component {
  render() {
    const {
      amountPerPage,
      pageNumber,
      navigateToPage,
      deleteItem
    } = this.props;

    const labels = ["ID", "title", "Room", "Starts At"];
    return (
      <div>
        <Header title="Talks" addLink="/secure/talk" />
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <TalksTable
                  talks={query.data.talks}
                  total={query.data._allTalksMeta.count}
                  getTalks={query}
                  navigateToPage={navigateToPage}
                  deleteTalk={deleteTalk}
                  deleteItem={deleteItem}
                  amountPerPage={amountPerPage}
                  pageNumber={pageNumber}
                  labels={labels}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Talks;
