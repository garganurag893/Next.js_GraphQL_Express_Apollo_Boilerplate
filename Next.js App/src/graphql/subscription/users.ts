/**
 * New user added subscription
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import gql from 'graphql-tag';

const USER_ADDED = gql`
  subscription {
    userAdded {
      name
      _id
      email
    }
  }
`;

export default USER_ADDED;
