const { gql } = require("apollo-server-express");
var resolvers = require("../resolvers/index");

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(userId: ID!): User!
    login(email: String!, password: String!): AuthData!
  }
  type Mutation {
    createUser(userInput: UserInput): AuthData
    updateUser(userId: ID!, updateUser: UpdateUser): User
  }
  type Subscription {
    userAdded: User
  }
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  type User {
    _id: ID!
    email: String!
    name: String!
    phoneNumber: String!
    password: String
    createdAt: String!
    updatedAt: String!
  }
  input UserInput {
    email: String!
    name: String!
    phoneNumber: String!
    password: String!
  }
  input UpdateUser {
    email: String
    name: String
    password: String
    phoneNumber: String
  }
`;

module.exports = {
  typeDefs,
  resolvers,
  introspection: true,
  context: async ({ req, connection }) => {
    if (connection) {
      console.log("yes connected");
    }
  },
  playground:
    (true,
    {
      endpointURL: "/graphql"
    })
};
