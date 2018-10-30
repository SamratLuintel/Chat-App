const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  name: {
    type: String,
    default: ""
  },
  country: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    default: "default.png"
  },
  favourites: [
    {
      username: { type: String },
      email: { type: String }
    }
  ]
});

mongoose.model("groups", groupSchema);
