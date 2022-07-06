import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 25,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

module.exports = mongoose.model("User", userSchema);
