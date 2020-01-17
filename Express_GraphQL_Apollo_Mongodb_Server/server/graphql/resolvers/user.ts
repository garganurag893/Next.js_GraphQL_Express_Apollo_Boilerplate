import { PubSub } from 'apollo-server';
import * as mongoose from 'mongoose';
import User from '../../models/user';
import { transformUser } from './merge';
const pubsub = new PubSub();

const USER_ADDED = 'USER_ADDED';

const UserQueries = {
  users: async () => {
    try {
      const users = await User.find();
      return users.map((user) => {
        return transformUser(user);
      });
    } catch (err) {
      throw err;
    }
  }
};

const UserMutation = {
  createUser: async (parent: any, { userInput }: any) => {
    try {
      const user = await User.findOne({
        email: userInput.email
      });
      if (user) {
        throw new Error('User already Exists');
      } else {
        const newUser = new User({
          _id: new mongoose.Types.ObjectId(),
          email: userInput.email,
          name: userInput.name,
          password: userInput.password
        });
        const savedUser = await newUser.save();
        pubsub.publish(USER_ADDED, {
          userAdded: transformUser(savedUser)
        });
        return transformUser(savedUser);
      }
    } catch (error) {
      throw error;
    }
  }
};

const UserSubscription = {
  userAdded: {
    subscribe: () => pubsub.asyncIterator([USER_ADDED])
  }
};

export { UserQueries, UserMutation, UserSubscription };
