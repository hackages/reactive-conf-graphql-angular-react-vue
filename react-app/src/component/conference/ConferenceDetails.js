import gql from "graphql-tag";
import React from "react";
import { QueryWithDefaultLoadingAndError } from "../../apollo";
import { divideInRows } from "../../utils";
import SpeakerOverview from "../speaker/SpeakerOverview";
import Sponsors from "../Sponsors";
import TalkOverview from "../talk/TalkOverview";

// TODO write a query to get a conference
const CONFERENCE = undefined;

function ConferenceDetails({
  match: {
    params: { id }
  }
}) {

  // TODO Use the QueryWithDefaultLoadingAndError render props to query CONFERENCE
  // QueryWithDefaultLoadingAndError is a custom component that handle for you the loading and the error display
  // You should not think about it

  // props query = CONFERENCE
  // props variables = id
  // props fetchPolicy = "cache-and-network"

  // Remove this variable when you will fetch
  const conference={};
  return (
        <div>
          <div className="section product-header">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <span className="title is-3">{name}</span>
                  <span className="title is-3 has-text-muted">
                    &nbsp;|&nbsp;
                  </span>
                  <span className="title is-4 has-text-muted">{city}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Speakers</p>
                        <p className="title">
                          {talks.reduce(
                            (acc, talk) => acc + (talk.speaker ? 1 : 0),
                            0
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Attendees</p>
                        <p className="title">{attendeesCount}</p>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Sponsors</p>
                        <p className="title">{sponsorsCount}</p>
                      </div>
                    </div>
                  </nav>
                  <p className="title is-3 has-text-muted">{description}</p>
                  <hr />
                  <p className="title is-4">Talks :</p>
                  {divideInRows(
                    talks,
                    talk => (
                      <div className="column is-6" key={`talks-${talk.id}`}>
                        <TalkOverview talk={talk} />
                      </div>
                    ),
                    2
                  )}
                  <hr />
                  <p className="title is-4">Speakers :</p>
                  {divideInRows(
                    talks,
                    ({ speaker }) =>
                      speaker && (
                        <div
                          className="column is-3"
                          key={`speakers-${speaker.id}`}
                        >
                          <SpeakerOverview speaker={speaker} />
                        </div>
                      )
                  )}
                  <hr />
                  <p className="title is-4 is-spaced">Sponsors :</p>
                  <p className="subtitle is-5">GOLD</p>
                  <Sponsors sponsors={sponsors} type="GOLD" />

                  <p className="subtitle is-5">SILVER</p>
                  <Sponsors sponsors={sponsors} type="SILVER" />

                  <p className="subtitle is-5">BRONZE</p>
                  <Sponsors sponsors={sponsors} type="BRONZE" />
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default ConferenceDetails;
