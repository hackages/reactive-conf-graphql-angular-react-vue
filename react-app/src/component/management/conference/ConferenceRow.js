import * as PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const ConferenceRow = ({
  deleteConference,
  conference: { id, name, city, country, startDate, website }
}) => (
  <tr>
    <th>{id}</th>
    <td>
      <a href={website || "https://www.hackages.io/"} title="GraphQL Europe">
        {name}
      </a>
    </td>
    <td>{city}</td>
    <td>{country}</td>
    <td>{new Date(startDate).toLocaleDateString()}</td>
    <td>
      <Link
        className="button is-info is-outlined"
        to={`/secure/conference/${id}/talks`}
      >
        Manage talks
      </Link>
    </td>
    <td>
      <Link
        to={`/secure/conference/${id}`}
        className="button is-primary is-outlined"
      >
        Edit
      </Link>
    </td>
    <td>
      <a
        className="button is-danger is-outlined"
        onClick={() => deleteConference(id)}
      >
        Delete
      </a>
    </td>
  </tr>
);

ConferenceRow.propTypes = PropTypes.shape({
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

export default ConferenceRow;
