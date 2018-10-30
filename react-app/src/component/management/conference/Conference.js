import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { QueryWithDefaultLoadingAndError } from "../../../apollo";
import {
  dateToInput,
  errorPropsConfig,
  validateConferenceForm
} from "../../../utils";
import { ConferenceForm } from "./ConferenceForm";

const hasNoIdParam = ({
  match: {
    params: { id }
  }
}) => !id;

// TODO write a query to createConference
const ADD_CONFERENCE = undefined;

// TODO write a query to updateConference
const UPDATE_CONFERENCE = undefined;

// TODO write a query to get a conference
const CONFERENCE = undefined;

class Conference extends Component {
  hideModal = () => {
    this.setState({
      showSuccessModel: false
    });
  };
  submitConference = mutateFn => values => {
    mutateFn({
      variables: {
        ...values,
        startDate: this.dateInputToDate(values.startDate),
        endDate: this.dateInputToDate(values.endDate)
      }
    }).then(() => {
      this.setState({
        showSuccessModel: true
      });
      this.props.history.push("/secure/conferences");
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      showSuccessModel: false
    };
  }

  dateInputToDate(dateInput) {
    return dateInput
      ? new Date(
          dateInput.slice(-4),
          dateInput.slice(3, 5),
          dateInput.slice(0, 2)
        )
      : "";
  }

  getDefaultValues(data) {
    return {
      ...data.conference,
      website: data.conference.website || "",
      startDate: dateToInput(data.conference.startDate),
      endDate: dateToInput(data.conference.endDate)
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
        <QueryWithDefaultLoadingAndError
          query={CONFERENCE}
          variables={{ id }}
          skip={hasNoIdParam(this.props)}
          fetchPolicy="cache-and-network"
        >
          {({ data }) => (
            <Mutation
              mutation={
                hasNoIdParam(this.props) ? ADD_CONFERENCE : UPDATE_CONFERENCE
              }
            >
              {mutate => (
                <ConferenceForm
                  validateConferenceForm={validateConferenceForm}
                  submitConference={this.submitConference(mutate)}
                  errorPropsConfig={errorPropsConfig}
                  hasNoId={hasNoIdParam(this.props)}
                  defaultValues={this.getDefaultValues(data)}
                  showSuccessModel={this.state.showSuccessModel}
                  onHideSuccessModal={this.hideModal}
                />
              )}
            </Mutation>
          )}
        </QueryWithDefaultLoadingAndError>
      </>
    );
  }
}

export default Conference;
