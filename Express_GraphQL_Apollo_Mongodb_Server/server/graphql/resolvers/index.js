const { UserQueries, UserMutation, UserSubscription } = require("./user");

const rootResolver = {
  Query: {
    ...UserQueries
  },
  Mutation: {
    ...UserMutation
  },
  Subscription: {
    ...UserSubscription
  }
};

module.exports = rootResolver;
