// We use the gql tag to parse our query string into a query document
import gql from "graphql-tag";

export const AllConferencesQuery = gql`
  query AllConferencesQuery {
    allConferences {
      id
      city
      country
      description
      logo
      name
      startDate
      website
      _attendeesMeta {
        count
      }
    }
  }
`;

export interface AllConferencesQueryResponse {
  allConferences;
  loading;
}

export const DetailedConferenceQuery = "TO IMPLEMENT";

export interface DetailedConferenceQueryResponse {
  conference;
  loading;
}
