const User = require("../../models/user");
const { dateToString } = require("../../helpers/date");

const getUser = async id => {
  try {
    const user = await User.findById(id);
    return {
      ...user._doc,
      _id: user.id,
      createdAt: dateToString(user._doc.createdAt),
      updatedAt: dateToString(user._doc.updatedAt)
    };
  } catch (err) {
    throw err;
  }
};

const transformUser = user => {
  return {
    ...user._doc,
    _id: user.id,
    createdAt: dateToString(user._doc.createdAt),
    updatedAt: dateToString(user._doc.updatedAt)
  };
};

exports.getUser = getUser;
exports.transformUser = transformUser;
