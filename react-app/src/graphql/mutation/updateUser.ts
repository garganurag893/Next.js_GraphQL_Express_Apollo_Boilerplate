/**
 * Update user mutation
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import gql from 'graphql-tag';

const UPDATE_USER = gql`
  mutation updateUser($userId: ID!, $updateUser: UpdateUser) {
    updateUser(userId: $userId, updateUser: $updateUser) {
      _id
      name
      email
    }
  }
`;

export default UPDATE_USER;
