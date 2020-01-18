import { UserMutation, UserQueries, UserSubscription } from './user';

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

export default rootResolver;
