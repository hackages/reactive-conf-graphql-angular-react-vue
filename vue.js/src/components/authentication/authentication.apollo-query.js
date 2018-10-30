import gql from "graphql-tag";

export const login = gql`
  mutation login($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        publicName
      }
    }
  }
`;

export const registerUser = gql`
  mutation createUser(
    $bio: String!
    $email: String!
    $password: String!
    $picture: String!
    $publicName: String!
    $username: String!
  ) {
    createUser(
      bio: $bio
      picture: $picture
      publicName: $publicName
      username: $username
      authProvider: { email: { email: $email, password: $password } }
    ) {
      id
    }
  }
`;
