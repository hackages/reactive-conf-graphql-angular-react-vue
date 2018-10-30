import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { QueryWithDefaultLoadingAndError } from "../../../apollo";
import {
  errorPropsConfig,
  timeToInput,
  validateTalkForm
} from "../../../utils";
import { TalkForm } from "./TalkForm";

const hasNoIdParam = ({
  match: {
    params: { id }
  }
}) => !id;

// TODO write a query to addTalk
const ADD_TALK = undefined;

// TODO write a query to updateTalk
const UPDATE_TALK = undefined;

// TODO write a query to get a talk
const TALK = undefined;

class Talk extends Component {
  submitTalk = mutateFn => values => {
    mutateFn({
      variables: {
        ...values,
        room: values.room || "",
        startsAt: new Date(
          1990,
          1,
          1,
          values.startsAt.slice(0, values.startsAt.indexOf(":")),
          values.startsAt.slice(values.startsAt.indexOf(":") + 1)
        )
      }
    }).then(() => {
      this.setState({
        showSuccessModel: true
      });
      this.props.history.push("/secure/talks");
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      showSuccessModel: false
    };
  }

  getDefaultValues(data) {
    return {
      ...data.talk,
      room: data.talk.room || "",
      startsAt: timeToInput(data.talk.startsAt)
    };
  }

  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    return (
      <>
        <TalkForm
          submitTalk={this.submitTalk(mutate)}
          validateTalkForm={validateTalkForm}
          errorPropsConfig={errorPropsConfig}
          hasNoId={hasNoIdParam(this.props)}
          defaultValues={this.getDefaultValues(data)}
          showSuccessModel={this.state.showSuccessModel}
          onHideSuccessModal={this.hideModal}
        />
      </>
    );
  }
}

export default Talk;
