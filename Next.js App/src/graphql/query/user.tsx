import gql from "graphql-tag";

const GET_ALL_USERS = gql`
  {
    users {
      id
      name
      email
      phoneNumber
    }
  }
`;

export default GET_ALL_USERS;
