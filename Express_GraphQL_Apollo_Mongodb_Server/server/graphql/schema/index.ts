import { gql } from 'apollo-server-express';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import resolvers from '../resolvers/index';

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(userId: ID!): User!
    login(email: String!, password: String!): AuthData!
  }
  type Mutation {
    createUser(userInput: UserInput): User!
    updateUser(userId: ID!, updateUser: UpdateUser): User!
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
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  input UserInput {
    email: String!
    name: String!
    password: String!
  }
  input UpdateUser {
    email: String
    name: String
    password: String
  }
`;

const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  introspection: true,
  context: async ({ req, connection }: any) => {
    if (connection) {
      console.log('New Subscriber Connected', req);
    }
    return { isAuth: req.isAuth };
  },
  playground: true
};

export default schema;
