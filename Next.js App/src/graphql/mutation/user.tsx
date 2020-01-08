import gql from "graphql-tag";

const CREATE_USER = gql`
  {
    users {
      id
      name
      email
      phoneNumber
    }
  }
`;

export default CREATE_USER;
