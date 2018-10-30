import gql from "graphql-tag";
import React from "react";
import { QueryWithDefaultLoadingAndError } from "../../apollo";
import { divideInRows } from "../../utils";
import TalkOverview from "../talk/TalkOverview";

// TODO write a query to getSpeakerById
const SPEAKER = undefined;

const SpeakerDetails = ({
  match: {
    params: { id }
  }
}) => (
  <>
    <>
      <div className="section product-header">
        <div className="container">
          <div className="columns">
            <div className="column">
              <span className="title is-3">{username}</span>
              <span className="title is-3 has-text-muted">
                {` @${publicName}`}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="title is-3 has-text-muted">{bio}</p>
              <hr />
              <p className="title is-4">Talks :</p>
              {divideInRows(
                talks,
                talk =>
                  talk && (
                    <div className="column is-6" key={talk.id}>
                      <TalkOverview talk={talk} />
                    </div>
                  ),
                2
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  </>
);

export default SpeakerDetails;
