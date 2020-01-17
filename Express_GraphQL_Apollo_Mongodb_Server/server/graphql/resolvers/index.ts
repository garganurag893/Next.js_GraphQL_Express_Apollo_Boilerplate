import { UserQueries, UserMutation, UserSubscription } from './user';

const rootResolver = {
  Query: {
    ...UserQueries,
  },
  Mutation: {
    ...UserMutation,
  },
  Subscription: {
    ...UserSubscription,
  },
};

export default rootResolver;
