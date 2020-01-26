/**
 * Login user query
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import gql from 'graphql-tag';

const LOGIN_USER = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userId
    }
  }
`;

export default LOGIN_USER;
