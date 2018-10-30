import gql from "graphql-tag";

export const getSpeakerById = gql`
  query getSpeakerById($speakerId: ID!) {
    speaker: User(id: $speakerId) {
      id
      picture
      username
      bio
      publicName
      talks {
        id
        description
        room
        startsAt
        title
      }
    }
  }
`;

export interface getSpeakerByIdResponse {
  speaker;
  loading;
}
