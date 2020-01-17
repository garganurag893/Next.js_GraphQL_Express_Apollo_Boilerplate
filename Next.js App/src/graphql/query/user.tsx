import gql from 'graphql-tag';

const GET_USERS = gql`
  {
    users {
      name
      _id
      email
    }
  }
`;

export default GET_USERS;
