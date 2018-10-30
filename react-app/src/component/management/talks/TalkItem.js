import * as PropTypes from "prop-types";
import React from "react";

const TalkItem = ({ attending, talk, onClick }) => {
  return (
    <a className="panel-block" onClick={() => onClick(talk.id)}>
      <span className="panel-icon">
        {attending ? (
          <i className="fa fa-check" />
        ) : (
          <i className="fa fa-user" />
        )}
      </span>
      {talk.title}
    </a>
  );
};

TalkItem.propTypes = PropTypes.shape({
  attending: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  talk: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}).isRequired;

export default TalkItem;
