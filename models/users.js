const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String },
  fullname: { type: String }, //{ type: String, unique: true, default: "" },
  email: { type: String },
  password: { type: String, sparse: true },
  userImage: { type: String, default: "default.png" },
  facebook: { type: String, sparse: true },
  fbTokens: Array,
  google: { type: String, sparse: true },
  sentRequest: [
    {
      username: { type: String }
    }
  ],
  requests: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
    }
  ],
  friendsList: [
    {
      friendId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      friendName: { type: String }
    }
  ],
  totalRequest: {
    type: Number
  }
});

UserSchema.pre("save", function(next) {
  ``;
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
mongoose.model("users", UserSchema);
