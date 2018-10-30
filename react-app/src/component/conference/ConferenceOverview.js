import * as PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const ConferenceOverview = ({
  conference: {
    id,
    startDate,
    name,
    logo,
    _attendeesMeta: { count },
    city,
    country
  }
}) => {
  return (
    <Link to={`/conference/${id}`} className="card">
      <header className="card-header">
        <p className="card-header-title">
          <img
            src={`https://restcountries.eu/data/${country &&
              country.toLowerCase()}.svg`}
            className="avatar"
            alt="Conference country"
          />
          {name}
        </p>
        <span className="card-header-icon timestamp">{city}</span>
      </header>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={logo} alt="Conference logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="panel-block-item">
          <span className="likes">
            <span className="icon">
              <i className="fa fa-calendar" />
            </span>
            {new Date(startDate).toLocaleDateString()}
          </span>
          <span className="comments">
            <span className="icon">
              <i className="fa  fa-users" />
            </span>
            {count} attendees
          </span>
        </div>
      </div>
    </Link>
  );
};

ConferenceOverview.propTypes = PropTypes.shape({
  conference: PropTypes.shape({
    _attendeesMeta: PropTypes.shape({
      count: PropTypes.number.isRequired
    }).isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired
  }).isRequired
}).isRequired;

export default ConferenceOverview;
