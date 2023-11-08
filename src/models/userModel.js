const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    password: String,
  },
  { timestamps: true, versionKey: false }
);

const userModel = Model("User", userSchema);

module.exports = userModel;
