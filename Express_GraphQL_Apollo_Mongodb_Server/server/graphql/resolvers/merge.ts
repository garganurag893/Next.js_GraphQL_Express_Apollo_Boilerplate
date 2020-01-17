import User from '../../models/user';
import dateToString from '../../helpers/date';

const getUser = async (id: string) => {
  try {
    const user: any = await User.findById(id);
    return {
      ...user._doc,
      _id: user.id,
      createdAt: dateToString(user._doc.createdAt),
      updatedAt: dateToString(user._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const transformUser = (user: any) => {
  return {
    ...user._doc,
    _id: user.id,
    createdAt: dateToString(user._doc.createdAt),
    updatedAt: dateToString(user._doc.updatedAt),
  };
};

export { getUser, transformUser };
