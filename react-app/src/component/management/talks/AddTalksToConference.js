import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { QueryWithDefaultLoadingAndError } from "../../../apollo";
import { AddTalksOnConferenceForm } from "./AddTalksToConferenceForm";

// TODO write a query to get allTalks
const GET_TALKS = undefined;

// TODO write a query to get allTalks
const UPDATE_CONFERENCE = undefined;

class AddTalksOnConference extends Component {
  addTalk = (mutateFn, refetchFn, talks) => (talkId, conferenceId) => {
    mutateFn({
      variables: {
        talkIds: this.getPlannedTalks(talks, conferenceId)
          .map(talk => talk.id)
          .concat(talkId),
        conferenceId
      }
    }).then(_ => {
      refetchFn();
    });
  };

  deleteTalk = (mutateFn, refetchFn, talks) => (talkId, conferenceId) => {
    mutateFn({
      variables: {
        talkIds: this.getPlannedTalks(talks, conferenceId)
          .map(talk => talk.id)
          .filter(id => id !== talkId),
        conferenceId
      }
    }).then(_ => {
      refetchFn();
    });
  };
  getPlannedTalks = (talks, conferenceId) => {
    return talks.filter(talk => {
      return (
        talk.conferences &&
        talk.conferences.some(({ id }) => id === conferenceId)
      );
    });
  };
  refetch = query => () => {
    query.refetch();
  };

  render() {
    const {
      match: {
        params: { id: conferenceId }
      }
    } = this.props;

    return (
      <>
        <Mutation>
          {updateConference => (
            <QueryWithDefaultLoadingAndError>
              {getTalks => {
                return (
                  <AddTalksOnConferenceForm
                    talks={getTalks.data.talks}
                    plannedTalks={this.getPlannedTalks(
                      getTalks.data.talks,
                      conferenceId
                    )}
                    conferenceId={conferenceId}
                    deleteTalk={this.deleteTalk(
                      updateConference,
                      this.refetch(getTalks),
                      getTalks.data.talks
                    )}
                    addTalk={this.addTalk(
                      updateConference,
                      this.refetch(getTalks),
                      getTalks.data.talks
                    )}
                  />
                );
              }}
            </QueryWithDefaultLoadingAndError>
          )}
        </Mutation>
      </>
    );
  }
}

export default AddTalksOnConference;
