import React from "react";
import Company from "./Company";

const Sponsors = ({ sponsors, type: searchType }) => {
  return (
    <div>
      {sponsors.filter(({ type }) => type === searchType).map(({ company }) => {
        return <Company key={company.id} company={company} />;
      })}
    </div>
  );
};

export default Sponsors;
