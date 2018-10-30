import * as PropTypes from "prop-types";
import React from "react";

const Company = ({ company: { description, logo, name } }) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={logo} alt={name} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{name}</strong>
            <br />
            {description}
          </p>
        </div>
      </div>
    </article>
  </div>
);

Company.propTypes = PropTypes.shape({
  company: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}).isRequired;

export default Company;
