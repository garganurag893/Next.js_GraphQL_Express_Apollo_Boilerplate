const User = require("../../models/user");
const mongoose = require("mongoose");
const { PubSub } = require("apollo-server");
const { transformUser } = require("./merge");
const config = require("../../../config/env");
const jwt = require("jsonwebtoken");
const pubsub = new PubSub();

const USER_ADDED="USER_ADDED";

const UserQueries = {
  users: async () => {
    try {
      const users = await User.find();
      return users.map(user => {
        return transformUser(user);
      });
    } catch (err) {
      throw err;
    }
  },
  user: async (parent, { userId }) => {
    try {
      const user = await User.findById(userId);
      return transformUser(user);
    } catch (err) {
      throw err;
    }
  },
  login: async (parent, { email, password }) => {
    try {
      const user = await User.findOne({ email, password, role });
      if (!user) {
        throw new Error("User does not Exists");
      }
      const token = jwt.sign({ userId: user.id, role }, config.jwtSecret, {
        expiresIn: "1h"
      });
      return {
        userId: user.id,
        token,
        tokenExpiration: 1,
        savedAddresses: user.savedAddresses
      };
    } catch (err) {
      throw err;
    }
  }
};

const UserMutation = {
  createUser: async (parent, { userInput }) => {
    try {
      const user = await User.findOne({
        phoneNumber: userInput.phoneNumber,
        email: userInput.email
      });
      if (user) {
        throw new Error("User already Exists");
      } else {
        const newUser = new User({
          _id: new mongoose.Types.ObjectId(),
          email: userInput.email,
          name: userInput.name,
          phoneNumber: userInput.phoneNumber,
          password: userInput.password,
        });
        const savedUser = await newUser.save();
        pubsub.publish(USER_ADDED, {
          userAdded: transformUser(savedUser)
        });
        const token = jwt.sign(
          { userId: savedUser.id },
          config.jwtSecret,
          { expiresIn: "1h" }
        );
        return {
          userId: savedUser._id,
          token,
          tokenExpiration: 1,
        };
      }
    } catch (error) {
      throw error;
    }
  },
  updateUser: async (parent, { userId, updateUser }) => {
    // if (!req.isAuth) {
    //   throw new Error("Non Authenticated");
    // }

    try {
      const user = await User.findByIdAndUpdate(userId, updateUser, {
        new: true
      });
      return transformUser(user);
    } catch (error) {
      throw error;
    }
  },
};

const UserSubscription = {
  userAdded: {
    subscribe: () => pubsub.asyncIterator([USER_ADDED])
  }
};

module.exports = { UserQueries, UserMutation, UserSubscription };
