/**
 * Exporting all resolvers
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import { UserMutation, UserQueries, UserSubscription } from './user';

const rootResolver = {
  Query: {
    ...UserQueries
    // Add other queries here
  },
  Mutation: {
    ...UserMutation
    // Add other mutations here
  },
  Subscription: {
    ...UserSubscription
    // Add other subscriptions here
  }
};

export default rootResolver;
