import * as PropTypes from "prop-types";
import React from "react";

const SpeakerItem = ({ attending, speaker, onClick }) => {
  return (
    <a className="panel-block" onClick={() => onClick(speaker.id)}>
      <span className="panel-icon">
        {attending ? (
          <i className="fa fa-check" />
        ) : (
          <i className="fa fa-user" />
        )}
      </span>
      {speaker.publicName}
    </a>
  );
};

SpeakerItem.propTypes = PropTypes.shape({
  speaker: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    publicName: PropTypes.string.isRequired
  }).isRequired
}).isRequired;

export default SpeakerItem;
