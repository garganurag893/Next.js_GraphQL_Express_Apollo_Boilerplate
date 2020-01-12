var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
},{
  timestamps:true,
});

// /**
//  * Statics
//  */
userSchema.statics = {
  /**
   * Get User
   * @param {ObjectId} id - The objectId of user.
   */
  get(id) {
    return this.findById(id)
      .execAsync()
      .then(user => {
        if (user) {
          return user;
        }
      });
  },
};



module.exports = mongoose.model("User", userSchema);
