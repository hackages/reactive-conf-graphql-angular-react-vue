import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { QueryWithDefaultLoadingAndError } from "../../../apollo";
import { AddSpeakerToTalkForm } from "./AddSpeakerToTalkForm";

// TODO write a query to GET_SPEAKER_OF_A_TALK
const GET_SPEAKER_OF_A_TALK = undefined;

// TODO write a query to get all speakers
const GET_ALL_SPEAKERS = undefined;

// TODO write a query to updateSpeaker
const UPDATE_SPEAKER = undefined;

class AddSpeakerToTalk extends Component {
  addSpeaker = (mutateFn, refetchFn) => (talkId, speakerId) => {
    mutateFn({
      variables: {
        talkId,
        speakerId: speakerId
      }
    }).then(_ => {
      refetchFn();
    });
  };

  deleteSpeaker = (mutateFn, refetchFn) => talkId => {
    mutateFn({
      variables: {
        talkId,
        speakerId: null
      }
    }).then(_ => {
      refetchFn();
    });
  };

  refetch = query => () => {
    query.refetch({
      id: this.props.match.params.id
    });
  };

  render() {
    const {
      match: {
        params: { id: talkId }
      }
    } = this.props;

    return (
      <>
        <AddSpeakerToTalkForm
          speaker={getCurrentTalk.data.currentTalk.speaker}
          speakers={speakers}
          talkId={talkId}
          deleteSpeaker={this.deleteSpeaker(
            updateSpeaker,
            this.refetch(getCurrentTalk)
          )}
          addSpeaker={this.addSpeaker(
            updateSpeaker,
            this.refetch(getCurrentTalk)
          )}
        />
      </>
    );
  }
}

export default AddSpeakerToTalk;
