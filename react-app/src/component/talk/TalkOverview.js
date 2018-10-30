import * as PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const TalkOverview = ({ talk: { id, description, room, startsAt, title } }) => (
  <Link to={`/talk/${id}`}>
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
        <div className="content">
          {description.slice(0, 150)}

          {description.length > 150 ? "..." : ""}
          <hr />
          <div className="columns">
            <div className="column is-6">
              <small>{room}</small>
            </div>
            <div className="column is-6">
              <small>{startsAt && new Date(startsAt).toDateString()}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

TalkOverview.propTypes = PropTypes.shape({
  talk: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    startsAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}).isRequired;

export default TalkOverview;
