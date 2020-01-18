import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation createUser($userInput: UserInput) {
    createUser(userInput: $userInput) {
      name
    }
  }
`;

export default CREATE_USER;
