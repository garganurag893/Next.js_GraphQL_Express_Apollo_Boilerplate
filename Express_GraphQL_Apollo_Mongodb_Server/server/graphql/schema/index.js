const { gql } = require("apollo-server-express");
var resolvers = require("../resolvers/index");

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
