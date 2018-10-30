import gql from "graphql-tag";
import React from "react";
import { QueryWithDefaultLoadingAndError } from "../../apollo";
import Speaker from "../speaker/SpeakerOverview";

// TODO write a query to getTalkById
const TALK = undefined;

const TalkDetails = ({
  match: {
    params: { id }
  }
}) => {
  return (
    <>
      <>
        <div className="section product-header">
          <div className="container">
            <div className="columns">
              <div className="column">
                <span className="title is-3">{title}</span>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <span className="subtitle is-6">Room: {room}</span>
                <span className="subtitle is-6 has-text-muted">
                  &nbsp;|&nbsp;
                </span>
                <span className="subtitle is-6">
                  Start at:{" "}
                  {`${new Date(startsAt).getHours()}:${new Date(
                    startsAt
                  ).getMinutes()}`}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <p className="title is-4 has-text-muted">{description}</p>
                <hr />
                <p className="title is-4">Speaker :</p>
                <div className="columns">
                  <div className="column is-3">
                    {speaker && <Speaker speaker={speaker} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default TalkDetails;
