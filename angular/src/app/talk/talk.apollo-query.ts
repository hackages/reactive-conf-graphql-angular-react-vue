import gql from "graphql-tag";

export const getTalkById = gql`
  query getTalkById($talkId: ID!) {
    talk: Talk(id: $talkId) {
      id
      description
      room
      startsAt
      title
      speaker {
        id
        picture
        username
        bio
        publicName
      }
    }
  }
`;

export interface getTalkByIdQueryResponse {
  loading;
  talk;
}
