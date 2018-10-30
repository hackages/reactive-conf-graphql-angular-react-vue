import gql from 'graphql-tag';
import React from 'react';
import {divideInRows} from '../../utils';
import ConferenceOverview from './ConferenceOverview';
import './Conferences.css';

// TODO write a query to get all conferences
const CONFERENCES = undefined;

const Conferences = () => {
  // TODO Use the QueryWithDefaultLoadingAndError render props to query CONFERENCES
  // QueryWithDefaultLoadingAndError is a custom component that handle for you the loading and the error display
  // You should not think about it

  // props query = CONFERENCES
  // props fetchPolicy = "cache-and-network"

  // Remove this variable when you will fetch
  const conferences = [];
  return (
    <div className="container section">
      <div className="columns section">
        <div className="column is-8">
          <div className="title">Conferences</div>
        </div>
      </div>

      {divideInRows(conferences, conference => (
        <div className="column is-4" key={conference.id}>
          <ConferenceOverview conference={conference}/>
        </div>
      ))}
    </div>
  );
};

export default Conferences;
