import * as PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const SpeakerOverview = ({
  speaker: { id, picture, username, bio, publicName }
}) => {
  return (
    <Link to={`/speaker/${id}`}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={picture} alt={publicName} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{username}</p>
              <p className="subtitle is-6">@{publicName}</p>
            </div>
          </div>
          <div className="content">
            {bio}
            <br />
          </div>
        </div>
      </div>
    </Link>
  );
};

SpeakerOverview.propTypes = PropTypes.shape({
  speaker: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    publicName: PropTypes.string.isRequired
  }).isRequired
}).isRequired;

export default SpeakerOverview;
