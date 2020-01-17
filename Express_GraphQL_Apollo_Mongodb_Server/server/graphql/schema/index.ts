import { gql } from 'apollo-server-express';
import resolvers from '../resolvers/index';

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type Mutation {
    createUser(userInput: UserInput): User!
  }
  type Subscription {
    userAdded: User
  }
  type User {
    _id: ID!
    email: String!
    name: String!
    password: String
    createdAt: String!
    updatedAt: String!
  }
  input UserInput {
    email: String!
    name: String!
    password: String!
  }
`;

const schema = {
  typeDefs,
  resolvers,
  introspection: true,
  context: async ({ req, connection }: any) => {
    if (connection) {
      console.log('yes connected', req);
    }
  },
  playground: {
    endpointURL: '/graphql'
  }
};

export default schema;
